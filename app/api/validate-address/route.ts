import { NextResponse } from 'next/server'

const SHIPPO_API_KEY = process.env.SHIPPO_API_KEY!

interface AddressInput {
  name: string
  street1: string
  street2?: string
  city: string
  state: string
  zip: string
  country: string
  phone?: string
  email?: string
}

export async function POST(request: Request) {
  try {
    const body: AddressInput = await request.json()

    // Validate required fields
    if (!body.name || !body.street1 || !body.city || !body.zip) {
      return NextResponse.json(
        { valid: false, error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // Call Shippo Address Validation API
    const response = await fetch('https://api.goshippo.com/addresses/', {
      method: 'POST',
      headers: {
        'Authorization': `ShippoToken ${SHIPPO_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: body.name,
        street1: body.street1,
        street2: body.street2 || '',
        city: body.city,
        state: body.state || 'PR',
        zip: body.zip,
        country: body.country || 'PR',
        phone: body.phone || '',
        email: body.email || '',
        validate: true,
      }),
    })

    const data = await response.json()

    // Check validation result
    if (data.validation_results) {
      const validation = data.validation_results
      
      if (validation.is_valid) {
        return NextResponse.json({
          valid: true,
          address: {
            name: data.name,
            street1: data.street1,
            street2: data.street2,
            city: data.city,
            state: data.state,
            zip: data.zip,
            country: data.country,
            object_id: data.object_id,
          },
          messages: validation.messages || [],
        })
      } else {
        // Address is invalid
        const errorMessages = validation.messages
          ?.map((m: { text: string }) => m.text)
          .join('. ') || 'Dirección no válida'
        
        return NextResponse.json({
          valid: false,
          error: errorMessages,
          messages: validation.messages || [],
        })
      }
    }

    // If no validation results, check for errors
    if (data.messages) {
      return NextResponse.json({
        valid: false,
        error: data.messages.map((m: { text: string }) => m.text).join('. '),
      })
    }

    // Default: assume valid if no validation info (fallback)
    return NextResponse.json({
      valid: true,
      address: {
        name: data.name,
        street1: data.street1,
        street2: data.street2,
        city: data.city,
        state: data.state,
        zip: data.zip,
        country: data.country,
        object_id: data.object_id,
      },
      warning: 'No se pudo verificar completamente la dirección',
    })

  } catch (error) {
    console.error('Error validating address:', error)
    return NextResponse.json(
      { valid: false, error: 'Error al validar la dirección' },
      { status: 500 }
    )
  }
}
