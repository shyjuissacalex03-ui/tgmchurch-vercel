import Link from 'next/link';
import {
  directionsUrl,
  events,
  livestream,
  pastor,
  pillarsIntro,
  site,
  testimonials,
  verse,
  welcome,
} from '@/content/site';
import Pillars from '@/components/Pillars';
import EventList from '@/components/EventList';
import ContactDetails from '@/components/ContactDetails';
import ContactForm from '@/components/ContactForm';

export default function HomePage() {
  const { service, address } = site;

  return (
    <>
      <section className="hero" style={{ backgroundImage: 'url(/images/slide1.jpg)' }}>
        <div className="wrap hero__inner">
          <div className="hero__text">
            <p className="hero__welcome">Welcome to {site.name}</p>
            <h1>{site.tagline}</h1>
            <p className="hero__lead">{welcome.short}</p>
            <div className="btn-row">
              <Link href="/about" className="btn btn--gold">
                Read more
              </Link>
              <a className="btn btn--ghost" href={site.social.youtube} target="_blank" rel="noopener noreferrer">
                Watch live broadcast
              </a>
            </div>
          </div>

          <aside className="service-card" aria-label="Service times">
            <div className="kasavu" aria-hidden="true" />
            <div className="service-card__body">
              <h2>{service.name}</h2>
              <p className="service-card__time">
                {service.day}
                <strong>{service.time}</strong>
              </p>
              <p>
                {address.street}, {address.town}, {address.postcode}
              </p>
              <p>
                {service.languages}. {service.summary}
              </p>
              <div className="service-card__links">
                <a className="text-link" href={directionsUrl} target="_blank" rel="noopener noreferrer">
                  Get directions
                </a>
                <Link className="text-link" href="/events">
                  View full schedule
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2>{site.name}</h2>
            <p className="lead">{welcome.full}</p>
            <div className="btn-row">
              <Link href="/about" className="btn btn--leaf">
                Learn about us
              </Link>
              <Link href="/pastor-bio" className="btn btn--outline">
                Pastor’s bio
              </Link>
            </div>
          </div>
          <figure className="photo">
            <img src={pastor.image} alt={pastor.name} loading="lazy" />
            <figcaption>
              {pastor.name}, {pastor.role}
            </figcaption>
          </figure>
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

      <section className="section section--leaf">
        <div className="wrap split split--media-first">
          <a
            className="stream"
            href={site.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch the live stream on YouTube"
          >
            <img src={livestream.image} alt="" loading="lazy" />
            <span className="stream__play" aria-hidden="true" />
            <span className="stream__when">
              <span className="live-dot" aria-hidden="true" />
              Live {livestream.when}
            </span>
          </a>
          <div>
            <h2>{livestream.title}</h2>
            <p className="lead">{livestream.text}</p>
            <div className="btn-row">
              <a className="btn btn--gold" href={site.social.youtube} target="_blank" rel="noopener noreferrer">
                Join live stream on YouTube
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section__head section__head--row">
            <h2>Church events</h2>
            <Link className="text-link" href="/events">
              View all events
            </Link>
          </div>
          <EventList events={events} />
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap">
          <div className="section__head">
            <h2>From our church family</h2>
            <p>
              Voices of our church family testifying to God’s grace and Spirit-filled fellowship at TGMC Uxbridge.
            </p>
          </div>

          <div className="pastor-note">
            <h3>
              {pastor.name}, {pastor.role}
            </h3>
            <p>{pastor.summary}</p>
            <Link className="text-link" href="/pastor-bio">
              Read the pastor’s bio
            </Link>
          </div>

          <ul className="quotes">
            {testimonials.map((item) => (
              <li key={item.name}>
                <figure>
                  <blockquote>
                    <p>{item.quote}</p>
                  </blockquote>
                  <figcaption>
                    <strong>{item.name}</strong>
                    {item.role}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="wrap split split--top">
          <div>
            <h2>Join with {site.name}</h2>
            <p className="lead">If you have any questions, get in touch. We will contact you as soon as possible.</p>
            <blockquote className="verse">
              <p>{verse.text}</p>
              <cite>{verse.ref}</cite>
            </blockquote>
            <ContactDetails />
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
