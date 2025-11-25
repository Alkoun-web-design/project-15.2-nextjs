import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import DarkModeToggle from "@/components/DarkModeToggle";
import "./globals.css";
import { Poppins } from "next/font/google";  

const poppins = Poppins({ weight: "400", subsets: ['latin'] });
// const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
// const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Mariam Shawki's Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-900`}
      > */}
      <body
        className={`${poppins.className} antialiased text-gray-900`}
      >
        <Navbar />
        {children}
        <Footer />
        {/* <DarkModeToggle /> */}
      </body>
    </html>
  );
}
