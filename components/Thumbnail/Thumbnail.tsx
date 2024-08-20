'use client'

import React from "react";
import { gsap } from 'gsap';
import "../../gsap/effects";
import { useGSAP } from "@gsap/react";
import "./Thumbnail.css"

const Thumbnail = () => {

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.fadeIn('.mainTitle', { duration: 4 })
          .from('.tagTitle', {translateX:1500, duration:2}, "-=2")
          .from('.subTitle', {opacity:0, translateY:-100})
          
    }, []);

    return (
        <div className="z-10 text-start">
            <div className="opacity-0 mainTitle ">
                <h1 className="mb-3 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl gf">Diego</h1>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">Caviedes Aguirre</h1>
            </div>
            <div className="relative mt-5 w-100">
                <div className="inset-0 z-0 border-t-2 border-r-2 border-b-2 border-[var(--color-highlight)] absolute rounded-e-2xl lg:rounded-e-3xl right-[-16px] top-[-70px] h-[105px] sm:top-[-80px] sm:h-[120px] md:top-[-90px] md:h-[140px] lg:top-[-110px] lg:h-[165px] xl:top-[-140px] xl:h-[205px] tagTitle"></div>
                <div className="z-10 p-3 text-center tag-div rounded-2xl md:rounded-3xl tagTitle">
                    <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bottom-[10%] left-[5%] text-black">
                        Full-Stack Developer
                    </p>
                </div>
                <div className="z-10 py-3 text-end subTitle">
                    <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bottom-[10%] left-[5%]" style={{color: "var(--color-highlight)"}}>
                        & Software Engineer
                    </p>
                </div>
            </div>
        </div>
    );
};


export default Thumbnail
