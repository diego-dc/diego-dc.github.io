// Project types
export interface Project {
  index: number;
  projectName: string;
  tags: string[];
  date: string;
  imageSrc: string;
  description: string;
  otherImages: string[];
  link?: string;
  company?: string;
}

// Icon component props
export interface IconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

// Component props
export interface PortfolioSectionProps {
  limit?: number;
}

export interface ProjectCardProps {
  index: number;
  projectName: string;
  tags: string[];
  date: string;
  imageSrc: string;
}

export interface ProyectDisplayProps {
  project: Project;
}

export interface ScrollLineProps {
  height?: number;
  width?: string;
  children?: React.ReactNode;
}
