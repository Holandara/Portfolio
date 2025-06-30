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

export const metadata: Metadata = {
  title: 'Sara Holanda Mesquita Tavares - Desenvolvedora Front-end',
  description: 'Portfólio de Sara Holanda Mesquita Tavares. Desenvolvedora especializada em React, UX e design responsivo.',
  keywords: ['Sara Holanda Mesquita Tavares', 'portfólio', 'frontend', 'React', 'desenvolvedora web'],
  authors: [{ name: 'Sara Holanda Mesquita Tavares' }],
  creator: 'Sara Holanda Mesquita Tavares',
  robots: 'index, follow',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${typoGraphica.variable} ${montserrat.variable}`}>
      <body className="bg-gray-900 text-gray-100 antialiased relative">
        {/* Conteúdo principal (z-index baixo) */}
        <main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0 relative z-0">
          {children}
        </main>
      </body>
    </html>
  );
}