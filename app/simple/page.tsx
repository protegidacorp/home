'use client'
import CheckoutButton from '../components/CheckoutButton'
import { useState } from 'react'
import { 
  Wifi, Battery, Zap, Shield, Smile, ThumbsUp, Phone,
  CreditCard, Truck, CheckCircle2, ChevronDown, ChevronUp,
  Mail, MapPin, Menu, X, Signal, ShoppingCart, ArrowRight, 
  Tv, Heart, Clock, HelpCircle, Package
} from 'lucide-react'

// NAVIGATION - SIMPLIFIED
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
            <a href="#faq" className="text-gray-300 hover:text-neon-yellow transition-colors">Preguntas</a>
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
              <a href="#como-funciona" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">Cómo Funciona</a>
              <a href="#faq" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">Preguntas</a>
              <a href="#comprar" onClick={() => setIsOpen(false)} className="btn-neon text-center py-3">Ordenar</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// HERO - SIMPLICITY FOCUSED
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 hero-gradient overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-20 right-0 w-72 md:w-96 h-72 md:h-96 bg-neon-yellow/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-electric-blue/20 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-neon-yellow/20 border border-neon-yellow/40 rounded-full px-4 py-2 mb-6">
              <ThumbsUp className="w-4 h-4 text-neon-yellow" />
              <span className="text-sm text-gray-300">Súper fácil de usar</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Internet que </span>
              <span className="text-neon-yellow text-glow">simplemente</span>
              <span className="text-white"> funciona</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
              <strong className="text-neon-yellow">Lo enchufas y listo.</strong> Sin técnicos. Sin configuración. Sin complicaciones. Además, funciona aunque se vaya la luz.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <div className="flex items-center gap-2 bg-dark-700/50 rounded-full px-4 py-2 border border-neon-yellow/20">
                <Zap className="w-5 h-5 text-neon-yellow" />
                <span className="text-sm">Solo enchufar</span>
              </div>
              <div className="flex items-center gap-2 bg-dark-700/50 rounded-full px-4 py-2 border border-neon-yellow/20">
                <Battery className="w-5 h-5 text-neon-yellow" />
                <span className="text-sm">Funciona sin luz</span>
              </div>
              <div className="flex items-center gap-2 bg-dark-700/50 rounded-full px-4 py-2 border border-neon-yellow/20">
                <Truck className="w-5 h-5 text-neon-yellow" />
                <span className="text-sm">Llega a tu casa</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#comprar" className="btn-neon text-center flex items-center justify-center gap-2 text-lg py-5">
                <ShoppingCart className="w-5 h-5" /> Ordenar Ahora
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
              ✓ Súper fácil
            </div>
            <div className="absolute bottom-20 -left-4 bg-electric-blue text-white px-4 py-2 rounded-full font-display font-bold text-sm blue-glow">
              ✓ Sin técnicos
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

// SIMPLICITY PROMISE
function SimplicitySection() {
  return (
    <section className="py-20 lg:py-28 bg-dark-800 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Si puedes enchufar una </span>
            <span className="text-neon-yellow text-glow">lámpara</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300">
            Puedes usar Internet Protegida
          </p>
        </div>

        <div className="card-glass p-8 sm:p-12 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-20 h-20 bg-neon-yellow/20 border border-neon-yellow/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl font-display font-bold text-neon-yellow">1</span>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">Llega a tu casa</h3>
              <p className="text-gray-400">Te lo enviamos por correo</p>
            </div>
            
            <div>
              <div className="w-20 h-20 bg-neon-yellow/20 border border-neon-yellow/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl font-display font-bold text-neon-yellow">2</span>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">Lo enchufas</h3>
              <p className="text-gray-400">A cualquier tomacorriente</p>
            </div>
            
            <div>
              <div className="w-20 h-20 bg-neon-yellow/20 border border-neon-yellow/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl font-display font-bold text-neon-yellow">3</span>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">¡Ya tienes internet!</h3>
              <p className="text-gray-400">Así de simple</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// WHAT YOU CAN DO
function WhatYouCanDoSection() {
  const activities = [
    { icon: Tv, title: 'Ver novelas y películas', description: 'Netflix, YouTube, todo lo que quieras ver' },
    { icon: Phone, title: 'Videollamadas con la familia', description: 'FaceTime, WhatsApp para ver a tus nietos' },
    { icon: Wifi, title: 'Navegar tranquilo', description: 'Facebook, noticias, lo que te guste' },
    { icon: Heart, title: 'Sin interrupciones', description: 'Funciona aunque se vaya la luz' }
  ]

  return (
    <section id="como-funciona" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Disfruta tu </span>
            <span className="text-neon-yellow text-glow">internet</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Todo lo que te gusta hacer, sin complicaciones
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {activities.map((a, i) => (
            <div key={i} className="card-glass group transition-all duration-300 hover:border-neon-yellow/40 hover:-translate-y-1">
              <div className="flex gap-4 sm:gap-5">
                <div className="feature-icon shrink-0 group-hover:neon-glow transition-all duration-300">
                  <a.icon className="w-6 sm:w-7 h-6 sm:h-7 text-neon-yellow" />
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">{a.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">{a.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// NO MORE PROBLEMS
function NoMoreProblemsSection() {
  return (
    <section className="py-20 lg:py-28 bg-dark-800 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Olvídate de estos </span>
            <span className="text-red-400">problemas</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          <div className="card-glass text-center p-8">
            <div className="w-16 h-16 bg-red-500/20 border border-red-500/30 rounded-full flex items-center justify-center mx-auto mb-6 relative">
              <Clock className="w-8 h-8 text-red-400" />
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-neon-yellow rounded-full flex items-center justify-center">
                <X className="w-4 h-4 text-dark-900" />
              </div>
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">Esperar al técnico</h3>
            <p className="text-gray-400">"Viene entre 8am y 5pm" - No más</p>
          </div>

          <div className="card-glass text-center p-8">
            <div className="w-16 h-16 bg-red-500/20 border border-red-500/30 rounded-full flex items-center justify-center mx-auto mb-6 relative">
              <HelpCircle className="w-8 h-8 text-red-400" />
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-neon-yellow rounded-full flex items-center justify-center">
                <X className="w-4 h-4 text-dark-900" />
              </div>
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">Configurar cosas</h3>
            <p className="text-gray-400">Contraseñas, nombres de red - No más</p>
          </div>

          <div className="card-glass text-center p-8">
            <div className="w-16 h-16 bg-red-500/20 border border-red-500/30 rounded-full flex items-center justify-center mx-auto mb-6 relative">
              <Phone className="w-8 h-8 text-red-400" />
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-neon-yellow rounded-full flex items-center justify-center">
                <X className="w-4 h-4 text-dark-900" />
              </div>
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">Llamar para ayuda</h3>
            <p className="text-gray-400">Menús automáticos, esperas - No más</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-neon-yellow/10 border border-neon-yellow/30 rounded-full px-6 py-3">
            <Smile className="w-6 h-6 text-neon-yellow" />
            <span className="text-lg text-white font-display font-semibold">Solo enchufar y disfrutar</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// BATTERY BENEFIT
function BatterySection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-glass p-8 sm:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-neon-yellow/20 border border-neon-yellow/40 rounded-full px-4 py-2 mb-6">
                <Battery className="w-4 h-4 text-neon-yellow" />
                <span className="text-sm text-neon-yellow font-semibold">Batería Incluida</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                ¿Y si se va la luz?
              </h3>
              <p className="text-gray-400 text-lg mb-6">
                Tu internet sigue funcionando. La batería incluida te da <strong className="text-neon-yellow">6 a 7 horas</strong> de internet aunque no haya electricidad.
              </p>
              <p className="text-gray-400">
                Perfecto para seguir viendo tus programas o llamar a la familia aunque haya apagón.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-neon-yellow/20 border-4 border-neon-yellow/50 rounded-full flex items-center justify-center mx-auto neon-glow">
                <div className="text-center">
                  <p className="text-4xl font-display font-bold text-neon-yellow">6-7</p>
                  <p className="text-sm text-gray-400">horas</p>
                </div>
              </div>
              <p className="mt-4 text-gray-400">de internet sin luz</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// PRODUCT SECTION - SIMPLIFIED
function ProductSection() {
  return (
    <section id="comprar" className="py-20 lg:py-28 bg-dark-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Todo lo que </span>
            <span className="text-neon-yellow text-glow">necesitas</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Te llega a la casa, lo enchufas, y listo
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
            
            {/* What's in the box */}
            <div className="card-glass p-6">
              <div className="flex items-center gap-3 mb-4">
                <Package className="w-6 h-6 text-neon-yellow" />
                <h4 className="font-display font-bold text-white">¿Qué viene en la caja?</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-yellow shrink-0" />
                  <span className="text-gray-300">El router de internet (la cajita)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-yellow shrink-0" />
                  <span className="text-gray-300">La batería (para cuando no hay luz)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-yellow shrink-0" />
                  <span className="text-gray-300">El cable para enchufar</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-yellow shrink-0" />
                  <span className="text-gray-300">Instrucciones sencillas</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="gradient-border p-6 sm:p-8">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">Internet Protegida</h3>
                <p className="text-gray-400">Internet fácil que funciona sin luz</p>
              </div>

              <div className="section-divider" />

              <div className="space-y-4">
                {[
                  { text: 'Solo enchufar - nada que configurar', icon: Zap },
                  { text: 'Funciona 6-7 horas sin electricidad', icon: Battery },
                  { text: 'Te lo enviamos a tu casa', icon: Truck },
                  { text: '5 días para probarlo', icon: Shield },
                  { text: 'Sin contratos - cancelas cuando quieras', icon: ThumbsUp },
                  { text: 'Soporte si necesitas ayuda', icon: Phone }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-neon-yellow/10 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-neon-yellow" />
                    </div>
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="section-divider" />

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

// FAQ - VERY SIMPLE LANGUAGE
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const faqs = [
    { 
      q: '¿Es difícil de usar?', 
      a: 'No. Lo sacas de la caja, lo enchufas, y ya tienes internet. Si puedes enchufar una lámpara, puedes usar Internet Protegida.' 
    },
    { 
      q: '¿Tengo que configurar algo?', 
      a: 'No. Ya viene listo. Solo enchúfalo y enciéndelo.' 
    },
    { 
      q: '¿Funciona cuando se va la luz?', 
      a: 'Sí. Tiene una batería que le da 6 a 7 horas de internet aunque no haya electricidad.' 
    },
    { 
      q: '¿Y si no me funciona?', 
      a: 'Tienes 5 días para probarlo. Si no te gusta, cancelas y ya. Sin preguntas.' 
    },
    { 
      q: '¿Me amarran con contrato?', 
      a: 'No. Cancelas cuando quieras. Te quedas porque te gusta, no porque tienes que quedarte.' 
    },
    { 
      q: '¿Viene alguien a instalarlo?', 
      a: 'No hace falta. Te lo enviamos por correo y tú mismo lo enchufas. Es así de fácil.' 
    },
    { 
      q: '¿Puedo ver Netflix y YouTube?', 
      a: 'Sí. La velocidad es más que suficiente para ver películas, novelas, y hacer videollamadas.' 
    },
    { 
      q: '¿Y si necesito ayuda?', 
      a: 'Nos puedes escribir y te ayudamos. El soporte está incluido.' 
    }
  ]

  return (
    <section id="faq" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Preguntas </span>
            <span className="text-neon-yellow text-glow">Comunes</span>
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
          <span className="text-white">Internet fácil </span>
          <span className="text-neon-yellow text-glow">de verdad</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Lo enchufas y funciona. Así de simple.
        </p>
        
        <a href="#comprar" className="btn-neon inline-flex items-center gap-2 text-lg px-10 py-5">
          <ShoppingCart className="w-6 h-6" /> Ordenar Ahora
        </a>
        
        <p className="mt-6 text-sm text-gray-500">Sin contratos • 5 días para probarlo • Envío a toda Puerto Rico</p>
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
              <li><a href="#faq" className="text-gray-400 hover:text-neon-yellow text-sm">Preguntas</a></li>
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
export default function SimplePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <SimplicitySection />
      <WhatYouCanDoSection />
      <NoMoreProblemsSection />
      <BatterySection />
      <ProductSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
