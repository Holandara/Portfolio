"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { SoftSkill } from "../_components/sections/softskills"

export default function AuroraPage() {
  return (
    <div className="min-h-screen py-16 px-6 md:px-12 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-sm text-purple-400 mb-2">
            Case Study
          </p>
          <h1 className="font-typographica text-[3.5rem] md:text-[5rem] leading-[1.1] bg-gradient-to-r from-purple-500 to-danger bg-clip-text text-transparent mb-6">
            Aurora
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Um aplicativo para apoio a mulheres em situação de violência, com foco em segurança, acessibilidade e acolhimento.
          </p>
          <div className="flex justify-center flex-wrap gap-2 mt-6">
            <SoftSkill title="Figma" />
            <SoftSkill title="Flutter" />
            <SoftSkill title="UI/UX" />
            <SoftSkill title="Documentação" />
            <SoftSkill title="Agile" />
          </div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-xl overflow-hidden shadow-lg mb-16"
        >
          <Image
            src="/images/projetos/aurora.gif"
            alt="Aurora Project Preview"
            width={1200}
            height={600}
            className="w-full object-cover"
          />
        </motion.div>

        {/* Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="prose prose-invert max-w-none"
        >
          {/* Contexto */}
          <h2 className="text-2xl font-bold mb-4">Contexto</h2>
          <p className="text-gray-300 mb-6">
            Aurora nasceu como parte de um projeto acadêmico voltado para o desenvolvimento de soluções tecnológicas com impacto social. A proposta era criar um app voltado ao acolhimento e à segurança de mulheres vítimas de violência doméstica.
          </p>

          {/* Solução */}
          <h2 className="text-2xl font-bold mb-4">Solução</h2>
          <p className="text-gray-300 mb-6">
            O app foi pensado com foco em usabilidade, rapidez de acesso e discrição. Utilizamos Flutter para o desenvolvimento mobile e Figma para as interfaces.
          </p>

          {/* Features */}
          <h3 className="text-xl font-bold mb-4">Principais Funcionalidades</h3>
          <ul className="list-disc list-inside text-gray-300 mb-12">
            <li>✅ Interface intuitiva e discreta</li>
            <li>🚨 Botão de pânico com geolocalização</li>
            <li>🔒 Recursos de segurança com navegação oculta</li>
            <li>🤝 Conexão com redes de apoio e emergência</li>
          </ul>

          {/* Navegação */}
          <div className="border-t border-white/10 pt-8 mt-12 flex justify-center gap-4">
            <Link
              href="/"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 hover:brightness-110 transition"
            >
              ← Voltar para Home
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
