// All the words, links and lists on the site live in this file.
// Edit here and every page updates.

export const site = {
  name: 'The Great Mission Church',
  shortName: 'TGMC',
  tagline: 'Rooted in the Word, Centered on CHRIST',
  url: 'https://tgmchurch.uk',
  description:
    'Welcome to The Great Mission Church (TGMC) in Uxbridge. Spirit-filled Malayali Pentecostal church worshiping in English & Malayalam serving Watford, Harefield & Hillingdon.',
  keywords: [
    'TGMC',
    'The Great Mission Church',
    'Malayali Pentecostal Church Uxbridge',
    'Malayalam Church London',
    'Pentecostal Church Hillingdon',
    'Pr Begin Alex',
    'Worship Service Uxbridge',
  ],
  charityNo: '1213279',
  address: {
    street: '150 York Rd',
    town: 'Uxbridge',
    borough: 'Hillingdon',
    postcode: 'UB8 1QW',
  },
  areas: 'Uxbridge, Watford, Harefield & Hillingdon',
  phone: '+44 7846958451',
  email: 'connect@tgmchurch.uk',
  social: {
    facebook: 'https://www.facebook.com/tgmcuk/',
    youtube: 'https://www.youtube.com/@tgmcuk',
    instagram: 'https://www.instagram.com/tgmcuk/',
  },
  service: {
    name: 'Sunday worship',
    day: 'Every Sunday',
    time: '10:00 AM – 1:00 PM',
    languages: 'Malayalam & English',
    summary: 'Spirit-filled praise, worship, prayer, and word of God.',
  },
};

export const addressLine = `${site.address.street}, ${site.address.town}, ${site.address.postcode}`;
export const directionsUrl =
  'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(addressLine);
export const mapEmbedUrl =
  'https://www.google.com/maps?q=' + encodeURIComponent(addressLine) + '&output=embed';

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About us' },
  { href: '/statement-of-faith', label: 'Statement of faith' },
  { href: '/pastor-bio', label: 'Pastor’s bio' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/events', label: 'Events' },
  { href: '/contact-us', label: 'Contact us' },
];

export const welcome = {
  short:
    'We are a Bible-believing, Spirit-filled, CHRIST-centred, and mission-driven church passionate about living out the Gospel. Our desire is to glorify GOD, walk in the power of the Holy Spirit, and reach people everywhere.',
  full:
    'We are a Bible-believing, Spirit-filled, CHRIST-centred, and mission-driven church passionate about living out the Gospel. Our desire is to glorify GOD, walk in the power of the Holy Spirit, and reach people everywhere with the love and truth of JESUS CHRIST.',
};

export const pillarsIntro =
  'Everything we do at TGMC is built upon biblical truth, Holy Spirit empowerment, and Christlike love.';

export const pillars = [
  {
    title: 'Grounded in the Word of God',
    text: 'We stand firmly on the unchanging truth of Scripture.',
    icon: '/images/book.png',
  },
  {
    title: 'Led by the Holy Spirit',
    text: 'We depend on the Holy Spirit for wisdom, power, and transformation.',
    icon: '/images/fire.png',
  },
  {
    title: 'Driven by the Love of Christ',
    text: 'Serving others, building unity, and extending grace to all people.',
    icon: '/images/heart.png',
  },
];

export const livestream = {
  title: 'The Great Mission Church live stream',
  text: 'Experience the presence of GOD right where you are through our live worship services. Every message, song, and prayer is centered on JESUS CHRIST — inspiring faith, renewing hope, and strengthening your walk with GOD.',
  when: 'Sundays, 10:00 AM',
  image: '/images/livestream-preview.png',
};

export const events = [
  {
    title: 'Sunday Divine Worship Service',
    tag: 'Worship',
    day: 'Every Sunday',
    time: '10:00 AM – 1:00 PM',
    text: 'Join our Sunday worship in Malayalam & English with prayer, breaking of bread, and Spirit-filled preaching by Pr. Begin Alex.',
    where: 'Uxbridge, UB8 1QW',
    image: '/images/event-worship-1.jpg',
    online: false,
  },
  {
    title: 'TGMC Church Gathering & Fellowship',
    tag: 'Worship',
    day: 'Regular gathering',
    time: '10:00 AM – 12:30 PM',
    text: 'Experience the presence of GOD and vibrant fellowship at The Great Mission Church.',
    where: 'Uxbridge, UB8 1QW',
    image: '/images/event-worship-2.jpg',
    online: false,
  },
  {
    title: 'TGMC Live Stream Worship',
    tag: 'Online',
    day: 'Every Sunday',
    time: '10:00 AM – 1:00 PM',
    text: 'Experience the presence of GOD right where you are through our live worship services.',
    where: 'YouTube',
    image: '/images/livestream-preview.png',
    online: true,
  },
];

export const pastor = {
  name: 'Pr. Begin Alex',
  role: 'Lead Pastor',
  image: '/images/livestream-preview.png',
  summary:
    'Pr. Begin Alex leads The Great Mission Church with great dedication and love. Under his anointed leadership, TGMC serves as a Spirit-filled Malayalam Pentecostal church in Uxbridge, committed to biblical preaching, prayer, and kingdom impact.',
  // Add the full biography here, one string per paragraph.
  bio: [],
};

export const testimonials = [
  {
    quote:
      'A wonderful place of worship and spiritual growth. The services are Spirit-filled, and Pr. Begin Alex leads with great dedication and love. Truly blessed to be part of this Malayalam Pentecostal Church.',
    name: 'Eva Justin',
    role: 'IT',
  },
  {
    quote:
      'A wonderful place of worship and spiritual growth. The services are Spirit-filled, and Pr. Begin Alex leads with great dedication and love. Truly blessed to be part of this Malayalam Pentecostal Church.',
    name: 'Eva Roshan',
    role: 'Head of IT',
  },
];

export const verse = {
  text: 'Be transformed by the renewing of your mind.',
  ref: 'Romans 12:2',
};

// Add each article of faith as { title: '...', text: '...' }.
// While this list is empty the page invites visitors to ask for a copy.
export const beliefs = [];

// Fill these in to show bank details on the Give page.
// While accountNumber is empty the page asks visitors to get in touch.
export const giving = {
  intro:
    'Your giving supports the worship, mission and community work of The Great Mission Church.',
  accountName: '',
  sortCode: '',
  accountNumber: '',
  reference: '',
};

// Photos shown on the Gallery page. Put files in public/images and list them here.
export const gallery = [
  { src: '/images/slide1.jpg', alt: 'Worship at The Great Mission Church' },
  { src: '/images/event-worship-1.jpg', alt: 'Sunday Divine Worship Service' },
  { src: '/images/event-worship-2.jpg', alt: 'Church gathering and fellowship' },
  { src: '/images/livestream-preview.png', alt: 'Pr. Begin Alex preaching' },
];
