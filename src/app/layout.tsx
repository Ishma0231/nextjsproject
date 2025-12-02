
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/app/ReduxProvider.jsx"
import Navbar from "@/components/Navbar.jsx"
import Footer from "@/components/Footer.jsx"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata:Metadata= {
  title: "Eloré",
  description: "Ecommerce Store",
 
  
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className= {`${geistSans.variable} ${geistMono.variable} antialiased border-box`} style={{backgroundColor:"black"}}>
           <ReduxProvider>
          <Navbar/>
           <h2 className="bg-[#7F1F0E] text-center p-2 pt-20">SAVE UP TO 50% FREE SHIPPING OVER $50</h2>
           <main className=" min-h-screen " > 
          {children}
        </main>
         <Footer/>
        </ReduxProvider>
       
      </body>
    </html>
  );
}
