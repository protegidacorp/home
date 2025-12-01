import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Internet Protegida 5GX | Conexión Estable, Servicio Amable',
  description: 'Internet 5GX que funciona cuando lo necesitas. Sin contratos, instalación instantánea, funciona sin electricidad. Hasta 300 Mbps. La solución que Puerto Rico estaba esperando.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  )
}
