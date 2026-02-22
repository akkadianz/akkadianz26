import type { Metadata, Viewport } from 'next'
import { Orbitron, Space_Grotesk } from 'next/font/google'
import { Noto_Sans_Tamil } from 'next/font/google'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const notoSansTamil = Noto_Sans_Tamil({
  subsets: ['tamil'],
  variable: '--font-tamil-local',
  display: 'swap',
})

const inception = localFont({
  src: '../public/fonts/Inception.ttf',
  variable: '--font-inception-local',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "AKKADIANZ'26 | National Level Technical Symposium",
  description:
    'AKKADIANZ\'26 is a National Level Technical Symposium by the Departments of ECE & BME, SBM College of Engineering and Technology, Dindigul. 13 March 2026.',
  icons: {
    icon: '/images/akkadianz-logo.png',
    shortcut: '/images/akkadianz-logo.png',
    apple: '/images/akkadianz-logo.png',
  },
  keywords: [
    'AKKADIANZ',
    'technical symposium',
    'SBM College',
    'ECE',
    'BME',
    'Dindigul',
    'engineering',
    'paper presentation',
    'tech debate',
  ],
}

export const viewport: Viewport = {
  themeColor: '#1A0B2E',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${orbitron.variable} ${spaceGrotesk.variable} ${notoSansTamil.variable} ${inception.variable} font-body antialiased overflow-x-hidden`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
