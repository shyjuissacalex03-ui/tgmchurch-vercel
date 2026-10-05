import Link from 'next/link';
import { nav, site, welcome } from '@/content/site';
import SocialLinks from './SocialLinks';

export default function Footer() {
  const year = new Date().getFullYear();
  const { address } = site;

  return (
    <footer className="footer">
      <div className="kasavu" aria-hidden="true" />
      <div className="wrap footer__grid">
        <div className="footer__about">
          <img className="footer__logo" src="/images/logo-dr.png" alt={site.name} width="180" height="60" />
          <p>{welcome.short.split('. ')[0]}.</p>
          <p className="footer__charity">Charity reg. no. {site.charityNo}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="footer__title">Quick links</h2>
          <ul className="footer__links">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/give">Give</Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="footer__title">Get in touch</h2>
          <address className="footer__address">
            {address.street}, {address.town},<br />
            {address.borough}, {address.postcode}
          </address>
          <p>
            <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>

        <div>
          <h2 className="footer__title">Follow us</h2>
          <p>Stay connected with our live worship services and weekly announcements.</p>
          <SocialLinks className="social--footer" />
        </div>
      </div>

      <div className="wrap footer__base">
        <p>
          © {year} {site.name}. All rights reserved.
        </p>
        <p>Malayali Pentecostal Church serving {site.areas}.</p>
      </div>
    </footer>
  );
}
