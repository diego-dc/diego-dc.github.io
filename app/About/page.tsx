"use client";

import Background from "@/components/layout/Background/Background";
import ThumbnailAbout from "@/components/pages/ThumbnailAbout/ThumbnailAbout";
import ScrollLine from "@/components/ui/ScrollLine/ScrollLine";
import ContactCarousel from "@/components/ui/ContactCarousel/ContactCarousel";
import TechnologiesSection from "@/components/pages/TechnologiesSection/TechnologiesSection";
import AboutDraggable from "@/components/pages/AboutDraggable/AboutDraggable";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  return (
    <>
      <main className="z-10 flex flex-col min-h-screen">
        <Background></Background>
        <section
          id="ThumbnailAbout"
          className="relative flex items-center justify-center max-h-screen min-w-full min-h-screen p-0"
        >
          <ThumbnailAbout></ThumbnailAbout>
          <ScrollLine height={7}></ScrollLine>
        </section>
        <section id="AboutMe" className="relative min-w-full px-0 py-16">
          <AboutDraggable></AboutDraggable>
        </section>
        <section
          id="Technologies"
          className="relative flex items-center min-w-full p-0 mb-[2rem] md:mb-1rem"
        >
          <TechnologiesSection></TechnologiesSection>
        </section>
        <section id="ContactSection" className="p-0">
          <ContactCarousel></ContactCarousel>
        </section>
      </main>
    </>
  );
}
