import { site } from '@/content/site';

const icons = {
  facebook: (
    <path
      fill="currentColor"
      d="M13.5 21v-7.5h2.5l.5-3h-3V8.6c0-.9.3-1.6 1.6-1.6h1.5V4.3C16.3 4.2 15.4 4 14.3 4 12 4 10.5 5.4 10.5 8v2.5H8v3h2.5V21z"
    />
  ),
  youtube: (
    <path
      fill="currentColor"
      d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3z"
    />
  ),
  instagram: (
    <g fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </g>
  ),
};

const labels = {
  facebook: 'Facebook',
  youtube: 'YouTube',
  instagram: 'Instagram',
};

export default function SocialLinks({ className = '' }) {
  return (
    <ul className={`social ${className}`}>
      {Object.keys(icons).map((key) => (
        <li key={key}>
          <a href={site.social[key]} target="_blank" rel="noopener noreferrer" aria-label={`TGMC on ${labels[key]}`}>
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              {icons[key]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
