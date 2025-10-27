'use client';
import styles from './Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Support', path: '/components/Support' },
    { name: 'Journal', path: '/components/Journal' },
    { name: 'Campus', path: '/components/Campus' },
    { name: 'About us', path: '/about' },
  ];

  return (
    <nav className={styles.navbar}>
      {/* Logo Section */}
      <div className={styles.logoSection}>
        <Image src="/Ellipse13.png" alt="EIRA Logo" width={35} height={35} />
        <span className={styles.logoText}>EIRA</span>
      </div>

      {/* Navigation Links */}
      <ul className={styles.navLinks}>
        {links.map((link) => (
          <li key={link.path}>
            <Link
              href={link.path}
              className={`${styles.navItem} ${
                (pathname === link.path || (pathname.startsWith('/wellness') && link.path === '/services'))
                  ? styles.active
                  : ''
              }`}
            >
              {link.name}
              {(pathname === link.path || (pathname.startsWith('/wellness') && link.path === '/services')) && (
                <span className={styles.dot}></span>
              )}
            </Link>
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div className={styles.buttons}>
        <Link href="/components/Login" className={styles.login}>
          LOGIN
        </Link>
        <Link href="/signup" className={styles.getStarted}>
          Get started
        </Link>
      </div>
    </nav>
  );
}
