'use client';

import "./ScrollLine.css"
import { gsap } from 'gsap';
import "../../gsap/effects";
import { useGSAP } from "@gsap/react";

interface ScrollLineProps {
  height: number;
}

function ScrollLine({ height }: ScrollLineProps) {
    useGSAP(() => {
        const tl = gsap.timeline({delay:4});

        tl.fadeIn('.line', { duration: 4})
        
    }, []);
  
  return (

    <div className="scroll-line absolute bottom-6 " style={{ height: `${height}rem`}}>
        <div className="line opacity-0" style={{ height: `${height}rem`}}></div>
    </div>
  );
}

export default ScrollLine;
