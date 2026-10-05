import { pastor, site } from '@/content/site';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Pastor’s bio',
  description: `${pastor.name}, ${pastor.role} of ${site.name}.`,
};

export default function PastorBioPage() {
  return (
    <>
      <PageHeader title={pastor.name} lead={`${pastor.role}, ${site.name}`} />

      <section className="section">
        <div className="wrap split split--top">
          <figure className="photo">
            <img src={pastor.image} alt={pastor.name} />
          </figure>
          <div className="prose">
            <p className="lead">{pastor.summary}</p>
            {pastor.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              {pastor.name} preaches at our Sunday worship, {site.service.time}, at {site.address.street},{' '}
              {site.address.town}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
