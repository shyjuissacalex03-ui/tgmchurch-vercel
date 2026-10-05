// Firebase is only used by the contact form, so it is loaded on demand
// (the rest of the site ships no Firebase code).

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export const isFirebaseConfigured = Boolean(config.apiKey && config.projectId && config.appId);

function timeout(ms) {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Timed out')), ms);
  });
}

// Saves one contact or prayer message to the "messages" collection in Firestore.
// The shape must match firestore.rules.
export async function sendMessage({ type, name, email, phone, subject, message }) {
  const { initializeApp, getApps, getApp } = await import('firebase/app');
  const { getFirestore, collection, addDoc, serverTimestamp } = await import('firebase/firestore');

  const app = getApps().length ? getApp() : initializeApp(config);
  const db = getFirestore(app);

  const write = addDoc(collection(db, 'messages'), {
    type,
    name,
    email,
    phone,
    subject,
    message,
    createdAt: serverTimestamp(),
  });

  // Firestore queues writes while offline instead of failing, so give up
  // after 15 seconds and let the form show its error message.
  await Promise.race([write, timeout(15000)]);
}
