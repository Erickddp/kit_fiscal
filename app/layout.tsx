import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'KIT Fiscal Contable',
  description: 'Kit fiscal contable con calculadoras, formatos, contratos y biblioteca digital (México)',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased bg-background text-primary`}>
        {children}
      </body>
    </html>
  );
}