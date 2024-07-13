"use client"

import React from "react"
import PortfolioArticle from "../PortfolioArticle/PortfolioArticle";

const PortfolioSection = () => {
    return (
        <div className="container flex flex-col gap-12">
            <div className="flex justify-center">
                <h2 className="text-6xl">
                    Project <span className="text-[var(--color-highlight)]">Highlights</span>
                </h2>
            </div>
            <div className="flex flex-col gap-[1rem] mx-auto w-full xl:w-[85%]">
                <PortfolioArticle></PortfolioArticle>
            </div>
        </div>
    )
};

export default PortfolioSection;