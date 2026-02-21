import './globals.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import type { Metadata } from 'next';
import TransitionProvider from '@/components/TransitionProvider';

export const metadata: Metadata = {
  title: 'KIT Fiscal Contable | Premium Platform',
  description: 'Evolución de servicios automatizados para el sector contable y fiscal (México)',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable} dark`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-sans antialiased text-primary selection:bg-accent/30 bg-background overflow-x-hidden">
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}