import type { Metadata } from 'next'
import { Barlow_Condensed, Plus_Jakarta_Sans, Cormorant } from 'next/font/google'
import './globals.css'

const barlowCondensed = Barlow_Condensed({
  variable: '--font-barlow',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
})

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

const cormorant = Cormorant({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'LINA CAFÉ | Café & Libros · Palermo, Buenos Aires',
  description:
    'LINA Café — Café de especialidad y libros en Palermo. Costa Rica 4568, Plaza Armenia. Buenos Aires.',
  openGraph: {
    title: 'LINA CAFÉ | Café & Libros · Palermo',
    description: 'Café de especialidad y libros en Palermo, Buenos Aires.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      className={`${barlowCondensed.variable} ${plusJakarta.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream-50 text-dark-900">
        {children}
      </body>
    </html>
  )
}
