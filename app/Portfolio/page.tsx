import React from "react";
import type { Metadata } from "next";

import Background from "@/components/layout/Background/Background";
import PortfolioSection from "@/components/pages/PortfolioSection/PortfolioSection";
import ContactCarousel from "@/components/ui/ContactCarousel/ContactCarousel";
import PortfolioThumbnail from "@/components/pages/PortfolioThumbnail/PortfolioThumbnail";
import ScrollLineStatics from "@/components/ui/ScrollLineStatics/ScrollLineStatics";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Browse through my portfolio of projects and work samples.",
};

export default function Page() {
  return (
    <>
      <main>
        <Background></Background>
        <div className="flex flex-col space-y-32">
          <section className="p-0">
            <PortfolioThumbnail></PortfolioThumbnail>
          </section>
          <section id="PortfolioSection" className="p-0">
            <ScrollLineStatics width="w-full">
              <PortfolioSection limit={5}></PortfolioSection>
            </ScrollLineStatics>
          </section>
          <section id="ContactSection" className="p-0">
            <ContactCarousel></ContactCarousel>
          </section>
        </div>
      </main>
    </>
  );
}
