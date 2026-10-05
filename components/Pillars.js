import { pillars } from '@/content/site';

export default function Pillars() {
  return (
    <ul className="pillars">
      {pillars.map((pillar) => (
        <li key={pillar.title} className="pillar">
          <img src={pillar.icon} alt="" width="56" height="56" loading="lazy" />
          <h3>{pillar.title}</h3>
          <p>{pillar.text}</p>
        </li>
      ))}
    </ul>
  );
}
