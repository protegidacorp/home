'use client'
import CheckoutButton from '../components/CheckoutButton'
import { useState } from 'react'
import { 
  Wifi, Battery, Zap, Shield, Heart, Phone, AlertTriangle,
  CreditCard, Truck, CheckCircle2, XCircle, ChevronDown, ChevronUp,
  Mail, MapPin, Menu, X, Gift, Signal, ShoppingCart, ArrowRight, 
  Cloud, Video, MessageCircle
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
            <a href="#como-funciona" className="text-gray-300 hover:text-neon-yellow transition-colors">Cómo Funciona</a>
            <a href="#beneficios" className="text-gray-300 hover:text-neon-yellow transition-colors">Beneficios</a>
            <a href="#faq" className="text-gray-300 hover:text-neon-yellow transition-colors">FAQ</a>
            <a href="#regalar" className="btn-neon text-sm py-3 px-6 flex items-center gap-2">
              <Gift className="w-4 h-4" /> Regalar Ahora
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-electric-blue/20">
            <div className="flex flex-col gap-4">
              <a href="#como-funciona" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">Cómo Funciona</a>
              <a href="#beneficios" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">Beneficios</a>
              <a href="#faq" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">FAQ</a>
              <a href="#regalar" onClick={() => setIsOpen(false)} className="btn-neon text-center py-3">Regalar Ahora</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// HERO - DIASPORA FOCUSED
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 hero-gradient overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-20 right-0 w-72 md:w-96 h-72 md:h-96 bg-neon-yellow/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-electric-blue/20 rounded-full blur-3xl" />
      
      <div className="absolute top-1/4 left-10 w-20 h-20 border border-electric-blue/30 rotate-45 animate-float hidden lg:block" />
      <div className="absolute bottom-1/4 right-20 w-32 h-32 border border-neon-yellow/20 rounded-full animate-float hidden lg:block" style={{ animationDelay: '2s' }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-electric-blue/20 border border-electric-blue/40 rounded-full px-4 py-2 mb-6">
              <Heart className="w-4 h-4 text-neon-yellow" />
              <span className="text-sm text-gray-300">Un regalo que realmente importa</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Regala </span>
              <span className="text-neon-yellow text-glow">tranquilidad</span>
              <span className="text-white"> a tu familia en </span>
              <span className="text-electric-blue text-glow-blue">Puerto Rico</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
              Internet que funciona cuando se va la luz. <strong className="text-neon-yellow">Tú pagas desde donde estés, ellos reciben el equipo en la isla.</strong> Sin que tengan que configurar nada.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <div className="flex items-center gap-2 bg-dark-700/50 rounded-full px-4 py-2 border border-electric-blue/20">
                <Battery className="w-5 h-5 text-neon-yellow" />
                <span className="text-sm">6-7 hrs sin luz</span>
              </div>
              <div className="flex items-center gap-2 bg-dark-700/50 rounded-full px-4 py-2 border border-electric-blue/20">
                <Zap className="w-5 h-5 text-neon-yellow" />
                <span className="text-sm">Plug & Play</span>
              </div>
              <div className="flex items-center gap-2 bg-dark-700/50 rounded-full px-4 py-2 border border-electric-blue/20">
                <Truck className="w-5 h-5 text-neon-yellow" />
                <span className="text-sm">Envío directo a PR</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#regalar" className="btn-neon text-center flex items-center justify-center gap-2">
                <Gift className="w-5 h-5" /> Regalar Ahora
              </a>
              <a href="#como-funciona" className="btn-outline text-center flex items-center justify-center gap-2">
                Cómo Funciona <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-b from-neon-yellow/20 to-electric-blue/20 rounded-full blur-3xl scale-75"></div>
              <img 
                src="/router.png" 
                alt="Router 5G Internet Protegida" 
                className="relative w-full h-auto drop-shadow-2xl"
                style={{ filter: 'drop-shadow(0 0 30px rgba(223, 255, 0, 0.3))' }}
              />
            </div>
            <div className="absolute top-4 -right-4 bg-neon-yellow text-dark-900 px-4 py-2 rounded-full font-display font-bold text-sm neon-glow-strong">
              ✓ Lo enchufan y listo
            </div>
            <div className="absolute bottom-20 -left-4 bg-electric-blue text-white px-4 py-2 rounded-full font-display font-bold text-sm blue-glow">
              ✓ Funciona sin luz
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <ChevronDown className="w-8 h-8 text-neon-yellow/50" />
      </div>
    </section>
  )
}

// PAIN POINTS SECTION
function PainPointsSection() {
  return (
    <section className="py-20 lg:py-28 bg-dark-800 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">¿Te suena </span>
            <span className="text-neon-yellow text-glow">familiar?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          <div className="card-glass text-center">
            <div className="w-16 h-16 bg-red-500/20 border border-red-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">"Mijo, se fue el internet"</h3>
            <p className="text-gray-400">Llamadas a las 9pm para resolver problemas técnicos que no puedes arreglar desde lejos.</p>
          </div>

          <div className="card-glass text-center">
            <div className="w-16 h-16 bg-red-500/20 border border-red-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">"Se fue la luz otra vez"</h3>
            <p className="text-gray-400">Cuando hay tormenta, pierdes contacto con tu familia por horas o días.</p>
          </div>

          <div className="card-glass text-center">
            <div className="w-16 h-16 bg-red-500/20 border border-red-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Cloud className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">"El técnico viene la semana que viene"</h3>
            <p className="text-gray-400">Tu mamá sin internet mientras espera al técnico que nunca llega a tiempo.</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-gray-300">
            Con Internet Protegida, <span className="text-neon-yellow font-semibold">estos problemas desaparecen.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

// HOW IT WORKS - GIFT FOCUSED
function HowItWorksSection() {
  const steps = [
    { number: '01', icon: ShoppingCart, title: 'Tú ordenas desde donde estés', description: 'Compra online con tu tarjeta. Puedes agregar un mensaje personal.' },
    { number: '02', icon: Truck, title: 'Ellos reciben en Puerto Rico', description: 'Enviamos directamente a la dirección de tu familia en la isla.' },
    { number: '03', icon: Zap, title: 'Enchufan y listo', description: 'Solo tienen que conectarlo. Cero configuración, cero técnicos.' }
  ]

  return (
    <section id="como-funciona" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Así de </span>
            <span className="text-neon-yellow text-glow">fácil</span>
            <span className="text-white"> es regalar</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400">Tú pagas, ellos disfrutan</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-electric-blue to-neon-yellow opacity-30" />
              )}
              <div className="card-glass text-center relative z-10 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-neon-yellow/40">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-dark-900 px-4 py-1 rounded-full border border-electric-blue/50">
                  <span className="font-display font-bold text-electric-blue">{step.number}</span>
                </div>
                <div className="feature-icon mx-auto mb-6 mt-4 group-hover:neon-glow transition-all duration-300">
                  <step.icon className="w-8 h-8 text-neon-yellow" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// BENEFITS - DIASPORA FOCUSED
function BenefitsSection() {
  const benefits = [
    { 
      icon: Video, 
      title: 'FaceTime cuando quieras', 
      description: 'Videollamadas sin que se congele la imagen, incluso durante apagones.',
      tags: ['FaceTime', 'WhatsApp Video']
    },
    { 
      icon: Battery, 
      title: 'Conectados durante tormentas', 
      description: 'Hasta 7 horas de internet sin luz. Sabrás que están bien.',
      tags: ['Sin Luz', '6-7 Horas']
    },
    { 
      icon: Shield, 
      title: 'Sin llamadas de soporte', 
      description: 'No más "mijo, ayúdame con el internet". Simplemente funciona.',
      tags: ['Plug & Play', 'Cero Config']
    },
    { 
      icon: Heart, 
      title: 'Tranquilidad para ti', 
      description: 'Duerme tranquilo sabiendo que tu familia puede comunicarse siempre.',
      tags: ['24/7', 'Confiable']
    }
  ]

  return (
    <section id="beneficios" className="py-20 lg:py-28 bg-dark-800 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Para ti y para </span>
            <span className="text-neon-yellow text-glow">ellos</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Un regalo que les da independencia a ellos y paz mental a ti
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="card-glass group transition-all duration-300 hover:border-neon-yellow/40 hover:-translate-y-1">
              <div className="flex gap-4 sm:gap-5">
                <div className="feature-icon shrink-0 group-hover:neon-glow transition-all duration-300">
                  <b.icon className="w-6 sm:w-7 h-6 sm:h-7 text-neon-yellow" />
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">{b.title}</h3>
                  <p className="text-gray-400 mb-3 text-sm sm:text-base">{b.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {b.tags.map((tag, j) => (
                      <span key={j} className="bg-neon-yellow/10 text-neon-yellow text-xs sm:text-sm px-3 py-1 rounded-full border border-neon-yellow/30">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// TESTIMONIAL - DIASPORA ANGLE
function TestimonialSection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-glass text-center p-8 sm:p-12">
          <div className="w-20 h-20 bg-neon-yellow/20 border border-neon-yellow/30 rounded-full flex items-center justify-center mx-auto mb-8">
            <MessageCircle className="w-10 h-10 text-neon-yellow" />
          </div>
          <blockquote className="text-xl sm:text-2xl text-white mb-6 leading-relaxed">
            "Le compré esto a mi mamá en Bayamón hace 6 meses. Antes me llamaba cada vez que se iba la luz o el internet. <span className="text-neon-yellow">Ahora solo me llama para contarme del último capítulo de su novela.</span>"
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div>
              <p className="font-display font-bold text-white">María R.</p>
              <p className="text-sm text-gray-400">Orlando, FL</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// PRODUCT/CHECKOUT SECTION
function ProductSection() {
  return (
    <section id="regalar" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Regala </span>
            <span className="text-neon-yellow text-glow">conexión</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Todo incluido. Envío directo a Puerto Rico.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-dark-700 to-dark-800 border border-electric-blue/20 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-b from-neon-yellow/10 to-electric-blue/10"></div>
              <img 
                src="/router.png" 
                alt="Router 5G + Batería" 
                className="relative w-3/4 h-auto drop-shadow-2xl"
                style={{ filter: 'drop-shadow(0 0 20px rgba(0, 102, 255, 0.3))' }}
              />
            </div>
            
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="card-glass text-center py-4">
                <Signal className="w-6 sm:w-8 h-6 sm:h-8 text-neon-yellow mx-auto mb-2" />
                <p className="text-xl sm:text-2xl font-display font-bold text-white">300</p>
                <p className="text-xs sm:text-sm text-gray-400">Mbps</p>
              </div>
              <div className="card-glass text-center py-4">
                <Battery className="w-6 sm:w-8 h-6 sm:h-8 text-neon-yellow mx-auto mb-2" />
                <p className="text-xl sm:text-2xl font-display font-bold text-white">6-7</p>
                <p className="text-xs sm:text-sm text-gray-400">Hrs sin luz</p>
              </div>
              <div className="card-glass text-center py-4">
                <Wifi className="w-6 sm:w-8 h-6 sm:h-8 text-neon-yellow mx-auto mb-2" />
                <p className="text-xl sm:text-2xl font-display font-bold text-white">5G</p>
                <p className="text-xs sm:text-sm text-gray-400">Tecnología</p>
              </div>
            </div>
          </div>

          <div className="gradient-border p-6 sm:p-8">
            <div className="space-y-6">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-neon-yellow/20 border border-neon-yellow/40 rounded-full px-4 py-2 mb-4">
                  <Gift className="w-4 h-4 text-neon-yellow" />
                  <span className="text-sm text-neon-yellow font-semibold">Opción de Regalo</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">Combo Internet Protegida 5GX</h3>
                <p className="text-gray-400">Envío directo a tu familia en Puerto Rico</p>
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

                <div className="bg-neon-yellow/10 rounded-xl p-5 border border-neon-yellow/30 neon-glow">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-neon-yellow/20 flex items-center justify-center">
                      <Signal className="w-6 h-6 text-neon-yellow" />
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
                  'Tú pagas, ellos solo lo enchufan'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-neon-yellow shrink-0" />
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

// FAQ - DIASPORA FOCUSED
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const faqs = [
    { 
      q: '¿Puedo comprarlo desde Estados Unidos para mi familia en PR?', 
      a: 'Sí, exactamente para eso está diseñado. Tú pagas con tu tarjeta desde donde estés, y nosotros enviamos directamente a la dirección de tu familia en Puerto Rico.' 
    },
    { 
      q: '¿Mis padres tienen que configurar algo?', 
      a: 'No. Solo tienen que enchufarlo y encenderlo. No requiere ninguna configuración técnica. Si pueden enchufar una lámpara, pueden usar Internet Protegida.' 
    },
    { 
      q: '¿Funciona durante los apagones?', 
      a: 'Sí, incluye una batería de respaldo que mantiene el internet funcionando entre 6 y 7 horas sin electricidad. Perfecto para mantenerse comunicados durante tormentas.' 
    },
    { 
      q: '¿Puedo pagar el servicio mensual desde fuera de PR?', 
      a: 'Sí, todo el proceso es online. Puedes manejar el servicio y los pagos desde cualquier lugar.' 
    },
    { 
      q: '¿Qué pasa si no les funciona bien en su área?', 
      a: 'Tienes 5 días para probarlo. Si no están satisfechos por cualquier razón, cancelas sin complicaciones ni preguntas.' 
    },
    { 
      q: '¿Hay contrato?', 
      a: 'No. Cancela cuando quieras sin penalidades. Se quedan porque funciona, no porque tienen que quedarse.' 
    },
    { 
      q: '¿Cuánto tiempo tarda en llegar?', 
      a: 'Enviamos a toda Puerto Rico. El tiempo de entrega típico es de 3-5 días laborables.' 
    },
    { 
      q: '¿Pueden hacer videollamadas sin problemas?', 
      a: 'Sí, hasta 300 Mbps es más que suficiente para FaceTime, WhatsApp Video, y cualquier plataforma de videollamadas en calidad HD.' 
    }
  ]

  return (
    <section id="faq" className="py-20 lg:py-28 bg-dark-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Preguntas </span>
            <span className="text-neon-yellow text-glow">Frecuentes</span>
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="card-glass overflow-hidden">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left">
                <span className="font-display font-semibold text-white pr-4 text-sm sm:text-base">{faq.q}</span>
                {openIndex === i ? <ChevronUp className="w-5 h-5 text-neon-yellow shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />}
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
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-neon-yellow/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-electric-blue/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          <span className="text-white">No esperes al próximo </span>
          <span className="text-neon-yellow text-glow">apagón</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Dale a tu familia la tranquilidad de estar siempre conectados. Tú desde donde estés, ellos en Puerto Rico.
        </p>
        
        <a href="#regalar" className="btn-neon inline-flex items-center gap-2 text-lg px-10 py-5">
          <Gift className="w-6 h-6" /> Regalar Ahora
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
              <li><a href="#como-funciona" className="text-gray-400 hover:text-neon-yellow text-sm">Cómo Funciona</a></li>
              <li><a href="#beneficios" className="text-gray-400 hover:text-neon-yellow text-sm">Beneficios</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-neon-yellow text-sm">FAQ</a></li>
              <li><a href="/" className="text-gray-400 hover:text-neon-yellow text-sm">Página Principal</a></li>
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
            <a href="#" className="text-gray-500 hover:text-neon-yellow text-sm">Términos</a>
            <a href="#" className="text-gray-500 hover:text-neon-yellow text-sm">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// MAIN
export default function FamiliaPage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <PainPointsSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TestimonialSection />
      <ProductSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
