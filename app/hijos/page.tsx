'use client'
import CheckoutButton from '../components/CheckoutButton'
import { useState } from 'react'
import { 
  Wifi, Battery, Zap, Shield, Heart, Phone, AlertTriangle,
  CreditCard, Truck, CheckCircle2, XCircle, ChevronDown, ChevronUp,
  Mail, MapPin, Menu, X, Gift, Signal, ShoppingCart, ArrowRight, 
  Cloud, Video, MessageCircle, Clock, Car, Home, Coffee, UserCheck
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
            <a href="#ordenar" className="btn-neon text-sm py-3 px-6 flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" /> Ordenar Ahora
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
              <a href="#ordenar" onClick={() => setIsOpen(false)} className="btn-neon text-center py-3">Ordenar Ahora</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// HERO - HIJOS EN PR PARA PADRES EN PR
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
              <Coffee className="w-4 h-4 text-neon-yellow" />
              <span className="text-sm text-gray-300">Recupera tus fines de semana</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Deja de ser el </span>
              <span className="text-neon-yellow text-glow">IT de la familia</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
              Internet que tus padres pueden manejar solos. <strong className="text-neon-yellow">Sin que te llamen para "arreglarlo", sin que tengas que ir a su casa, sin técnicos que los confundan.</strong>
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <div className="flex items-center gap-2 bg-dark-700/50 rounded-full px-4 py-2 border border-electric-blue/20">
                <Zap className="w-5 h-5 text-neon-yellow" />
                <span className="text-sm">Lo enchufan y funciona</span>
              </div>
              <div className="flex items-center gap-2 bg-dark-700/50 rounded-full px-4 py-2 border border-electric-blue/20">
                <Battery className="w-5 h-5 text-neon-yellow" />
                <span className="text-sm">6-7 hrs sin luz</span>
              </div>
              <div className="flex items-center gap-2 bg-dark-700/50 rounded-full px-4 py-2 border border-electric-blue/20">
                <UserCheck className="w-5 h-5 text-neon-yellow" />
                <span className="text-sm">Cero configuración</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#ordenar" className="btn-neon text-center flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" /> Ordenar Ahora
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
              ✓ Ellos lo manejan solos
            </div>
            <div className="absolute bottom-20 -left-4 bg-electric-blue text-white px-4 py-2 rounded-full font-display font-bold text-sm blue-glow">
              ✓ Tú duermes tranquilo
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

// PAIN POINTS SECTION - TECH SUPPORT FAMILIAR
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
              <Car className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">"Mijo, ven a arreglarme esto"</h3>
            <p className="text-gray-400">Otro domingo cruzando la isla para reiniciar un router o cambiar una contraseña.</p>
          </div>

          <div className="card-glass text-center">
            <div className="w-16 h-16 bg-red-500/20 border border-red-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">"¿Cuál es el password?"</h3>
            <p className="text-gray-400">Llamadas a las 9pm tratando de explicar por teléfono cómo conectar el WiFi.</p>
          </div>

          <div className="card-glass text-center">
            <div className="w-16 h-16 bg-red-500/20 border border-red-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">"Hace tres días que no tengo internet"</h3>
            <p className="text-gray-400">Esperando al técnico que "viene entre 8am y 6pm" mientras ellos se quedan sin servicio.</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-gray-300">
            Con Internet Protegida, <span className="text-neon-yellow font-semibold">ellos recuperan su independencia y tú tu tiempo.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

// HOW IT WORKS - SIMPLE
function HowItWorksSection() {
  const steps = [
    { number: '01', icon: ShoppingCart, title: 'Tú lo ordenas', description: 'Compra online y envíalo directo a la casa de ellos o recógelo tú.' },
    { number: '02', icon: Home, title: 'Ellos lo conectan', description: 'Solo tienen que enchufarlo. Si pueden enchufar una lámpara, pueden usar esto.' },
    { number: '03', icon: Coffee, title: 'Tú descansas', description: 'No más llamadas, no más visitas de emergencia. Simplemente funciona.' }
  ]

  return (
    <section id="como-funciona" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Tan </span>
            <span className="text-neon-yellow text-glow">simple</span>
            <span className="text-white"> que ellos lo manejan</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400">Sin configuración, sin técnicos, sin complicaciones</p>
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

// MATH SECTION - THE REAL COST
function MathSection() {
  return (
    <section className="py-20 lg:py-28 bg-dark-800 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Haz la </span>
            <span className="text-neon-yellow text-glow">cuenta</span>
          </h2>
        </div>

        <div className="card-glass p-8 sm:p-10">
          <div className="space-y-6">
            <div className="flex justify-between items-center py-3 border-b border-electric-blue/20">
              <span className="text-gray-300">Un viaje a casa de mami para "arreglar" el internet</span>
              <span className="text-white font-display font-bold">~$15-30 en gasolina</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-electric-blue/20">
              <span className="text-gray-300">Tu domingo perdido</span>
              <span className="text-white font-display font-bold">Incalculable</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-electric-blue/20">
              <span className="text-gray-300">Frustración de explicar por teléfono</span>
              <span className="text-white font-display font-bold">Tu paciencia</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-electric-blue/20">
              <span className="text-gray-300">Ellos sintiéndose "una carga"</span>
              <span className="text-white font-display font-bold">Su dignidad</span>
            </div>
            <div className="flex justify-between items-center pt-6">
              <span className="text-xl text-white font-display font-bold">Internet Protegida</span>
              <span className="text-xl text-neon-yellow font-display font-bold">~$65/mes</span>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-neon-yellow/10 border border-neon-yellow/30 rounded-xl">
            <p className="text-center text-gray-300">
              <span className="text-neon-yellow font-semibold">Un solo viaje menos al mes</span> y el servicio prácticamente se paga solo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// BENEFITS - FOCUSED ON INDEPENDENCE
function BenefitsSection() {
  const benefits = [
    { 
      icon: UserCheck, 
      title: 'Ellos lo manejan solos', 
      description: 'Sin contraseñas complicadas, sin configuración. Enchufan y funciona.',
      tags: ['Plug & Play', 'Cero Config']
    },
    { 
      icon: Battery, 
      title: 'Funciona cuando se va la luz', 
      description: 'Hasta 7 horas de batería. No más llamadas de "se me fue el internet con el apagón".',
      tags: ['6-7 Horas', 'Batería Incluida']
    },
    { 
      icon: Shield, 
      title: 'Sin técnicos en su casa', 
      description: 'No tienen que abrir la puerta a extraños ni entender jerga técnica.',
      tags: ['Sin Técnicos', 'Sin Esperas']
    },
    { 
      icon: Heart, 
      title: 'Su dignidad intacta', 
      description: 'No tienen que depender de ti para algo tan básico. Recuperan su independencia.',
      tags: ['Independencia', 'Autonomía']
    }
  ]

  return (
    <section id="beneficios" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Independencia para ellos, </span>
            <span className="text-neon-yellow text-glow">paz para ti</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Un regalo que les devuelve autonomía sin sacrificar tu tiempo
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

// COMPARISON - BEFORE/AFTER
function ComparisonSection() {
  return (
    <section className="py-20 lg:py-28 bg-dark-800 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">El </span>
            <span className="text-neon-yellow text-glow">antes</span>
            <span className="text-white"> y el </span>
            <span className="text-electric-blue text-glow-blue">después</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* BEFORE */}
          <div className="card-glass border-red-500/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">Internet tradicional</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span className="text-gray-400">"Mijo, el técnico dice que viene mañana entre 8 y 6"</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span className="text-gray-400">"¿Cuál era el password? Me dice que está mal"</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span className="text-gray-400">"Se fue la luz y se fue el internet también"</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span className="text-gray-400">"Ven pa'cá que esto no prende"</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span className="text-gray-400">"El muchacho de la compañía me cobró $50 extra"</span>
              </li>
            </ul>
          </div>

          {/* AFTER */}
          <div className="card-glass border-neon-yellow/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-neon-yellow/20 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-neon-yellow" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">Internet Protegida</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-neon-yellow shrink-0 mt-0.5" />
                <span className="text-gray-400">Llega por correo, lo enchufan, funciona</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-neon-yellow shrink-0 mt-0.5" />
                <span className="text-gray-400">Se conecta automáticamente, sin passwords</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-neon-yellow shrink-0 mt-0.5" />
                <span className="text-gray-400">Batería de respaldo: 6-7 horas sin luz</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-neon-yellow shrink-0 mt-0.5" />
                <span className="text-gray-400">Un solo botón para encender</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-neon-yellow shrink-0 mt-0.5" />
                <span className="text-gray-400">Precio fijo, sin sorpresas, sin contratos</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

// TESTIMONIAL - LOCAL PERSPECTIVE
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
            "Antes iba donde mami cada vez que se le caía el internet. Instalación, técnicos, contraseñas... era un desastre. Le puse Internet Protegida y <span className="text-neon-yellow">hace 4 meses que no tengo que ir a 'arreglarle' nada.</span> Ella feliz porque lo maneja sola."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div>
              <p className="font-display font-bold text-white">Carlos M.</p>
              <p className="text-sm text-gray-400">San Juan, PR</p>
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
    <section id="ordenar" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Dales </span>
            <span className="text-neon-yellow text-glow">independencia</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Todo incluido. Router + batería + envío.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-dark-700 to-dark-800 border border-electric-blue/20 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-b from-neon-yellow/10 to-electric-blue/10"></div>
              <img 
                src="/router.png" 
                alt="Router 5G + Batería" 
                className="relative w-3/4 h-auto"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="card-glass text-center py-4">
                <Signal className="w-6 h-6 text-neon-yellow mx-auto mb-2" />
                <p className="text-sm text-gray-400">Hasta 300 Mbps</p>
              </div>
              <div className="card-glass text-center py-4">
                <Battery className="w-6 h-6 text-neon-yellow mx-auto mb-2" />
                <p className="text-sm text-gray-400">6-7 hrs batería</p>
              </div>
            </div>
          </div>

          <div className="card-glass p-6 sm:p-8 border-neon-yellow/30">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-2xl font-bold text-white">Router 5GX + Batería</h3>
              <div className="bg-neon-yellow/20 text-neon-yellow px-3 py-1 rounded-full text-sm font-display font-bold">
                Todo Incluido
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-neon-yellow" />
                <span className="text-gray-300">Router 5G de alta velocidad</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-neon-yellow" />
                <span className="text-gray-300">Batería de respaldo integrada</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-neon-yellow" />
                <span className="text-gray-300">Envío gratis a toda PR</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-neon-yellow" />
                <span className="text-gray-300">Sin contratos, cancela cuando quieras</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-neon-yellow" />
                <span className="text-gray-300">Garantía de 5 días para probarlo</span>
              </div>
            </div>

            <div className="bg-dark-700/50 rounded-xl p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">Equipo (único pago)</span>
                <span className="text-white font-display">$150</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">Servicio mensual</span>
                <span className="text-white font-display">$65/mes</span>
              </div>
              <div className="border-t border-electric-blue/20 my-3" />
              <div className="flex justify-between items-center">
                <span className="text-white font-display font-bold">Hoy pagas</span>
                <span className="text-neon-yellow font-display font-bold text-xl">$215</span>
              </div>
            </div>

            <CheckoutButton label="Ordenar Ahora" className="w-full btn-neon py-4 text-lg flex items-center justify-center gap-2 mb-4" />

            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <img src="/klarna-badge.svg" alt="Klarna" className="h-5" />
              <span>o 4 pagos de $53.75 con Klarna</span>
            </div>

            <p className="text-center text-xs text-gray-500 mt-4">
              Pago seguro con Stripe • Sin sorpresas • Cancela cuando quieras
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// FAQ
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    { 
      q: '¿De verdad no tienen que configurar nada?', 
      a: 'De verdad. El router viene pre-configurado. Solo tienen que enchufarlo y encender el botón. La red WiFi se crea automáticamente y el password está impreso en una etiqueta grande en el equipo. Si pueden enchufar una lámpara, pueden usar esto.' 
    },
    { 
      q: '¿Funciona en toda Puerto Rico?', 
      a: 'Funciona donde haya señal 5G/LTE de AT&T o T-Mobile. Eso cubre la gran mayoría de la isla. Si en su área no hay buena cobertura, tienes 5 días para devolverlo sin complicaciones.' 
    },
    { 
      q: '¿Qué pasa cuando se va la luz?', 
      a: 'El router sigue funcionando con su batería integrada por 6-7 horas. Cuando vuelve la luz, se recarga automáticamente. Ellos no tienen que hacer nada.' 
    },
    { 
      q: '¿El servicio mensual lo pago yo o ellos?', 
      a: 'Como quieras. Puedes poner tu tarjeta para que el cargo mensual te llegue a ti, o pueden ellos pagar con su propia tarjeta. Todo se maneja online.' 
    },
    { 
      q: '¿Qué pasa si se les "daña"?', 
      a: 'Primero, es muy difícil que se dañe porque no hay nada que configurar. Si algo pasa, nos llamas a nosotros (no a ti). Nuestro soporte es en español y está acostumbrado a ayudar a personas mayores sin complicarles la vida.' 
    },
    { 
      q: '¿Pueden ver sus novelas y usar Netflix?', 
      a: 'Sí, hasta 300 Mbps es más que suficiente para streaming en HD. Pueden ver Netflix, YouTube, novelas por internet, todo sin problema.' 
    },
    { 
      q: '¿Hay contrato?', 
      a: 'No. Cancelas cuando quieras sin penalidades ni preguntas. Se quedan porque funciona, no porque tienen que quedarse.' 
    },
    { 
      q: '¿Puedo llevárselo yo mismo?', 
      a: 'Claro. En el checkout puedes poner tu dirección para recibirlo tú y llevárselo personalmente. O enviarlo directo a ellos.' 
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
          <span className="text-white">Devuélveles su </span>
          <span className="text-neon-yellow text-glow">independencia</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Ellos manejan su internet solos. Tú recuperas tus domingos. Todos ganan.
        </p>
        
        <a href="#ordenar" className="btn-neon inline-flex items-center gap-2 text-lg px-10 py-5">
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
export default function HijosPage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <PainPointsSection />
      <HowItWorksSection />
      <MathSection />
      <BenefitsSection />
      <ComparisonSection />
      <TestimonialSection />
      <ProductSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
