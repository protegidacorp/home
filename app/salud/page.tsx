'use client'
import CheckoutButton from '../components/CheckoutButton'
import { useState } from 'react'
import { 
  Wifi, Battery, Zap, Shield, Heart, Activity, Phone,
  CreditCard, Truck, CheckCircle2, ChevronDown, ChevronUp,
  Mail, MapPin, Menu, X, Signal, ShoppingCart, ArrowRight, 
  AlertTriangle, Clock, Video, Stethoscope
} from 'lucide-react'

// NAVIGATION
function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/90 backdrop-blur-md border-b border-electric-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-yellow to-electric-blue flex items-center justify-center">
              <Wifi className="w-6 h-6 text-dark-900" />
            </div>
            <div className="font-display font-bold text-xl">
              <span className="text-neon-yellow">Internet</span>
              <span className="text-white"> Protegida</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#importancia" className="text-gray-300 hover:text-neon-yellow transition-colors">Por Qué Importa</a>
            <a href="#usos" className="text-gray-300 hover:text-neon-yellow transition-colors">Usos</a>
            <a href="#faq" className="text-gray-300 hover:text-neon-yellow transition-colors">FAQ</a>
            <a href="#comprar" className="btn-neon text-sm py-3 px-6 flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" /> Ordenar
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-electric-blue/20">
            <div className="flex flex-col gap-4">
              <a href="#importancia" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">Por Qué Importa</a>
              <a href="#usos" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">Usos</a>
              <a href="#faq" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">FAQ</a>
              <a href="#comprar" onClick={() => setIsOpen(false)} className="btn-neon text-center py-3">Ordenar</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// HERO - HEALTH FOCUSED
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 hero-gradient overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-20 right-0 w-72 md:w-96 h-72 md:h-96 bg-neon-yellow/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-electric-blue/20 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-electric-blue/20 border border-electric-blue/40 rounded-full px-4 py-2 mb-6">
              <Heart className="w-4 h-4 text-red-400" />
              <span className="text-sm text-gray-300">Conexión confiable para tu salud</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Tu </span>
              <span className="text-electric-blue text-glow-blue">salud</span>
              <span className="text-white"> no puede esperar a que vuelva </span>
              <span className="text-neon-yellow text-glow">la luz</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
              Internet con batería de respaldo para citas de telemedicina, monitoreo de salud, y comunicación con doctores. <strong className="text-neon-yellow">Hasta 7 horas sin electricidad.</strong>
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <div className="flex items-center gap-2 bg-dark-700/50 rounded-full px-4 py-2 border border-electric-blue/20">
                <Video className="w-5 h-5 text-electric-blue" />
                <span className="text-sm">Telemedicina</span>
              </div>
              <div className="flex items-center gap-2 bg-dark-700/50 rounded-full px-4 py-2 border border-electric-blue/20">
                <Activity className="w-5 h-5 text-electric-blue" />
                <span className="text-sm">Monitoreo 24/7</span>
              </div>
              <div className="flex items-center gap-2 bg-dark-700/50 rounded-full px-4 py-2 border border-electric-blue/20">
                <Battery className="w-5 h-5 text-electric-blue" />
                <span className="text-sm">6-7 hrs sin luz</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#comprar" className="btn-neon text-center flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" /> Protege tu Conexión
              </a>
              <a href="#importancia" className="btn-outline text-center flex items-center justify-center gap-2">
                Por Qué Importa <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-b from-electric-blue/20 to-neon-yellow/20 rounded-full blur-3xl scale-75"></div>
              <img 
                src="/router.png" 
                alt="Router 5G Internet Protegida" 
                className="relative w-full h-auto drop-shadow-2xl"
                style={{ filter: 'drop-shadow(0 0 30px rgba(0, 102, 255, 0.3))' }}
              />
            </div>
            <div className="absolute top-4 -right-4 bg-electric-blue text-white px-4 py-2 rounded-full font-display font-bold text-sm blue-glow">
              ✓ Siempre conectado
            </div>
            <div className="absolute bottom-20 -left-4 bg-neon-yellow text-dark-900 px-4 py-2 rounded-full font-display font-bold text-sm neon-glow-strong">
              ✓ Batería incluida
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <ChevronDown className="w-8 h-8 text-electric-blue/50" />
      </div>
    </section>
  )
}

// WHY IT MATTERS
function ImportanceSection() {
  return (
    <section id="importancia" className="py-20 lg:py-28 bg-dark-800 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Cuando la conexión es </span>
            <span className="text-electric-blue text-glow-blue">crítica</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Para ciertas necesidades de salud, perder internet no es solo inconveniente—es un riesgo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          <div className="card-glass text-center p-8">
            <div className="w-16 h-16 bg-red-500/20 border border-red-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <Video className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">Citas de telemedicina</h3>
            <p className="text-gray-400">Perder una cita virtual con tu doctor puede retrasar diagnósticos y tratamientos importantes.</p>
          </div>

          <div className="card-glass text-center p-8">
            <div className="w-16 h-16 bg-red-500/20 border border-red-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <Activity className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">Monitoreo remoto</h3>
            <p className="text-gray-400">Dispositivos de monitoreo cardíaco, glucosa, y otros necesitan conexión constante para alertar emergencias.</p>
          </div>

          <div className="card-glass text-center p-8">
            <div className="w-16 h-16 bg-red-500/20 border border-red-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">Comunicación de emergencia</h3>
            <p className="text-gray-400">En una emergencia médica, necesitas poder comunicarte con familiares y servicios de salud.</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-electric-blue/10 border border-electric-blue/30 rounded-full px-6 py-3">
            <Shield className="w-6 h-6 text-electric-blue" />
            <span className="text-lg text-white font-display font-semibold">Internet Protegida te mantiene conectado cuando más importa</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// USE CASES
function UseCasesSection() {
  const uses = [
    { 
      icon: Stethoscope, 
      title: 'Telemedicina', 
      description: 'Citas virtuales con doctores, especialistas, y seguimiento de tratamientos sin salir de casa.',
    },
    { 
      icon: Activity, 
      title: 'Monitoreo de condiciones', 
      description: 'Dispositivos de glucosa, presión arterial, ritmo cardíaco que envían datos a tu equipo médico.',
    },
    { 
      icon: Heart, 
      title: 'Alertas médicas', 
      description: 'Sistemas de alerta que notifican a familiares o servicios de emergencia si algo pasa.',
    },
    { 
      icon: Video, 
      title: 'Terapia virtual', 
      description: 'Sesiones de fisioterapia, terapia ocupacional, o salud mental por videollamada.',
    }
  ]

  return (
    <section id="usos" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Conexión confiable para </span>
            <span className="text-neon-yellow text-glow">tu salud</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {uses.map((u, i) => (
            <div key={i} className="card-glass group transition-all duration-300 hover:border-electric-blue/40 hover:-translate-y-1">
              <div className="flex gap-4 sm:gap-5">
                <div className="feature-icon shrink-0 group-hover:blue-glow transition-all duration-300">
                  <u.icon className="w-6 sm:w-7 h-6 sm:h-7 text-electric-blue" />
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">{u.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">{u.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// BATTERY CRITICAL
function BatteryCriticalSection() {
  return (
    <section className="py-20 lg:py-28 bg-dark-800 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-glass p-8 sm:p-12 border-electric-blue/30">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-electric-blue/20 border border-electric-blue/40 rounded-full px-4 py-2 mb-6">
                <Battery className="w-4 h-4 text-electric-blue" />
                <span className="text-sm text-electric-blue font-semibold">Batería de Respaldo</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                La batería no es un extra—es esencial
              </h3>
              <p className="text-gray-400 text-lg mb-6">
                Para necesidades de salud, perder conexión durante un apagón puede ser peligroso. Nuestra batería incluida te da <strong className="text-neon-yellow">6-7 horas</strong> de internet aunque no haya electricidad.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-electric-blue shrink-0" />
                  <span className="text-gray-300">Monitoreo continuo sin interrupciones</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-electric-blue shrink-0" />
                  <span className="text-gray-300">Comunicación disponible en emergencias</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-electric-blue shrink-0" />
                  <span className="text-gray-300">Tranquilidad para ti y tu familia</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-40 h-40 bg-electric-blue/20 border-4 border-electric-blue/50 rounded-full flex items-center justify-center mx-auto blue-glow">
                <div className="text-center">
                  <p className="text-5xl font-display font-bold text-electric-blue">6-7</p>
                  <p className="text-sm text-gray-400">horas</p>
                </div>
              </div>
              <p className="mt-4 text-gray-400">de internet durante apagones</p>
              <p className="text-sm text-gray-500 mt-2">Tiempo suficiente para la mayoría de emergencias</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// PEACE OF MIND
function PeaceOfMindSection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
          <span className="text-white">Tranquilidad para ti y </span>
          <span className="text-neon-yellow text-glow">tu familia</span>
        </h2>
        
        <div className="card-glass p-8 sm:p-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-16 h-16 bg-neon-yellow/20 border border-neon-yellow/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-neon-yellow" />
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">Para ti</h3>
              <p className="text-gray-400 text-sm">Acceso constante a tu equipo médico y servicios de salud</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-neon-yellow/20 border border-neon-yellow/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-neon-yellow" />
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">Para tus hijos</h3>
              <p className="text-gray-400 text-sm">Saber que pueden comunicarse contigo aunque haya apagón</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-neon-yellow/20 border border-neon-yellow/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-neon-yellow" />
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">Para cuidadores</h3>
              <p className="text-gray-400 text-sm">Monitoreo y comunicación sin interrupciones</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// PRODUCT SECTION
function ProductSection() {
  return (
    <section id="comprar" className="py-20 lg:py-28 bg-dark-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Conexión confiable para </span>
            <span className="text-electric-blue text-glow-blue">tu salud</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-dark-700 to-dark-800 border border-electric-blue/20 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-b from-electric-blue/10 to-neon-yellow/10"></div>
              <img 
                src="/router.png" 
                alt="Router 5G + Batería" 
                className="relative w-3/4 h-auto drop-shadow-2xl"
                style={{ filter: 'drop-shadow(0 0 20px rgba(0, 102, 255, 0.3))' }}
              />
            </div>
            
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="card-glass text-center py-4">
                <Signal className="w-6 sm:w-8 h-6 sm:h-8 text-electric-blue mx-auto mb-2" />
                <p className="text-xl sm:text-2xl font-display font-bold text-white">300</p>
                <p className="text-xs sm:text-sm text-gray-400">Mbps</p>
              </div>
              <div className="card-glass text-center py-4">
                <Battery className="w-6 sm:w-8 h-6 sm:h-8 text-electric-blue mx-auto mb-2" />
                <p className="text-xl sm:text-2xl font-display font-bold text-white">6-7</p>
                <p className="text-xs sm:text-sm text-gray-400">Hrs sin luz</p>
              </div>
              <div className="card-glass text-center py-4">
                <Wifi className="w-6 sm:w-8 h-6 sm:h-8 text-electric-blue mx-auto mb-2" />
                <p className="text-xl sm:text-2xl font-display font-bold text-white">5G</p>
                <p className="text-xs sm:text-sm text-gray-400">Tecnología</p>
              </div>
            </div>
          </div>

          <div className="gradient-border p-6 sm:p-8">
            <div className="space-y-6">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-electric-blue/20 border border-electric-blue/40 rounded-full px-4 py-2 mb-4">
                  <Heart className="w-4 h-4 text-red-400" />
                  <span className="text-sm text-electric-blue font-semibold">Para necesidades de salud</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">Combo Internet Protegida 5GX</h3>
                <p className="text-gray-400">Conexión confiable con batería incluida</p>
              </div>

              <div className="space-y-4">
                <div className="bg-dark-700/50 rounded-xl p-5 border border-electric-blue/20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-electric-blue/20 flex items-center justify-center">
                      <Wifi className="w-6 h-6 text-electric-blue" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-white">Equipo Completo</p>
                      <p className="text-sm text-gray-400">Router 5G + Batería de respaldo</p>
                    </div>
                  </div>
                </div>

                <div className="bg-electric-blue/10 rounded-xl p-5 border border-electric-blue/30 blue-glow">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-electric-blue/20 flex items-center justify-center">
                      <Signal className="w-6 h-6 text-electric-blue" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-white">Servicio Mensual</p>
                      <p className="text-sm text-gray-400">Internet 5GX hasta 300 Mbps</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section-divider" />

              <div className="space-y-3">
                {[
                  'Router 5G + Batería incluidos',
                  'Envío gratis a toda Puerto Rico',
                  'Activación incluida',
                  'Garantía de 5 días',
                  'Sin contratos, cancela cuando quieras',
                  'Plug & Play - sin configuración'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-electric-blue shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <CheckoutButton />
              
              <div className="flex flex-col items-center gap-4 pt-2">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Shield className="w-4 h-4" /> Pago Seguro
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <CreditCard className="w-4 h-4" /> Stripe
                  </div>
                </div>
                
                <div className="flex items-center gap-2 bg-dark-700/50 rounded-lg px-4 py-2 border border-gray-600">
                  <img 
                    src="/klarna-badge.svg" 
                    alt="Klarna" 
                    className="h-5"
                  />
                  <span className="text-xs text-gray-400">Paga en 4 cuotas sin intereses</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// FAQ
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const faqs = [
    { 
      q: '¿Funciona con dispositivos de monitoreo médico?', 
      a: 'Sí. Cualquier dispositivo que use WiFi o internet funcionará—monitores de glucosa, presión arterial, ritmo cardíaco, y otros. La velocidad de 300 Mbps es más que suficiente para estos dispositivos.' 
    },
    { 
      q: '¿Qué pasa si se va la luz durante una emergencia?', 
      a: 'La batería incluida te da 6-7 horas de internet sin electricidad. Esto te permite mantener comunicación y monitoreo durante la mayoría de apagones.' 
    },
    { 
      q: '¿La conexión es estable para videollamadas médicas?', 
      a: 'Sí. 300 Mbps es más que suficiente para videollamadas en HD con tu doctor. La red 5G es muy estable.' 
    },
    { 
      q: '¿Es difícil de instalar?', 
      a: 'No. Solo lo enchufas y ya funciona. No necesita configuración técnica ni visita de técnicos.' 
    },
    { 
      q: '¿Y si la batería dura menos de 6 horas?', 
      a: 'La batería se recarga automáticamente cuando vuelve la luz. Si tienes generador, también puedes conectar el router al generador para extender el tiempo.' 
    },
    { 
      q: '¿Hay contrato?', 
      a: 'No. Cancela cuando quieras sin penalidades. Entendemos que las situaciones de salud cambian.' 
    },
    { 
      q: '¿Funciona en toda Puerto Rico?', 
      a: 'Sí, tenemos cobertura en toda la isla gracias a la red 5G. Tienes 5 días para probarlo en tu ubicación.' 
    }
  ]

  return (
    <section id="faq" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Preguntas </span>
            <span className="text-electric-blue text-glow-blue">Frecuentes</span>
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="card-glass overflow-hidden">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left">
                <span className="font-display font-semibold text-white pr-4 text-sm sm:text-base">{faq.q}</span>
                {openIndex === i ? <ChevronUp className="w-5 h-5 text-electric-blue shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />}
              </button>
              {openIndex === i && (
                <div className="px-5 sm:px-6 pb-4 sm:pb-5 animate-fade-in">
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA
function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-r from-electric-blue/20 to-neon-yellow/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-electric-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-neon-yellow/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          <span className="text-white">Tu salud no puede esperar al </span>
          <span className="text-electric-blue text-glow-blue">próximo apagón</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Conexión confiable con batería de respaldo para estar siempre conectado cuando más importa.
        </p>
        
        <a href="#comprar" className="btn-neon inline-flex items-center gap-2 text-lg px-10 py-5">
          <ShoppingCart className="w-6 h-6" /> Ordenar Ahora
        </a>
        
        <p className="mt-6 text-sm text-gray-500">Sin contratos • Garantía 5 días • Envío a toda Puerto Rico</p>
      </div>
    </section>
  )
}

// FOOTER
function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-electric-blue/20 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-8 lg:mb-12">
          <div>
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-yellow to-electric-blue flex items-center justify-center">
                <Wifi className="w-6 h-6 text-dark-900" />
              </div>
              <div className="font-display font-bold text-xl">
                <span className="text-neon-yellow">Internet</span>
                <span className="text-white"> Protegida</span>
              </div>
            </a>
            <p className="text-gray-400 text-sm">Sin técnicos. Sin esperas. Sin apagones.</p>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li><a href="#importancia" className="text-gray-400 hover:text-electric-blue text-sm">Por Qué Importa</a></li>
              <li><a href="#usos" className="text-gray-400 hover:text-electric-blue text-sm">Usos</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-electric-blue text-sm">FAQ</a></li>
              <li><a href="/" className="text-gray-400 hover:text-electric-blue text-sm">Página Principal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-electric-blue" /> info@internetprotegida.net
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-electric-blue" /> Puerto Rico
              </li>
            </ul>
          </div>
        </div>

        <div className="section-divider mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2024 Internet Protegida 5GX. El internet que Puerto Rico se merece.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-500 hover:text-electric-blue text-sm">Términos</a>
            <a href="#" className="text-gray-500 hover:text-electric-blue text-sm">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// MAIN
export default function SaludPage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ImportanceSection />
      <UseCasesSection />
      <BatteryCriticalSection />
      <PeaceOfMindSection />
      <ProductSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
