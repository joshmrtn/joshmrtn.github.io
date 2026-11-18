'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function TopNav() {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Projects', href: '/projects' },
  ];
  const pathname = usePathname();
  return (
    <div className="m-2 mx-auto flex w-full max-w-lg flex-row items-center justify-between gap-2">
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'mx-2 flex h-10 items-center rounded-md px-2 py-3 text-sm font-medium transition-colors duration-500 ease-in-out hover:bg-teal-500 hover:text-gray-50',
              {
                'bg-emerald-500 text-white': pathname === link.href,
              }
            )}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
