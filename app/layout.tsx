'use client'
import type { Metadata } from 'next'
//import { Inter } from "next/font/google";
import './globals.css'
import Sidebar from '@/components/sidebar'
import Navbar from '@/components/navbar'
import {  Plus_Jakarta_Sans } from 'next/font/google'
import MenuProvider from '@/context/menuContext'
import AuthProvider from '@/context/Auth/authinfo'
import Identity from '@/assets/identity'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const inter = Plus_Jakarta_Sans({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: "SapienceChat",
//   description: "SapienceChat is a chat application for developers",
//   openGraph: {
//     images:"/logoGreen.png"
//   },

// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // const { toggleMenu} = useToggle()
  const queryClient = new QueryClient()
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/logoGreen.png" type="image/x-icon" />
      <body className={`${inter.className} relative max-w-[1440px] bg-background-white mx-auto`}>
          <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <main>
              {children}
            </main>
            </AuthProvider>
          </QueryClientProvider>
      </body>
    </html>
  )
}
