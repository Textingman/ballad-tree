'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/product', label: 'Product' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/integrations', label: 'Integrations' },
    { href: '/challenges', label: 'Challenges' },
    { href: '/for-employers', label: 'For HR Teams' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'py-5 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Team Cross Fit" width={200} height={60} className="h-14 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(item => (
            <Link key={item.href} href={item.href}
              className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900 rounded-lg hover:bg-black/5 transition-all">
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link href="/signup"
            className="hidden md:block px-5 py-2.5 text-sm font-medium text-white rounded-xl transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-lg"
            style={{ background: 'linear-gradient(135deg, #16a34a, #059669)' }}>
            Get Started
          </Link>
          <button className="md:hidden p-2 rounded-lg hover:bg-black/5" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav mt-2 mx-4 rounded-2xl p-4">
          {navLinks.map(item => (
            <Link key={item.href} href={item.href}
              className="block px-3 py-2.5 text-sm text-gray-700 hover:text-gray-900 rounded-lg hover:bg-black/5"
              onClick={() => setMobileMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="/signup"
            className="block w-full mt-3 px-5 py-3 text-sm font-medium text-white rounded-xl text-center"
            style={{ background: 'linear-gradient(135deg, #16a34a, #059669)' }}>
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
