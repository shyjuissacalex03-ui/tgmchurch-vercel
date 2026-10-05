import { directionsUrl, site } from '@/content/site';

export default function EventList({ events, showActions = false }) {
  return (
    <ul className="events">
      {events.map((event) => (
        <li key={event.title} className="event">
          <div className="event__when">
            <span className="event__day">{event.day}</span>
            <span className="event__time">{event.time}</span>
          </div>

          <div className="event__body">
            <h3>{event.title}</h3>
            <p>{event.text}</p>
            <p className="event__where">
              {event.tag}, {event.where}
            </p>
            {showActions ? (
              event.online ? (
                <a className="text-link" href={site.social.youtube} target="_blank" rel="noopener noreferrer">
                  Watch on YouTube
                </a>
              ) : (
                <a className="text-link" href={directionsUrl} target="_blank" rel="noopener noreferrer">
                  Get directions
                </a>
              )
            ) : null}
          </div>

          <div className="event__img">
            <img src={event.image} alt="" loading="lazy" />
          </div>
        </li>
      ))}
    </ul>
  );
}
