import { StaticImageData } from 'next/image';

interface Habilidade {
  icon: string;  // Mudamos para string pois vamos usar caminhos diretos
  title: string;
  items: string[];
}

const habilidades: Habilidade[] = [
  {
    icon: "/skills/JS.svg",
    title: "Javascript",
    items: ["Lógica de programação", "Estrutura de dados", "API's"]
  },
  {
    icon: "/skills/reactlogo.svg",
    title: "React JS",
    items: ["UIX Design", "React Hooks", "Styled Components"]
  },
  {
    icon: "/skills/tailwind.svg",
    title: "Tailwind CSS",
    items: ["UI/UX Design", "Componentes", "Responsividade", "Animações"]
  },
  {
    icon: "/skills/figma.svg",
    title: "Figma",
    items: ["Wireframes", "Prototipagem", "UI/UX Design", "Design System"]
  },
  {
    icon: "/skills/typescript.svg",
    title: "TypeScript",
    items: ["Interfaces", "Lógica de Programação", "Estrutura de Dados"]
  },
  {
    icon: "/skills/git.svg",
    title: "Git",
    items: ["Controle de versão", "Branches", "Pull Requests", "Issues"]
  },
  {
    icon: "/skills/flutter.svg",
    title: "Flutter",
    items: ["UI/UX Design", "Componentes", "Responsividade", "Animações"]
  }
];

export default habilidades;
