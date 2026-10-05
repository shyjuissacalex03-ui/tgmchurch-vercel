'use client';

import { useState } from 'react';
import { site } from '@/content/site';
import { isFirebaseConfigured, sendMessage } from '@/lib/firebase';

const EMPTY = { name: '', email: '', phone: '', subject: '', message: '', website: '' };

const TYPES = [
  { value: 'general', label: 'General contact', action: 'Send message', done: 'Message sent' },
  { value: 'prayer', label: 'Prayer request', action: 'Send prayer request', done: 'Prayer request sent' },
];

export default function ContactForm() {
  const [type, setType] = useState('general');
  const [values, setValues] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const current = TYPES.find((t) => t.value === type);

  function update(event) {
    const { name, value } = event.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (status !== 'idle' && status !== 'sending') setStatus('idle');
  }

  async function handleSubmit(event) {
    event.preventDefault();

    // "website" is a hidden field real visitors never fill in.
    if (values.website) {
      setStatus('sent');
      return;
    }

    const data = {
      type,
      name: values.name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      subject: values.subject.trim(),
      message: values.message.trim(),
    };

    // Without Firebase keys, hand the message to the visitor's email app.
    if (!isFirebaseConfigured) {
      const subject = data.subject || current.label;
      const body = `${data.message}\n\n${data.name}\n${data.email}${data.phone ? `\n${data.phone}` : ''}`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus('sending');
    try {
      await sendMessage(data);
      setValues(EMPTY);
      setStatus('sent');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <fieldset className="segmented">
        <legend className="visually-hidden">What would you like to send?</legend>
        {TYPES.map((t) => (
          <label key={t.value} className={type === t.value ? 'is-active' : ''}>
            <input
              type="radio"
              name="type"
              value={t.value}
              checked={type === t.value}
              onChange={() => {
                setType(t.value);
                setStatus('idle');
              }}
            />
            {t.label}
          </label>
        ))}
      </fieldset>

      <div className="form__row">
        <label className="field">
          <span>Your name</span>
          <input name="name" value={values.name} onChange={update} required maxLength={120} autoComplete="name" />
        </label>
        <label className="field">
          <span>Your email</span>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={update}
            required
            maxLength={200}
            autoComplete="email"
          />
        </label>
      </div>

      <div className="form__row">
        <label className="field">
          <span>
            Phone number <em>(optional)</em>
          </span>
          <input type="tel" name="phone" value={values.phone} onChange={update} maxLength={40} autoComplete="tel" />
        </label>
        <label className="field">
          <span>
            Subject <em>(optional)</em>
          </span>
          <input name="subject" value={values.subject} onChange={update} maxLength={200} />
        </label>
      </div>

      <label className="field">
        <span>{type === 'prayer' ? 'How can we pray for you?' : 'Your message'}</span>
        <textarea name="message" rows={6} value={values.message} onChange={update} required maxLength={5000} />
      </label>

      <label className="form__trap" aria-hidden="true">
        Website
        <input name="website" value={values.website} onChange={update} tabIndex={-1} autoComplete="off" />
      </label>

      <div className="form__foot">
        <button type="submit" className="btn btn--leaf" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : current.action}
        </button>
        <p className="form__status" role="status" aria-live="polite">
          {status === 'sent' ? `${current.done}. We will contact you as soon as possible.` : null}
          {status === 'error' ? (
            <>
              Your message didn’t send. Check your connection and try again, or email{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </>
          ) : null}
        </p>
      </div>
    </form>
  );
}
