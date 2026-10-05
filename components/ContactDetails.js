import { directionsUrl, site } from '@/content/site';

export default function ContactDetails() {
  const { address } = site;
  return (
    <dl className="details">
      <div>
        <dt>Location</dt>
        <dd>
          {address.street}, {address.town}, {address.borough}, {address.postcode}
          <br />
          <a className="text-link" href={directionsUrl} target="_blank" rel="noopener noreferrer">
            Get directions
          </a>
        </dd>
      </div>
      <div>
        <dt>Phone</dt>
        <dd>
          <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
        </dd>
      </div>
      <div>
        <dt>Email</dt>
        <dd>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </dd>
      </div>
      <div>
        <dt>Charity no.</dt>
        <dd>{site.charityNo}</dd>
      </div>
    </dl>
  );
}
