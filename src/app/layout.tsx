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

export const metadata: Metadata = {
  title: 'Sara Holanda - UX Designer e Desenvolvedora Front-end',
  description:
    'Portfólio profissional de Sara Holanda Mesquita Tavares. Desenvolvedora front-end especializada em UI/UX, acessibilidade e design responsivo.',
  applicationName: 'Sara Holanda Portfolio',
  themeColor: '#0f0f0f',
  metadataBase: new URL('https://portfolio-sarolanda.vercel.app'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'EItKFM4nQUWYCagMCcN7KgTBDkSN1GFmzTTrEXUg_38',
  },
  keywords: [
    'Sara Holanda', 'UX Designer', 'Desenvolvedora Front-end', 'React',
    'UI/UX', 'Acessibilidade Web', 'Portfólio Desenvolvedora', 'Web Design'
  ],
  authors: [{ name: 'Sara Holanda Mesquita Tavares' }],
  creator: 'Sara Holanda',
  robots: 'index, follow',
  openGraph: {
    title: 'Sara Holanda - UX Designer e Front-end Dev',
    description:
      'Portfólio com projetos em React, acessibilidade, UX e UI para interfaces incríveis.',
    url: 'https://portfolio-sarolanda.vercel.app/',
    siteName: 'Sara Holanda Portfolio',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpeg', 
        width: 1200,
        height: 630,
        alt: 'Portfólio de Sara Holanda',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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
