
import { type StaticImageData } from 'next/image';

import jsIcon from '/public/images/skills/JS.svg';
import reactIcon from '/public/images/skills/reactlogo.svg';
import tailwindIcon from '/public/images/skills/tailwind.svg';
import figmaIcon from '/public/images/skills/figma.svg';
import typescriptIcon from '/public/images/skills/typescript.svg';
import gitIcon from '/public/images/skills/git.svg';
import flutterIcon from '/public/images/skills/flutter.svg';

interface Habilidade {
  icon: StaticImageData; 
  title: string;
  items: string[];
}

const habilidades: Habilidade[] = [
  { icon: jsIcon, title: "Javascript", items: ["Lógica de programação", "Estrutura de dados", "API's"] },
  { icon: reactIcon, title: "React JS", items: ["UIX Design", "React Hooks", "Styled Components"] },
  { icon: tailwindIcon, title: "Tailwind CSS", items: ["UI/UX Design", "Componentes", "Responsividade", "Animações"] },
  { icon: figmaIcon, title: "Figma", items: ["Wireframes", "Prototipagem", "UI/UX Design", "Design System"] },
  { icon: typescriptIcon, title: "TypeScript", items: ["Interfaces", "Lógica de Programação", "Estrutura de Dados"] },
  { icon: gitIcon, title: "Git", items: ["Controle de versão", "Branches", "Pull Requests", "Issues"] },
  { icon: flutterIcon, title: "Flutter", items: ["UI/UX Design", "Componentes", "Responsividade", "Animações"] }
];

export default habilidades;