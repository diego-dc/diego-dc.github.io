"use client";

import Head from "next/head";
import React from "react";
import "../gsap/effects";

import Background from "../components/Background/Background";
import Thumbnail from "../components/Thumbnail/Thumbnail";
import ScrollLine from "../components/ScrollLine/ScrollLine";
import AboutSection from "../components/AboutSection/AboutSection";
import PortfolioPreview from "@/components/PortfolioPreview/PortfolioPreview";
import ContactCarousel from "@/components/ContactCarousel/ContactCarousel";

export default function Page() {
  return (
    <>
      <Head>
        <title>Diego Caviedes Website</title>
        <meta name="description" content="Welcome to my personal website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="z-10 flex flex-col min-h-screen px-2 sm:px-0">
        <Background></Background>
        <section
          id="Thumbnail"
          className="relative flex items-center justify-center max-h-screen min-w-full min-h-screen px-0"
        >
          <Thumbnail></Thumbnail>
          <ScrollLine height={6}></ScrollLine>
        </section>
        <section
          id="AboutSection"
          className="flex relative min-h-[400px] h-fit px-4 md:px-16 xl:px-72 pb-52 items-center"
        >
          <AboutSection></AboutSection>
          <ScrollLine height={6}></ScrollLine>
        </section>
        <section id="PortfolioSection" className="relative px-2">
          <PortfolioPreview></PortfolioPreview>
        </section>
        <section id="ContactSection" className="p-0">
          <ContactCarousel></ContactCarousel>
        </section>
      </main>
    </>
  );
}
