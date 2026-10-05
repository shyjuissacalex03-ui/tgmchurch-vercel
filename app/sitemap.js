import { nav, site } from '@/content/site';

export default function sitemap() {
  const paths = [...nav.map((item) => item.href), '/give'];
  return paths.map((path) => ({
    url: `${site.url}${path === '/' ? '' : path}`,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }));
}
