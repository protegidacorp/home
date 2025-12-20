import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

// Make.com webhook URL - configurar en .env
const MAKE_WEBHOOK_URL = process.env.MAKE_WEBHOOK_URL!

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

    // Validate input
    if (!body.sessionId || !body.shippingAddress) {
      return NextResponse.json(
        { success: false, error: 'Faltan datos requeridos' },
        { status: 400 }
      )
    }

    // Get Stripe session details
    const session = await stripe.checkout.sessions.retrieve(body.sessionId, {
      expand: ['payment_intent', 'customer'],
    })

    if (!session || session.payment_status !== 'paid') {
      return NextResponse.json(
        { success: false, error: 'Sesión de pago no válida' },
        { status: 400 }
      )
    }

    // Get payment method from payment intent
    const paymentIntent = session.payment_intent as Stripe.PaymentIntent
    const paymentMethodId = paymentIntent?.payment_method as string

    // Build the order data to send to Make.com
    const orderData = {
      // Stripe info
      order_id: session.id,
      customer_id: session.customer as string,
      payment_method_id: paymentMethodId,
      amount_total: session.amount_total,
      
      // Customer info
      email: body.shippingAddress.email || session.customer_details?.email,
      phone: body.shippingAddress.phone || session.customer_details?.phone,
      
      // Shipping address (validated)
      shipping_name: body.shippingAddress.name,
      shipping_street1: body.shippingAddress.street1,
      shipping_street2: body.shippingAddress.street2 || '',
      shipping_city: body.shippingAddress.city,
      shipping_state: body.shippingAddress.state,
      shipping_zip: body.shippingAddress.zip,
      shipping_country: body.shippingAddress.country,
      
      // Timestamp
      created_at: new Date().toISOString(),
    }

    // Send to Make.com webhook
    const makeResponse = await fetch(MAKE_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })

    if (!makeResponse.ok) {
      console.error('Make.com webhook error:', await makeResponse.text())
      return NextResponse.json(
        { success: false, error: 'Error al procesar la orden' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Orden enviada correctamente',
      orderId: session.id,
    })

  } catch (error) {
    console.error('Error submitting order:', error)
    return NextResponse.json(
      { success: false, error: 'Error al enviar la orden' },
      { status: 500 }
    )
  }
}
