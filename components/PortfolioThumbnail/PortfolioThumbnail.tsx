"use client";
import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "../../gsap/effects";

const PortfolioThumbnail = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".subtitlePortfolio", { opacity: 0, duration: 5 });
  }, []);
  return (
    <div className="flex items-center justify-center w-screen h-screen h-min-screen">
      <div className="absolute w-2/3 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 h-2/3">
        <svg
          className="text-slate-700 opacity-15"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          width={"full"}
          height={"full"}
          stroke=""
          fill="currentColor"
        >
          <path d="M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 256-64 0 0-256L128 96l0 256-64 0L64 96zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
        </svg>
      </div>
      <div className="flex flex-col items-center justify-center space-y-10 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl">
          <span className="highlights-title">A collection of my </span>{" "}
          <span className="text-[var(--color-highlight)] highlights-title">
            Work
          </span>
        </h2>
        <p className="text-xl text-slate-400 lg:w-3/5 subtitlePortfolio">
          {" "}
          I'm always seeking my next project and striving to learn and grow
          along the way. <br /> Here, you'll find a collection of the projects
          I've worked on.{" "}
        </p>
      </div>
    </div>
  );
};

export default PortfolioThumbnail;
