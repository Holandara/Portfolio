
"use client";

import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";

interface Project {
  icon: StaticImageData;
  title: string;
  items: string[];
  habilidades: string[];
  link?: string;
  github?: string;
}

interface ProjectsSectionProps {
  projetos: Project[];
}


export const ProjectsSection = ({ projetos }: ProjectsSectionProps) => {
  return (

    <div id="projects" className="flex flex-col items-center gap-12 py-20">
      <div className="font-typographica text-5xl md:text-7xl bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
        MEUS PROJETOS
      </div>
      <div className="flex flex-col gap-20 max-w-4xl w-full">
        {projetos.map((project, index) => (
          <motion.div
            key={project.title} // É melhor usar uma chave única como o título do projeto
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} gap-8 items-center`}
            
          >
            {/* Coluna da Imagem */}
            <div className="w-full md:w-1/2">
              <Image
                src={project.icon}
                alt={project.title}
                width={500}
                height={300}
                className="rounded-xl object-cover border border-purple-900 shadow-lg shadow-purple-950/30"
              />
            </div>

            {/* Coluna do Texto */}
            <div className="md:w-1/2 space-y-4 text-pink-100">
              <h3 className="text-3xl font-bold text-pink-400">{project.title}</h3>
              <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                {project.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.habilidades.map((tag, i) => (
                  <span key={i} className="bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <div className="flex gap-4 pt-2 text-sm">
                {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">🔗 Ver Projeto</a>}
                {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">💻 GitHub</a>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};