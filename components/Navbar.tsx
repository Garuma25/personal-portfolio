'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 backdrop-blur bg-black/10 dark:bg-zinc-900/80 border-b border-zinc-800">
      <h1 className="font-bold text-lg tracking-wide">Gary Suarez</h1>
      <ul className="flex space-x-6 text-sm font-medium">
        {['Home', 'Projects', 'About', 'Contact'].map((item) => (
          <li key={item}>
            <Link
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className={`hover:text-blue-400 transition ${pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) ? 'text-blue-400' : ''}`}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}