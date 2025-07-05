// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';
import { SpeedInsights } from "@vercel/speed-insights/next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <html lang="pt" className={`${typoGraphica.variable} ${montserrat.variable} h-full`}>
      <body className=" text-gray-100 antialiased relative overflow-x-hidden min-h-screen bg-brushed-metal">

        <main className="bg-cyber max-w-auto mx-auto md:py-0 relative z-0">
          {children}
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
