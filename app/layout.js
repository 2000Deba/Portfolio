import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Debasish Seal | Full-Stack Developer",
  description: "Portfolio of Debasish Seal, a Full Stack Developer building modern web and mobile applications using React, Next.js, Node.js, and related technologies.",

  metadataBase: new URL("https://debasishseal.vercel.app"),

  openGraph: {
    title: "Debasish Seal | Full Stack Developer",
    description:
      "Explore projects, skills, and work by Debasish Seal — Full Stack Developer focused on modern, scalable, and secure applications.",
    url: "https://debasishseal.vercel.app",
    siteName: "Debasish Seal Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Debasish Seal — Full Stack Developer Portfolio",
      },
    ],
    locale: 'en_US',
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Debasish Seal | Full Stack Developer",
    description:
      "Full Stack Developer portfolio featuring multiple real-world web and mobile projects.",
    images: ["/og-image.png"],
    creator: '@ShilDebasish',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#000000] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]`}>
        <Navbar />
        <div className="min-h-screen bg-[#000000] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
