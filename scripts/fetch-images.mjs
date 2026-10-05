// Copies the photos and icons from the current live site into public/images.
// Run once:  npm run fetch-images
import { mkdir, writeFile, access } from 'node:fs/promises';
import path from 'node:path';

const SOURCE = 'https://tgmchurch.web.app/images/';
const FILES = [
  'slide1.jpg',
  'livestream-preview.png',
  'book.png',
  'fire.png',
  'heart.png',
  'event-worship-1.jpg',
  'event-worship-2.jpg',
  'logo-dr.png',
];

const dir = path.join(process.cwd(), 'public', 'images');
await mkdir(dir, { recursive: true });

for (const file of FILES) {
  const target = path.join(dir, file);
  try {
    await access(target);
    console.log(`skip   ${file} (already in public/images)`);
    continue;
  } catch {}

  try {
    const res = await fetch(SOURCE + file);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await writeFile(target, Buffer.from(await res.arrayBuffer()));
    console.log(`saved  ${file}`);
  } catch (err) {
    console.error(`failed ${file}: ${err.message}. Add it to public/images by hand.`);
  }
}
