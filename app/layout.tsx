import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import { Poltawski_Nowy , Plus_Jakarta_Sans} from "next/font/google";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SapienceChat",
  description: "SapienceChat is a chat application for developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background-white`}>
        <Navbar />
        <div className="mb-20"></div>
        <div className="hidden md:block relative"><Sidebar /></div>
        <main className="lg:w-[80%] w-full md:w-[90%] relative px-4 float-right">
        {children}
        </main>
      </body>
    </html>
  );
}
