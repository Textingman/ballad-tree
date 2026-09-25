'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function SignupPage() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '', message: '' });
  const [accountNotifications, setAccountNotifications] = useState(false);
  const [customerCare, setCustomerCare] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ background: 'var(--ivory)', color: 'var(--charcoal)' }}>
      <Nav />

      <div className="min-h-screen grid md:grid-cols-2">

        {/* ── LEFT: Forest panel ── */}
        <div
          className="relative hidden md:flex flex-col justify-between p-12 pt-32"
          style={{ background: 'var(--forest)' }}
        >
          {/* Background texture */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=900&q=70&auto=format&fit=crop"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.2 }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(24,37,27,0.6) 0%, rgba(24,37,27,0.9) 100%)' }} />

          {/* Content */}
          <div className="relative z-10">
            <p className="font-mono-label mb-8" style={{ color: 'rgba(245,243,235,0.45)', fontSize: '0.65rem' }}>
              Get Started
            </p>
            <h2 className="headline-lg text-white mb-6" style={{ maxWidth: '380px' }}>
              Financial wellness
              <br />
              <em className="italic-accent">for every employee.</em>
            </h2>
            <p style={{ color: 'rgba(245,243,235,0.6)', fontSize: '0.95rem', lineHeight: 1.8, maxWidth: '320px' }}>
              Join companies building financially secure, confident, and resilient workforces with Ballad Tree.
            </p>
          </div>

          {/* Bottom trust points */}
          <div className="relative z-10 space-y-4">
            {[
              { icon: '🛡️', text: 'Privacy by design — employees control their data' },
              { icon: '🤖', text: 'AI-powered guidance personalized to each employee' },
              { icon: '🌍', text: 'Supports teams in 70+ countries and 80+ languages' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span style={{ fontSize: '1rem' }}>{item.icon}</span>
                <p style={{ color: 'rgba(245,243,235,0.6)', fontSize: '0.82rem' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Form panel ── */}
        <div className="flex flex-col justify-center px-6 py-24 md:px-12 lg:px-16" style={{ background: 'var(--ivory)' }}>
          <div className="max-w-md w-full mx-auto">

            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ background: 'rgba(72,82,56,0.12)' }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--olive)" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="headline-md mb-4" style={{ color: 'var(--forest)' }}>
                  We&apos;ll be in touch.
                </h2>
                <p style={{ color: 'rgba(24,37,27,0.55)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Thank you for your interest in Ballad Tree. Our team will reach out within one business day.
                </p>
                <Link href="/" className="btn-forest">
                  Back to Home
                </Link>
              </div>
            ) : (
              <>
                <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
                  Get Started
                </p>
                <h1 className="headline-md mb-3" style={{ color: 'var(--forest)', fontSize: '2rem' }}>
                  Start your financial
                  <br />
                  <em className="italic-accent">wellness journey.</em>
                </h1>
                <p style={{ color: 'rgba(24,37,27,0.55)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                  Tell us about your company and we&apos;ll show you how Ballad Tree can support your team.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="font-mono-label block mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-xl text-sm"
                      style={{
                        background: 'rgba(24,37,27,0.04)',
                        border: '1px solid rgba(24,37,27,0.12)',
                        color: 'var(--charcoal)',
                        outline: 'none',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="font-mono-label block mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl text-sm"
                      style={{
                        background: 'rgba(24,37,27,0.04)',
                        border: '1px solid rgba(24,37,27,0.12)',
                        color: 'var(--charcoal)',
                        outline: 'none',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="font-mono-label block mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="w-full px-4 py-3 rounded-xl text-sm"
                      style={{
                        background: 'rgba(24,37,27,0.04)',
                        border: '1px solid rgba(24,37,27,0.12)',
                        color: 'var(--charcoal)',
                        outline: 'none',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="font-mono-label block mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 555-5555"
                      className="w-full px-4 py-3 rounded-xl text-sm"
                      style={{
                        background: 'rgba(24,37,27,0.04)',
                        border: '1px solid rgba(24,37,27,0.12)',
                        color: 'var(--charcoal)',
                        outline: 'none',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="font-mono-label block mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>
                      How can we help?
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your team and what you're looking for..."
                      className="w-full px-4 py-3 rounded-xl text-sm resize-none"
                      style={{
                        background: 'rgba(24,37,27,0.04)',
                        border: '1px solid rgba(24,37,27,0.12)',
                        color: 'var(--charcoal)',
                        outline: 'none',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    />
                  </div>

                  {/* Terms checkbox */}
                  <div className="flex items-start gap-3 pt-1">
                    <input
                      type="checkbox"
                      id="termsAgreement"
                      required
                      className="mt-1 w-4 h-4 rounded flex-shrink-0"
                      style={{ accentColor: 'var(--olive)' }}
                    />
                    <label htmlFor="termsAgreement" style={{ fontSize: '0.75rem', color: 'rgba(24,37,27,0.5)', lineHeight: 1.6 }}>
                      I have read and agree to the{' '}
                      <Link href="/privacy" style={{ color: 'var(--olive)', textDecoration: 'underline' }}>Privacy Policy</Link>
                      {' '}and{' '}
                      <Link href="/terms" style={{ color: 'var(--olive)', textDecoration: 'underline' }}>Terms of Service</Link>. *
                    </label>
                  </div>

                  {/* SMS Consent */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="accountNotifications"
                        checked={accountNotifications}
                        onChange={e => setAccountNotifications(e.target.checked)}
                        className="mt-1 w-4 h-4 rounded flex-shrink-0"
                        style={{ accentColor: 'var(--olive)' }}
                      />
                      <label htmlFor="accountNotifications" style={{ fontSize: '0.72rem', color: 'rgba(24,37,27,0.45)', lineHeight: 1.6 }}>
                        By checking this box, I agree to receive Transactional Account Notification SMS messages from Ballad Tree at the phone number provided. I understand I may opt out at any time by replying STOP. Reply HELP for help. Message and data rates may apply. Message frequency varies. Opting in is optional and not required to submit this form. Consent is not required as a condition of purchasing any products or services.
                      </label>
                    </div>
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="customerCare"
                        checked={customerCare}
                        onChange={e => setCustomerCare(e.target.checked)}
                        className="mt-1 w-4 h-4 rounded flex-shrink-0"
                        style={{ accentColor: 'var(--olive)' }}
                      />
                      <label htmlFor="customerCare" style={{ fontSize: '0.72rem', color: 'rgba(24,37,27,0.45)', lineHeight: 1.6 }}>
                        By checking this box, I agree to receive Promotional Marketing SMS messages from Ballad Tree at the phone number provided, including special offers and exclusive updates. I understand I may opt out at any time by replying STOP. Reply HELP for help. Message and data rates may apply. Message frequency varies. Opting in is optional and not required to submit this form. Consent is not required as a condition of purchasing any products or services.
                      </label>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-forest w-full justify-center mt-2"
                    style={{ opacity: isSubmitting ? 0.6 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                  >
                    {isSubmitting ? 'Submitting…' : 'Get Started'}
                    {!isSubmitting && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
