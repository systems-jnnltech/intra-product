import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lifestyles | Live Better. Every Day.",
  description: "Discover the Lifestyles wellness collection featuring Intra, NutriaPlus, CardioLife, and FibreLife.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow pt-[90px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
