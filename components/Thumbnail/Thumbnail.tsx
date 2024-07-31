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
        <div className="text-start z-10">
            <div className="opacity-0 mainTitle ">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-8xl xl:text-9xl mb-3 gf">Diego</h1>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-8xl xl:text-9xl">Caviedes Aguirre</h1>
            </div>
            <div className="mt-5 relative w-100">
                <div className="inset-0 z-0 border-t-2 border-r-2 border-b-2 border-[var(--color-highlight)] absolute rounded-e-2xl lg:rounded-e-3xl right-[-16px] top-[-57px] h-[83px] md:top-[-65px] md:h-[95px] lg:top-[-110px] lg:h-[165px] xl:top-[-140px] xl:h-[205px] tagTitle"></div>
                <div className="z-10 p-3 text-center tag-div rounded-2xl md:rounded-3xl tagTitle">
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-7xl xl:text-8xl bottom-[10%] left-[5%] text-black">
                        Full-Stack Developer
                    </p>
                </div>
                <div className="z-10 py-3 text-end subTitle">
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-7xl xl:text-8xl bottom-[10%] left-[5%]" style={{color: "var(--color-highlight)"}}>
                        & Software Engineer
                    </p>
                </div>
            </div>
        </div>
    );
};


export default Thumbnail
