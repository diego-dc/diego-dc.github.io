"use client";
import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

import Image from "next/image";
import ScrollLineStatics from "../../ui/ScrollLineStatics/ScrollLineStatics";

interface PortfolioData {
  description: string;
  index: number;
  projectName: string;
  tags: string[];
  date: string;
  imageSrc: string;
  otherImages: string[];
  link?: string;
  company?: string;
}

interface ProyectDisplayProps {
  project: PortfolioData;
}

const ProyectDisplay: React.FC<ProyectDisplayProps> = ({ project }) => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".project-presentation-div", {
      transform: "scale(0)",
      duration: 1,
    });

    gsap.from(".image-section", {
      opacity: 0,
      scale: 0.5,
      scrollTrigger: {
        trigger: ".image-section",
        start: "top 100%",
        end: "top 75%",
        toggleActions: "play none reverse none",
        scrub: 5,
      },
    });

    gsap.from(".description-section", {
      opacity: 0,
      scale: 0.5,
      scrollTrigger: {
        trigger: ".description-section",
        start: "top 100%",
        end: "top 75%",
        toggleActions: "play none reverse none",
        scrub: 5,
      },
    });

    const projectImages = gsap.utils.toArray<HTMLElement>(".project-images");

    if (projectImages.length > 0) {
      projectImages.forEach((projectImage) => {
        gsap.from(projectImage, {
          opacity: 0,
          scale: 0.5,
          scrollTrigger: {
            trigger: projectImage,
            start: "top 100%",
            end: "top 75%",
            scrub: 4,
          },
        });
      });
    }

    {
      /* TODO: This effect is for a external element only existing in [id]/page.tsx - Its not a very clean way to achieve this.*/
    }

    gsap.from(".upNext-section", {
      opacity: 0,
      scale: 0.5,
      scrollTrigger: {
        trigger: ".upNext-section",
        start: "top 100%",
        end: "top 75%",
        toggleActions: "play none reverse none",
        scrub: 5,
      },
    });
  }, []);

  if (!project) {
    return <div>No se pudo desplegar el proyecto correctamente...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full pt-40 pb-20 space-y-20">
      <div className="flex flex-col items-center justify-center space-y-6 text-center project-presentation-div">
        <p className="p-0 m-0 text-md md:text-lg lg:text-xl text-slate-500">
          Project
        </p>
        <h1 className="mb-2 text-3xl sm:text-3xl md:text-6xl lg:text-6xl xl:text-8xl">
          {project.projectName}
        </h1>
        <div className="flex flex-wrap gap-2 project-item-tags ">
          {project.tags.map((tag, i) => (
            <div
              key={i}
              className="px-3 py-2 text-xs font-medium leading-none lowercase border rounded-full glossy border-base-300"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      {/* Imagen con scroll-lines */}

      <ScrollLineStatics>
        <div className="w-100 xl:w-[85%] bg-[rgb(16,16,16,0.25)] border border-[var(--color-light)] p-12 relative aspect-video w-full rounded image-section">
          <Image
            alt="ProjectImage"
            src={`${project.imageSrc}`}
            title="ProjectImage"
            objectFit="cover"
            fill
            className="rounded"
          ></Image>
        </div>
      </ScrollLineStatics>

      {/* Container con info del proyecto */}

      <div className="flex flex-col w-4/5 h-full overflow-hidden border rounded border-base-300 description-section">
        <div className="flex items-center h-10 gap-4 px-4 border-b min-h-10 border-base-300 glossy-90">
          <h2 className="text-sm font-medium tracking-normal lowercase cursor-default font-body text-neutral">
            {project.projectName}
          </h2>
          <div className="flex gap-2 ml-auto text-base-300">
            <svg
              data-v-2cdc1c14=""
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="icon"
              width="1em"
              height="1em"
            >
              <path d="M2.67 8c0-.37.3-.67.66-.67h9.34a.67.67 0 1 1 0 1.34H3.33A.67.67 0 0 1 2.67 8"></path>
            </svg>
            <svg
              data-v-2cdc1c14=""
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="icon"
              width="1em"
              height="1em"
            >
              <path d="M8.2 4c-1.12 0-1.82-.05-2.56.33a3 3 0 0 0-1.31 1.3C3.95 6.39 4 7.09 4 8.2v7.6c0 1.12-.05 1.82.33 2.56a3 3 0 0 0 1.3 1.31c.75.38 1.45.33 2.57.33h7.6c1.12 0 1.82.05 2.56-.33a3 3 0 0 0 1.31-1.3c.38-.75.33-1.45.33-2.57V8.2c0-1.12.05-1.82-.33-2.56a3 3 0 0 0-1.3-1.31C17.61 3.95 16.91 4 15.8 4Zm0 2h7.6c1.12 0 1.54.05 1.65.1a1 1 0 0 1 .44.45c.06.11.11.53.11 1.65v7.6c0 1.12-.05 1.54-.1 1.65a1 1 0 0 1-.45.44c-.11.06-.53.11-1.65.11H8.2a6 6 0 0 1-1.65-.1 1 1 0 0 1-.44-.45A6 6 0 0 1 6 15.8V8.2c0-1.12.05-1.54.1-1.65a1 1 0 0 1 .45-.44C6.66 6.05 7.08 6 8.2 6"></path>
            </svg>
            <svg
              data-v-2cdc1c14=""
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="icon"
              width="1em"
              height="1em"
            >
              <path d="M3.53 3.53a.67.67 0 0 1 .94 0L8 7.06l3.53-3.53a.67.67 0 1 1 .94.94L8.94 8l3.53 3.53a.67.67 0 1 1-.94.94L8 8.94l-3.53 3.53a.67.67 0 1 1-.94-.94L7.06 8 3.53 4.47a.67.67 0 0 1 0-.94"></path>
            </svg>
          </div>
        </div>
        <div className="p-4 font-medium glossy-75 text-neutral">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex flex-col col-span-2 p-2 space-y-8 md:p-10 lg:p-12">
              <div className="flex flex-col text-start">
                <p className="text-md text-slate-500">Year</p>
                <p className="text-lg">{project.date}</p>
              </div>
              <div className="flex flex-col text-start">
                <p className="text-sm font-medium md:text-md text-slate-500">
                  Description
                </p>
                <p className="font-medium text-md md:text-lg">
                  {project.description}
                </p>
              </div>
            </div>
            <div className="flex flex-col p-12 space-y-8">
              {project.company && (
                <div className="flex flex-col text-start">
                  <p className="font-medium text-md text-slate-500">
                    Comissioned by / On behalf of
                  </p>
                  <p className="text-lg font-medium">{project.company}</p>
                </div>
              )}
              <div className="flex flex-col text-start">
                <p className="mb-2 text-sm font-medium md:text-md text-slate-500">
                  Tags
                </p>
                <div className="flex flex-wrap gap-2 project-item-tags ">
                  {project.tags.map((tag, i) => (
                    <div
                      key={i}
                      className="px-3 py-2 text-xs font-medium leading-none lowercase border rounded-full glossy border-base-300"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
              {project.link && (
                <div className="flex flex-col text-start">
                  <p className="mb-2 text-sm font-medium md:text-md text-slate-500">
                    Link to project
                  </p>
                  <Link
                    href={project.link}
                    className="button-with-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      width={16}
                      height={16}
                      stroke="currentColor"
                      fill="currentColor"
                    >
                      <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                    </svg>
                    <span className="ms-1">Visit Page</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Imagenes extras del proyecto */}

      <div className="flex flex-col items-center justify-center w-4/5 space-y-12">
        {project.otherImages.map((imageSrc, i) => (
          <div className="w-100 xl:w-[85%] bg-[rgb(16,16,16,0.25)] border border-[var(--color-light)] p-12 relative aspect-video w-full rounded project-images">
            <Image
              alt={`ProjectImage${i}`}
              src={`${imageSrc}`}
              title={`ProjectImage${i}`}
              objectFit="cover"
              fill
              className="rounded"
            ></Image>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProyectDisplay;
