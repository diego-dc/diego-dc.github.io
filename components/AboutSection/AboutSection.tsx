'use client'

import React from "react";
import { gsap } from 'gsap';
import "../../gsap/effects";
import { useGSAP } from "@gsap/react";
import "./AboutSection.css"
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {

    useGSAP(() => {

        const blurRows = gsap.utils.toArray<HTMLElement>('.autoBlur');

        blurRows.forEach(autoBlur => {
            gsap.to(autoBlur, {
                duration: 0.5, 
                filter: 'blur(0px)',
                color: 'var(--color-accent)',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: autoBlur,
                    start: "top 56%",
                    end: "bottom 46%",
                    toggleActions: "play reverse play reverse",
                    scrub: false,
                },
            })
        });
    }, []);

    return (
        <div className="container w-full">
            <div className="grid grid-cols-6 grid-rows-5 text-nowrap">
                <div className="col-start-1 col-end-7 mb-2 text-5xl uppercase autoBlur blur-2xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">Coding with</div>
                <div className="col-start-2 col-end-6 mb-2 text-5xl text-right uppercase autoBlur blur-2xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">Purpose</div>
                <div className="col-start-2 col-end-6 mb-2 text-5xl uppercase autoBlur blur-2xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl ">Creativity</div>
                <div className="col-start-2 col-end-7 mb-2 text-5xl text-right uppercase autoBlur blur-2xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">Innovation</div>
                <div className="col-start-1 col-end-6 text-5xl uppercase autoBlur blur-2xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl ">
                    <a href="/About" className="flex flex-row hover:text-[var(--color-highlight)] transition-colors" >
                        Learn more
                            <span>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="100%" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="1.5" 
                                    strokeLinecap="butt" 
                                    strokeLinejoin="round"
                                    >
                                    <path d="M7 17l9.2-9.2M17 17V7H7"/>
                                </svg>
                            </span>
                    </a>
                </div>
            </div>
        </div>
    );
};


export default AboutSection
