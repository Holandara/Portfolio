"use client";
import { motion, AnimatePresence } from "framer-motion";

export const HeroSection = ({ currentRoleIndex, roles }: { currentRoleIndex: number; roles: string[] }) => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 md:px-0 relative">
      {/* Fundo suave animado */}
      <div className="absolute inset-0 -z-10" />

      {/* Nome e título */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-typographica text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text drop-shadow-md"
      >
        SARA HOLANDA
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-2 text-pink-300 font-mono text-lg md:text-xl"
      >
        Desenvolvedora Front-end & UX/UI Designer
      </motion.p>

      {/* Animação de roles dinâmicos */}
      <div className="h-10 mt-4 text-pink-400 font-mono text-base md:text-lg">
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

      {/* Breve descrição */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-6 max-w-xl text-gray-300 text-sm md:text-base"
      >
        Apaixonada por transformar ideias em interfaces intuitivas, pixel a pixel.
      </motion.p>

      {/* CTA */}
      <motion.a
        href="#skills"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-10 text-pink-400 text-sm hover:underline animate-bounce"
      >
        ↓ Veja minhas skills
      </motion.a>
    </section>
  );
};
