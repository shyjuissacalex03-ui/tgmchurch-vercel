import { mapEmbedUrl, site, verse } from '@/content/site';
import PageHeader from '@/components/PageHeader';
import ContactDetails from '@/components/ContactDetails';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact us',
  description: `Contact ${site.name} or send a prayer request.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact us" lead="Send us a message or a prayer request. We will contact you as soon as possible." />

      <section className="section">
        <div className="wrap split split--top">
          <div>
            <h2>Get in touch</h2>
            <ContactDetails />
            <blockquote className="verse">
              <p>{verse.text}</p>
              <cite>{verse.ref}</cite>
            </blockquote>
          </div>
          <ContactForm />
        </div>
      </section>

      <iframe
        className="map"
        src={mapEmbedUrl}
        title={`Map showing ${site.name}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </>
  );
}
