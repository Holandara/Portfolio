
import Image, { type StaticImageData } from 'next/image';

interface SkillCardProps {
  icon: StaticImageData;
  title: string;
  items: string[];
}

export const SkillCard = ({ icon, title, items }: SkillCardProps) => {
  

  return (
    <div className="
      bg-white/5 backdrop-blur-sm 
      border border-white/10 
      p-6 rounded-2xl 
      h-full 
      flex flex-col
      transition-all duration-300
      hover:border-pink-400/50 hover:bg-white/10
    ">
      <div className="flex items-center gap-4 mb-4">
      
        <Image 
          src={icon} 
          alt={`Ícone de ${title}`} 
          width={32} 
          height={32} 
        />
        <h3 className="text-xl font-bold text-pink-400">{title}</h3>
      </div>
      <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
};