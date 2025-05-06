
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Gary Suarez Portfolio',
  description: 'Portfolio site built with Next.js, Tailwind, and Framer Motion',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white transition-all">
        <Navbar />
        <main className="flex-1 max-w-5xl mx-auto p-6 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

