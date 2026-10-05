import Link from 'next/link';
import { pillarsIntro, site, welcome } from '@/content/site';
import PageHeader from '@/components/PageHeader';
import Pillars from '@/components/Pillars';

export const metadata = {
  title: 'About us',
  description: `About ${site.name}, a Spirit-filled Malayali Pentecostal church in Uxbridge.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About us" lead={site.tagline} />

      <section className="section">
        <div className="wrap prose">
          <p className="lead">{welcome.full}</p>
          <p>
            We are a Malayali Pentecostal church serving {site.areas}. We worship together in{' '}
            {site.service.languages} every Sunday at {site.address.street}, {site.address.town}.
          </p>
          <div className="btn-row">
            <Link href="/statement-of-faith" className="btn btn--leaf">
              Statement of faith
            </Link>
            <Link href="/pastor-bio" className="btn btn--outline">
              Pastor’s bio
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap">
          <div className="section__head">
            <h2>Our three core pillars</h2>
            <p>{pillarsIntro}</p>
          </div>
          <Pillars />
        </div>
      </section>
    </>
  );
}
