'use client'
import CheckoutButton from '../components/CheckoutButton'
import { useState } from 'react'
import { 
  Wifi, Battery, Zap, Shield, Building2, CreditCard as CreditCardIcon, Camera,
  Truck, CheckCircle2, XCircle, ChevronDown, ChevronUp,
  Mail, MapPin, Menu, X, Signal, ShoppingCart, ArrowRight, 
  DollarSign, Store, Users, Clock, AlertTriangle, TrendingDown
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
            <a href="#problema" className="text-gray-300 hover:text-neon-yellow transition-colors">El Costo</a>
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
              <a href="#problema" onClick={() => setIsOpen(false)} className="text-gray-300 py-2">El Costo</a>
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

// HERO - BUSINESS FOCUSED
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 hero-gradient overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-20 right-0 w-72 md:w-96 h-72 md:h-96 bg-electric-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-electric-blue/20 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-electric-blue/20 border border-electric-blue/40 rounded-full px-4 py-2 mb-6">
              <Building2 className="w-4 h-4 text-electric-blue" />
              <span className="text-sm text-gray-300">Para negocios en Puerto Rico</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Tu </span>
              <span className="text-electric-blue text-glow-blue">caja</span>
              <span className="text-white"> no cierra cuando se va </span>
              <span className="text-neon-yellow text-glow">la luz</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
              Internet con batería de respaldo para que tu punto de venta, cámaras y sistemas sigan funcionando. <strong className="text-neon-yellow">Hasta 7 horas sin electricidad.</strong>
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <div className="flex items-center gap-2 bg-dark-700/50 rounded-full px-4 py-2 border border-electric-blue/20">
                <CreditCardIcon className="w-5 h-5 text-electric-blue" />
                <span className="text-sm">POS siempre activo</span>
              </div>
              <div className="flex items-center gap-2 bg-dark-700/50 rounded-full px-4 py-2 border border-electric-blue/20">
                <Camera className="w-5 h-5 text-electric-blue" />
                <span className="text-sm">Cámaras 24/7</span>
              </div>
              <div className="flex items-center gap-2 bg-dark-700/50 rounded-full px-4 py-2 border border-electric-blue/20">
                <Battery className="w-5 h-5 text-electric-blue" />
                <span className="text-sm">6-7 hrs sin luz</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#comprar" className="btn-neon text-center flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" /> Protege tu Negocio
              </a>
              <a href="#problema" className="btn-outline text-center flex items-center justify-center gap-2">
                Calcula tu Pérdida <ArrowRight className="w-5 h-5" />
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
              ✓ Para comercios
            </div>
            <div className="absolute bottom-20 -left-4 bg-neon-yellow text-dark-900 px-4 py-2 rounded-full font-display font-bold text-sm neon-glow-strong">
              ✓ Sin instalación
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

// COST OF DOWNTIME
function ProblemSection() {
  return (
    <section id="problema" className="py-20 lg:py-28 bg-dark-800 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">¿Cuánto te cuesta un </span>
            <span className="text-red-400">apagón?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Cada minuto sin internet es dinero que no entra
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card-glass text-center">
            <div className="w-16 h-16 bg-red-500/20 border border-red-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <CreditCardIcon className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">POS caído</h3>
            <p className="text-gray-400 text-sm">Clientes que pagan en efectivo o se van. Ventas perdidas.</p>
          </div>

          <div className="card-glass text-center">
            <div className="w-16 h-16 bg-red-500/20 border border-red-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Camera className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">Cámaras ciegas</h3>
            <p className="text-gray-400 text-sm">Sin vigilancia justo cuando más la necesitas.</p>
          </div>

          <div className="card-glass text-center">
            <div className="w-16 h-16 bg-red-500/20 border border-red-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Store className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">Inventario desconectado</h3>
            <p className="text-gray-400 text-sm">Sistemas de inventario offline causan errores y pérdidas.</p>
          </div>

          <div className="card-glass text-center">
            <div className="w-16 h-16 bg-red-500/20 border border-red-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">Clientes frustrados</h3>
            <p className="text-gray-400 text-sm">"No hay sistema" es la excusa que nadie quiere escuchar.</p>
          </div>
        </div>

        {/* Calculator */}
        <div className="mt-16 card-glass max-w-3xl mx-auto p-8">
          <h3 className="font-display text-2xl font-bold text-white text-center mb-8">
            Calcula tu pérdida potencial
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-electric-blue/20">
                <span className="text-gray-400">Ventas promedio por hora</span>
                <span className="text-white font-display font-bold">$50-200</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-electric-blue/20">
                <span className="text-gray-400">Horas de apagón promedio</span>
                <span className="text-white font-display font-bold">2-4 hrs</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-electric-blue/20">
                <span className="text-gray-400">Apagones al mes</span>
                <span className="text-white font-display font-bold">2-3</span>
              </div>
            </div>
            
            <div className="text-center p-6 bg-red-500/10 rounded-xl border border-red-500/30">
              <p className="text-gray-400 mb-2">Pérdida potencial mensual</p>
              <p className="text-4xl font-display font-bold text-red-400 mb-2">$200-2,400</p>
              <p className="text-sm text-gray-500">Sin contar daño a reputación</p>
            </div>
          </div>

          <div className="text-center mt-8 p-4 bg-neon-yellow/10 rounded-xl border border-neon-yellow/30">
            <p className="text-neon-yellow font-semibold">
              Internet Protegida cuesta ~$65/mes. Se paga solo con evitar UN apagón.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// SOLUTION - BUSINESS FEATURES
function SolutionSection() {
  const features = [
    { 
      icon: CreditCardIcon, 
      title: 'Punto de Venta Siempre Activo', 
      description: 'Acepta tarjetas de crédito y débito aunque se vaya la luz. No pierdas ventas.',
    },
    { 
      icon: Camera, 
      title: 'Cámaras de Seguridad 24/7', 
      description: 'Tus cámaras IP siguen grabando y transmitiendo durante apagones.',
    },
    { 
      icon: Store, 
      title: 'Sistemas Conectados', 
      description: 'Inventario, pedidos online, delivery apps—todo sigue funcionando.',
    },
    { 
      icon: Zap, 
      title: 'Cero Tiempo de Instalación', 
      description: 'Lo enchufas y funciona. No pierdes un día esperando técnicos.',
    }
  ]

  return (
    <section id="solucion" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Internet para </span>
            <span className="text-electric-blue text-glow-blue">negocios serios</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Diseñado para mantener tu operación corriendo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((f, i) => (
            <div key={i} className="card-glass group transition-all duration-300 hover:border-electric-blue/40 hover:-translate-y-1">
              <div className="flex gap-4 sm:gap-5">
                <div className="feature-icon shrink-0 group-hover:blue-glow transition-all duration-300">
                  <f.icon className="w-6 sm:w-7 h-6 sm:h-7 text-electric-blue" />
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

// BUSINESS TYPES
function BusinessTypesSection() {
  const types = [
    { name: 'Restaurantes', desc: 'POS, pedidos online, delivery' },
    { name: 'Tiendas', desc: 'Inventario, tarjetas, cámaras' },
    { name: 'Salones', desc: 'Citas online, pagos' },
    { name: 'Oficinas', desc: 'Email, videoconferencias' },
    { name: 'Farmacias', desc: 'Sistemas de recetas, POS' },
    { name: 'Talleres', desc: 'Órdenes de trabajo, facturación' }
  ]

  return (
    <section className="py-20 lg:py-28 bg-dark-800 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Para todo tipo de </span>
            <span className="text-neon-yellow text-glow">negocio</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {types.map((t, i) => (
            <div key={i} className="card-glass text-center py-6 group hover:border-neon-yellow/40 transition-all duration-300">
              <h3 className="font-display font-bold text-white mb-1">{t.name}</h3>
              <p className="text-xs text-gray-500">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// MULTI-LOCATION
function MultiLocationSection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-glass p-8 sm:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-electric-blue/20 border border-electric-blue/40 rounded-full px-4 py-2 mb-6">
                <Building2 className="w-4 h-4 text-electric-blue" />
                <span className="text-sm text-gray-300">Múltiples ubicaciones</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                ¿Tienes varias sucursales?
              </h3>
              <p className="text-gray-400 mb-6">
                Cada ubicación puede tener su propio router con batería. Misma facilidad, misma confiabilidad, en todos tus locales.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-neon-yellow shrink-0" />
                  <span className="text-gray-300">Un combo por ubicación</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-neon-yellow shrink-0" />
                  <span className="text-gray-300">Manejo centralizado de pagos</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-neon-yellow shrink-0" />
                  <span className="text-gray-300">Descuentos por volumen disponibles</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-dark-700/50 rounded-xl p-4 border border-electric-blue/20">
                  <Building2 className="w-8 h-8 text-electric-blue mx-auto mb-2" />
                  <p className="text-xs text-gray-400">Sucursal 1</p>
                </div>
                <div className="bg-dark-700/50 rounded-xl p-4 border border-electric-blue/20">
                  <Building2 className="w-8 h-8 text-electric-blue mx-auto mb-2" />
                  <p className="text-xs text-gray-400">Sucursal 2</p>
                </div>
                <div className="bg-dark-700/50 rounded-xl p-4 border border-electric-blue/20">
                  <Building2 className="w-8 h-8 text-electric-blue mx-auto mb-2" />
                  <p className="text-xs text-gray-400">Sucursal 3</p>
                </div>
                <div className="bg-neon-yellow/10 rounded-xl p-4 border border-neon-yellow/30">
                  <p className="text-2xl font-display font-bold text-neon-yellow">+</p>
                  <p className="text-xs text-gray-400">Añadir más</p>
                </div>
              </div>
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
            <span className="text-electric-blue text-glow-blue">operación</span>
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
                  <Building2 className="w-4 h-4 text-electric-blue" />
                  <span className="text-sm text-electric-blue font-semibold">Para Negocios</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">Combo Internet Protegida 5GX</h3>
                <p className="text-gray-400">Todo para mantener tu negocio conectado</p>
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
                  'Soporte para negocios'
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
                    <CreditCardIcon className="w-4 h-4" /> Stripe
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
      q: '¿Funciona con mi sistema de punto de venta?', 
      a: 'Sí. Si tu POS usa internet (la mayoría lo hace), funcionará con Internet Protegida. Clover, Square, Toast, ATH Móvil Business, todos funcionan.' 
    },
    { 
      q: '¿Puedo conectar mis cámaras de seguridad?', 
      a: 'Sí. Cámaras IP, sistemas DVR/NVR con conexión a internet, Ring, Nest—todos pueden conectarse y seguir funcionando durante apagones.' 
    },
    { 
      q: '¿La velocidad es suficiente para un negocio?', 
      a: 'Sí. 300 Mbps es más que suficiente para POS, cámaras, inventario, y múltiples dispositivos conectados simultáneamente.' 
    },
    { 
      q: '¿Qué pasa si tengo varias sucursales?', 
      a: 'Cada sucursal necesita su propio combo. Ofrecemos descuentos por volumen para negocios con múltiples ubicaciones. Contáctanos para detalles.' 
    },
    { 
      q: '¿Puedo deducirlo como gasto de negocio?', 
      a: 'Consulta con tu contador, pero generalmente el servicio de internet para negocios es un gasto deducible.' 
    },
    { 
      q: '¿Hay contrato?', 
      a: 'No. Cancela cuando quieras sin penalidades. Entendemos que los negocios necesitan flexibilidad.' 
    },
    { 
      q: '¿Cuánto dura la batería?', 
      a: 'Entre 6 y 7 horas de uso continuo. Suficiente para la mayoría de apagones y para cerrar operaciones ordenadamente si es necesario.' 
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
          <span className="text-white">No dejes que el próximo apagón </span>
          <span className="text-red-400">cierre tu negocio</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Un combo que se paga solo evitando un día de ventas perdidas.
        </p>
        
        <a href="#comprar" className="btn-neon inline-flex items-center gap-2 text-lg px-10 py-5">
          <ShoppingCart className="w-6 h-6" /> Protege tu Negocio
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
              <li><a href="#problema" className="text-gray-400 hover:text-electric-blue text-sm">El Costo</a></li>
              <li><a href="#solucion" className="text-gray-400 hover:text-electric-blue text-sm">Solución</a></li>
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
export default function NegociosPage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BusinessTypesSection />
      <MultiLocationSection />
      <ProductSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
