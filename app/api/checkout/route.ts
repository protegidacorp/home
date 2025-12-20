import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

// Price IDs
const PRICES = {
  bundle: 'price_1Sb067LWLRvIvTFUv9AhLuyB', // Bundle $349.99 (una vez)
}

// Tax Rate IDs
const TAX_RATES = {
  ivu: 'txr_1Sa0D4LWLRvIvTFUw3L5IRkm', // IVU 11.5%
}

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      locale: 'es-419',
      payment_method_types: ['card', 'klarna'],
      line_items: [
        {
          price: PRICES.bundle,
          quantity: 1,
          tax_rates: [TAX_RATES.ivu],
        },
      ],
      phone_number_collection: {
        enabled: true,
      },
      billing_address_collection: 'required',
      custom_text: {
        submit: {
          message: 'Solo enviamos a direcciones físicas en Puerto Rico (no PO Box). Después del pago te pediremos la dirección de envío. Tu servicio mensual ($69.99 + IVU) comenzará 5 días después de recibir el equipo.',
        },
      },
      // NUEVAS LÍNEAS: Crear customer y guardar tarjeta para cobros futuros
      customer_creation: 'always',
      payment_intent_data: {
        setup_future_usage: 'off_session',
      },
      success_url: `https://home-six-murex-57.vercel.app/gracias?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `https://home-six-murex-57.vercel.app/`,
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
