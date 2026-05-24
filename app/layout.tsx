import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: '1º Congresso Conecta Chapada do Araripe',
  description: 'Movimento, tecnologias e proteção meio ambiente. Um encontro para integrar preservação ambiental, inovação tecnológica, movimentos sociais, educação e políticas públicas em defesa da Chapada do Araripe.',
  generator: 'v0.app',
  keywords: ['congresso', 'chapada do araripe', 'meio ambiente', 'tecnologia', 'sustentabilidade', 'IFCE', 'Juazeiro do Norte'],
  authors: [{ name: 'Conecta Chapada do Araripe' }],
  openGraph: {
    title: '1º Congresso Conecta Chapada do Araripe',
    description: 'Movimento, tecnologias e proteção meio ambiente - 11 de junho, Auditório Kariris, IFCE Juazeiro do Norte',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#2d5a3d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
