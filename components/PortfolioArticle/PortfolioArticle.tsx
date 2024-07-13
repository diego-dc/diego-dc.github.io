"use client"

import React from "react"
import Image from 'next/image'
import "./PortfolioArticle.css"

const PortfolioArticle = () => {
    return (

            <div className="group/project project-item-m md:project-item-t xl:project-item relative mt-10 justify-between gap-4 rounded border border-[var(--color-light)] p-8 text-sm font-medium transition-all md:gap-y-3 xl:mt-0 xl:px-8 xl:py-20 xl:hover:gap-x-0 bg-[rgb(15,15,15,0.25)]">
                <div className="project-item-index transition-all md:w-5 md: pt-1 xl:group-hover/project:w-0 xl:group-hover/project:opacity-0">01</div>
                <h3 className="text-6xl project-item-title">Project Name</h3>
                <div className="project-item-year flex gap-0 justify-self-end transition-all xl:group-hover/project:gap-2">2023</div>
                <div className="project-item-tags flex flex-wrap gap-2 ">
                    <div className="text-xs glossy rounded-full border border-base-300 px-3 py-2 font-medium lowercase leading-none">Javascript</div>
                </div>
                <div className="project-item-image group/deck relative z-10 -mx-4 -mt-20 mb-4 aspect-[16/9] transition-all group-hover/project:scale-100 group-hover/project:opacity-100 sm:mb-0 sm:ml-auto sm:mr-0 sm:w-9/12 md:w-8/12 lg:mr-16 lg:w-6/12 xl:absolute xl:left-2/3 xl:top-[45%] xl:m-0 xl:h-full xl:w-auto xl:-translate-x-1/2 xl:-translate-y-1/2 xl:scale-75 xl:opacity-0">
                    <div className="image-card hidden xl:block opacity-15" style={{ backgroundColor: "#ffffff" }}></div>
                    <div className="image-card hidden xl:block opacity-30 xl:group-hover/deck:-rotate-1 bg-[var(--color-accent)]"></div>
                    <div className="image-card hidden xl:block opacity-45 xl:group-hover/deck:-rotate-2 bg-[var(--color-accent)]"></div>
                    <div className="image-card hidden xl:block opacity-60 xl:group-hover/deck:-rotate-3 bg-[var(--color-accent)]"></div>
                    <div className="image-card hidden xl:block opacity-75 xl:group-hover/deck:rotate-[-4deg] bg-[var(--color-accent)]" ></div>
                    <Image 
                        width={480}
                        height={270}
                        alt="Diego Caviedes Portfolio Section"
                        loading="lazy"
                        src="https://a.storyblok.com/f/274945/1920x1080/a73986d7f2/lorenzobocchi-cover.png/m/2500x1406"
                        className="image-card sm:-rotate-3 xl:rotate-0 xl:group-hover/deck:rotate-[-5deg]"
                    />
                </div>

            </div>
    )
};

export default PortfolioArticle;