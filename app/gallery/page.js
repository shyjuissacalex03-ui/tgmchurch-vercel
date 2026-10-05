import { gallery, site } from '@/content/site';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Gallery',
  description: `Photos from worship and fellowship at ${site.name}.`,
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader title="Gallery" lead="Worship and fellowship at TGMC." />

      <section className="section">
        <div className="wrap">
          <ul className="gallery">
            {gallery.map((photo) => (
              <li key={photo.src}>
                <a href={photo.src} target="_blank" rel="noopener noreferrer">
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                </a>
              </li>
            ))}
          </ul>
          <p className="gallery__more">
            See more photos and videos on{' '}
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>{' '}
            and{' '}
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
