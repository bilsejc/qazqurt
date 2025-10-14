import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://kazygurt-mountain.kz'),
  title: 'Қазығұрт тауы - Қазақстанның жүрегінде тіріленген аңыз',
  description: 'Қазығұрт тауының сұлулығы мен аңыздарын ашыңыз. Нұх кемесінің тарихы мен Қазақстанның табиғи кереметтеріне интерактивті саяхат.',
  keywords: 'Қазығұрт, тау, Қазақстан, Нұх кемесі, аңыз, туризм, табиғат, тарих',
  authors: [{ name: 'Kazygurt Mountain Website' }],
  openGraph: {
    title: 'Қазығұрт тауы - Қазақстанның жүрегінде тіріленген аңыз',
    description: 'Қазығұрт тауының сұлулығы мен аңыздарын ашыңыз',
    type: 'website',
    locale: 'kk_KZ',
    siteName: 'Kazygurt Mountain',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Қазығұрт тауы - Қазақстанның жүрегінде тіріленген аңыз',
    description: 'Қазығұрт тауының сұлулығы мен аңыздарын ашыңыз',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="kk" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
