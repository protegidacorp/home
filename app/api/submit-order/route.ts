import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

const SHIPPO_API_KEY = process.env.SHIPPO_API_KEY!
const MAKE_WEBHOOK_URL = process.env.MAKE_WEBHOOK_URL!

// Dirección de origen (tu negocio)
const FROM_ADDRESS = {
  name: "Internet Protegida",
  street1: "Villa Contessa Navarra B-25",
  city: "Bayamon",
  state: "PR",
  zip: "00956",
  country: "PR",
  phone: "7877177181",
  email: "protegidacorp@gmail.com"
}

// Parcel info (caja del router)
const PARCEL = {
  length: "12",
  width: "10",
  height: "6",
  distance_unit: "in",
  weight: "3",
  mass_unit: "lb"
}

interface SubmitOrderInput {
  sessionId: string
  shippingAddress: {
    name: string
    street1: string
    street2?: string
    city: string
    state: string
    zip: string
    country: string
    phone: string
    email: string
  }
}

async function createShippoAddress(address: any) {
  const response = await fetch('https://api.goshippo.com/addresses/', {
    method: 'POST',
    headers: {
      'Authorization': `ShippoToken ${SHIPPO_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(address),
  })
  return response.json()
}

async function createShipment(fromId: string, toId: string) {
  const response = await fetch('https://api.goshippo.com/shipments/', {
    method: 'POST',
    headers: {
      'Authorization': `ShippoToken ${SHIPPO_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      address_from: fromId,
      address_to: toId,
      parcels: [PARCEL],
      extra: {
        contents_type: "MERCHANDISE",
        contents_explanation: "5G Router with Lithium Battery",
        is_return: false,
        dangerous_goods_code: "9",
        dangerous_goods: {
          contains: true,
          biological: false,
          lithium_batteries: true,
          lithium_battery_type: "PI967_II",
          lithium_battery_material: "lithium_ion",
          hazmat_class: "9",
          un_id: "UN3481"
        }
      },
      async: false
    }),
  })
  return response.json()
}

async function createLabel(shipmentId: string, rateId: string) {
  const response = await fetch('https://api.goshippo.com/transactions/', {
    method: 'POST',
    headers: {
      'Authorization': `ShippoToken ${SHIPPO_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      rate: rateId,
      label_file_type: "PDF",
      async: false
    }),
  })
  return response.json()
}

async function createReturnLabel(fromAddress: any, toAddress: any) {
  // For return, swap from/to
  const response = await fetch('https://api.goshippo.com/shipments/', {
    method: 'POST',
    headers: {
      'Authorization': `ShippoToken ${SHIPPO_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      address_from: toAddress,
      address_to: fromAddress,
      parcels: [PARCEL],
      extra: {
        contents_type: "MERCHANDISE",
        contents_explanation: "5G Router with Lithium Battery - RETURN",
        is_return: true,
        dangerous_goods_code: "9",
        dangerous_goods: {
          contains: true,
          biological: false,
          lithium_batteries: true,
          lithium_battery_type: "PI967_II",
          lithium_battery_material: "lithium_ion",
          hazmat_class: "9",
          un_id: "UN3481"
        }
      },
      async: false
    }),
  })
  return response.json()
}

function findUSPSGroundRate(rates: any[]) {
  // Find USPS Ground Advantage rate
  return rates.find((rate: any) => 
    rate.provider === 'USPS' && 
    (rate.servicelevel?.token?.includes('ground') || 
     rate.servicelevel?.name?.toLowerCase().includes('ground'))
  ) || rates.find((rate: any) => rate.provider === 'USPS') || rates[0]
}

export async function POST(request: Request) {
  try {
    const body: SubmitOrderInput = await request.json()

    if (!body.sessionId || !body.shippingAddress) {
      return NextResponse.json(
        { success: false, error: 'Faltan datos requeridos' },
        { status: 400 }
      )
    }

    // 1. Get Stripe session details
    const session = await stripe.checkout.sessions.retrieve(body.sessionId, {
      expand: ['payment_intent'],
    })

    if (!session || session.payment_status !== 'paid') {
      return NextResponse.json(
        { success: false, error: 'Sesión de pago no válida' },
        { status: 400 }
      )
    }

    const paymentIntent = session.payment_intent as Stripe.PaymentIntent
    const paymentMethodId = paymentIntent?.payment_method as string

    // 2. Create addresses in Shippo
    const fromAddress = await createShippoAddress(FROM_ADDRESS)
    const toAddress = await createShippoAddress({
      name: body.shippingAddress.name,
      street1: body.shippingAddress.street1,
      street2: body.shippingAddress.street2 || '',
      city: body.shippingAddress.city,
      state: body.shippingAddress.state,
      zip: body.shippingAddress.zip,
      country: body.shippingAddress.country,
      phone: body.shippingAddress.phone,
      email: body.shippingAddress.email,
    })

    // 3. Create outbound shipment
    const shipment = await createShipment(fromAddress.object_id, toAddress.object_id)
    
    if (!shipment.rates || shipment.rates.length === 0) {
      console.error('No rates available:', shipment)
      return NextResponse.json(
        { success: false, error: 'No hay tarifas de envío disponibles para esta dirección' },
        { status: 400 }
      )
    }

    // 4. Find USPS Ground rate and create label
    const selectedRate = findUSPSGroundRate(shipment.rates)
    const outboundLabel = await createLabel(shipment.object_id, selectedRate.object_id)

    if (outboundLabel.status !== 'SUCCESS') {
      console.error('Label creation failed:', outboundLabel)
      return NextResponse.json(
        { success: false, error: 'Error al crear etiqueta de envío' },
        { status: 500 }
      )
    }

    // 5. Create return shipment and label
    const returnShipment = await createReturnLabel(fromAddress.object_id, toAddress.object_id)
    const returnRate = findUSPSGroundRate(returnShipment.rates || [])
    let returnLabel = null
    
    if (returnRate) {
      returnLabel = await createLabel(returnShipment.object_id, returnRate.object_id)
    }

    // 6. Send data to Make.com for Google Sheets
    const orderData = {
      order_id: session.id,
      email: body.shippingAddress.email,
      name: body.shippingAddress.name,
      phone: body.shippingAddress.phone,
      address: `${body.shippingAddress.street1}${body.shippingAddress.street2 ? ', ' + body.shippingAddress.street2 : ''}, ${body.shippingAddress.city}, ${body.shippingAddress.state} ${body.shippingAddress.zip}`,
      customer_id: session.customer as string,
      tracking_outbound: outboundLabel.tracking_number || '',
      tracking_return: returnLabel?.tracking_number || '',
      label_url: outboundLabel.label_url || '',
      return_label_url: returnLabel?.label_url || '',
      status: 'LABEL_CREATED',
      fecha_orden: new Date().toISOString().split('T')[0],
      payment_method_id: paymentMethodId,
    }

    // Send to Make.com
    const makeResponse = await fetch(MAKE_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData),
    })

    if (!makeResponse.ok) {
      console.error('Make.com error:', await makeResponse.text())
      // Don't fail the order, labels were created successfully
    }

    return NextResponse.json({
      success: true,
      message: 'Orden procesada correctamente',
      orderId: session.id,
      trackingNumber: outboundLabel.tracking_number,
    })

  } catch (error) {
    console.error('Error submitting order:', error)
    return NextResponse.json(
      { success: false, error: 'Error al procesar la orden' },
      { status: 500 }
    )
  }
}
