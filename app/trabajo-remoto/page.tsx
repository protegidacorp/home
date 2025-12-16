'use client'
import CheckoutButton from '../components/CheckoutButton'
import { useState } from 'react'
import { 
  Wifi, Battery, Zap, Shield, Laptop, Video, Clock,
  CreditCard, Truck, CheckCircle2, XCircle, ChevronDown, ChevronUp,
  Mail, MapPin, Menu, X, Signal, ShoppingCart, ArrowRight, 
  DollarSign, Calendar, Headphones, MonitorSmartphone
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
            <a href="#problema" className="text-gray-300 hover:text-neon-yellow transition-colors">El Problema</a>
            <a href="#solucion" className="text-gray-300 hover:text-neon-yellow transition-colors">Solución</a>
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
              <a href="#problema" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">El Problema</a>
              <a href="#solucion" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">Solución</a>
              <a href="#faq" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">FAQ</a>
              <a href="#comprar" onClick={() => setIsOpen(false)} className="btn-neon text-center py-3">Ordenar</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// HERO - REMOTE WORK FOCUSED
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
              <Laptop className="w-4 h-4 text-neon-yellow" />
              <span className="text-sm text-gray-300">Para profesionales remotos</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Tu sueldo </span>
              <span className="text-neon-yellow text-glow">no para</span>
              <span className="text-white"> cuando se va </span>
              <span className="text-electric-blue text-glow-blue">la luz</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
              Internet con batería de respaldo que te mantiene conectado <strong className="text-neon-yellow">hasta 7 horas sin electricidad.</strong> No más excusas a tu jefe. No más reuniones perdidas.
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
                <Video className="w-5 h-5 text-neon-yellow" />
                <span className="text-sm">Zoom sin cortes</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#comprar" className="btn-neon text-center flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" /> Protege tu Trabajo
              </a>
              <a href="#problema" className="btn-outline text-center flex items-center justify-center gap-2">
                Ver Más <ArrowRight className="w-5 h-5" />
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
              ✓ Batería incluida
            </div>
            <div className="absolute bottom-20 -left-4 bg-electric-blue text-white px-4 py-2 rounded-full font-display font-bold text-sm blue-glow">
              ✓ 6-7 hrs sin luz
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

// PROBLEM SECTION
function ProblemSection() {
  return (
    <section id="problema" className="py-20 lg:py-28 bg-dark-800 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">El costo real de un </span>
            <span className="text-red-400">apagón</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Para un trabajador remoto, perder internet no es solo una molestia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          <div className="card-glass text-center">
            <div className="w-16 h-16 bg-red-500/20 border border-red-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <DollarSign className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">Dinero perdido</h3>
            <p className="text-gray-400">Cada hora sin conexión son horas no facturadas o días de vacaciones quemados.</p>
          </div>

          <div className="card-glass text-center">
            <div className="w-16 h-16 bg-red-500/20 border border-red-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Video className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">Reuniones perdidas</h3>
            <p className="text-gray-400">"Se me fue el internet" ya no es una excusa creíble. Tu reputación profesional sufre.</p>
          </div>

          <div className="card-glass text-center">
            <div className="w-16 h-16 bg-red-500/20 border border-red-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">Estrés constante</h3>
            <p className="text-gray-400">Cada nube negra te pone nervioso. ¿Tendré que ir a un café? ¿Tendrán internet allá?</p>
          </div>
        </div>

        <div className="text-center mt-12 p-6 card-glass max-w-2xl mx-auto">
          <p className="text-2xl text-white font-display">
            Internet Protegida es <span className="text-neon-yellow font-bold">seguro de continuidad</span> para tu trabajo remoto.
          </p>
        </div>
      </div>
    </section>
  )
}

// SOLUTION SECTION
function SolutionSection() {
  const features = [
    { 
      icon: Battery, 
      title: 'Batería de respaldo incluida', 
      description: '6-7 horas de internet sin electricidad. Suficiente para terminar tu día de trabajo.',
    },
    { 
      icon: Zap, 
      title: '300 Mbps de velocidad', 
      description: 'Video en HD, compartir pantalla, subir archivos grandes. Sin lag, sin buffering.',
    },
    { 
      icon: Signal, 
      title: 'Red 5G independiente', 
      description: 'No depende del cable. Cuando el internet por cable falla, tú sigues conectado.',
    },
    { 
      icon: MonitorSmartphone, 
      title: 'Plug & Play', 
      description: 'Lo enchufas y funciona. Cero configuración, cero técnicos, cero esperas.',
    }
  ]

  return (
    <section id="solucion" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">La solución para </span>
            <span className="text-neon-yellow text-glow">profesionales</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Internet que entiende que tu tiempo tiene valor
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((f, i) => (
            <div key={i} className="card-glass group transition-all duration-300 hover:border-neon-yellow/40 hover:-translate-y-1">
              <div className="flex gap-4 sm:gap-5">
                <div className="feature-icon shrink-0 group-hover:neon-glow transition-all duration-300">
                  <f.icon className="w-6 sm:w-7 h-6 sm:h-7 text-neon-yellow" />
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">{f.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// USE CASES
function UseCasesSection() {
  const cases = [
    { icon: Video, title: 'Zoom / Google Meet', description: 'Reuniones sin cortes ni "¿me escuchan?"' },
    { icon: Headphones, title: 'Llamadas de clientes', description: 'Nunca más perder una llamada importante' },
    { icon: Laptop, title: 'Desarrollo / Diseño', description: 'Push al repo, deploy, sin interrupciones' },
    { icon: Calendar, title: 'Deadlines', description: 'Entrega a tiempo, llueva o truene' }
  ]

  return (
    <section className="py-20 lg:py-28 bg-dark-800 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Perfecto para </span>
            <span className="text-electric-blue text-glow-blue">tu trabajo</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c, i) => (
            <div key={i} className="card-glass text-center group hover:border-electric-blue/50 transition-all duration-300 hover:-translate-y-1">
              <div className="feature-icon mx-auto mb-4 group-hover:blue-glow transition-all duration-300">
                <c.icon className="w-7 h-7 text-electric-blue" />
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">{c.title}</h3>
              <p className="text-gray-400 text-sm">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ROI SECTION
function ROISection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-glass p-8 sm:p-12">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
              Haz las cuentas
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-electric-blue/20">
                <span className="text-gray-400">Tu tarifa por hora (promedio)</span>
                <span className="text-white font-display font-bold">$25-50/hr</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-electric-blue/20">
                <span className="text-gray-400">Horas perdidas por apagón</span>
                <span className="text-white font-display font-bold">2-4 hrs</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-electric-blue/20">
                <span className="text-gray-400">Apagones al mes (promedio PR)</span>
                <span className="text-white font-display font-bold">2-3</span>
              </div>
              <div className="flex justify-between items-center py-3 bg-neon-yellow/10 rounded-lg px-4">
                <span className="text-neon-yellow font-semibold">Pérdida potencial mensual</span>
                <span className="text-neon-yellow font-display font-bold text-xl">$100-600</span>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-400 mb-4">Costo del servicio mensual</p>
              <p className="text-5xl font-display font-bold text-white mb-4">~$65</p>
              <p className="text-neon-yellow font-semibold">Se paga solo con UN apagón evitado</p>
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
            <span className="text-white">Protege tu </span>
            <span className="text-neon-yellow text-glow">productividad</span>
          </h2>
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
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">Combo Internet Protegida 5GX</h3>
                <p className="text-gray-400">Todo incluido para trabajar sin interrupciones</p>
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
                  'Soporte remoto rápido'
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

// FAQ
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const faqs = [
    { 
      q: '¿Cuánto dura la batería realmente?', 
      a: 'Entre 6 y 7 horas de uso continuo. Suficiente para un día completo de trabajo si se va la luz por la mañana.' 
    },
    { 
      q: '¿La velocidad es suficiente para videollamadas en HD?', 
      a: 'Sí. 300 Mbps es más que suficiente para Zoom, Google Meet, Teams, compartir pantalla y subir archivos grandes simultáneamente.' 
    },
    { 
      q: '¿Funciona como backup de mi internet actual?', 
      a: 'Puede funcionar así, aunque muchos clientes lo usan como su internet principal porque la batería incluida lo hace más confiable que el cable.' 
    },
    { 
      q: '¿Qué pasa si se va la luz más de 7 horas?', 
      a: 'La batería se recarga automáticamente cuando vuelve la luz. Para apagones muy largos, podrías conectar la batería a un generador o inversor.' 
    },
    { 
      q: '¿Necesito configurar algo?', 
      a: 'No. Lo enchufas, lo enciendes, y ya tienes internet. Cero configuración técnica.' 
    },
    { 
      q: '¿Hay contrato?', 
      a: 'No. Cancela cuando quieras sin penalidades. Te quedas porque funciona, no porque tienes que quedarte.' 
    },
    { 
      q: '¿Puedo deducirlo como gasto de negocio?', 
      a: 'Consulta con tu contador, pero generalmente los gastos de internet para trabajo remoto son deducibles.' 
    }
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
          <span className="text-white">No pierdas otro </span>
          <span className="text-neon-yellow text-glow">día de trabajo</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Un apagón evitado ya pagó el servicio del mes. Protege tu productividad hoy.
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
              <li><a href="#problema" className="text-gray-400 hover:text-neon-yellow text-sm">El Problema</a></li>
              <li><a href="#solucion" className="text-gray-400 hover:text-neon-yellow text-sm">Solución</a></li>
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
export default function TrabajoRemotoPage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <UseCasesSection />
      <ROISection />
      <ProductSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
