'use client'

import { useState } from 'react'
import { ShoppingCart, Loader2 } from 'lucide-react'

export default function CheckoutButton() {
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      
      const data = await response.json()
      
      if (data.url) {
        window.location.href = data.url
      } else {
        alert('Error al crear la sesión de pago')
        setLoading(false)
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error al procesar el pago')
      setLoading(false)
    }
  }

  return (
    <div className="w-full">
      <button 
        onClick={handleCheckout}
        disabled={loading}
        className="btn-neon w-full text-center py-4 text-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Procesando...
          </>
        ) : (
          <>
            <ShoppingCart className="w-5 h-5" />
            Ordenar Ahora
          </>
        )}
      </button>
      <p className="text-gray-500 text-xs text-center mt-2">
        📍 Solo enviamos a direcciones físicas en Puerto Rico. No PO Box.
      </p>
    </div>
  )
}
