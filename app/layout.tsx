import { Outfit } from "next/font/google";
import type { Metadata } from "next";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "../styles/global.css";
import Navbar from "../components/layout/Navbar/Navbar";

gsap.registerPlugin(useGSAP);

// Configura la fuente Outfit
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://diego-dc.github.io'),
  title: {
    default: 'Diego Caviedes - Full-Stack Developer',
    template: '%s | Diego Caviedes'
  },
  description: 'Portfolio of Diego Caviedes, a Full-Stack Developer specializing in React, Next.js, and modern web technologies.',
  keywords: ['Full-Stack Developer', 'React', 'Next.js', 'TypeScript', 'Web Development', 'Software Engineer'],
  authors: [{ name: 'Diego Caviedes', url: 'https://www.linkedin.com/in/diego-caviedes-aguirre-022b6b225' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://diego-dc.github.io',
    siteName: 'Diego Caviedes Portfolio',
    title: 'Diego Caviedes - Full-Stack Developer',
    description: 'Portfolio of Diego Caviedes, a Full-Stack Developer specializing in React, Next.js, and modern web technologies.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diego Caviedes - Full-Stack Developer',
    description: 'Portfolio of Diego Caviedes, a Full-Stack Developer specializing in React, Next.js, and modern web technologies.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
