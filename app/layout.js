import { Anek_Malayalam, Source_Serif_4 } from 'next/font/google';
import './globals.css';
import { site } from '@/content/site';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Anek Malayalam carries both Latin and Malayalam script in one family,
// so Malayalam text added later matches the headings.
const display = Anek_Malayalam({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const body = Source_Serif_4({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Spirit-Filled Malayali Pentecostal Church in Uxbridge`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.name }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: site.url,
    siteName: site.name,
    title: `${site.name} - ${site.tagline}`,
    description: 'Spirit-filled Malayali Pentecostal church (TGMC) in Uxbridge. Worship in English & Malayalam.',
  },
  twitter: {
    card: 'summary',
    title: `${site.name} - ${site.tagline}`,
    description: 'Spirit-filled Malayali Pentecostal church (TGMC) in Uxbridge. Worship in English & Malayalam.',
  },
};

export const viewport = {
  themeColor: '#0e3b2e',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Church',
  name: site.name,
  alternateName: site.shortName,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.town,
    addressRegion: site.address.borough,
    postalCode: site.address.postcode,
    addressCountry: 'GB',
  },
  sameAs: Object.values(site.social),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <TopBar />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
