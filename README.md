# The Great Mission Church website

Next.js (App Router) site, ready to deploy on Vercel.

## Run it on your computer

Needs Node.js 20.9 or newer.

```bash
npm install
npm run fetch-images   # copies the photos and icons from the current live site into public/images
npm run dev            # http://localhost:3000
```

Run `npm run fetch-images` before your first deploy. The photos need to be in
`public/images` and committed, or the live site will have empty image boxes.

## Deploy on Vercel

### Option A: through GitHub (recommended)

1. Put this folder in a GitHub repository:

   ```bash
   git init
   git add .
   git commit -m "TGMC website"
   git branch -M main
   git remote add origin https://github.com/YOUR-NAME/tgmchurch.git
   git push -u origin main
   ```

2. Go to vercel.com, choose Add New > Project, and import the repository.
3. Leave every setting as Vercel suggests (it detects Next.js) and press Deploy.

After that, every push to `main` updates the live site, and every other branch
gets its own preview URL.

### Option B: from the command line

```bash
npx vercel          # first run links the project and gives you a preview URL
npx vercel --prod   # publishes to the live URL
```

### Use your own domain

In Vercel open the project, then Settings > Domains, add `tgmchurch.uk`, and set
the DNS records Vercel shows you at your domain registrar. The site's canonical
address is set as `url` in `content/site.js`; change it there if you use a
different domain.

## Contact form

The form works without any setup: it opens the visitor's email app with the
message addressed to connect@tgmchurch.uk.

To save messages to a database instead, connect it to Cloud Firestore
(this uses your Firebase project only as a database; the site itself stays on Vercel):

1. In the Firebase console open your project, then Build > Firestore Database > Create database.
2. Project settings > General > Your apps > add a Web app, and copy its config values.
3. In Vercel: Project > Settings > Environment Variables. Add the six names listed
   in `.env.local.example` with those values, then redeploy.
4. Publish the security rules once from your computer:

   ```bash
   npx firebase-tools login
   npm run deploy:rules
   ```

   `.firebaserc` points at the Firebase project `tgmchurch`. Change it if your project ID differs.

Messages appear in the Firebase console under Firestore > `messages`. Each one has
a `type` of `general` or `prayer`.

## Edit the content

Every heading, paragraph, event, testimonial and link is in `content/site.js`.

Three things in that file are waiting for your text:

- `beliefs`: the articles of the statement of faith
- `pastor.bio`: the full pastor's biography
- `giving`: bank details for the Give page

Until they are filled in, those pages show a short note asking visitors to get in touch.

Colours and type sizes are the variables at the top of `app/globals.css`.

## Where things are

```
app/                 pages (one folder per URL) and globals.css
components/          header, footer, contact form, event list
content/site.js      all site text
lib/firebase.js      Firestore write used by the contact form
public/images/       photos and icons
firestore.rules      who can write to Firestore (only used if you connect the form)
```
