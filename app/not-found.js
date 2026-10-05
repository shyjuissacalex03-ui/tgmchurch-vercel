import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <>
      <PageHeader title="Page not found" lead="This page has moved or never existed." />
      <section className="section">
        <div className="wrap btn-row">
          <Link href="/" className="btn btn--leaf">
            Go to the home page
          </Link>
          <Link href="/events" className="btn btn--outline">
            See service times
          </Link>
        </div>
      </section>
    </>
  );
}
