'use client';

import { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', role: '', subject: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] blob opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(134,239,172,0.4) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] blob opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.4) 0%, transparent 70%)' }} />
      </div>

      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center relative" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-green-700 mb-6"
            style={{ background: 'rgba(134,239,172,0.2)', border: '1px solid rgba(134,239,172,0.4)' }}>
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            We&apos;re here to help
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Have questions about Team Cross Fit for your organization? Our team is ready to help HR and people teams build better wellness programs.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-12 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in touch</h2>

            <div className="space-y-6 mb-10">
              {[
                { icon: '📧', title: 'Email', value: 'support@teamcrossfit.com', href: 'mailto:support@teamcrossfit.com' },
                { icon: '📞', title: 'Phone', value: '(855) XXX-XXXX', href: 'tel:+18550000000' },
                { icon: '🕐', title: 'Business Hours', value: 'Monday – Friday, 9am – 6pm EST', href: null },
              ].map(item => (
                <div key={item.title} className="flex items-start gap-4 p-5 rounded-2xl" style={{ background: 'rgba(0,0,0,0.02)' }}>
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                    {item.href ? (
                      <a href={item.href} className="text-green-600 hover:text-green-700 transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-gray-500">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* For HR teams callout */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🏢</span>
                <h3 className="font-bold text-gray-900">For HR & People Teams</h3>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                Looking to launch a wellness program for your organization? We work directly with HR teams to set up company accounts, configure wellness programs, and onboard employees.
              </p>
              <Link href="/for-employers"
                className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700 transition-colors">
                Learn about employer setup
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Contact form */}
          <div className="glass-card p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ background: 'linear-gradient(135deg, #16a34a, #059669)' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h3>
                <p className="text-gray-500 mb-6">Thanks for reaching out. We&apos;ll get back to you within one business day.</p>
                <button onClick={() => setSubmitted(false)}
                  className="px-6 py-3 text-sm font-semibold text-white rounded-xl"
                  style={{ background: 'linear-gradient(135deg, #16a34a, #059669)' }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                      <input type="text" name="name" required value={formData.name} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                        placeholder="Jane Smith" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Work Email *</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                        placeholder="jane@company.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Company</label>
                      <input type="text" name="company" value={formData.company} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                        placeholder="Acme Corp" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Role</label>
                      <select name="role" value={formData.role} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-white">
                        <option value="">Select role...</option>
                        <option value="hr">HR / People Team</option>
                        <option value="benefits">Benefits Manager</option>
                        <option value="executive">Executive / Leadership</option>
                        <option value="employee">Employee</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject *</label>
                    <select name="subject" required value={formData.subject} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-white">
                      <option value="">Select a topic...</option>
                      <option value="employer">Setting up a company wellness program</option>
                      <option value="employee">Employee account help</option>
                      <option value="integrations">Integrations & connected apps</option>
                      <option value="pricing">Pricing & plans</option>
                      <option value="privacy">Privacy & data questions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                    <textarea name="message" required rows={5} value={formData.message} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm resize-none"
                      placeholder="Tell us how we can help..." />
                  </div>

                  <button type="submit" disabled={submitting}
                    className="w-full py-4 text-sm font-semibold text-white rounded-xl transition-all hover:opacity-90 disabled:opacity-60"
                    style={{ background: 'linear-gradient(135deg, #16a34a, #059669)' }}>
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* FAQ quick links */}
      <section className="py-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Common Questions</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { q: 'How do employees join?', a: 'Employees receive a Company ID from their HR team and use it to create their account on Team Cross Fit.', link: '/how-it-works' },
              { q: 'What health apps are supported?', a: 'Apple Health is our primary integration. We also support compatible smartwatches and fitness trackers.', link: '/integrations' },
              { q: 'How does privacy work?', a: 'Employees control exactly what data they share. Employers only see aggregate wellness engagement data.', link: '/privacy' },
              { q: 'How do I set up a company program?', a: 'Contact our team or visit the For HR Teams page to learn about setting up your organization\'s wellness program.', link: '/for-employers' },
            ].map(item => (
              <div key={item.q} className="glass-card p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-sm text-gray-500 mb-3">{item.a}</p>
                <Link href={item.link} className="text-xs font-semibold text-green-600 hover:text-green-700 transition-colors">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
