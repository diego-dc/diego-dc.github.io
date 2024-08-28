"use react"

import React from "react"
import Image from 'next/image'
import "./TechnologiesSection.css"

import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import SplitTextJS from 'split-text-js';

const TechnologiesSection = () => {

    useGSAP (() => {

        const titles = gsap.utils.toArray<HTMLElement>('.section-title');

        if (titles.length > 0) {
            titles.forEach(title => {
                const splitTitle = new SplitTextJS(title);

                gsap.from(splitTitle.chars, {
                    opacity: 0,
                    x: -10,
                    strokeOpacity: 0,
                    stagger: 0.5,
                    duration: 3,
                    scrollTrigger: {
                        trigger: '.techsTitleContainer',
                        start: "top 100%",
                        end: "top 75%",
                        toggleActions: "play none reverse none",
                        scrub: 5,
                    },
                });
            });
        }

        gsap.from('.techsContainer', {
            opacity:0,
            scale: 0.9,
            scrollTrigger: {
                trigger: '.techsContainer',
                start: "top 100%",
                end: "top 75%",
                toggleActions: "play none reverse none",
                scrub: 10,
            },

        })
        

    }, []);

    return (
        <div className="container flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col items-center justify-center techsTitleContainer">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl section-title">
                    Some of the techs i like to 
                </h2>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl text-[var(--color-highlight)] section-title">work with</h2>
            </div>
            <div className="relative flex flex-col items-center justify-center gap-0 px-4 md:px-0 techsContainer">
                <div className="top-0 scroll-line-static-top" style={{ height: `9rem`}}></div>
                <div className="w-100 xl:w-[85%] bg-[rgb(16,16,16,0.25)] border border-[var(--color-light)] p-12">
                    <div className="grid grid-cols-2 gap-12 md:grid-cols-5">
                        <div className="flex items-center justify-center w-full h-14">
                            <Image 
                                alt="CSS"
                                width={0}
                                height={0}
                                style={{ width: 'auto', height: '100%' }}
                                src={"/img/logos/css-3.svg"}
                                title="CSS"
                            >
                            </Image>
                        </div>
                        <div className="flex items-center justify-center w-full h-14">
                            <Image 
                                alt="Python"
                                width={0}
                                height={0}
                                style={{ width: 'auto', height: '100%' }}
                                src={"/img/logos/python-5.svg"}
                                title="Python"
                            >
                            </Image>
                        </div>
                        <div className="flex items-center justify-center w-full h-14">
                            <Image 
                                alt="Javascript"
                                width={0}
                                height={0}
                                style={{ width: 'auto', height: '100%' }}
                                src={"/img/logos/logo-javascript.svg"}
                                title="Javascript"
                            >
                            </Image>
                        </div>
                        <div className="flex items-center justify-center w-full h-14">
                            <Image 
                                alt="React"
                                width={0}
                                height={0}
                                style={{ width: 'auto', height: '100%' }}
                                src={"/img/logos/react-2.svg"}
                                title="React"
                            >
                            </Image>
                        </div>
                        <div className="flex items-center justify-center w-full h-14">
                            <Image 
                                alt="Django"
                                width={0}
                                height={0}
                                style={{ width: 'auto', height: '100%' }}
                                src={"/img/logos/django.svg"}
                                title="Django"
                            >
                            </Image>
                        </div>
                        <div className="flex items-center justify-center w-full h-14">
                            <Image 
                                alt="Tailwind"
                                width={0}
                                height={0}
                                style={{ width: 'auto', height: '100%' }}
                                src={"/img/logos/tailwind-css-1.svg"}
                                title="Tailwind"
                            >
                            </Image>
                        </div>
                        <div className="flex items-center justify-center w-full h-14">
                            <Image 
                                alt="Bootstrap"
                                width={0}
                                height={0}
                                style={{ width: 'auto', height: '100%' }}
                                src={"/img/logos/bootstrap-5.svg"}
                                title="Bootstrap"
                            >
                            </Image>
                        </div>
                        <div className="flex items-center justify-center w-full h-14">
                            <Image 
                                alt="GSAP"
                                width={0}
                                height={0}
                                style={{ width: 'auto', height: '100%'}}
                                src={"/img/logos/gsap-greensock.svg"}
                                title="GSAP"
                            >
                            </Image>
                        </div>
                        <div className="flex items-center justify-center w-full h-14">
                            <Image 
                                alt="Angular"
                                width={0}
                                height={0}
                                style={{ width: 'auto', height: '100%'}}
                                src={"/img/logos/angular.svg"}
                                title="Angular"
                            >
                            </Image>
                        </div>
                        <div className="flex items-center justify-center w-full h-14">
                            <Image 
                                alt="NodeJs"
                                width={0}
                                height={0}
                                style={{ width: 'auto', height: '100%'}}
                                src={"/img/logos/nodejs.svg"}
                                title="NodeJs"
                            >
                            </Image>
                        </div>
                        
                    </div>
                </div>
                <div className="top-0 scroll-line-static-bottom" style={{ height: `9rem`}}></div>
            </div>
        </div>
    );
};

export default TechnologiesSection