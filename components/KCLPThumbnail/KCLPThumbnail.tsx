'use client'

import React from "react";
import { gsap } from 'gsap';
import "../../gsap/effects";
import { useGSAP } from "@gsap/react";
import "./KCLPThumbnail.css"
import Image from 'next/image'

interface CustomCSSProperties extends React.CSSProperties {
    "--quantity"?: number;
    "--position"?: number;
  }

const KCLPThumbnail = () => {

    useGSAP(() => {
        const tl = gsap.timeline();

          

    }, []);

    return (
        <div className="banner">
            <div className="slider" style={{"--quantity":10} as CustomCSSProperties}>
                <div className="item" style={{"--position":1} as CustomCSSProperties}>
                    <Image 
                        src="/img/IMG_01.JPG" 
                        alt="Img1"
                        fill={true}
                        className="img-item"
                    />
                </div>
                <div className="item" style={{"--position":2} as CustomCSSProperties}>
                    <Image 
                        src="/img/IMG_02.PNG" 
                        alt="Img1"
                        fill={true}
                        className="img-item"
                    />
                </div>
                <div className="item" style={{"--position":3} as CustomCSSProperties}>
                    <Image 
                        src="/img/IMG_03.JPG" 
                        alt="Img1"
                        fill={true}
                        className="img-item"
                    />
                </div>
                <div className="item" style={{"--position":4} as CustomCSSProperties}>
                    <Image 
                        src="/img/IMG_04.JPG" 
                        alt="Img1"
                        fill={true}
                        className="img-item"
                    />
                </div>
                <div className="item" style={{"--position":5} as CustomCSSProperties}>
                    <Image 
                        src="/img/IMG_05.JPG" 
                        alt="Img1"
                        fill={true}
                        className="img-item"
                    />
                </div>
                <div className="item" style={{"--position":6} as CustomCSSProperties}>
                    <Image 
                        src="/img/IMG_06.JPG" 
                        alt="Img1"
                        fill={true}
                        className="img-item"
                    />
                </div>
                <div className="item" style={{"--position":7} as CustomCSSProperties}>
                    <Image 
                        src="/img/IMG_07.JPG" 
                        alt="Img1"
                        fill={true}
                        className="img-item"
                    />
                </div>
                <div className="item" style={{"--position":8} as CustomCSSProperties}>
                    <Image 
                        src="/img/IMG_08.JPG" 
                        alt="Img1"
                        fill={true}
                        className="img-item"
                    />
                </div>
                <div className="item" style={{"--position":9} as CustomCSSProperties}>
                    <Image 
                        src="/img/IMG_09.JPG" 
                        alt="Img1"
                        fill={true}
                        className="img-item"
                    />
                </div>
                <div className="item" style={{"--position":10} as CustomCSSProperties}>
                    <Image 
                        src="/img/IMG_10.JPG" 
                        alt="Img1"
                        fill={true}
                        className="img-item"
                    />
                </div>
            </div>
            <div className="content">
                <h1 data-content="KCLP.ART">KCLP.ART</h1>
                <div className="model kl"></div>
            </div>
        </div>
    );
};


export default KCLPThumbnail
