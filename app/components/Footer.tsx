import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--forest)', color: 'var(--ivory)' }}>
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Top row */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(245,243,235,0.15)', border: '1px solid rgba(245,243,235,0.2)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8 2 4 6 4 10c0 5 8 12 8 12s8-7 8-12c0-4-4-8-8-8z" fill="#F5F3EB" opacity="0.9" />
                  <circle cx="12" cy="10" r="3" fill="#F5F3EB" opacity="0.5" />
                </svg>
              </div>
              <span className="font-mono-label" style={{ color: 'var(--ivory)', fontSize: '0.75rem' }}>
                Ballad Tree
              </span>
            </div>
            <p
              className="headline-md italic-accent mb-6"
              style={{ color: 'rgba(245,243,235,0.7)', maxWidth: '320px', fontSize: '1.4rem' }}
            >
              Financial wellness that grows with your people.
            </p>
            <p style={{ color: 'rgba(245,243,235,0.45)', fontSize: '0.85rem', lineHeight: '1.7', maxWidth: '280px' }}>
              Helping companies build financially secure, confident, and resilient workforces.
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="font-mono-label mb-6" style={{ color: 'rgba(245,243,235,0.4)', fontSize: '0.65rem' }}>
              Product
            </p>
            <ul className="space-y-3">
              {[
                { label: 'How It Works', href: '/how-it-works' },
                { label: 'For Employers', href: '/for-employers' },
                { label: 'Product', href: '/product' },
                { label: 'Get Started', href: '/signup' },
              ].map(item => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{ color: 'rgba(245,243,235,0.6)', fontSize: '0.9rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--ivory)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,243,235,0.6)')}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="font-mono-label mb-6" style={{ color: 'rgba(245,243,235,0.4)', fontSize: '0.65rem' }}>
              Legal
            </p>
            <ul className="space-y-3">
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
                { label: 'Contact', href: '/contact' },
              ].map(item => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{ color: 'rgba(245,243,235,0.6)', fontSize: '0.9rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--ivory)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,243,235,0.6)')}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(245,243,235,0.1)', paddingTop: '2rem' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-mono-label" style={{ color: 'rgba(245,243,235,0.3)', fontSize: '0.65rem' }}>
              © {new Date().getFullYear()} Ballad Tree. All rights reserved.
            </p>
            <p className="font-mono-label" style={{ color: 'rgba(245,243,235,0.3)', fontSize: '0.65rem' }}>
              balladtree.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
