"use client";
import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "../../../gsap/effects";
import IconLaptopCode from "@/components/icons/IconLaptopCode";

const PortfolioThumbnail = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".subtitlePortfolio", { opacity: 0, duration: 5 });
  }, []);
  return (
    <div className="flex items-center justify-center w-screen h-screen h-min-screen">
      <div className="absolute w-2/3 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 h-2/3">
        <IconLaptopCode
          className="text-slate-700 opacity-15"
          width="100%"
          height="100%"
          stroke=""
        />
      </div>
      <div className="flex flex-col items-center justify-center space-y-10 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl">
          <span className="highlights-title">A collection of my </span>{" "}
          <span className="text-[var(--color-highlight)] highlights-title">
            Work
          </span>
        </h2>
        <p className="w-5/6 sm:tex-md md:text-lg lg:text-xl text-slate-400 lg:w-3/5 subtitlePortfolio">
          {" "}
          I'm always seeking my next project and striving to learn and grow
          along the way. Here, you'll find a collection of the projects I've
          worked on.{" "}
        </p>
      </div>
    </div>
  );
};

export default PortfolioThumbnail;
