import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

const MAKE_WEBHOOK_URL = 'https://hook.us2.make.com/a95m54msqdkihux95duo5fulbc16k9vj'

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

    // 2. Get payment method from payment intent
    const paymentIntent = session.payment_intent as Stripe.PaymentIntent | null
    const paymentMethodId = paymentIntent?.payment_method?.toString() || ''

    // 3. Build address string
    const addressParts = [
      body.shippingAddress.street1,
      body.shippingAddress.street2,
      body.shippingAddress.city,
      body.shippingAddress.state,
      body.shippingAddress.zip
    ].filter(Boolean)
    const fullAddress = addressParts.join(', ')

    // 4. Send to Make.com webhook
    const orderData = {
      // Order info
      order_id: session.id,
      
      // Customer info
      email: body.shippingAddress.email,
      name: body.shippingAddress.name,
      phone: body.shippingAddress.phone,
      
      // Shipping address (individual fields for Shippo)
      shipping_name: body.shippingAddress.name,
      shipping_street1: body.shippingAddress.street1,
      shipping_street2: body.shippingAddress.street2 || '',
      shipping_city: body.shippingAddress.city,
      shipping_state: body.shippingAddress.state,
      shipping_zip: body.shippingAddress.zip,
      shipping_country: body.shippingAddress.country,
      shipping_phone: body.shippingAddress.phone,
      shipping_email: body.shippingAddress.email,
      
      // Full address for Google Sheets
      address: fullAddress,
      
      // Stripe info
      customer_id: session.customer?.toString() || '',
      payment_method_id: paymentMethodId,
      
      // Timestamp
      fecha_orden: new Date().toISOString().split('T')[0],
    }

    console.log('Sending to Make.com:', JSON.stringify(orderData, null, 2))

    const makeResponse = await fetch(MAKE_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData),
    })

    if (!makeResponse.ok) {
      console.error('Make.com error:', await makeResponse.text())
      return NextResponse.json(
        { success: false, error: 'Error al procesar la orden' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Orden procesada correctamente',
      orderId: session.id,
    })

  } catch (error) {
    console.error('Error submitting order:', error)
    return NextResponse.json(
      { success: false, error: 'Error al procesar la orden' },
      { status: 500 }
    )
  }
}
