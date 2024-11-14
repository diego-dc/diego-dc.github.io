// app/(portfolio)/[id]/page.tsx

import React from "react";
import Head from "next/head";

import projects from "@/data/portfolio.json";

import Background from "@/components/Background/Background";
import ProyectDisplay from "@/components/ProyectDisplay/ProyectDisplay";

interface PortfolioProps {
  params: { id: string };
}

interface PortfolioData {
  description: string;
  index: number;
  projectName: string;
  tags: string[];
  date: string;
  imageSrc: string;
}

// Generar rutas estáticas basadas en tu JSON
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.index.toString(),
  }));
}

export default function Page({ params }: PortfolioProps) {
  const { id } = params;
  const project = projects.find((item) => item.index === Number(id));

  if (!project) {
    return <div>Project Not Found</div>;
  }

  return (
    <>
      <Head>
        <title>{project.projectName}</title>
        <meta name="description" content={project.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Background></Background>
        <ProyectDisplay project={project} />
      </main>
    </>
  );
}
