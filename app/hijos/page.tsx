'use client'
import CheckoutButton from '../components/CheckoutButton'
import { useState } from 'react'
import { 
  Wifi, Battery, Zap, Shield, Heart, Phone, AlertTriangle,
  CreditCard, Truck, CheckCircle2, XCircle, ChevronDown, ChevronUp,
  Mail, MapPin, Menu, X, Gift, Signal, ShoppingCart, ArrowRight, 
  Cloud, Video, MessageCircle, Clock, Car, Home, Coffee, UserCheck,
  Smile, Award, Sparkles
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
            <a href="#por-que" className="text-gray-300 hover:text-neon-yellow transition-colors">Por Qué</a>
            <a href="#beneficios" className="text-gray-300 hover:text-neon-yellow transition-colors">Beneficios</a>
            <a href="#faq" className="text-gray-300 hover:text-neon-yellow transition-colors">FAQ</a>
            <a href="#ordenar" className="btn-neon text-sm py-3 px-6 flex items-center gap-2">
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
              <a href="#por-que" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">Por Qué</a>
              <a href="#beneficios" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">Beneficios</a>
              <a href="#faq" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">FAQ</a>
              <a href="#ordenar" onClick={() => setIsOpen(false)} className="btn-neon text-center py-3">Regalar Ahora</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// HERO - EMPÁTICO, CENTRADO EN LOS PADRES
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
              <span className="text-sm text-gray-300">El regalo que realmente quieren</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Porque los amas, </span>
              <span className="text-neon-yellow text-glow">devuélveles su independencia</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
              Internet tan simple que ellos lo manejan solos. <strong className="text-neon-yellow">Sin tener que pedirte ayuda, sin sentirse una carga, sin perder su orgullo.</strong>
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
                <Smile className="w-5 h-5 text-neon-yellow" />
                <span className="text-sm">Ellos pueden solos</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#ordenar" className="btn-neon text-center flex items-center justify-center gap-2">
                <Gift className="w-5 h-5" /> Regalar Ahora
              </a>
              <a href="#por-que" className="btn-outline text-center flex items-center justify-center gap-2">
                Por Qué Importa <ArrowRight className="w-5 h-5" />
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
              ✓ Ellos lo manejan
            </div>
            <div className="absolute bottom-20 -left-4 bg-electric-blue text-white px-4 py-2 rounded-full font-display font-bold text-sm blue-glow">
              ✓ Tú los empoderas
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

// PAIN POINTS - DESDE LA PERSPECTIVA DE LOS PADRES
function PainPointsSection() {
  return (
    <section id="por-que" className="py-20 lg:py-28 bg-dark-800 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">A ellos también </span>
            <span className="text-neon-yellow text-glow">les duele</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Cada vez que tienen que llamarte para pedirte ayuda, pierden un pedacito de su independencia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          <div className="card-glass text-center">
            <div className="w-16 h-16 bg-electric-blue/20 border border-electric-blue/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-electric-blue" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">"Mijo, perdona que te moleste..."</h3>
            <p className="text-gray-400">Esas palabras les cuestan. Ellos pasaron años resolviéndolo todo. Ahora pedir ayuda para el WiFi les recuerda que ya no pueden solos.</p>
          </div>

          <div className="card-glass text-center">
            <div className="w-16 h-16 bg-electric-blue/20 border border-electric-blue/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Cloud className="w-8 h-8 text-electric-blue" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">"Es que yo no entiendo eso"</h3>
            <p className="text-gray-400">Técnicos que hablan en jerga, contraseñas imposibles, luces que parpadean. No es que no puedan — es que nadie les dio algo diseñado para ellos.</p>
          </div>

          <div className="card-glass text-center">
            <div className="w-16 h-16 bg-electric-blue/20 border border-electric-blue/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-electric-blue" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">"No quiero ser una carga"</h3>
            <p className="text-gray-400">Lo que más quieren tus padres es no depender de nadie. Cada problema técnico que no pueden resolver les quita un poco de esa libertad.</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-gray-300">
            Con Internet Protegida, <span className="text-neon-yellow font-semibold">les devuelves el poder de manejar su casa solos.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

// THE REAL GIFT
function RealGiftSection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">El verdadero </span>
            <span className="text-neon-yellow text-glow">regalo</span>
          </h2>
        </div>

        <div className="card-glass p-8 sm:p-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2">
                <XCircle className="w-6 h-6 text-red-400" />
                No es librarte de las llamadas
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Tú puedes ir. Puedes ayudarlos. Eso no es el problema. El problema es que <em>ellos no quieren tener que pedirte</em>. Cada llamada de "arréglame esto" es un recordatorio de lo que ya no pueden hacer solos.
              </p>
            </div>
            
            <div>
              <h3 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-neon-yellow" />
                Es devolverles su orgullo
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Internet Protegida es tan simple que ellos lo manejan completamente solos. Sin tu ayuda. Sin técnicos. Sin sentirse incapaces. <em>Ese</em> es el regalo.
              </p>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-neon-yellow/10 border border-neon-yellow/30 rounded-xl text-center">
            <p className="text-lg text-white">
              <span className="text-neon-yellow font-semibold">Porque los amas, no los rescatas — los empoderas.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// HOW IT WORKS - SIMPLE
function HowItWorksSection() {
  const steps = [
    { number: '01', icon: Gift, title: 'Tú les das el regalo', description: 'Ordena online y envíalo a su casa, o llévaselo personalmente.' },
    { number: '02', icon: Zap, title: 'Ellos lo conectan', description: 'Solo enchufar y encender. Si pueden prender una lámpara, pueden usar esto.' },
    { number: '03', icon: Award, title: 'Ellos lo manejan', description: 'Sin llamarte, sin técnicos, sin ayuda. Lo logran solos.' }
  ]

  return (
    <section className="py-20 lg:py-28 bg-dark-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Tan simple que </span>
            <span className="text-neon-yellow text-glow">ellos pueden</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400">Diseñado para que no necesiten ayuda de nadie</p>
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

// BENEFITS - FOCUSED ON THEIR DIGNITY
function BenefitsSection() {
  const benefits = [
    { 
      icon: Award, 
      title: 'Recuperan su independencia', 
      description: 'Internet que manejan completamente solos. Sin depender de ti ni de nadie.',
      tags: ['Autonomía', 'Orgullo']
    },
    { 
      icon: Battery, 
      title: 'Preparados para apagones', 
      description: 'Hasta 7 horas de batería. No se quedan incomunicados ni tienen que pedirte que vengas.',
      tags: ['6-7 Horas', 'Batería Incluida']
    },
    { 
      icon: Shield, 
      title: 'Sin extraños en su casa', 
      description: 'Nada de técnicos que los confundan o les cobren de más. El equipo llega listo.',
      tags: ['Sin Técnicos', 'Sin Esperas']
    },
    { 
      icon: Smile, 
      title: 'La satisfacción de poder solos', 
      description: 'Vas a verlos orgullosos contándote que todo funciona perfecto y que no han tenido ningún problema.',
      tags: ['Confianza', 'Dignidad']
    }
  ]

  return (
    <section id="beneficios" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Lo que realmente </span>
            <span className="text-neon-yellow text-glow">les das</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Más que internet — les devuelves la certeza de que todavía pueden
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

// THE TRANSFORMATION - BEFORE/AFTER
function TransformationSection() {
  return (
    <section className="py-20 lg:py-28 bg-dark-800 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">La llamada </span>
            <span className="text-neon-yellow text-glow">cambia</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* BEFORE */}
          <div className="card-glass border-gray-600/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gray-500/20 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-gray-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">Antes</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-dark-700/50 rounded-xl">
                <p className="text-gray-400 italic">"Mijo, perdona que te moleste pero es que el internet no me funciona otra vez..."</p>
              </div>
              <div className="p-4 bg-dark-700/50 rounded-xl">
                <p className="text-gray-400 italic">"¿Puedes venir cuando puedas? Es que yo no sé qué hacer con esto..."</p>
              </div>
              <div className="p-4 bg-dark-700/50 rounded-xl">
                <p className="text-gray-400 italic">"El técnico vino pero me dejó peor y me cobró $50..."</p>
              </div>
            </div>
          </div>

          {/* AFTER */}
          <div className="card-glass border-neon-yellow/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-neon-yellow/20 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-neon-yellow" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">Después</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-neon-yellow/5 border border-neon-yellow/20 rounded-xl">
                <p className="text-gray-300 italic">"Oye, ¿viste lo que pasó en la novela anoche?"</p>
              </div>
              <div className="p-4 bg-neon-yellow/5 border border-neon-yellow/20 rounded-xl">
                <p className="text-gray-300 italic">"Mira, te voy a mandar unas fotos que tomé del patio..."</p>
              </div>
              <div className="p-4 bg-neon-yellow/5 border border-neon-yellow/20 rounded-xl">
                <p className="text-gray-300 italic">"Se fue la luz anoche pero el internet siguió funcionando. ¡Ni te tuve que llamar!"</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-gray-300">
            <span className="text-neon-yellow font-semibold">Que te llamen porque quieren, no porque tienen que.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

// TESTIMONIAL - FROM PARENT'S PRIDE PERSPECTIVE
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
            "Lo mejor no fue dejar de ir a arreglarle el internet. Lo mejor fue verla orgullosa contándome que se fue la luz y ella ni se preocupó porque todo siguió funcionando. <span className="text-neon-yellow">Me dijo: 'Ves, yo puedo sola.'</span> Eso no tiene precio."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div>
              <p className="font-display font-bold text-white">Carmen L.</p>
              <p className="text-sm text-gray-400">Caguas, PR</p>
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
            <span className="text-white">Regálales </span>
            <span className="text-neon-yellow text-glow">poder solos</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Todo incluido. Router + batería + la independencia que se merecen.
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
                Regalo Perfecto
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-neon-yellow" />
                <span className="text-gray-300">Lo enchufan y funciona — sin configuración</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-neon-yellow" />
                <span className="text-gray-300">Batería de respaldo para apagones</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-neon-yellow" />
                <span className="text-gray-300">Sin técnicos, sin esperas, sin líos</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-neon-yellow" />
                <span className="text-gray-300">Envío gratis a toda Puerto Rico</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-neon-yellow" />
                <span className="text-gray-300">5 días para probarlo, sin compromiso</span>
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

            <CheckoutButton />

            <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mt-4">
              <img src="/klarna-badge.svg" alt="Klarna" className="h-5" />
              <span>o 4 pagos de $53.75 con Klarna</span>
            </div>

            <p className="text-center text-xs text-gray-500 mt-4">
              Pago seguro con Stripe • Sin contratos • Cancela cuando quieras
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
      q: '¿De verdad es tan fácil que ellos lo pueden manejar solos?', 
      a: 'Sí. El router viene pre-configurado. Solo tienen que enchufarlo y encender un botón. El WiFi se crea automáticamente y el password está en una etiqueta grande en el equipo. Si pueden enchufar una lámpara, pueden usar Internet Protegida.' 
    },
    { 
      q: '¿Qué pasa si se va la luz?', 
      a: 'El router tiene batería integrada que dura 6-7 horas. Ellos no tienen que hacer nada — sigue funcionando automáticamente. Cuando vuelve la luz, se recarga solo.' 
    },
    { 
      q: '¿Y si tienen algún problema? ¿Me van a llamar a mí?', 
      a: 'Nuestro soporte está diseñado para ayudarlos directamente a ellos, en español, con paciencia. Pero honestamente, casi nadie llama porque no hay nada que configurar ni que se pueda "dañar".' 
    },
    { 
      q: '¿Puedo pagarlo yo para que ellos no tengan que preocuparse?', 
      a: 'Sí. Puedes poner tu tarjeta y manejar todo desde tu cuenta. Ellos solo disfrutan el servicio sin preocuparse por pagos.' 
    },
    { 
      q: '¿Funciona en toda Puerto Rico?', 
      a: 'Funciona donde haya señal 5G/LTE de AT&T o T-Mobile, que cubre la gran mayoría de la isla. Si no funciona bien en su área, tienes 5 días para devolverlo sin complicaciones.' 
    },
    { 
      q: '¿Pueden ver sus novelas y Netflix?', 
      a: 'Sí, hasta 300 Mbps es más que suficiente para streaming en HD. Novelas, Netflix, YouTube — todo sin problema.' 
    },
    { 
      q: '¿Hay contrato?', 
      a: 'No. Cancelas cuando quieras sin penalidades. Se quedan porque funciona, no porque tienen que quedarse.' 
    },
    { 
      q: '¿Puedo llevárselo yo mismo?', 
      a: 'Claro. En el checkout puedes poner tu dirección para recibirlo tú y llevárselo personalmente, o enviarlo directo a ellos.' 
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
          <span className="text-white">Dales el regalo de </span>
          <span className="text-neon-yellow text-glow">poder solos</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Porque los amas, no los rescatas — los empoderas.
        </p>
        
        <a href="#ordenar" className="btn-neon inline-flex items-center gap-2 text-lg px-10 py-5">
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
              <li><a href="#por-que" className="text-gray-400 hover:text-neon-yellow text-sm">Por Qué Importa</a></li>
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
      <RealGiftSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TransformationSection />
      <TestimonialSection />
      <ProductSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
