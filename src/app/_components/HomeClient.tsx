
"use client"; 

import { useState, useEffect } from "react";
import { type StaticImageData } from 'next/image'; 

import { HeroSection } from "./sections/HeroSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ProjectsSection } from "./sections/ProjectSection";
import { ContactMe } from "./sections/ContactMe";


interface Project {
    icon: StaticImageData;
    title: string;
    items: string[];
    habilidades: string[];
    link?: string;   
    github?: string; 
  }
  
  interface Skill {
    icon: StaticImageData;
    title: string;
    items: string[];
  }
export default function HomeClient({ projetos, skills }: { projetos: Project[], skills: Skill[] }) {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const roles = ["Foco em Experiência do Usuário (UX)", "Transformando ideias em interfaces", "Experiências que clicam", "Foco no usuário, sempre", "Detalhes que entregam valor"];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <main className="max-w-[1240px] mx-auto px-5">
        <HeroSection roles={roles} currentRoleIndex={currentRoleIndex} />
        <SkillsSection skills={skills} />
        <ProjectsSection projetos={projetos} />
        <ContactMe />
      </main>
    );
  }