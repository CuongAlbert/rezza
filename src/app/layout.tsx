import './globals.css';

import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Script from 'next/script';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  openGraph: {
    title: 'Rezza - 10x your AI development',
    description:
      'Drive your innovation faster to market with strategic support that minimizes challenges and maximizes outcomes.',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang='en' suppressHydrationWarning>
        <body className={inter.className} suppressHydrationWarning>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
      <Script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-PDEHY9KT1K'
      ></Script>
      <Script id='gg-analytic'>
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

        gtag('config', 'G-PDEHY9KT1K');
  `}
      </Script>
    </>
  );
}
