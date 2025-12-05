import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

// Price IDs
const PRICES = {
  bundle: 'price_1SaeOELWLRvIvTFURpXqKmnW',      // Bundle $399.99 (una vez)
  internetMensual: 'price_1SaedSLWLRvIvTFUh9zftKF1', // Internet $69.99/mes
}

// Tax Rate IDs
const TAX_RATES = {
  ivu: 'txr_1Sa0D4LWLRvIvTFUw3L5IRkm', // IVU 11.5%
}

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      locale: 'es-419',
      payment_method_types: ['card', 'klarna'],
      line_items: [
        // Bundle (pago único hoy)
        {
          price: PRICES.bundle,
          quantity: 1,
          tax_rates: [TAX_RATES.ivu],
        },
        // Suscripción mensual (empieza en 30 días)
        {
          price: PRICES.internetMensual,
          quantity: 1,
          tax_rates: [TAX_RATES.ivu],
        },
      ],
      subscription_data: {
        trial_period_days: 30,
        description: 'Internet 5GX hasta 300Mbps - Servicio mensual',
      },
      phone_number_collection: {
        enabled: true,
      },
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: ['PR'],
      },
      custom_text: {
        submit: {
          message: 'Tu servicio mensual de $69.99 + IVU comenzará automáticamente en 30 días.',
        },
      },
      success_url: `${process.env.NEXT_PUBLIC_URL}/gracias?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/`,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Error creating checkout session:', error)
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    )
  }
}
