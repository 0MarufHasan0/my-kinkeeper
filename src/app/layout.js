import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Component/Navbar";
import Providers from "./lib/providers";
import Footer from "@/Component/Context/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Kinkeeper",
  description: "A personal relationship management app to help you keep track of your connections and nurture them over time.",
  icons : {
    icon : "/logo.ico"
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <Navbar/>
        <div className="min-h-screen">
          {children}
        </div>
          <Footer/>
        </Providers>
       
        </body>
    </html>
  );
}
