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
  title: "Diegc Website",
  description: "Welcome to my personal website!",
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
