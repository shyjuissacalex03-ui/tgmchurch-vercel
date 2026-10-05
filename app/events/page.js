import { events, site } from '@/content/site';
import PageHeader from '@/components/PageHeader';
import EventList from '@/components/EventList';

export const metadata = {
  title: 'Events and service times',
  description: `Service times and events at ${site.name}, ${site.address.town}.`,
};

export default function EventsPage() {
  const { service, address } = site;
  return (
    <>
      <PageHeader
        title="Events and service times"
        lead={`${service.day}, ${service.time}, at ${address.street}, ${address.town}, ${address.postcode}.`}
      />

      <section className="section">
        <div className="wrap">
          <EventList events={events} showActions />
        </div>
      </section>
    </>
  );
}
