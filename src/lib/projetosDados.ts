
import { type StaticImageData } from 'next/image';


import auroraIcon from '/public/images/projetos/aurora.gif';
import cursoIcon from '/public/images/projetos/curso.png';
import joguinhoIcon from '/public/images/projetos/joguinho.gif';
import somostechIcon from '/public/images/projetos/somostech.png';
import digiteamIcon from '/public/images/projetos/logo_digiteam.png';
import nabuquizzIcon from '/public/images/projetos/Nabuquizz.png';



interface Project {
  icon: StaticImageData;
  title: string;
  items: string[];
  habilidades: string[];
  link?: string;
  github?: string;
}

 
const projects: Project[] = [ 
    {
        icon: auroraIcon,
        title: "Aurora",
        items: ["Aplicativo mobile de apoio a mulheres em situação de vulnerabilidade, concebido como projeto de impacto social na faculdade.", 
                " Minha Atuação: Responsável pelo ciclo de produto, da pesquisa e documentação ágil à prototipagem da UI/UX no Figma e desenvolvimento inicial em Flutter.", 
                "Status: Em Progresso!! 🚧"],
        habilidades: ["Figma", "Flutter", "ui/ux design", "Documentação", "Metodologias Ágeis"],
        link: "/aurora"
    },
    {
        icon: cursoIcon, 
        title: "Site de Cursos",
        items: ["Landing page responsiva para uma empresa de cursos, projetada para converter visitantes em alunos.",
                "Tecnologias: Desenvolvida com React e Tailwind CSS, focando em componentes reutilizáveis e arquitetura escalável para futuras integrações de e-commerce."],
        habilidades: ["Figma", "React JS", "Tailwind CSS"],
    },
    {
        icon: joguinhoIcon,
        title: "Joguinho",
        items: ["Jogo 2D de plataforma, criado como um projeto pessoal para explorar os fundamentos do desenvolvimento de games.",
                "Minha Atuação: Criação completa do projeto, incluindo a programação da lógica em Python (PyGame), pixel art dos sprites e design de níveis."],
        habilidades: ["PyGame", "Python", "ui/ux design", "Ilustração", "Sprites", "Aseprite"],
        github: "https://github.com/Holandara/pythonProject"
    },
    {
        icon: somostechIcon, 
        title: "Somos_Tech",
        items: ["Desenvolvedora front-end e designer na comunidade criada por mulheres e pra mulheres apaixonadas por tecnologia.",
                " "],
        habilidades: ["Angular", "Congressos","Hackathons"],
        link:"https://somostech.tech/home"
    },
    {
        icon: digiteamIcon,
        title: "Gestão de Licenças",
        items: ["Dashboard para gerenciamento de licenças de software, desenvolvida como um desafio técnico para uma vaga júnior.",
                "Minha Atuação: Implementei a interface e as regras de negócio, incluindo autenticação e limites de login, utilizando Angular, TypeScript e PrimeNG.",],
        habilidades: ["Angular 19", "PrimeNG","TailwindCSS","TypeScript"],
        link: "https://junior-desafio.vercel.app/login",
        github: "https://github.com/Holandara/junior-desafio"
    },
    {
        icon: nabuquizzIcon, 
        title: "Nabuquizz",
        items: ["Aplicativo mobile de Quizz para Android, inspirado no meu cachorro e desenvolvido do zero como projeto pessoal.",
                "Minha Atuação: Responsável por todo o processo: design da interface no Figma, criação da arte dos personagens e codificação do app em Flutter.",
                " "],
        habilidades: ["Flutter 3", "AndroidStudio","Figma","ClipStudioPaint"],
        github: "https://github.com/Holandara/Nabuquizz"
    },
];

export default projects;