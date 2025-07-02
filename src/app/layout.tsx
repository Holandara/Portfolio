import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';
import { SpeedInsights } from "@vercel/speed-insights/next";
const typoGraphica = localFont({
  src: './fonts/TypoGraphica_demo.otf',
  variable: '--font-typographica',
});

const montserrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'Sara Holanda Mesquita Tavares - UX Designer e Desenvolvedora Front-end',
  description:
    'Portfólio profissional de Sara Holanda Mesquita Tavares. Desenvolvedora front-end especializada em React, UI/UX, acessibilidade e design responsivo. Confira projetos, habilidades e contato.',
  verification: {
    google: 'EItKFM4nQUWYCagMCcN7KgTBDkSN1GFmzTTrEXUg_38',
  },
    keywords: ['Sara Holanda Mesquita Tavares', 'portfólio', 'frontend', 'UX', 'UX', 'designer', 'desenvolvedora web'],
  authors: [{ name: 'Sara Holanda Mesquita Tavares' }],
  creator: 'Sara Holanda Mesquita Tavares',
  robots: 'index, follow',
  openGraph: {
    title: 'Sara Holanda Mesquita Tavares - UX Designer e Desenvolvedora Front-end',
    description:
      'Portfólio profissional com projetos em React, UI/UX, acessibilidade e design responsivo.',
    url: 'https://portfolio-sarolanda.vercel.app/', 
    siteName: 'Sara Holanda - Portfólio',
    locale: 'pt_BR',
    type: 'website',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${typoGraphica.variable} ${montserrat.variable}`}>
<body className="bg-black text-gray-100 antialiased relative overflow-x-hidden">

  {/* BG TEXTURIZADO (ruído leve) */}
  <div
    className="absolute inset-0 bg-[url('/textures/noise.png')] opacity-[0.03] mix-blend-soft-light z-[-20] pointer-events-none"
    aria-hidden
  />

  {/* FAIXA DE LUZ ROXA */}
  <div 
    className="absolute top-0 left-0 h-full w-96 
               bg-gradient-to-b from-purple-900/40 to-transparent 
               blur-[120px] -z-10 transform -skew-x-12" 
  />

  {/* FAIXA DE LUZ AZUL */}
  <div 
    className="absolute bottom-0 right-0 h-full w-96 
               bg-gradient-to-t from-blue-900/40 to-transparent 
               blur-[120px] -z-10 transform skew-x-12"
  />

  {/* TEXTURA DE PADRÃO GEOMÉTRICO SUTIL (opcional) */}
  <div
    className="absolute inset-0 bg-[url('/textures/grid.svg')] opacity-5 z-[-15] pointer-events-none"
    aria-hidden
  />
<div
  className="absolute inset-0 bg-[url('/textures/meteors.svg')] bg-cover bg-center opacity-20 pointer-events-none z-[-20]"
  aria-hidden
/>

  <main className="max-w-auto mx-auto px-5 py-8 md:py-0 relative z-0">
    {children}
    <SpeedInsights />
  </main>
</body>
    </html>
  );
}