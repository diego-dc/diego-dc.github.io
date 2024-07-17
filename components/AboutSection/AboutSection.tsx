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
            <div className="grid grid-rows-5 grid-cols-6 text-nowrap">
                <div className="autoBlur blur-2xl text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-9xl uppercase mb-2 col-start-1 col-end-7">Coding with</div>
                <div className="autoBlur blur-2xl text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-9xl uppercase mb-2 col-start-2 col-end-6 text-right">Purpose</div>
                <div className="autoBlur blur-2xl text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-9xl uppercase mb-2 col-start-2 col-end-6 ">Creativity</div>
                <div className="autoBlur blur-2xl text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-9xl uppercase mb-2 col-start-2 col-end-7 text-right">Innovation</div>
                <div className="autoBlur blur-2xl text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-9xl uppercase col-start-1 col-end-6 flex flex-row">
                    Learn more
                    <span>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg"
                            height="100%" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            stroke-width="1.5" 
                            stroke-linecap="butt" 
                            stroke-linejoin="round"
                        >
                            <path d="M7 17l9.2-9.2M17 17V7H7"/>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    );
};


export default AboutSection
