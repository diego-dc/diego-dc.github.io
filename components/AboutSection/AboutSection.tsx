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
                duration: 1, 
                filter: 'blur(0px)',
                color: 'var(--color-tertiary) !important;',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: autoBlur,
                    start: "top 56%",
                    end: "bottom 46%",
                    toggleActions: "play reverse play reverse",
                    scrub: false,
                    markers: true,
                },
            })
        });
    }, []);

    return (
        <div className="container-lg w-full">
            <div className="grid grid-rows-5 grid-cols-6 text-nowrap">
                <div className="autoBlur blur-2xl text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-9xl uppercase mb-2 col-start-2 col-end-7">Diego-dc</div>
                <div className="autoBlur blur-2xl text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-9xl uppercase mb-2 col-start-2 col-end-6 text-right">Purpose</div>
                <div className="autoBlur blur-2xl text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-9xl uppercase mb-2 col-start-2 col-end-6 ">Creativity</div>
                <div className="autoBlur blur-2xl text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-9xl uppercase mb-2 col-start-2 col-end-7 text-right">Innovation</div>
                <div className="autoBlur blur-2xl text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-9xl uppercase col-start-1 col-end-6">Learn more</div>
            </div>
        </div>
    );
};


export default AboutSection
