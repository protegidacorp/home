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

console.log('Shippo response:', JSON.stringify(data, null, 2))

// Check validation result
if (data.validation_results) {

    // Check validation result
    if (data.validation_results) {
      const validation = data.validation_results
      
      if (validation.is_valid) {
        // Address is valid
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
        })
      } else {
        // Address is invalid - check for suggestions
        // Shippo returns the corrected address in the response if available
        const hasCorrection = data.street1 !== body.street1 || 
                             data.city !== body.city || 
                             data.zip !== body.zip
        
        if (hasCorrection && data.street1) {
          // There's a suggested correction
          return NextResponse.json({
            valid: false,
            suggestion: {
              street1: data.street1,
              street2: data.street2 || '',
              city: data.city,
              state: data.state,
              zip: data.zip,
            },
            originalError: validation.messages?.map((m: { text: string }) => m.text).join('. '),
          })
        } else {
          // No suggestion available
          const errorMessages = validation.messages
            ?.map((m: { text: string }) => m.text)
            .join('. ') || 'Dirección no válida'
          
          return NextResponse.json({
            valid: false,
            error: errorMessages,
          })
        }
      }
    }

    // If no validation results but address was created, assume it's usable
    if (data.object_id) {
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
      })
    }

    // Default error
    return NextResponse.json({
      valid: false,
      error: 'No se pudo verificar la dirección',
    })

  } catch (error) {
    console.error('Error validating address:', error)
    return NextResponse.json(
      { valid: false, error: 'Error al validar la dirección' },
      { status: 500 }
    )
  }
}
