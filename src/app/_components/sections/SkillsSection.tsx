
"use client";

import { motion } from "framer-motion";
import { type StaticImageData } from "next/image"; 

import { SkillCard } from "../ui/SkillCard";
import { SoftSkill } from "../ui/SoftSkill";

interface Skill {
  icon: StaticImageData;
  title: string;
  items: string[];
}

interface SkillsSectionProps {
  skills: Skill[];
  
}


export const SkillsSection = ({ skills }: SkillsSectionProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
        delayChildren: 0.5,
      },
    },
  };

  const softSkillsList = ["Inglês Avançado", "Scrum", "Desenvolvimento ágil", "Comunicação", "Trabalho em equipe", "Proatividade"];

  return (
    <div id="skills" className="min-h-screen flex flex-col gap-12 py-20">
      <div className="text-center font-typographica text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
        MINHAS SKILLS
      </div>
      <div className="flex flex-col md:flex-row gap-12">
        {/* Coluna de Soft Skills */}
        <div className="md:w-1/3 space-y-4">
          <h3 className="text-2xl font-semibold text-pink-400">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {softSkillsList.map((skill, i) => (
              <SoftSkill key={i} title={skill} />
            ))}
          </div>
        </div>

        {/* Coluna de Hard Skills */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full md:w-2/3 grid md:grid-cols-2 gap-6"
        >
      
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              items={skill.items}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};