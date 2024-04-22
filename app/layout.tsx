'use client'
import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import { Poltawski_Nowy , Plus_Jakarta_Sans} from "next/font/google";
import MenuProvider from "@/context/menuContext";
import AuthProvider from "@/context/Auth/authinfo";
import Identity from "@/assets/identity";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

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
  children: React.ReactNode;
}>) {
  // const { toggleMenu} = useToggle() 
  const queryClient = new QueryClient()
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/logoGreen.png" type="image/x-icon" />
      <body className={`${inter.className} `}>
      <AuthProvider>
      <QueryClientProvider client={queryClient}> 
        <MenuProvider>
          <div className='w-fit lg:hidden relative left-0 '>
            <Identity/>
          </div>
         <Navbar /> 
        <div className="mb-20"></div>
        <div className={`
        relative`}><Sidebar /></div>
        </MenuProvider>
        <main className="lg:w-[80%] w-full md:w-[90%] reltive px-4 float-right">
        {children}
        </main>
       </QueryClientProvider>
       </AuthProvider>
      </body>
    </html>
  );
}
