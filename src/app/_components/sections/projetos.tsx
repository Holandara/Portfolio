import { motion } from 'framer-motion';
import Image, { type StaticImageData } from 'next/image';
import { SoftSkill } from './softskills';
import Link from 'next/link'

interface ProjetosProps {
  title: string;
  icon: string | StaticImageData;
  items?: string[];
  habilidades: string[];
  link?: string;
  github?: string;
}

export const Projetos = ({ title, icon, items = [], habilidades, link, github }: ProjetosProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.04 }}
      className="group relative rounded-xl p-px bg-gradient-to-br from-purple-500 to-danger aspect-auto h-full" // Adicionei h-full aqui também para garantir
    >
      <div className="relative rounded-xl h-full">
        <div className="absolute -inset-px bg-gradient-to-br from-purple-500 to-danger rounded-xl -z-10" />
        <div className="group-hover:bg-black bg-[#1E1E1E] h-full px-4 py-7 flex flex-col items-start gap-1 rounded-xl border border-transparent">
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none flex flex-col gap-3">
            <Image
              src={icon}
              alt={title}
              width={265}
              height={265}
              className="object-contain rounded-2xl"
            />
            {title}
          </span>
          
          {/* A MUDANÇA ESTÁ AQUI, NA LINHA ABAIXO */}
          <ul className="flex-grow text-sm text-gray-300 leading-none mt-2">
            {items.map((item, index) => (
              <li key={index} className="mb-1">{item}</li>
            ))}
            <div className="pt-4 flex flex-wrap gap-2">
              {habilidades.map((habilidade, index) => (
                <SoftSkill key={index} title={habilidade} />
              ))}
            </div>
          </ul>

          <div className="mt-4">
  {link && link.startsWith('/') ? (
    // Internal link (like /aurora) - use Next.js Link
    <Link
      href={link}
      className="mt-5 font-bold bg-purple hover:bg-white p-2 rounded-full px-4 text-white hover:text-black transition"
    >
      Conferir
    </Link>
  ) : link && (
    // External link - use regular <a> tag
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5 font-bold bg-purple hover:bg-white p-2 rounded-full px-4 text-white hover:text-black transition"
    >
      Conferir
    </a>
  )}
  
  {/* Keep the GitHub button as is */}
  {github && (
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      className="ml-2 font-bold bg-purple hover:bg-white p-2 rounded-full px-4 text-white hover:text-black transition"
    >
      Repositório
    </a>
  )}
</div>
        </div>
      </div>
    </motion.div>
  );
};