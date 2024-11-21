/* eslint-disable import/no-duplicates */
"use client";

import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import SplitTextJS from "split-text-js";
import projects from "../../data/portfolio.json";
import Link from "next/link";

interface PortfolioSectionProps {
  limit?: number;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ limit = 3 }) => {
  useGSAP(() => {
    const titles = gsap.utils.toArray<HTMLElement>(".highlights-title");

    if (titles.length > 0) {
      titles.forEach((title) => {
        const splitTitle = new SplitTextJS(title);

        gsap.from(splitTitle.chars, {
          opacity: 0,
          x: -10,
          strokeOpacity: 0,
          stagger: 0.5,
          duration: 3,
          scrollTrigger: {
            trigger: ".portfolio-container",
            start: "top 100%",
            end: "top 75%",
            toggleActions: "play none reverse none",
            scrub: 5,
          },
        });
      });
    }

    const projectCards = gsap.utils.toArray<HTMLElement>(".project-card");

    if (projectCards.length > 0) {
      projectCards.forEach((projectCard) => {
        const projectTitle = projectCard.querySelector<HTMLElement>(
          ".project-item-title"
        );
        const projectTags =
          projectCard.querySelector<HTMLElement>(".project-item-tags");
        const projectYear =
          projectCard.querySelector<HTMLElement>(".project-item-year");

        gsap.from(projectCard, {
          opacity: 0,
          x: -80,
          scrollTrigger: {
            trigger: projectCard,
            start: "top 100%",
            end: "top 75%",
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
              scrub: 12,
            },
          });
        }
      });
    }
  }, []);

  return (
    <div className="flex flex-col gap-[1.5rem] mx-auto w-full xl:w-[85%]">
      {projects.slice(0, limit ?? projects.length).map((project) => (
        <Link key={project.index} href={`/Portfolio/${project.index}`}>
          <ProjectCard
            key={project.index}
            index={project.index}
            projectName={project.projectName}
            tags={project.tags}
            date={project.date}
            imageSrc={project.imageSrc}
          ></ProjectCard>
        </Link>
      ))}
    </div>
  );
};

export default PortfolioSection;
