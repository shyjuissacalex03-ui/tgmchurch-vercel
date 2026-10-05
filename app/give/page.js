import Link from 'next/link';
import { giving, site } from '@/content/site';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Give',
  description: `Support the work of ${site.name}.`,
};

export default function GivePage() {
  const hasBankDetails = Boolean(giving.accountNumber);

  return (
    <>
      <PageHeader title="Give" lead={giving.intro} />

      <section className="section">
        <div className="wrap prose">
          {hasBankDetails ? (
            <>
              <h2>Give by bank transfer</h2>
              <dl className="details">
                <div>
                  <dt>Account name</dt>
                  <dd>{giving.accountName}</dd>
                </div>
                <div>
                  <dt>Sort code</dt>
                  <dd>{giving.sortCode}</dd>
                </div>
                <div>
                  <dt>Account number</dt>
                  <dd>{giving.accountNumber}</dd>
                </div>
                {giving.reference ? (
                  <div>
                    <dt>Reference</dt>
                    <dd>{giving.reference}</dd>
                  </div>
                ) : null}
              </dl>
            </>
          ) : (
            <p className="lead">
              To give by bank transfer or standing order, email <a href={`mailto:${site.email}`}>{site.email}</a> or
              call <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a> and we will send you the details.
            </p>
          )}

          <p>
            {site.name} is a registered charity, number {site.charityNo}.
          </p>
          <div className="btn-row">
            <Link href="/contact-us" className="btn btn--leaf">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
