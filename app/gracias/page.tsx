'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle2, Mail, ArrowLeft, Loader2, AlertCircle, Package, MapPin, AlertTriangle } from 'lucide-react'

interface ShippingForm {
  name: string
  street1: string
  street2: string
  city: string
  zip: string
  phone: string
  email: string
}

interface SuggestedAddress {
  street1: string
  street2: string
  city: string
  state: string
  zip: string
}

type PageState = 'loading' | 'form' | 'validating' | 'suggestion' | 'submitting' | 'success' | 'error'

// Detectar si es PO Box
function isPOBox(address: string): boolean {
  const poBoxPatterns = [
    /p\.?\s*o\.?\s*box/i,
    /post\s*office\s*box/i,
    /postal\s*box/i,
    /apartado/i,
    /apdo\.?/i,
  ]
  return poBoxPatterns.some(pattern => pattern.test(address))
}

export default function GraciasPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  
  const [pageState, setPageState] = useState<PageState>('loading')
  const [errorMessage, setErrorMessage] = useState('')
  const [poBoxError, setPOBoxError] = useState(false)
  const [suggestedAddress, setSuggestedAddress] = useState<SuggestedAddress | null>(null)
  
  const [form, setForm] = useState<ShippingForm>({
    name: '',
    street1: '',
    street2: '',
    city: '',
    zip: '',
    phone: '',
    email: '',
  })

  useEffect(() => {
    if (!sessionId) {
      setErrorMessage('No se encontró información del pedido')
      setPageState('error')
    } else {
      setPageState('form')
    }
  }, [sessionId])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    setErrorMessage('')
    setPOBoxError(false)
    setSuggestedAddress(null)
  }

  // Validar dirección
  const validateAddress = async () => {
    // Verificar campos requeridos
    if (!form.name || !form.street1 || !form.city || !form.zip || !form.email || !form.phone) {
      setErrorMessage('Completa todos los campos requeridos')
      return
    }

    // Verificar PO Box
    if (isPOBox(form.street1) || isPOBox(form.street2)) {
      setPOBoxError(true)
      setErrorMessage('No podemos enviar a apartados postales (PO Box). Por favor usa una dirección física.')
      return
    }

    setPageState('validating')
    setErrorMessage('')

    try {
      const response = await fetch('/api/validate-address', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          street1: form.street1,
          street2: form.street2,
          city: form.city,
          state: 'PR',
          zip: form.zip,
          country: 'PR',
          phone: form.phone,
          email: form.email,
        }),
      })

      const data = await response.json()

      if (data.valid) {
        // Dirección válida - enviar a Make.com
        await submitOrder(form)
      } else if (data.suggestion) {
        // Hay sugerencia de USPS
        setSuggestedAddress(data.suggestion)
        setPageState('suggestion')
      } else {
        // Dirección inválida sin sugerencia
        setErrorMessage(data.error || 'La dirección no pudo ser verificada. Por favor revisa los datos.')
        setPageState('form')
      }
    } catch (error) {
      setErrorMessage('Error al validar la dirección. Intenta de nuevo.')
      setPageState('form')
    }
  }

  // Aceptar sugerencia de USPS
  const acceptSuggestion = async () => {
    if (!suggestedAddress) return
    
    const correctedForm = {
      ...form,
      street1: suggestedAddress.street1,
      street2: suggestedAddress.street2 || '',
      city: suggestedAddress.city,
      zip: suggestedAddress.zip,
    }
    
    await submitOrder(correctedForm)
  }

  // Enviar orden a Make.com
  const submitOrder = async (shippingData: ShippingForm) => {
    setPageState('submitting')

    try {
      const response = await fetch('/api/submit-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId,
          shippingAddress: {
            name: shippingData.name,
            street1: shippingData.street1,
            street2: shippingData.street2,
            city: shippingData.city,
            state: 'PR',
            zip: shippingData.zip,
            country: 'PR',
            phone: shippingData.phone,
            email: shippingData.email,
          },
        }),
      })

      const data = await response.json()

      if (data.success) {
        setPageState('success')
      } else {
        setErrorMessage(data.error || 'Error al procesar la orden')
        setPageState('form')
      }
    } catch (error) {
      setErrorMessage('Error de conexión. Intenta de nuevo.')
      setPageState('form')
    }
  }

  // Loading
  if (pageState === 'loading') {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-neon-yellow animate-spin" />
      </div>
    )
  }

  // Error (no session)
  if (pageState === 'error' && !sessionId) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center">
          <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <AlertCircle className="w-12 h-12 text-red-500" />
          </div>
          <h1 className="font-display text-3xl font-bold text-white mb-4">Error</h1>
          <p className="text-gray-400 mb-8">{errorMessage}</p>
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-neon-yellow transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al inicio</span>
          </Link>
        </div>
      </div>
    )
  }

  // Success
  if (pageState === 'success') {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center">
          <div className="w-24 h-24 bg-neon-yellow/20 rounded-full flex items-center justify-center mx-auto mb-8 neon-glow">
            <CheckCircle2 className="w-12 h-12 text-neon-yellow" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">¡Pedido </span>
            <span className="text-neon-yellow text-glow">confirmado!</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Tu equipo está siendo preparado para envío. Recibirás un correo con el número de rastreo.
          </p>
          <div className="bg-dark-800 rounded-2xl p-6 mb-8 border border-electric-blue/20">
            <h2 className="font-display font-bold text-xl text-white mb-4">¿Qué sigue?</h2>
            <ul className="text-left space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <Package className="w-5 h-5 text-neon-yellow shrink-0 mt-0.5" />
                <span>Prepararemos tu equipo para envío (1-2 días)</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-neon-yellow shrink-0 mt-0.5" />
                <span>Te enviaremos el número de rastreo por email</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-neon-yellow shrink-0 mt-0.5" />
                <span>Una vez recibido, solo enchúfalo y ¡listo!</span>
              </li>
            </ul>
          </div>
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-neon-yellow transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al inicio</span>
          </Link>
        </div>
      </div>
    )
  }

  // Suggestion from USPS
  if (pageState === 'suggestion' && suggestedAddress) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center px-4 py-12">
        <div className="max-w-lg w-full">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-10 h-10 text-yellow-500" />
            </div>
            <h1 className="font-display text-3xl font-bold mb-2 text-white">
              Verificación de dirección
            </h1>
            <p className="text-gray-400">
              USPS sugiere una corrección a tu dirección
            </p>
          </div>

          <div className="bg-dark-800 rounded-2xl p-6 border border-electric-blue/20 mb-6">
            <h3 className="text-gray-400 text-sm mb-2">Tu dirección:</h3>
            <p className="text-white mb-4">
              {form.street1}{form.street2 ? `, ${form.street2}` : ''}<br />
              {form.city}, PR {form.zip}
            </p>

            <h3 className="text-gray-400 text-sm mb-2">Dirección sugerida por USPS:</h3>
            <p className="text-neon-yellow font-medium">
              {suggestedAddress.street1}{suggestedAddress.street2 ? `, ${suggestedAddress.street2}` : ''}<br />
              {suggestedAddress.city}, PR {suggestedAddress.zip}
            </p>
          </div>

          <div className="space-y-3">
            <button
              onClick={acceptSuggestion}
              className="w-full bg-neon-yellow text-dark-900 font-bold py-4 rounded-lg hover:bg-yellow-400 transition-colors neon-glow"
            >
              Usar dirección sugerida
            </button>
            <button
              onClick={() => {
                setSuggestedAddress(null)
                setPageState('form')
              }}
              className="w-full bg-dark-900 border border-gray-700 text-gray-300 font-medium py-3 rounded-lg hover:border-gray-500 transition-colors"
            >
              Volver y corregir mi dirección
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Form / Validating / Submitting
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-neon-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6 neon-glow">
            <CheckCircle2 className="w-10 h-10 text-neon-yellow" />
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-2">
            <span className="text-white">¡Pago </span>
            <span className="text-neon-yellow text-glow">exitoso!</span>
          </h1>
          <p className="text-gray-400">
            Ahora necesitamos tu dirección de envío
          </p>
        </div>

        <div className="bg-dark-800 rounded-2xl p-6 border border-electric-blue/20">
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-electric-blue" />
            <h2 className="font-display font-bold text-lg text-white">Dirección de Envío</h2>
          </div>

          {/* Error banner */}
          {errorMessage && (
            <div className={`rounded-lg p-3 mb-4 flex items-start gap-2 ${poBoxError ? 'bg-orange-500/10 border border-orange-500/30' : 'bg-red-500/10 border border-red-500/30'}`}>
              {poBoxError ? (
                <AlertTriangle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              )}
              <p className={`text-sm ${poBoxError ? 'text-orange-400' : 'text-red-400'}`}>{errorMessage}</p>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm mb-1">Nombre completo *</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                disabled={pageState === 'validating' || pageState === 'submitting'}
                className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-neon-yellow focus:outline-none transition-colors disabled:opacity-50"
                placeholder="Juan Pérez"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-1">Email *</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                disabled={pageState === 'validating' || pageState === 'submitting'}
                className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-neon-yellow focus:outline-none transition-colors disabled:opacity-50"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-1">Teléfono *</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                disabled={pageState === 'validating' || pageState === 'submitting'}
                className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-neon-yellow focus:outline-none transition-colors disabled:opacity-50"
                placeholder="787-123-4567"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-1">Dirección línea 1 *</label>
              <input
                type="text"
                name="street1"
                value={form.street1}
                onChange={handleChange}
                disabled={pageState === 'validating' || pageState === 'submitting'}
                className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-neon-yellow focus:outline-none transition-colors disabled:opacity-50"
                placeholder="123 Calle Principal"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-1">Dirección línea 2 (opcional)</label>
              <input
                type="text"
                name="street2"
                value={form.street2}
                onChange={handleChange}
                disabled={pageState === 'validating' || pageState === 'submitting'}
                className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-neon-yellow focus:outline-none transition-colors disabled:opacity-50"
                placeholder="Apt, Suite, Urbanización..."
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 text-sm mb-1">Ciudad *</label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  disabled={pageState === 'validating' || pageState === 'submitting'}
                  className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-neon-yellow focus:outline-none transition-colors disabled:opacity-50"
                  placeholder="San Juan"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-1">Código Postal *</label>
                <input
                  type="text"
                  name="zip"
                  value={form.zip}
                  onChange={handleChange}
                  disabled={pageState === 'validating' || pageState === 'submitting'}
                  maxLength={5}
                  className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-neon-yellow focus:outline-none transition-colors disabled:opacity-50"
                  placeholder="00901"
                />
              </div>
            </div>

            <div className="bg-dark-900 rounded-lg px-4 py-2 text-gray-500 text-sm">
              📍 Solo enviamos a direcciones físicas en Puerto Rico. No PO Box.
            </div>

            <button
              onClick={validateAddress}
              disabled={pageState === 'validating' || pageState === 'submitting'}
              className="w-full bg-neon-yellow text-dark-900 font-bold py-4 rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 neon-glow"
            >
              {pageState === 'validating' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Verificando dirección...
                </>
              ) : pageState === 'submitting' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Procesando pedido...
                </>
              ) : (
                'Confirmar y enviar pedido'
              )}
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm mb-2">¿Problemas con tu pedido?</p>
          <a href="mailto:info@internetprotegida.net" className="text-electric-blue hover:text-neon-yellow transition-colors text-sm">
            info@internetprotegida.net
          </a>
        </div>
      </div>
    </div>
  )
}
