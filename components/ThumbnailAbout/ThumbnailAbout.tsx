'use client'

import React from "react";
import { gsap } from 'gsap';
import "../../gsap/effects";
import { useGSAP } from "@gsap/react";
import "./ThumbnailAbout.css"
import SplitTextJS from 'split-text-js';


const ThumbnailAbout = () => {

    useGSAP(() => {

        const thumbnail_title = gsap.utils.toArray<HTMLElement>('.thumbnail-title');
        const thumbnail_title2 = gsap.utils.toArray<HTMLElement>('.thumbnail-title2');
        const titles = gsap.utils.toArray<HTMLElement>('.text-variant');

        const masterTimeline = gsap.timeline();
        const tl2 = gsap.timeline({ repeat: -1, delay: 5.25 });

        if (thumbnail_title.length > 0) {
            thumbnail_title.forEach(ThumbnailTitle => {
                const splitThumbnailTitle = new SplitTextJS(ThumbnailTitle);
                masterTimeline.from(splitThumbnailTitle.chars, {
                    opacity: 0,
                    x:-2,
                    stagger:0.075,
                    duration: 1.25,
                });
            });
        }

        masterTimeline.from('.text-name', {
            opacity: 0,
            rotateX: -90,
            duration: 1,
        },'-=1');

        if (thumbnail_title2.length > 0) {
            thumbnail_title2.forEach(ThumbnailTitle2 => {
                const splitThumbnailTitle2 = new SplitTextJS(ThumbnailTitle2);
                masterTimeline.from(splitThumbnailTitle2.chars, {
                    opacity: 0,
                    x:-2,
                    stagger:0.075,
                    duration: 1,
                }, "+=0.1"); // "+=0.2" para un pequeño retraso entre animaciones
            });
        }

        masterTimeline.from('.text-wrapper', {
            opacity: 0,
            rotateX: -90,
            stagger: 0.1,
            duration: 1,
        }, "-=1");

        if (titles.length > 0) {
            titles.forEach(title => {
                const splitTitle = new SplitTextJS(title);
                tl2
                    .from(splitTitle.chars, {
                        opacity: 0,
                        y: 80,
                        rotateX: -90,
                        stagger: 0.2,
                        duration: 1,
                    }, "<")
                    .to(splitTitle.chars, {
                        opacity: 0,
                        y: -80,
                        rotateX: -90,
                        stagger: 0.1,
                        duration: 1,
                    }, "<4");
            });
        }
    }, []);

    return (
        <div className="container flex flex-col items-center justify-center w-full title-container">
                <div className="mb-2 text-3xl sm:text-3xl md:text-6xl lg:text-6xl xl:text-8xl">
                    <span className="thumbnail-title">Hey! my name is </span><span className="text-[var(--color-highlight)] text-name inline-block">Diego</span>.
                </div>
                <div className="mb-2 text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl thumbnail-title2">
                    I&apos;m dedicated to coding with 
                </div>
                <div className="container sm:mt-2 md:mt-6 lg:mt-10">
                    <div className="text-wrapper">
                        <div className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl mb-2 text-[var(--color-highlight)] uppercase text-variant">
                            Creativity
                        </div>
                        <div className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl mb-2 text-[var(--color-highlight)] uppercase text-variant">
                            Innovation
                        </div>
                        <div className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl mb-2 text-[var(--color-highlight)] uppercase text-variant">
                            A purpose
                        </div>
                    </div>
                </div>
        </div>
    );
};


export default ThumbnailAbout
