import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import Sidebar from '@/components/sidebar'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nextjs Invoice App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='light' enableSystem
          disableTransitionOnChange>
          <Header />
          <div className="flex h-screen overflow-hidden">
            <Sidebar className="w-[300px] hidden z-20 md:block" />
            <main className="flex-1 pt-16 overflow-x-hidden overflow-y-auto ">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
