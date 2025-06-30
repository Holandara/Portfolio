import { StaticImageData } from 'next/image';

interface Habilidade {
  icon: string; 
  title: string;
  items: string[];
}

const habilidades: Habilidade[] = [
  {
    icon: "images/skills/JS.svg",
    title: "Javascript",
    items: ["Lógica de programação", "Estrutura de dados", "API's"]
  },
  {
    icon: "images/skills/reactlogo.svg",
    title: "React JS",
    items: ["UIX Design", "React Hooks", "Styled Components"]
  },
  {
    icon: "images/skills/tailwind.svg",
    title: "Tailwind CSS",
    items: ["UI/UX Design", "Componentes", "Responsividade", "Animações"]
  },
  {
    icon: "images/skills/figma.svg",
    title: "Figma",
    items: ["Wireframes", "Prototipagem", "UI/UX Design", "Design System"]
  },
  {
    icon: "images/skills/typescript.svg",
    title: "TypeScript",
    items: ["Interfaces", "Lógica de Programação", "Estrutura de Dados"]
  },
  {
    icon: "images/skills/git.svg",
    title: "Git",
    items: ["Controle de versão", "Branches", "Pull Requests", "Issues"]
  },
  {
    icon: "images/skills/flutter.svg",
    title: "Flutter",
    items: ["UI/UX Design", "Componentes", "Responsividade", "Animações"]
  }
];

export default habilidades;
