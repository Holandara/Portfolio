// src/app/aurora/page.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { PlantIcon } from "../_components/ui/PlantIcon";
import { PlantIcon2 } from "../_components/ui/PlantIcon2";
// Configurações do Slider
const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
};

export default function AuroraPage() {
    return (
        <div className="min-h-screen bg-[#fff8fb] text-slate-800 py-16 md:py-24 px-6 md:px-12 relative overflow-hidden">
            
            {/* Ícones decorativos com posicionamento absoluto */}
            {/* Eles só aparecem em telas médias ou maiores para não poluir o mobile */}
            <div className="hidden md:block">
                <PlantIcon className="absolute top-10 left-12 w-90 h-90 text-[#fe9cc5] opacity-30 -z-0 transform -rotate-12" />
                <PlantIcon className="absolute top-1/2 right-8 w-48 h-48 text-[#fe9cc5] opacity-20 -z-0 transform rotate-12" />
                <PlantIcon2 className="absolute top-1/2 scale-x-[-1] right-400 w-100 h-100 text-[#fe9cc5] opacity-40 -z-0" />
                <PlantIcon2 className="absolute top-10  right-12 w-100 h-100 text-[#fe9cc5] opacity-40 -z-0" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-5xl mx-auto relative z-10"
            >
                {/* 1. HEADER */}
                <header className="text-center mb-16 md:mb-24">
                    <p className="uppercase tracking-widest text-sm text-[#fe9cc5] font-semibold mb-2">
                        Case Study de UX/UI
                    </p>
                    <h1 className="font-typographica text-5xl md:text-7xl leading-tight text-[#fd4698] mb-4">
                        Aurora
                    </h1>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        Um aplicativo de acolhimento e segurança para mulheres,
                        projetado com foco em discrição, esperança e crescimento.
                    </p>
                </header>

                {/* SLIDER DE IMAGENS */}
                <motion.section 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-16 md:mb-24 shadow-xl shadow-pink-100 rounded-2xl"
                >
                    <Slider {...sliderSettings}>
                        <Image src="/images/projetos/aurora-mockup-1.png" alt="Tela 1 do Aurora" width={1200} height={900} className="rounded-2xl" />
                        <Image src="/images/projetos/aurora-mockup-2.png" alt="Tela 2 do Aurora" width={1200} height={900} className="rounded-2xl" />
                        <Image src="/images/projetos/aurora-mockup-3.png" alt="Tela 3 do Aurora" width={1200} height={900} className="rounded-2xl" />
                    </Slider>
                </motion.section>

                {/* ESTRUTURA NARRATIVA */}
                <div className="space-y-16 md:space-y-24">
                    
                    {/* 2. O DESAFIO */}
                    <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="relative h-64 md:h-full rounded-2xl overflow-hidden shadow-lg shadow-pink-100">
                             <Image src="/images/projetos/problema-ilustracao.png" alt="Ilustração representando o desafio" layout="fill" objectFit="cover" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-[#fd4698]">O Desafio</h2>
                            <p className="text-slate-600 text-lg">
                                A violência doméstica é uma crise silenciosa. Vítimas frequentemente não buscam ajuda por medo e pela falta de ferramentas que ofereçam um pedido de socorro verdadeiramente seguro e discreto. Nosso desafio era criar uma solução que pudesse ser usada sob pressão, sem levantar suspeitas.
                            </p>
                        </div>
                    </section>

                    {/* 3. INSIGHTS */}
                    <section>
                         <h2 className="text-3xl font-bold mb-8 text-center text-[#fd4698]">Principais Insights</h2>
                         <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-2xl shadow-lg shadow-pink-100 border border-pink-50 text-center">
                                <h3 className="font-bold text-lg mb-2 text-[#fd4698]">Discrição Extrema</h3>
                                <p className="text-slate-600">A usuária precisa que o app seja invisível para o agressor. A funcionalidade não pode parecer um app de segurança.</p>
                            </div>
                             <div className="bg-white p-6 rounded-2xl shadow-lg shadow-pink-100 border border-pink-50 text-center">
                                <h3 className="font-bold text-lg mb-2 text-[#fd4698]">Acesso Imediato</h3>
                                <p className="text-slate-600">Em uma emergência, cada segundo conta. O pedido de ajuda deve ser ativado com um ou dois gestos simples e rápidos.</p>
                            </div>
                             <div className="bg-white p-6 rounded-2xl shadow-lg shadow-pink-100 border border-pink-50 text-center">
                                <h3 className="font-bold text-lg mb-2 text-[#fd4698]">Além da Emergência</h3>
                                <p className="text-slate-600">O apoio não termina no pedido de socorro. Conectar com redes de apoio psicológico e jurídico é fundamental para o ciclo de recuperação.</p>
                            </div>
                         </div>
                    </section>

                    {/* 4. A SOLUÇÃO */}
                    <section>
                        <h2 className="text-3xl font-bold mb-12 text-center text-[#fd4698]">Nossa Solução em Ação</h2>
                        <div className="space-y-12">
                            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                                <div>
                                    <h3 className="text-2xl font-bold mb-3 text-[#fd4698]">Modo Camuflado</h3>
                                    <p className="text-slate-600 text-lg">Respondendo à necessidade de discrição, o Aurora pode se disfarçar de um app comum (calculadora, bloco de notas). A interface de emergência só é revelada por uma senha ou gesto secreto.</p>
                                </div>
                                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg shadow-pink-100">
                                    <Image src="/images/projetos/aurora-icone-camuflado.png" alt="Demonstração do modo camuflado" layout="fill" objectFit="cover" />
                                </div>
                            </div>
                             <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                                <div className="md:order-2">
                                    <h3 className="text-2xl font-bold mb-3 text-[#fd4698]">Botão de Pânico Inteligente</h3>
                                    <p className="text-slate-600 text-lg">Para acesso rápido, um toque longo e discreto envia um alerta silencioso com geolocalização para contatos de confiança e, opcionalmente, para as autoridades.</p>
                                </div>
                                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg shadow-pink-100 md:order-1">
                                     <Image src="/images/projetos/aurora-icone-panico.png" alt="Demonstração do botão de pânico" layout="fill" objectFit="cover" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* FOOTER */}
                <footer className="border-t border-pink-100 pt-8 mt-16 md:mt-24 text-center">
                    <p className="text-slate-500 mb-6">Explore mais sobre o projeto ou volte para a home.</p>
                     <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link href="https://www.figma.com/proto/..." target="_blank" rel="noopener noreferrer" className="px-8 py-3 w-full sm:w-auto text-center rounded-full bg-[#fd4698] text-white hover:bg-opacity-90 transition-all">
                            Ver Protótipo no Figma ↗
                        </Link>
                        <Link href="/" className="px-8 py-3 w-full sm:w-auto text-center rounded-full text-[#fd4698] bg-[#fe9cc5]/20 hover:bg-[#fe9cc5]/40 transition-colors">
                            ← Voltar para Home
                        </Link>
                    </div>
                </footer>
            </motion.div>
        </div>
    );
}
