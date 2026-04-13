"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavbLinks = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <div>
      <Link
        href={href}
        className={`${pathname === href ? 'bg-[#244D3F] text-white' : ''}`}
      >
        {children}
      </Link>
    </div>
  );
};

export default NavbLinks;