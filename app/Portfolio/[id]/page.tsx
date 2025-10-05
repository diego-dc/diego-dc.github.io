// app/(portfolio)/[id]/page.tsx
import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

import projects from "@/data/portfolio.json";

import Background from "@/components/layout/Background/Background";
import ProyectDisplay from "@/components/pages/ProyectDisplay/ProyectDisplay";
import ProjectCard from "@/components/ui/ProjectCard/ProjectCard";
import ContactCarousel from "@/components/ui/ContactCarousel/ContactCarousel";

interface PortfolioProps {
  params: { id: string };
}

// Generar rutas estáticas basadas en tu JSON
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.index.toString(),
  }));
}

// Generar metadata dinámica para cada proyecto
export async function generateMetadata({ params }: PortfolioProps): Promise<Metadata> {
  const { id } = params;
  const project = projects.find((item) => item.index === Number(id));

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.projectName,
    description: project.description,
  };
}

export default function Page({ params }: PortfolioProps) {
  const { id } = params;
  const project = projects.find((item) => item.index === Number(id));
  var nextProject = projects.find((item) => item.index === Number(id) + 1);

  if (!project) {
    return <div>Project Not Found</div>;
  }

  if (!nextProject) {
    nextProject = projects.find((item) => item.index === 1);
  }

  return (
    <>
      <main>
        <Background></Background>
        <section id="ProjectDisplay" className="p-0 m-0">
          <ProyectDisplay project={project} />
        </section>
        <section id="UpNext" className="px-10 mb-32 xl:p-0">
          <div className="flex flex-col items-center justify-center w-screen space-y-10 upNext-section">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl">
              <span className="highlights-title">Up </span>{" "}
              <span className="text-[var(--color-highlight)] highlights-title">
                Next
              </span>
            </h2>
            {nextProject && (
              <div className="w-[90%] xl:w-[85%]">
                <Link href={`/Portfolio/${nextProject.index}`}>
                  <ProjectCard
                    index={nextProject.index}
                    projectName={nextProject.projectName}
                    tags={nextProject.tags}
                    date={nextProject.date}
                    imageSrc={nextProject.imageSrc}
                  ></ProjectCard>
                </Link>
              </div>
            )}
          </div>
        </section>
        <section className="p-0">
          <ContactCarousel></ContactCarousel>
        </section>
      </main>
    </>
  );
}
