
import { type StaticImageData } from 'next/image';


import auroraIcon from '/public/images/projetos/aurora.gif';
import cursoIcon from '/public/images/projetos/curso.png';
import joguinhoIcon from '/public/images/projetos/joguinho.gif';
import somostechIcon from '/public/images/projetos/somostech.webp';
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
        items: ["[ Em Progresso!! 🚧]", "Projeto da faculdade de aplicativo para mulheres vítimas de violência doméstica", 
                "Toda a documentação foi estudada e feita com metodologias ágeis, a prototipagem foi feita no figma. "],
        habilidades: ["Figma", "Flutter", "ui/ux design", "Documentação", "Metodologias Ágeis"],
        link: "/aurora"
    },
    {
        icon: cursoIcon, 
        title: "Site de Cursos",
        items: ["Site responsivo de cursos presenciais de educação física. Com futura integração de pagamento."],
        habilidades: ["Figma", "React JS", "Tailwind CSS"],
    },
    {
        icon: joguinhoIcon,
        title: "Joguinho",
        items: ["Joguinho feito com a biblioteca PyGame.",
                "Toda a arte e design foi feita por mim!"],
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
        items: ["Desafio para vaga de front-end Junior, onde é desenvolvido um ambiente de gerenciamento de licenças com regras de limite de login. Logue com user: admin e senha: Admin@123",
                " "],
        habilidades: ["Angular 19", "PrimeNG","TailwindCSS","TypeScript"],
        link: "https://junior-desafio.vercel.app/login",
        github: "https://github.com/Holandara/junior-desafio"
    },
    {
        icon: nabuquizzIcon, 
        title: "Nabuquizz",
        items: ["App de quizz insipirado no Nabuco, meu cachorro, utilizando Flutter, toda a arte foi feita por mim.",
                " "],
        habilidades: ["Flutter 3", "AndroidStudio","Figma","ClipStudioPaint"],
        github: "https://github.com/Holandara/Nabuquizz"
    },
];

export default projects;