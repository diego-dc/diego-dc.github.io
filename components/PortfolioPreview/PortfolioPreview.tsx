"use react";
import React from "react";
import PortfolioSection from "../PortfolioSection/PortfolioSection";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

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
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            width={16}
            height={16}
            stroke="currentColor"
            fill="currentColor"
          >
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
          <span className="ms-1">All Projects</span>
        </Link>
      </div>
    </div>
  );
};

export default PortfolioPreview;
