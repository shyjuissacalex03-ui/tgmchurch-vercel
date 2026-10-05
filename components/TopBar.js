import Link from 'next/link';
import { site } from '@/content/site';
import SocialLinks from './SocialLinks';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap topbar__inner">
        <p className="topbar__charity">Registered charity {site.charityNo}</p>
        <div className="topbar__right">
          <SocialLinks />
          <Link href="/give" className="topbar__give">
            Give
          </Link>
        </div>
      </div>
    </div>
  );
}
