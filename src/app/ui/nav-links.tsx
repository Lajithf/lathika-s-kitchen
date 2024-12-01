'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import './styles.css';

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="nav-links">
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
        Home
      </Link>

      <Link
        className={`link ${pathname === '/about' ? 'active' : ''}`}
        href="/about"
      >
        About Us
      </Link>
      <Link
        className={`link ${pathname === '/menu' ? 'active' : ''}`}
        href="/menu"
      >
        Menu
      </Link>
      <Link
        className={`link ${pathname === '/contact-us' ? 'active' : ''}`}
        href="/contact-us"
      >
        Contact Us
      </Link>
    </nav>
  );
}
