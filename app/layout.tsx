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

export const metadata: Metadata = {
  title: 'Rachael Fuller',
  description: 'Personal webdev portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <body className={`${krungthep.variable} ${basier.variable}`}>{children}</body>
    </html>
  )
}
