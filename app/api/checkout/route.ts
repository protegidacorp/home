import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

// Price IDs
const PRICES = {
  router: 'price_1Sa0HKLWLRvIvTFUJVXnggiE',
  diseno: 'price_1Sa0K3LWLRvIvTFUW5Idm9u5',
  activacion: 'price_1Sa0KYLWLRvIvTFUzTkhv1rX',
  internet: 'price_1Sa0LVLWLRvIvTFUjCCn9iK2',
  consultoria: 'price_1Sa0LsLWLRvIvTFUozeYXavJ',
}

// Tax Rate IDs
const TAX_RATES = {
  ivu: 'txr_1Sa0D4LWLRvIvTFUw3L5IRkm',
  exento: 'txr_1Sa0DxLWLRvIvTFUnxqvhNhl',
}

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [
        // === PAGOS ÚNICOS ===
        // Router 5G + Batería (IVU 11.5%)
        {
          price: PRICES.router,
          quantity: 1,
          tax_rates: [TAX_RATES.ivu],
        },
        // Diseño de Red (Exento)
        {
          price: PRICES.diseno,
          quantity: 1,
          tax_rates: [TAX_RATES.exento],
        },
        // Activación (IVU 11.5%)
        {
          price: PRICES.activacion,
          quantity: 1,
          tax_rates: [TAX_RATES.ivu],
        },
        // === SUSCRIPCIÓN MENSUAL ===
        // Internet 5GX 300Mbps (IVU 11.5%)
        {
          price: PRICES.internet,
          quantity: 1,
          tax_rates: [TAX_RATES.ivu],
        },
        // Consultoría de Red (Exento)
        {
          price: PRICES.consultoria,
          quantity: 1,
          tax_rates: [TAX_RATES.exento],
        },
      ],
      phone_number_collection: {
        enabled: true,
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
