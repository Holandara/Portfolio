"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { SkillCard } from "@/app/components/skillcard";
import { SoftSkill } from "@/app/components/softskills";
import { Projetos } from "@/app/components/projetos";
import { ContactMe } from "@/app/components/ContactMe";
// ícones
import JSIcon from "./public/JS.svg";
import ReactIcon from "./public/reactlogo.svg";
import TailwindIcon from "./public/tailwind.svg";
import FigmaIcon from "./public/figma.svg";
import NodeIcon from "./public/nodejs.svg";
import TSIcon from "./public/typescript.svg";
import FlutterIcon from "./public/flutter.svg";
import GitIcon from "./public/git.svg";
import Aurora from "./public/aurora.gif";
import Curso from "./public/curso.png";
import Joguinho from "./public/joguinho.gif";
import SomosTech from "./public/somostech.webp";
import Digiteam from "./public/logo_digiteam.png"

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
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    const skills = [
        { icon: JSIcon, title: "Javascript", items: ["Lógica de programação", "Estrutura de dados", "API's"] },
        { icon: ReactIcon, title: "React JS", items: ["UIX Design", "React Hooks", "Styled Components"] },
        { icon: TailwindIcon, title: "Tailwind CSS", items: ["UI/UX Design", "Componentes", "Responsividade", "Animações"] },
        { icon: FigmaIcon, title: "Figma", items: ["Wireframes", "Prototipagem", "UI/UX Design", "Design System"] },
        { icon: NodeIcon, title: "Node.js", items: ["Servidores", "APIs REST", "Conexão com bancos de dados"] },
        { icon: TSIcon, title: "TypeScript", items: ["Interfaces", "Lógica de Programação", "Estrutura de Dados"] },
        { icon: GitIcon, title: "Git", items: ["Controle de versão", "Branches", "Pull Requests", "Issues"] },
        { icon: FlutterIcon, title: "Flutter", items: ["UI/UX Design", "Componentes", "Responsividade", "Animações"] },
    ];

    return (
        <div className="min-h-screen flex flex-col md:flex-row items-start md:items-top gap-8 mt-50">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.01 }}
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
                className="w-full md:w-1/2 grid md:grid-cols-2 grid-cols-0 lg:grid-cols-2 gap-6"
            >
                {skills.map((skill, index) => (
                    <motion.div key={index} variants={item} whileHover={{ scale: 1.04 }}>
                        <SkillCard icon={skill.icon} title={skill.title} items={skill.items} />
                    </motion.div>
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
                delayChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    const projects = [
        {
            icon: Aurora,
            title: "Aurora",
            items: ["[ Em Progresso!! 🚧]", "Projeto da faculdade de aplicativo para mulheres vítimas de violência doméstica", 
                "Toda a documentação foi estudada e feita com metodologias ágeis, a prototipagem foi feita no figma. "],
            habilidades: ["Figma", "Flutter", "ui/ux design", "Documentação", "Metodologias Ágeis"],
        },
        {
            icon: Curso,
            title: "Site de Cursos",
            items: ["Site responsivo de cursos presenciais de educação física. Com futura integração de pagamento."],
            habilidades: ["Figma", "React JS", "Tailwind CSS"],
        },
        {
            icon: Joguinho,
            title: "Joguinho",
            items: ["Joguinho feito com a biblioteca PyGame.",
                "Toda a arte e design foi feita por mim!"],
            habilidades: ["PyGame", "Python", "ui/ux design", "Ilustração", "Sprites", "Aseprite"],
            github: "https://github.com/Holandara/pythonProject"
        },
        {
            icon: SomosTech,
            title: "Somos_Tech",
            items: ["Desenvolvedora front-end e designer na comunidade criada por mulheres e pra mulheres apaixonadas por tecnologia.",
                " "],
            habilidades: ["Angular", "Congressos","Hackathons"],
            link:"somostech.tech"
        },
        {
            icon: Digiteam,
            title: "Gestão de Licenças",
            items: ["Desafio para vaga de front-end Junior, onde é desenvolvido um ambiente de gerenciamento de licenças com regras de limite de login. Logue com user: admin e senha: Admin@123",
                " "],
            habilidades: ["Angular 19", "PrimeNG","TailwindCSS","TypeScript"],
            link: "https://junior-desafio.vercel.app/login",
            github: "https://github.com/Holandara/junior-desafio"
        },
    ];
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
                {projects.map((project, index) => (
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
            <div className ="bg-purple hover:bg-danger  hover:border-amber-50 text-white font-bold py-2 px-4 rounded-full shadow-lg tooltip-default">
            🛠️ Ainda em desenvolvimento!
            </div>
            </motion.div>
            </div>
        </main>
    );
}
