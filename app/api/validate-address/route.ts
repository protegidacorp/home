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

    // If we got an object_id, the address was created successfully
    if (data.object_id) {
      const validation = data.validation_results || {}
      
      // Check if there's a suggested correction
      const originalStreet = body.street1.toLowerCase().trim()
      const returnedStreet = (data.street1 || '').toLowerCase().trim()
      const originalZip = body.zip.trim()
      const returnedZip = (data.zip || '').trim()
      
      const hasCorrection = (returnedStreet !== originalStreet || returnedZip !== originalZip) && 
                           data.street1 && data.city && data.zip

      if (validation.is_valid === false && hasCorrection) {
        // Invalid but has suggestion
        return NextResponse.json({
          valid: false,
          suggestion: {
            street1: data.street1,
            street2: data.street2 || '',
            city: data.city,
            state: data.state,
            zip: data.zip,
          },
        })
      } else if (validation.is_valid === false) {
        // Invalid without suggestion
        const errorMsg = validation.messages?.map((m: any) => m.text).join('. ') || 
                        'La dirección no pudo ser verificada. Revisa que sea correcta.'
        return NextResponse.json({
          valid: false,
          error: errorMsg,
        })
      } else {
        // Valid or no validation info (assume valid)
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
    }

    // No object_id means error
    const errorMsg = data.messages?.map((m: any) => m.text).join('. ') || 
                    data.__all__?.join('. ') ||
                    'Error al validar la dirección'
    
    return NextResponse.json({
      valid: false,
      error: errorMsg,
    })

  } catch (error) {
    console.error('Error validating address:', error)
    return NextResponse.json(
      { valid: false, error: 'Error al validar la dirección' },
      { status: 500 }
    )
  }
}
