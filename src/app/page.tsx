
import CriaProjetos from "@/lib/projetosDados";
import habilidades from "@/lib/skills";

import HomeClient from "./_components/HomeClient";

export default function Page() {
  const projetos = CriaProjetos;
  const skills = habilidades;

  return <HomeClient projetos={projetos} skills={skills} />;
}