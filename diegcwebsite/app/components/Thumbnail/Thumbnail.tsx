'use client'

import React from "react";
import { gsap } from 'gsap';
import "../../../gsap/effects";
import "./Thumbnail.css"
import { useGSAP } from "@gsap/react";

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
                <h1 className="text-8xl mb-3 gf">Diego</h1>
                <h1 className="text-8xl">Caviedes Aguirre</h1>
            </div>
            <div className="mt-5 relative w-100">
                <div className="inset-0 z-0 border-t-2 border-r-2 border-b-2 border-[var(--color-tertiary)] absolute right-[-16px] top-[-110px] rounded-e-3xl h-[165px] tagTitle"></div>
                <div className="z-10 p-3 text-center tag-div rounded-3xl tagTitle">
                    <p className="text-7xl bottom-[10%] left-[5%] text-black">
                        Full-Stack Developer
                    </p>
                </div>
                <div className="z-10 py-3 text-end subTitle">
                    <p className="text-7xl bottom-[10%] left-[5%]">
                        & Software Engineer
                    </p>
                </div>
            </div>
        </div>
    );
};


export default Thumbnail
