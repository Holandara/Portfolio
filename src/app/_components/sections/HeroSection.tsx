
"use client"; 

import { motion, AnimatePresence } from "framer-motion";


export const HeroSection = ({ currentRoleIndex, roles }: { currentRoleIndex: number, roles: string[] }) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center space-y-6">
      <div className="text-lg md:text-xl text-pink-400">✨ Prazer, eu sou</div>
      <h1 className="text-6xl md:text-8xl font-typographica bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent drop-shadow-md">
        SARA HOLANDA
      </h1>
      <div className="text-lg md:text-2xl h-10 relative text-pink-300 font-mono">
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
      <a href="#skills" className="mt-8 text-sm text-pink-500 hover:underline animate-bounce">↓ Vamos lá!</a>
    </div>
  );
};