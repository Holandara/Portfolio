"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { SkillCard } from "@/app/components/skillcard";
import { SoftSkill } from "@/app/components/softskills";
import { Projetos } from "@/app/components/projetos";
import { ContactMe } from "@/app/components/ContactMe";
import Image, { StaticImageData } from 'next/image';
import CriaProjetos from "@/app/components/projetosDados";
import habilidades from "@/app/components/skills";


interface ProjectProps {
    icon: StaticImageData;
    title: string;
    items: string[];
    habilidades: string[];
    link?: string;
    github?: string;
}

interface SkillProps {
    icon: StaticImageData;
    title: string;
    items: string[];
}

interface SkillCardProps {
    icon: string; 
    title: string;
    items: string[];
}
const HeroSection = ({ roles, currentRoleIndex }: { roles: string[]; currentRoleIndex: number }) => (

    <div className="bg-clip-border z-10 h-screen flex flex-col justify-center items-center text-2xl">
        <div className="justify-start">Oie! Eu me chamo</div>
        <div className="py-10 md:text-7xl font-typographica text-6xl items-center text-center bg-gradient-to-r from-purple-500 to-danger bg-clip-text text-transparent">
            SARA  HOLANDA
        </div>
        <div className="flex items-center justify-center gap-2 mt-4 text-xl md:text-2xl">
            <div className="relative h-10 inline-flex items-center">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={currentRoleIndex}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block"
                    >
                        {roles[currentRoleIndex]}
                    </motion.span>
                </AnimatePresence>
            </div>
        </div>
    </div>

);
const SkillsSection = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.5,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };
    return (
        <div className="min-h-screen flex flex-col md:flex-row items-start md:items-top gap-8 mt-50">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="md:sticky md:top-1/2 md:-translate-y-1/2 md:w-1/3 px-4"
            >

                {/* GAMBIARRA */}
                <div className="visible md:invisible grid-flow-row-dense w-full md:w-1/2 grid md:grid-cols-2 grid-cols-0 lg:grid-cols-2 gap-1 px-1 whitespace-nowrap">
                    <div className="pt-4 col-span-2 text-2xl ">
                        <div className="bg-amber-50 h-1 w-10" />
                        Soft Skills
                    </div>
                    
                    <div className="gap-1">
                    <SoftSkill title="Inglês Avançado" />
                    <SoftSkill title="Scrum" />
                    <SoftSkill title="Desenvolvimento ágil" />
                    <SoftSkill title="Comunicação" />
                    <SoftSkill title="Trabalho em equipe" />
                    <SoftSkill title="Proatividade" />

                    </div>
                </div>
                {/* fim da GAMBIARRA */}
                <div className="mt-10 mb-[-190] md:mb-0 font-typographica text-5xl md:text-7xl bg-gradient-to-r from-purple-500 to-danger bg-clip-text text-transparent">
                    HARD SKILLS
                </div>
                <div className="md:visible collapse grid-flow-row-dense w-full md:w-1/2 grid md:grid-cols-2 grid-cols-0 lg:grid-cols-2 gap-1 px-1 whitespace-nowrap">
                    <div className="pt-4 col-span-2 text-2xl ">
                        <div className="bg-amber-50 h-1 w-10" />
                        Soft Skills
                    </div>

                    <div className="gap-1">
                    <SoftSkill title="Inglês Avançado" />
                    <SoftSkill title="Scrum" />
                    <SoftSkill title="Desenvolvimento ágil" />
                    <SoftSkill title="Comunicação" />
                    <SoftSkill title="Trabalho em equipe" />
                    <SoftSkill title="Proatividade" />

                    </div>
                </div>
            </motion.div>
                <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full md:w-1/2 grid md:grid-cols-2 grid-cols-0 lg:grid-cols-2 gap-6 px-0"
            >
            {habilidades.map((skill, index) => (
                <SkillCard
                    key={index}
                    icon={skill.icon}
                    title={skill.title}
                    items={skill.items}
                />
                ))}
            </motion.div>
        </div>
    );
};

const ProjectsSection = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.5,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

{/* PROJETOS */}
    return (
        <div className="min-h-screen flex flex-col md:flex-row items-start md:items-top gap-8 py-12 mt-50">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="md:sticky md:top-1/2 md:-translate-y-1/2 md:w-1/3 px-4 py-5 mb-1"
            >
                
                <div className="font-typographica text-5xl md:text-7xl bg-gradient-to-r from-purple-500 to-danger bg-clip-text text-transparent">
                    PROJETOS
                </div>
                

                <div className="pt-4 col-span-2 text-2xl">
                        <div className="bg-amber-50 h-1 w-10" />
                        Front-end
                    </div>
                    <div className="gap-1">
                    <SoftSkill title="Freelancers" />
                    <SoftSkill title="Faculdade" />
                    <SoftSkill title="Projetos pessoais" />
                    <SoftSkill title="Desafios" />
                    </div>
                
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full md:w-1/2 grid md:grid-cols-2 grid-cols-0 lg:grid-cols-2 gap-6 px-0"
            >
                {CriaProjetos.map((project, index) => (
                    <motion.div key={index} variants={item} whileHover={{ scale: 1.04 }}>
                        <Projetos
                            icon={project.icon}
                            title={project.title}
                            items={project.items}
                            habilidades={project.habilidades}
                            link={project.link}
                            github={project.github}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

 {/* Estrutura da página */}
export default function Home() {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const roles = ["Web Developer", "Frontend Developer", "UI/UX Designer", "React Developer"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
            <HeroSection roles={roles} currentRoleIndex={currentRoleIndex} />
            <SkillsSection />
            <ProjectsSection />
            <ContactMe />
            <div className="fixed bottom-4 right-4">
            <motion.div whileHover={{ scale: 1.04 }}>
            </motion.div>
            </div>
        </main>
    );
}
