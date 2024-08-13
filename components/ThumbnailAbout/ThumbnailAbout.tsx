'use client'

import React from "react";
import { gsap } from 'gsap';
import "../../gsap/effects";
import { useGSAP } from "@gsap/react";
import "./ThumbnailAbout.css"
import SplitTextJS from 'split-text-js';


const ThumbnailAbout = () => {

    useGSAP(() => {
        
        const titles = gsap.utils.toArray<HTMLElement>('.text-variant');
        
        if (titles.length > 0)
        {

            const tl = gsap.timeline({ repeat: -1});
            
            titles.forEach(title => {
                const splitTitle = new SplitTextJS(title);
                
            tl
                .from(splitTitle.chars, {
                    opacity:0,
                        y:80,
                        rotateX: -90,
                        stagger:0.2,
                    }, "<")
                    .to(splitTitle.chars, {
                        opacity:0,
                        y: -80,
                        rotateX: -90,
                        stagger:0.1,
                    }, "<4")
            });
                
        }

    }, []);

    return (
        <div className="container flex flex-col items-center justify-center w-full">
                <div className="mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl">
                    Hey! my name is <span className="text-[var(--color-highlight)]">Diego</span>.
                </div>
                <div className="mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl">
                    I&apos;m dedicated to coding with 
                </div>
                <div className="container mt-10">
                    <div className="text-wrapper">
                        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl mb-2 text-[var(--color-highlight)] uppercase text-variant">
                            Creativity
                        </div>
                        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl mb-2 text-[var(--color-highlight)] uppercase text-variant">
                            Innovation
                        </div>
                        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl mb-2 text-[var(--color-highlight)] uppercase text-variant">
                            A purpose
                        </div>
                    </div>
                </div>
        </div>
    );
};


export default ThumbnailAbout
