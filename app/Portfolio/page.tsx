import React from "react";
import Head from "next/head";
import Background from "@/components/Background/Background";
import PortfolioSection from "@/components/PortfolioSection/PortfolioSection";
import ContactCarousel from "@/components/ContactCarousel/ContactCarousel";
import PortfolioThumbnail from "@/components/PortfolioThumbnail/PortfolioThumbnail";

export default function Page() {
  return (
    <>
      <Head>
        <title>Diego Caviedes Website</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Background></Background>
        <div className="flex flex-col space-y-32">
          <section className="p-0">
            <PortfolioThumbnail></PortfolioThumbnail>
          </section>
          <section id="PortfolioSection" className="p-0">
            <PortfolioSection limit={4}></PortfolioSection>
          </section>
          <section id="ContactSection" className="p-0">
            <ContactCarousel></ContactCarousel>
          </section>
        </div>
      </main>
    </>
  );
}
