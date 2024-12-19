"use react";
import React from "react";
import PortfolioSection from "../PortfolioSection/PortfolioSection";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import IconChevronRight from "@/components/icons/IconChevronRight";

const PortfolioPreview = () => {
  useGSAP(() => {
    gsap.from(".button-with-icon", {
      opacity: 0,
      scale: 0.9,
      scrollTrigger: {
        trigger: ".button-with-icon",
        start: "top 100%",
        end: "top 75%",
        toggleActions: "play none reverse none",
        scrub: 7.5,
      },
    });
  }, []);

  return (
    <div className="container flex flex-col gap-12 portfolio-container">
      <div className="flex justify-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl">
          <span className="highlights-title">Projects</span>{" "}
          <span className="text-[var(--color-highlight)] highlights-title">
            Highlights
          </span>
        </h2>
      </div>
      <PortfolioSection limit={3}></PortfolioSection>
      <div className="flex items-center justify-center">
        <Link href="/Portfolio" className="button-with-icon">
          <IconChevronRight height={16} width={16} className="icon" />
          <span className="ms-1">All Projects</span>
        </Link>
      </div>
    </div>
  );
};

export default PortfolioPreview;
