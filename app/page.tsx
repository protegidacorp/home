'use client'
import CheckoutButton from './components/CheckoutButton'
import { useState } from 'react'
import { 
  Wifi, Battery, Zap, Shield, Users, Gamepad2, GraduationCap, Tv, Building2,
  CreditCard, Truck, CheckCircle2, XCircle, ChevronDown, ChevronUp,
  Mail, MapPin, Menu, X, Gift, Signal, ShoppingCart, ArrowRight
} from 'lucide-react'

// NAVIGATION
function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/90 backdrop-blur-md border-b border-electric-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-yellow to-electric-blue flex items-center justify-center">
              <Wifi className="w-6 h-6 text-dark-900" />
            </div>
            <div className="font-display font-bold text-xl">
              <span className="text-neon-yellow">Internet</span>
              <span className="text-white"> Protegida</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#producto" className="text-gray-300 hover:text-neon-yellow transition-colors">Producto</a>
            <a href="#beneficios" className="text-gray-300 hover:text-neon-yellow transition-colors">Beneficios</a>
            <a href="#negocios" className="text-gray-300 hover:text-neon-yellow transition-colors">Negocios</a>
            <a href="#faq" className="text-gray-300 hover:text-neon-yellow transition-colors">FAQ</a>
            <a href="#comprar" className="btn-neon text-sm py-3 px-6 flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" /> Comprar
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-electric-blue/20">
            <div className="flex flex-col gap-4">
              <a href="#producto" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">Producto</a>
              <a href="#beneficios" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">Beneficios</a>
              <a href="#negocios" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">Negocios</a>
              <a href="#faq" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">FAQ</a>
              <a href="#comprar" onClick={() => setIsOpen(false)} className="btn-neon text-center py-3">Comprar</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// HERO
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
              <Signal className="w-4 h-4 text-neon-yellow" />
              <span className="text-sm text-gray-300">Tecnología 5GX • Hasta 300 Mbps</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Internet que </span>
              <span className="text-neon-yellow text-glow">funciona</span>
              <span className="text-white"> cuando lo </span>
              <span className="text-electric-blue text-glow-blue">necesitas</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
              Sin contratos. Instalación instantánea. <strong className="text-neon-yellow">Funciona sin luz hasta 7 horas.</strong> La solución que Puerto Rico estaba esperando.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <div className="flex items-center gap-2 bg-dark-700/50 rounded-full px-4 py-2 border border-electric-blue/20">
                <Zap className="w-5 h-5 text-neon-yellow" />
                <span className="text-sm">300 Mbps</span>
              </div>
              <div className="flex items-center gap-2 bg-dark-700/50 rounded-full px-4 py-2 border border-electric-blue/20">
                <Battery className="w-5 h-5 text-neon-yellow" />
                <span className="text-sm">6-7 hrs sin luz</span>
              </div>
              <div className="flex items-center gap-2 bg-dark-700/50 rounded-full px-4 py-2 border border-electric-blue/20">
                <Shield className="w-5 h-5 text-neon-yellow" />
                <span className="text-sm">Garantía 5 días</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#comprar" className="btn-neon text-center flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" /> Comprar Ahora
              </a>
              <a href="#producto" className="btn-outline text-center flex items-center justify-center gap-2">
                Ver Detalles <ArrowRight className="w-5 h-5" />
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
              ✓ Plug & Play
            </div>
            <div className="absolute bottom-20 -left-4 bg-electric-blue text-white px-4 py-2 rounded-full font-display font-bold text-sm blue-glow">
              ✓ Sin Instalación
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

// PRODUCT SECTION
function ProductSection() {
  return (
    <section id="producto" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Todo lo que necesitas en </span>
            <span className="text-neon-yellow text-glow">un combo</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Router 5G + Batería de respaldo + Servicio mensual. Sin complicaciones.
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

            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              <span className="bg-dark-700 border border-electric-blue/30 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm">📡 5G Ultra Rápido</span>
              <span className="bg-dark-700 border border-electric-blue/30 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm">🔋 Batería Incluida</span>
              <span className="bg-dark-700 border border-electric-blue/30 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm">⚡ Plug & Play</span>
            </div>
          </div>

          <div id="comprar" className="gradient-border p-6 sm:p-8">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">Combo Internet Protegida 5GX</h3>
                <p className="text-gray-400">Todo incluido para empezar</p>
              </div>

              <div className="space-y-4">
                <div className="bg-dark-700/50 rounded-xl p-5 border border-electric-blue/20">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-electric-blue/20 flex items-center justify-center">
                        <Wifi className="w-6 h-6 text-electric-blue" />
                      </div>
                      <div>
                        <p className="font-display font-bold text-white">Equipo</p>
                        <p className="text-sm text-gray-400">Router 5G + Batería</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-display font-bold text-2xl text-white">$299.98</p>
                      <p className="text-xs text-gray-500">pago único</p>
                    </div>
                  </div>
                </div>

                <div className="bg-neon-yellow/10 rounded-xl p-5 border border-neon-yellow/30 neon-glow">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-neon-yellow/20 flex items-center justify-center">
                        <Signal className="w-6 h-6 text-neon-yellow" />
                      </div>
                      <div>
                        <p className="font-display font-bold text-white">Servicio</p>
                        <p className="text-sm text-gray-400">Internet 5GX 300 Mbps</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-display font-bold text-2xl text-neon-yellow">$69.98</p>
                      <p className="text-xs text-gray-400">/mes</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section-divider" />

              <div className="space-y-3">
                {['Envío a toda Puerto Rico', 'Activación incluida', 'Garantía de 5 días', 'Sin contratos, cancela cuando quieras'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-neon-yellow shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-500 text-center">* Cargos adicionales e impuestos aplicables calculados en checkout</p>

              <button className="btn-neon w-full text-center py-4 text-lg flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" /> Ordenar Ahora
              </button>
              
              <div className="flex items-center justify-center gap-4 pt-2">
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Shield className="w-4 h-4" /> Pago Seguro
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <CreditCard className="w-4 h-4" /> Stripe
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// HOW IT WORKS
function HowItWorksSection() {
  const steps = [
    { number: '01', icon: ShoppingCart, title: 'Ordena en Línea', description: 'Compra tu combo con pago seguro.' },
    { number: '02', icon: Truck, title: 'Recibe en Casa', description: 'Enviamos a toda Puerto Rico.' },
    { number: '03', icon: Zap, title: 'Conecta y Listo', description: 'Préndelo y ya tienes internet.' }
  ]

  return (
    <section className="py-20 lg:py-28 bg-dark-800 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Así de </span>
            <span className="text-neon-yellow text-glow">fácil</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400">En 3 simples pasos tienes internet funcionando</p>
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

// COMPARISON
function ComparisonSection() {
  const bad = ['Se cae con mal tiempo', 'Lento por las noches', 'Sin servicio sin luz', 'Horas en espera', 'Contratos largos']
  const good = ['Estable 24/7 cualquier clima', 'Misma velocidad siempre', '6-7 horas sin electricidad', 'Soporte remoto en minutos', 'Sin contratos']

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">La diferencia que </span>
            <span className="text-neon-yellow text-glow">cambiará tu vida</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-red-950/20 border border-red-500/30 rounded-2xl p-6 sm:p-8">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-red-400 mb-6 flex items-center gap-3">
              <XCircle className="w-7 h-7" /> Internet por Cable
            </h3>
            <ul className="space-y-4">
              {bad.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-neon-yellow/5 border border-neon-yellow/30 rounded-2xl p-6 sm:p-8 neon-glow">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-neon-yellow mb-6 flex items-center gap-3">
              <CheckCircle2 className="w-7 h-7" /> Internet Protegida 5GX
            </h3>
            <ul className="space-y-4">
              {good.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-yellow shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

// BENEFITS
function BenefitsSection() {
  const benefits = [
    { icon: Tv, title: 'Familias & Streaming', description: 'Netflix, YouTube, Disney+ sin buffering.', tags: ['Netflix HD', 'YouTube 4K'] },
    { icon: Gamepad2, title: 'Gamers', description: 'Cero lag, conexión estable siempre.', tags: ['Cero Lag', 'Ping Bajo'] },
    { icon: GraduationCap, title: 'Estudiantes', description: 'Clases virtuales sin interrupciones.', tags: ['Zoom', 'Google Meet'] },
    { icon: Battery, title: 'Emergencias', description: 'Internet hasta 7 horas sin luz.', tags: ['Sin Luz', '6-7 Horas'] }
  ]

  return (
    <section id="beneficios" className="py-20 lg:py-28 bg-dark-800 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Vive la vida digital que </span>
            <span className="text-neon-yellow text-glow">mereces</span>
          </h2>
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

// BUSINESS
function BusinessSection() {
  const features = [
    { icon: CreditCard, title: 'Punto de Venta', description: 'Caja registradora siempre lista.' },
    { icon: Shield, title: 'Seguridad 24/7', description: 'Cámaras funcionando siempre.' },
    { icon: Users, title: 'Colaboración', description: 'Reuniones sin cortes.' },
    { icon: Building2, title: 'Múltiples Ubicaciones', description: 'Todas tus sucursales conectadas.' }
  ]

  return (
    <section id="negocios" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-electric-blue/10 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Tu negocio merece internet que </span>
            <span className="text-electric-blue text-glow-blue">nunca falla</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="card-glass text-center group hover:border-electric-blue/50 transition-all duration-300 hover:-translate-y-1">
              <div className="feature-icon mx-auto mb-4 group-hover:blue-glow transition-all duration-300">
                <f.icon className="w-7 h-7 text-electric-blue" />
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// GUARANTEES
function GuaranteesSection() {
  const items = [
    { icon: Shield, title: 'Garantía 5 Días', description: 'Si no estás satisfecho, cancelas.' },
    { icon: XCircle, title: 'Sin Contratos', description: 'Te quedas porque quieres.' },
    { icon: Zap, title: 'Instalación Instantánea', description: 'Saca, prende, listo.' },
    { icon: Gift, title: 'Programa Referidos', description: 'Ambos reciben $25 gratis.' }
  ]

  return (
    <section className="py-20 lg:py-28 bg-dark-800 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Promesas que </span>
            <span className="text-neon-yellow text-glow">sí cumplimos</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={i} className="text-center group">
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-neon-yellow/10 border border-neon-yellow/30 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:neon-glow transition-all duration-300">
                <item.icon className="w-7 sm:w-9 h-7 sm:h-9 text-neon-yellow" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm sm:text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// FAQ
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const faqs = [
    { q: '¿Cómo funciona el internet 5GX?', a: 'Nuestro router se conecta a la red 5G. Solo enchúfalo y enciéndelo - no requiere instalación.' },
    { q: '¿Funciona en toda Puerto Rico?', a: 'Sí, tenemos cobertura en toda la isla.' },
    { q: '¿Cuánto dura la batería sin luz?', a: 'Entre 6 y 7 horas de internet continuo.' },
    { q: '¿Hay contrato?', a: 'No. Cancela cuando quieras sin penalidades.' },
    { q: '¿Qué incluye el pago inicial?', a: 'Router 5G, batería. Activación y envío se calculan en checkout.' },
    { q: '¿Cómo funciona la garantía?', a: '5 días para probar. Si no te gusta, cancelas sin preguntas.' },
    { q: '¿Qué velocidad obtendré?', a: 'Hasta 300 Mbps dependiendo de tu ubicación.' },
    { q: '¿Cómo funciona el programa de referidos?', a: 'Cuando refieres a alguien, ambos reciben $25 de crédito.' }
  ]

  return (
    <section id="faq" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
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
          <span className="text-white">Tu nueva vida digital </span>
          <span className="text-neon-yellow text-glow">comienza hoy</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Miles de puertorriqueños ya cambiaron. Tú también puedes.
        </p>
        
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-dark-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mb-8 border border-electric-blue/20">
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-1">Equipo</p>
            <p className="font-display font-bold text-2xl sm:text-3xl text-white">$299.98</p>
            <p className="text-xs text-gray-500">una vez</p>
          </div>
          <div className="hidden sm:block w-px h-16 bg-electric-blue/30" />
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-1">Servicio</p>
            <p className="font-display font-bold text-2xl sm:text-3xl text-neon-yellow">$69.98</p>
            <p className="text-xs text-gray-500">/mes</p>
          </div>
        </div>
        
        <a href="#comprar" className="btn-neon inline-flex items-center gap-2 text-lg px-10 py-5">
          <ShoppingCart className="w-6 h-6" /> ¡Ordenar Ahora!
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
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-yellow to-electric-blue flex items-center justify-center">
                <Wifi className="w-6 h-6 text-dark-900" />
              </div>
              <div className="font-display font-bold text-xl">
                <span className="text-neon-yellow">Internet</span>
                <span className="text-white"> Protegida</span>
              </div>
            </a>
            <p className="text-gray-400 text-sm">Conexión Estable, Servicio Amable. Ayudando a Puerto Rico una familia a la vez.</p>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li><a href="#producto" className="text-gray-400 hover:text-neon-yellow text-sm">Producto</a></li>
              <li><a href="#beneficios" className="text-gray-400 hover:text-neon-yellow text-sm">Beneficios</a></li>
              <li><a href="#negocios" className="text-gray-400 hover:text-neon-yellow text-sm">Negocios</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-neon-yellow text-sm">FAQ</a></li>
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
export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ProductSection />
      <HowItWorksSection />
      <ComparisonSection />
      <BenefitsSection />
      <BusinessSection />
      <GuaranteesSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
