import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Inter = localFont({
  src: "./fonts/Inter.ttf",
  variable: "--font-inter",
  weight: "100 900",
});
const MetalMania = localFont({
  src: "./fonts/MetalMania-Regular.ttf",
  variable: "--font-metalmania",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Go Explore",
  description: "Go Explore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Inter.variable} ${MetalMania.variable} text-black bg-white`}>
        <Navbar />
        <main className="overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
