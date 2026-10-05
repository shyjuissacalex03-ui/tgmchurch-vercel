'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { nav, site } from '@/content/site';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu after moving to another page.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="header">
      <div className="wrap header__inner">
        <Link href="/" className="brand" aria-label={`${site.name}, home`}>
          <span className="brand__mark" aria-hidden="true">
            {site.shortName}
          </span>
          <span className="brand__name">{site.name}</span>
        </Link>

        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <nav id="site-nav" className={`nav ${open ? 'is-open' : ''}`} aria-label="Main">
          <ul className="nav__list">
            {nav.map((item) => {
              const current = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link href={item.href} aria-current={current ? 'page' : undefined}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a className="btn btn--leaf live-btn" href={site.social.youtube} target="_blank" rel="noopener noreferrer">
            <span className="live-dot" aria-hidden="true" />
            Watch live
          </a>
        </nav>
      </div>
      <div className="kasavu" aria-hidden="true" />
    </header>
  );
}
