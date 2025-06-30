import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';


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
    google: 'ZNWYTtadiBGHgOClyIkoYbXMiaweBCdD4M8-OUlcsrA',
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
        
        {/* FAIXA DE LUZ ROXA */}
        <div 
          className="absolute top-0 left-0 h-full w-96 
                     bg-gradient-to-b from-purple-900/30 to-transparent 
                     blur-3xl -z-10 transform -skew-x-12" 
        />

        {/* FAIXA DE LUZ AZUL */}
        <div 
          className="absolute bottom-0 right-0 h-full w-96 
                     bg-gradient-to-t from-blue-900/30 to-transparent 
                     blur-3xl -z-10 transform skew-x-12"
        />

        <main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0 relative z-0">
          {children}
        </main>
      </body>
    </html>
  );
}