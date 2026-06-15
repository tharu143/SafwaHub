import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Safwa Learning Hub | Seek • Achieve • Focus • Win",
    template: "%s | Safwa Learning Hub",
  },
  description: "Safwa Learning Hub is an educational institution dedicated to providing quality education, academic excellence, language development, and Islamic education. Join us to build a better future.",
  keywords: [
    "Safwa Learning Hub", 
    "Education", 
    "Tuition Centre", 
    "Language Classes", 
    "Islamic Education", 
    "Madrasa", 
    "Spoken English", 
    "Academic Support",
    "Kerala Education"
  ],
  authors: [{ name: "TM Cyber Tech" }],
  creator: "Safwa Learning Hub",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://safwalearninghub.com",
    title: "Safwa Learning Hub | Seek • Achieve • Focus • Win",
    description: "Empowering students with knowledge, skills, and values to become confident, responsible, and successful individuals.",
    siteName: "Safwa Learning Hub",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Safwa Learning Hub Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Safwa Learning Hub | Quality Education",
    description: "Join Safwa Learning Hub to empower your children with academic excellence and personal growth.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className={`${outfit.variable} font-sans min-h-full flex flex-col`}>
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
