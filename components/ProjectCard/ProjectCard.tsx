"use client";

import React from "react";
import Image from "next/image";
import "./ProjectCard.css";

interface ProjectCardProps {
  index: number;
  projectName: string;
  tags: string[];
  date: string;
  imageSrc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  projectName,
  tags,
  date,
  imageSrc,
}) => {
  return (
    <div className="project-card group/project project-item relative mt-10 justify-between gap-4 rounded border border-[var(--color-light)] p-8 text-sm font-medium transition-all md:gap-y-3 xl:mt-0 xl:px-8 xl:py-20 xl:hover:gap-x-0 bg-[rgb(15,15,15,0.25)]">
      <div className="pt-1 transition-all project-item-index md:w-5 md: xl:group-hover/project:w-0 xl:group-hover/project:opacity-0">
        {index}
      </div>
      <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-6xl xl:w-3/5 2xl:w-2/5 project-item-title">
        {projectName}
      </h3>
      <div className="flex gap-0 transition-all project-item-year justify-self-end xl:group-hover/project:gap-2">
        {date}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          fill="currentColor"
          className="w-0 mt-px transition-all icon text-neutral xl:group-hover/project:w-4"
          width={16}
          height={16}
        >
          <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
        </svg>
      </div>
      <div className="flex flex-wrap gap-2 project-item-tags ">
        {tags.map((tag, i) => (
          <div
            key={i}
            className="px-3 py-2 text-xs font-medium leading-none lowercase border rounded-full glossy border-base-300"
          >
            {tag}
          </div>
        ))}
      </div>
      <div className="project-item-image group/deck relative z-10 mx-4 -mt-20 -mb-4 aspect-[16/9] transition-all group-hover/project:scale-100 group-hover/project:opacity-100 sm:mb-0 sm:ml-auto sm:mr-0 sm:w-9/12 md:w-8/12 lg:mr-16 lg:w-6/12 xl:w-[37%] xl:absolute xl:left-[70%] xl:top-[45%] xl:m-0 xl:h-full xl:w-auto xl:-translate-x-1/2 xl:-translate-y-1/2 xl:scale-75 xl:opacity-0">
        <div
          className="hidden image-card xl:block opacity-15"
          style={{ backgroundColor: "#ffffff" }}
        ></div>
        <div className="image-card hidden xl:block opacity-30 xl:group-hover/deck:-rotate-1 bg-[var(--color-accent)]"></div>
        <div className="image-card hidden xl:block opacity-45 xl:group-hover/deck:-rotate-2 bg-[var(--color-accent)]"></div>
        <div className="image-card hidden xl:block opacity-60 xl:group-hover/deck:-rotate-3 bg-[var(--color-accent)]"></div>
        <div className="image-card hidden xl:block opacity-75 xl:group-hover/deck:rotate-[-4deg] bg-[var(--color-accent)]"></div>
        <Image
          width={480}
          height={270}
          alt="Diego Caviedes Portfolio Section"
          loading="lazy"
          src={imageSrc}
          className="image-card max-w-[1250px] md:max-w-[75vw] lg:max-w-[50vw] xl:max-w-[600px] sm:-rotate-3 xl:rotate-0 xl:group-hover/deck:rotate-[-5deg]"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
