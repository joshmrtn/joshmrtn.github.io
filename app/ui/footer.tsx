'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const internalLinks = [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Projects', href: '/projects' },
  ];
  const externalLinks = [
    { name: 'GitHub', href: 'https://github.com/joshmrtn' },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/josh-martin-817a282b7',
    },
  ];
  const pathname = usePathname();

  return (
    <footer className="mt-10 flex flex-col gap-5 bg-gray-500/10 px-5 py-10 pt-15 shadow-[0_0_15px_rgba(0,0,0,0.25)] inset-shadow-sm shadow-emerald-500 inset-shadow-emerald-500/50 sm:mt-20 sm:shadow-[0_0_35px_rgba(0,0,0,0.25)]">
      <Link
        href="/"
        onClick={(e) => {
          if (pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        className="mb-5 text-xl font-bold text-emerald-600 transition-all duration-200 text-shadow-cyan-400/10 text-shadow-sm hover:text-emerald-400 hover:text-shadow-cyan-700/20 hover:text-shadow-sm"
      >
        Josh Martin
      </Link>
      <div
        role="separator"
        className="h-px self-stretch bg-slate-300/20 bg-linear-to-r from-cyan-500/20 to-emerald-500/20"
      ></div>
      <div className="flex flex-col flex-wrap gap-5 md:flex-row md:gap-20">
        <div className="mt-1 flex flex-row gap-3 md:flex-col">
          {internalLinks.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (pathname === link.href) {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="px-1 py-1 text-gray-400 transition-all duration-300 hover:text-emerald-500 hover:text-shadow-2xs hover:text-shadow-emerald-400"
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div
          role="separator"
          className="h-px w-full bg-slate-300/20 bg-linear-to-r from-cyan-500/20 to-emerald-500/20 md:h-auto md:w-px md:self-stretch md:bg-linear-to-b"
        ></div>
        <div className="mt-1 flex flex-row gap-3 md:flex-col">
          {externalLinks.map((link) => {
            return (
              <a
                key={link.name}
                href={link.href}
                className="px-1 py-1 text-gray-400 transition-all duration-300 hover:text-emerald-500 hover:text-shadow-2xs hover:text-shadow-emerald-400"
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
      <p className="mt-5 text-xs text-gray-500">
        &copy; 2026 Josh Martin. All rights reserved
      </p>
    </footer>
  );
}
