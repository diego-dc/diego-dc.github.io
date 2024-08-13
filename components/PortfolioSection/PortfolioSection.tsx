/* eslint-disable import/no-duplicates */
"use client"

import React from "react"
import { useRef } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { useGSAP } from "@gsap/react";
import { gsap } from 'gsap';
import SplitTextJS from 'split-text-js';
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const projects = [
    {
        index: 1,
        projectName: 'This Website!',
        tags: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Gasp'],
        date: '2024',
        imageSrc: '/img/projects/diegc-website.png'
    },
    {
        index: 2,
        projectName: 'Nirsecl',
        tags: ['Django', 'JavaScript', 'Bootstrap' ],
        date: '2024',
        imageSrc: '/img/projects/nirsecl.png'
    },
    {
        index: 3,
        projectName: 'RedesBeauchef',
        tags: ['Django', 'JavaScript', 'Bootstrap' ],
        date: '2023',
        imageSrc: '/img/projects/RedesBeauchef.png'
      }
  ];

const PortfolioSection = () => {

    useGSAP(() => {

        const titles = gsap.utils.toArray<HTMLElement>('.highlights-title');

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
                        trigger: '.portfolio-container',
                        start: "top 100%",
                        end: "top 75%",
                        markers: true,
                        toggleActions: "play none reverse none",
                        scrub: 5,
                    },
                });
            });
        }

        const projectCards = gsap.utils.toArray<HTMLElement>('.project-card');

        if (projectCards.length > 0) {
            projectCards.forEach(projectCard => {

                const projectTitle = projectCard.querySelector<HTMLElement>('.project-item-title');
                const projectTags = projectCard.querySelector<HTMLElement>('.project-item-tags');
                const projectYear = projectCard.querySelector<HTMLElement>('.project-item-year');
                

                gsap.from(projectCard, {
                    opacity: 0,
                    x: -80,
                    scrollTrigger: {
                        trigger: projectCard,
                        start: "top 100%",
                        end: "top 75%",
                        markers: true,
                        scrub: 2,
                    },
                });
                if (projectTitle) {
                    
                    const splitProjectTitle = new SplitTextJS(projectTitle);

                    gsap.from(splitProjectTitle.chars, {
                        opacity: 0,
                        x: -10,
                        strokeOpacity: 0,
                        scrollTrigger: {
                            trigger: projectCard,
                            start: "top 100%",
                            end: "top 75%",
                            toggleActions: "play none reverse none",
                            markers: true,
                            scrub: 6,
                        },  
                    });
                }
                if (projectTags) {

                    gsap.from(projectTags, {
                        opacity: 0,
                        y: 25,
                        strokeOpacity: 0,
                        scrollTrigger: {
                            trigger: projectCard,
                            start: "top 100%",
                            end: "top 75%",
                            toggleActions: "play none reverse none",
                            markers: true,
                            scrub: 9,
                        },  
                    });
                }
                if (projectYear) {

                    gsap.from(projectYear, {
                        opacity: 0,
                        strokeOpacity: 0,
                        scrollTrigger: {
                            trigger: projectCard,
                            start: "top 100%",
                            end: "top 75%",
                            toggleActions: "play none reverse none",
                            markers: true,
                            scrub: 12,
                        },  
                    });
                }
            });
        }
    }, []);

    return (
        <div className="container flex flex-col gap-12 portfolio-container">
            <div className="flex justify-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                    <span className="highlights-title">Projects</span> <span className="text-[var(--color-highlight)] highlights-title">Highlights</span>
                </h2>
            </div>
            <div className="flex flex-col gap-[1rem] mx-auto w-full xl:w-[85%]">
                {projects.map(project => (
                    <ProjectCard
                        key={project.index}
                        index={project.index}
                        projectName={project.projectName}
                        tags={project.tags}
                        date={project.date}
                        imageSrc={project.imageSrc}
                    >
                    </ProjectCard>
                ))}      
            </div>
        </div>
    )
};

export default PortfolioSection;