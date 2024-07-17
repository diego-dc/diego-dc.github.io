"use client"

import React from "react"
import ProjectCard from "../ProjectCard/ProjectCard";

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
    return (
        <div className="container flex flex-col gap-12">
            <div className="flex justify-center">
                <h2 className="text-6xl">
                    Projects <span className="text-[var(--color-highlight)]">Highlights</span>
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