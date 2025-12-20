'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle2, Mail, ArrowLeft, Loader2, AlertCircle, Package, MapPin } from 'lucide-react'

interface ShippingForm {
  name: string
  street1: string
  street2: string
  city: string
  zip: string
  phone: string
  email: string
}

type PageState = 'loading' | 'form' | 'submitting' | 'success' | 'error'

export default function GraciasPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  
  const [pageState, setPageState] = useState<PageState>('loading')
  const [errorMessage, setErrorMessage] = useState('')
  const [addressError, setAddressError] = useState('')
  const [isValidating, setIsValidating] = useState(false)
  const [addressValidated, setAddressValidated] = useState(false)
  
  const [form, setForm] = useState<ShippingForm>({
    name: '',
    street1: '',
    street2: '',
    city: '',
    zip: '',
    phone: '',
    email: '',
  })

  // Check if session_id exists
  useEffect(() => {
    if (!sessionId) {
      setErrorMessage('No se encontró información del pedido')
      setPageState('error')
    } else {
      setPageState('form')
    }
  }, [sessionId])

  // Handle form changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    // Reset validation when address fields change
    if (['street1', 'street2', 'city', 'zip'].includes(name)) {
      setAddressValidated(false)
      setAddressError('')
    }
  }

  // Validate address with Shippo
  const validateAddress = async () => {
    if (!form.name || !form.street1 || !form.city || !form.zip) {
      setAddressError('Completa todos los campos requeridos')
      return false
    }

    setIsValidating(true)
    setAddressError('')

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
        setAddressValidated(true)
        setAddressError('')
        return true
      } else {
        setAddressError(data.error || 'Dirección no válida. Por favor verifica los datos.')
        setAddressValidated(false)
        return false
      }
    } catch (error) {
      setAddressError('Error al validar la dirección. Intenta de nuevo.')
      return false
    } finally {
      setIsValidating(false)
    }
  }

  // Submit order
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate address first if not already validated
    if (!addressValidated) {
      const isValid = await validateAddress()
      if (!isValid) return
    }

    setPageState('submitting')

    try {
      const response = await fetch('/api/submit-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId,
          shippingAddress: {
            name: form.name,
            street1: form.street1,
            street2: form.street2,
            city: form.city,
            state: 'PR',
            zip: form.zip,
            country: 'PR',
            phone: form.phone,
            email: form.email,
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

  // Loading state
  if (pageState === 'loading') {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-neon-yellow animate-spin" />
      </div>
    )
  }

  // Error state (no session)
  if (pageState === 'error') {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center">
          <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <AlertCircle className="w-12 h-12 text-red-500" />
          </div>
          <h1 className="font-display text-3xl font-bold text-white mb-4">Error</h1>
          <p className="text-gray-400 mb-8">{errorMessage}</p>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-neon-yellow transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al inicio</span>
          </Link>
        </div>
      </div>
    )
  }

  // Success state
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

          <div className="mb-8">
            <p className="text-gray-500 text-sm mb-3">¿Preguntas? Contáctanos:</p>
            <a href="mailto:info@internetprotegida.net" className="flex items-center justify-center gap-2 text-electric-blue hover:text-neon-yellow transition-colors">
              <Mail className="w-4 h-4" />
              <span className="text-sm">info@internetprotegida.net</span>
            </a>
          </div>

          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-neon-yellow transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al inicio</span>
          </Link>
        </div>
      </div>
    )
  }

  // Form state (main view)
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full">
        {/* Header */}
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

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-dark-800 rounded-2xl p-6 border border-electric-blue/20">
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-electric-blue" />
            <h2 className="font-display font-bold text-lg text-white">Dirección de Envío</h2>
          </div>

          {/* Error banner */}
          {errorMessage && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
              <p className="text-red-400 text-sm">{errorMessage}</p>
            </div>
          )}

          <div className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-gray-300 text-sm mb-1">Nombre completo *</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-neon-yellow focus:outline-none transition-colors"
                placeholder="Juan Pérez"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 text-sm mb-1">Email *</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-neon-yellow focus:outline-none transition-colors"
                placeholder="tu@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-300 text-sm mb-1">Teléfono *</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-neon-yellow focus:outline-none transition-colors"
                placeholder="787-123-4567"
              />
            </div>

            {/* Street 1 */}
            <div>
              <label className="block text-gray-300 text-sm mb-1">Dirección línea 1 *</label>
              <input
                type="text"
                name="street1"
                value={form.street1}
                onChange={handleChange}
                required
                className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-neon-yellow focus:outline-none transition-colors"
                placeholder="123 Calle Principal"
              />
            </div>

            {/* Street 2 */}
            <div>
              <label className="block text-gray-300 text-sm mb-1">Dirección línea 2 (opcional)</label>
              <input
                type="text"
                name="street2"
                value={form.street2}
                onChange={handleChange}
                className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-neon-yellow focus:outline-none transition-colors"
                placeholder="Apt, Suite, Urbanización..."
              />
            </div>

            {/* City and Zip */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 text-sm mb-1">Ciudad *</label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-neon-yellow focus:outline-none transition-colors"
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
                  required
                  maxLength={5}
                  className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-neon-yellow focus:outline-none transition-colors"
                  placeholder="00901"
                />
              </div>
            </div>

            {/* Puerto Rico indicator */}
            <div className="bg-dark-900 rounded-lg px-4 py-2 text-gray-500 text-sm">
              📍 Solo envíos a Puerto Rico
            </div>

            {/* Address validation error */}
            {addressError && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-400 text-sm font-medium">Dirección no válida</p>
                  <p className="text-red-400/70 text-sm">{addressError}</p>
                </div>
              </div>
            )}

            {/* Address validated indicator */}
            {addressValidated && (
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <p className="text-green-400 text-sm">Dirección verificada correctamente</p>
              </div>
            )}

            {/* Validate button */}
            <button
              type="button"
              onClick={validateAddress}
              disabled={isValidating || addressValidated}
              className="w-full bg-dark-900 border border-electric-blue text-electric-blue font-medium py-3 rounded-lg hover:bg-electric-blue/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isValidating ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Verificando...
                </>
              ) : addressValidated ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  Dirección verificada
                </>
              ) : (
                'Verificar dirección'
              )}
            </button>

            {/* Submit button */}
            <button
              type="submit"
              disabled={pageState === 'submitting'}
              className="w-full bg-neon-yellow text-dark-900 font-bold py-4 rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 neon-glow"
            >
              {pageState === 'submitting' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Procesando...
                </>
              ) : (
                'Confirmar y enviar pedido'
              )}
            </button>
          </div>
        </form>

        {/* Contact */}
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
