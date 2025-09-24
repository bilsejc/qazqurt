'use client'

import Navigation from './Navigation'
import Footer from './Footer'
import ThemeProvider from './ThemeProvider'

interface ClientLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <ThemeProvider>
      <Navigation />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  )
}
