"use react";
import React from "react";
import PortfolioSection from "../PortfolioSection/PortfolioSection";
import Link from "next/link";

const PortfolioPreview = () => {
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
        <Link href="/Portfolio" className="px-8 py-4 border rounded">
          View All Projects
        </Link>
      </div>
    </div>
  );
};

export default PortfolioPreview;
