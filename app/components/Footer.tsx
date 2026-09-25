import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-gray-100 relative bg-white" style={{ zIndex: 1 }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3">
              <Image src="/logo.png" alt="Team Cross Fit" width={200} height={60} className="h-14 w-auto" />
            </Link>
            <p className="text-sm text-gray-400 max-w-xs">
              Connected employee wellness for HR and people teams.
            </p>
          </div>

            <div className="flex flex-wrap gap-12">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Product</p>
              <div className="space-y-2">
                <Link href="/product" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">Product Overview</Link>
                <Link href="/integrations" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">Integrations</Link>
                <Link href="/challenges" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">Challenges</Link>
                <Link href="/how-it-works" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">How It Works</Link>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">For Teams</p>
              <div className="space-y-2">
                <Link href="/for-employers" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">For HR Teams</Link>
                <Link href="/signup" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">Get Started</Link>
                <Link href="/contact" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">Contact Us</Link>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Legal</p>
              <div className="space-y-2">
                <Link href="/privacy" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">Terms of Service</Link>
                <Link href="/contact" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">&copy; 2026 Team Cross Fit. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {/* Google */}
            <a href="https://google.com" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
