import './globals.css';
import React from 'react';
import { Inter } from 'next/font/google';
import { Container, Footer, Navbar } from '../components';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Darren Wong Portfolio',
  description: 'Portfolio created with Next.js, TypeScript, and Tailwind CSS.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>
          <Navbar />
          <main className={'mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8'}>
            {children}
          </main>
          <Footer />
        </Container>
      </body>
    </html>
  );
}
