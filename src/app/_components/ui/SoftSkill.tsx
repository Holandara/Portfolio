
interface SoftSkillProps {
    title: string;
  }
  
  export const SoftSkill = ({ title }: SoftSkillProps) => {
    return (
      <div className="
        bg-pink-500/10      /* Fundo rosa com 10% de opacidade */
        border            /* Adiciona uma borda */
        border-pink-500/30  /* Cor da borda rosa com 30% de opacidade */
        text-pink-300     /* Cor do texto */
        text-sm           /* Tamanho da fonte pequeno */
        font-medium       /* Peso da fonte médio */
        px-3 py-1         /* Espaçamento interno (padding) */
        rounded-full      /* Bordas totalmente arredondadas (formato de pílula) */
        transition-colors   /* Animação suave na mudança de cor */
        hover:bg-pink-500/20  /* Ao passar o mouse, o fundo fica um pouco mais visível */
        hover:border-pink-500/50
      ">
        {title}
      </div>
    );
  };