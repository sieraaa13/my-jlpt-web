import type { Metadata } from 'next'
import { Zen_Maru_Gothic, Noto_Sans_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const zenMaru = Zen_Maru_Gothic({ 
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-zen-maru"
});

const notoSansJP = Noto_Sans_JP({ 
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-jp"
});

export const metadata: Metadata = {
  title: 'NihonGO! - Belajar Bahasa Jepang dengan Anime',
  description: 'Platform belajar bahasa Jepang yang menyenangkan dengan tema anime. Pelajari Hiragana, Katakana, Kanji, dan lebih banyak lagi!',
  generator: 'v0.app',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="bg-background">
      <body className={`${zenMaru.variable} ${notoSansJP.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
