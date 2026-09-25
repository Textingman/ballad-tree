'use client';

import { useState } from 'react';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

// Step indicator
function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center font-mono-label transition-all"
            style={{
              background: i < current ? 'var(--olive)' : i === current ? 'var(--forest)' : 'rgba(24,37,27,0.1)',
              color: i <= current ? 'white' : 'rgba(24,37,27,0.35)',
              fontSize: '0.55rem',
            }}
          >
            {i < current ? (
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                <path d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              i + 1
            )}
          </div>
          {i < total - 1 && (
            <div
              className="w-8 h-px"
              style={{ background: i < current ? 'var(--olive)' : 'rgba(24,37,27,0.12)' }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default function SignupPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', employerId: '', phone: '', confirmPhone: '' });
  const [accountNotifications, setAccountNotifications] = useState(false);
  const [customerCare, setCustomerCare] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
    }, 1500);
  };

  const steps = [
    { label: 'Your Info', desc: 'Tell us who you are' },
    { label: 'Employer', desc: 'Connect your employer' },
    { label: 'Consent', desc: 'Review & agree' },
  ];

  return (
    <div style={{ background: 'var(--ivory)', color: 'var(--charcoal)' }}>
      <Nav />

      <div className="min-h-screen grid md:grid-cols-2">

        {/* ── LEFT: Forest panel ── */}
        <div
          className="relative hidden md:flex flex-col justify-between p-12 pt-32"
          style={{ background: 'var(--forest)' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=900&q=70&auto=format&fit=crop"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.2 }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(24,37,27,0.6) 0%, rgba(24,37,27,0.9) 100%)' }} />

          <div className="relative z-10">
            <p className="font-mono-label mb-8" style={{ color: 'rgba(245,243,235,0.45)', fontSize: '0.65rem' }}>
              Employee Onboarding
            </p>
            <h2 className="headline-lg text-white mb-6" style={{ maxWidth: '380px' }}>
              Your financial
              <br />
              <em className="italic-accent">wellness starts here.</em>
            </h2>
            <p style={{ color: 'rgba(245,243,235,0.6)', fontSize: '0.95rem', lineHeight: 1.8, maxWidth: '320px' }}>
              Set up your Ballad Tree account and connect to your employer&apos;s financial wellness program in minutes.
            </p>
          </div>

          {/* Steps overview */}
          <div className="relative z-10 space-y-4">
            {steps.map((s, i) => (
              <div key={i} className="flex items-center gap-4">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-mono-label"
                  style={{
                    background: i < step ? 'var(--olive)' : i === step ? 'rgba(245,243,235,0.2)' : 'rgba(245,243,235,0.08)',
                    border: i === step ? '1px solid rgba(245,243,235,0.4)' : 'none',
                    color: 'white',
                    fontSize: '0.6rem',
                  }}
                >
                  {i < step ? (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </div>
                <div>
                  <p style={{ color: i <= step ? 'var(--ivory)' : 'rgba(245,243,235,0.4)', fontWeight: 600, fontSize: '0.85rem' }}>
                    {s.label}
                  </p>
                  <p style={{ color: 'rgba(245,243,235,0.35)', fontSize: '0.75rem' }}>{s.desc}</p>
                </div>
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
                  You&apos;re all set.
                </h2>
                <p style={{ color: 'rgba(24,37,27,0.55)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Your account has been created. Check your email for next steps to access your financial wellness dashboard.
                </p>
                <Link href="/" className="btn-forest">
                  Back to Home
                </Link>
              </div>
            ) : (
              <>
                <StepIndicator current={step} total={3} />

                {/* ── STEP 0: Personal Info ── */}
                {step === 0 && (
                  <>
                    <p className="font-mono-label mb-4" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
                      Step 1 of 3 — Your Information
                    </p>
                    <h1 className="headline-md mb-2" style={{ color: 'var(--forest)', fontSize: '1.75rem' }}>
                      Let&apos;s start with
                      <br />
                      <em className="italic-accent">the basics.</em>
                    </h1>
                    <p style={{ color: 'rgba(24,37,27,0.5)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                      Enter your name and work email to create your account.
                    </p>
                    <div className="space-y-4">
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
                      <button
                        type="button"
                        onClick={() => formData.name && formData.email && setStep(1)}
                        className="btn-forest w-full justify-center mt-2"
                        style={{ opacity: formData.name && formData.email ? 1 : 0.5 }}
                      >
                        Continue
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </>
                )}

                {/* ── STEP 1: Employer ── */}
                {step === 1 && (
                  <>
                    <p className="font-mono-label mb-4" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
                      Step 2 of 3 — Employer Connection
                    </p>
                    <h1 className="headline-md mb-2" style={{ color: 'var(--forest)', fontSize: '1.75rem' }}>
                      Connect your
                      <br />
                      <em className="italic-accent">employer.</em>
                    </h1>
                    <p style={{ color: 'rgba(24,37,27,0.5)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                      Enter the Employer ID provided by your HR or benefits team to link your account to your company&apos;s wellness program.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <label className="font-mono-label block mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>
                          Employer ID *
                        </label>
                        <input
                          type="text"
                          name="employerId"
                          required
                          value={formData.employerId}
                          onChange={handleChange}
                          placeholder="e.g. BT-ACME-2024"
                          className="w-full px-4 py-3 rounded-xl text-sm"
                          style={{
                            background: 'rgba(24,37,27,0.04)',
                            border: '1px solid rgba(24,37,27,0.12)',
                            color: 'var(--charcoal)',
                            outline: 'none',
                            fontFamily: 'Inter, sans-serif',
                          }}
                        />
                        <p style={{ fontSize: '0.7rem', color: 'rgba(24,37,27,0.4)', marginTop: '0.4rem' }}>
                          Find your Employer ID in your onboarding email or ask your HR team.
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => setStep(0)}
                          className="font-mono-label px-5 py-3 rounded-full transition-all"
                          style={{
                            border: '1px solid rgba(24,37,27,0.2)',
                            color: 'var(--forest)',
                            fontSize: '0.65rem',
                            background: 'transparent',
                            cursor: 'pointer',
                          }}
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={() => formData.employerId && setStep(2)}
                          className="btn-forest flex-1 justify-center"
                          style={{ opacity: formData.employerId ? 1 : 0.5 }}
                        >
                          Continue
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </>
                )}

                {/* ── STEP 2: Consent ── */}
                {step === 2 && (
                  <form onSubmit={handleSubmit}>
                    <p className="font-mono-label mb-4" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
                      Step 3 of 3 — Review & Agree
                    </p>
                    <h1 className="headline-md mb-2" style={{ color: 'var(--forest)', fontSize: '1.75rem' }}>
                      Almost done.
                      <br />
                      <em className="italic-accent">Review & confirm.</em>
                    </h1>
                    <p style={{ color: 'rgba(24,37,27,0.5)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                      Review your information and agree to the terms to complete your account setup.
                    </p>

                    {/* Summary */}
                    <div
                      className="rounded-xl p-4 mb-6 space-y-2"
                      style={{ background: 'rgba(24,37,27,0.04)', border: '1px solid rgba(24,37,27,0.08)' }}
                    >
                      <p className="font-mono-label mb-3" style={{ color: 'rgba(24,37,27,0.35)', fontSize: '0.6rem' }}>
                        Account Summary
                      </p>
                      {[
                        { label: 'Name', value: formData.name },
                        { label: 'Email', value: formData.email },
                        { label: 'Employer ID', value: formData.employerId },
                      ].map(item => (
                        <div key={item.label} className="flex justify-between items-center">
                          <span className="font-mono-label" style={{ color: 'rgba(24,37,27,0.4)', fontSize: '0.6rem' }}>{item.label}</span>
                          <span style={{ color: 'var(--charcoal)', fontSize: '0.85rem', fontWeight: 500 }}>{item.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Phone for SMS */}
                    <div className="mb-4">
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

                    {/* Terms */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
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

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="font-mono-label px-5 py-3 rounded-full transition-all"
                        style={{
                          border: '1px solid rgba(24,37,27,0.2)',
                          color: 'var(--forest)',
                          fontSize: '0.65rem',
                          background: 'transparent',
                          cursor: 'pointer',
                        }}
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-forest flex-1 justify-center"
                        style={{ opacity: isSubmitting ? 0.6 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                      >
                        {isSubmitting ? 'Creating Account…' : 'Create Account'}
                        {!isSubmitting && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
