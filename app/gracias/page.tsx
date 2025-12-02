import Link from 'next/link'
import { CheckCircle2, Mail, Phone, ArrowLeft } from 'lucide-react'

export default function GraciasPage() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Success Icon */}
        <div className="w-24 h-24 bg-neon-yellow/20 rounded-full flex items-center justify-center mx-auto mb-8 neon-glow">
          <CheckCircle2 className="w-12 h-12 text-neon-yellow" />
        </div>

        {/* Title */}
        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
          <span className="text-white">¡Gracias por tu </span>
          <span className="text-neon-yellow text-glow">compra!</span>
        </h1>

        {/* Message */}
        <p className="text-gray-400 text-lg mb-8">
          Tu pedido ha sido procesado exitosamente. Recibirás un correo electrónico con los detalles de tu compra y la información de envío.
        </p>

        {/* What's Next */}
        <div className="bg-dark-800 rounded-2xl p-6 mb-8 border border-electric-blue/20">
          <h2 className="font-display font-bold text-xl text-white mb-4">¿Qué sigue?</h2>
          <ul className="text-left space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-neon-yellow shrink-0 mt-0.5" />
              <span>Recibirás un email de confirmación con tu recibo</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-neon-yellow shrink-0 mt-0.5" />
              <span>Prepararemos tu equipo para envío (1-2 días)</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-neon-yellow shrink-0 mt-0.5" />
              <span>Te enviaremos el número de rastreo por email</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-neon-yellow shrink-0 mt-0.5" />
              <span>Una vez recibido, solo enchúfalo y ¡listo!</span>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="mb-8">
          <p className="text-gray-500 text-sm mb-3">¿Preguntas? Contáctanos:</p>
          <div className="flex justify-center gap-6">
            <a href="mailto:info@internetprotegida.net" className="flex items-center gap-2 text-electric-blue hover:text-neon-yellow transition-colors">
              <Mail className="w-4 h-4" />
              <span className="text-sm">Email</span>
            </a>
          </div>
        </div>

        {/* Back to Home */}
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
