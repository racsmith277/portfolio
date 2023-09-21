import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

export const krungthep = localFont({
  src: [
    {
      path: '../public/fonts/Krungthep.ttf',
      weight: '400'
    },
  ],
  variable: '--font-krungthep'
})

export const basier = localFont({
  src: [
    {
      path: '../public/fonts/BasierSquareMono-Regular.ttf',
      weight: '400'
    },
    {
      path: '../public/fonts/BasierSquareMono-Semibold.ttf',
      weight: '600'
    },
  ],
  variable: '--font-basiersquaremono'
})

export const silka = localFont({
  src: [
    {
      path: '../public/fonts/Silka-Medium.otf',
      weight: '500'
    },
    {
      path: '../public/fonts/Silka-Bold.otf',
      weight: '700'
    },
  ],
  variable: '--font-silka'
})

export const metadata: Metadata = {
  title: 'Rachael Fuller | Portfolio',
  description: 'Personal webdev portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <body className={`${silka.variable} ${krungthep.variable} ${basier.variable}`}>{children}</body>
    </html>
  )
}
