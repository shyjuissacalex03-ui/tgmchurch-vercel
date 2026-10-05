import { beliefs, pillarsIntro, site } from '@/content/site';
import PageHeader from '@/components/PageHeader';
import Pillars from '@/components/Pillars';

export const metadata = {
  title: 'Statement of faith',
  description: `What we believe at ${site.name}.`,
};

export default function StatementOfFaithPage() {
  return (
    <>
      <PageHeader title="Statement of faith" lead="What we believe and teach." />

      <section className="section">
        <div className="wrap prose">
          {beliefs.length > 0 ? (
            <dl className="beliefs">
              {beliefs.map((belief) => (
                <div key={belief.title}>
                  <dt>{belief.title}</dt>
                  <dd>{belief.text}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <p className="lead">
              We are adding our full statement of faith to this page. To receive a copy now, email{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          )}
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap">
          <div className="section__head">
            <h2>What we stand on</h2>
            <p>{pillarsIntro}</p>
          </div>
          <Pillars />
        </div>
      </section>
    </>
  );
}
