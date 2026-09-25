'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from './components/Footer';

// ─── Progress Ring Component ───────────────────────────────────────────────
function ProgressRing({ percent, size = 60, stroke = 5, color = '#16a34a' }: {
  percent: number; size?: number; stroke?: number; color?: string;
}) {
  const r = (size - stroke * 2) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (percent / 100) * circ;
  return (
    <svg width={size} height={size} className="rotate-[-90deg]">
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth={stroke} />
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke}
        strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
        style={{ transition: 'stroke-dashoffset 1.5s ease-out' }} />
    </svg>
  );
}

// ─── Toggle Component ──────────────────────────────────────────────────────
function Toggle({ on }: { on: boolean }) {
  return (
    <div className={`w-10 h-6 rounded-full flex items-center px-1 transition-all duration-300 ${on ? 'bg-green-500' : 'bg-gray-200'}`}>
      <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-300 ${on ? 'translate-x-4' : 'translate-x-0'}`} />
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────
export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* ── BACKGROUND GRADIENT BLOBS ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] blob opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(134,239,172,0.4) 0%, rgba(52,211,153,0.2) 50%, transparent 70%)' }} />
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] blob opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.4) 0%, rgba(99,179,237,0.2) 50%, transparent 70%)' }} />
        <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] blob opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(196,181,253,0.35) 0%, rgba(167,139,250,0.15) 50%, transparent 70%)' }} />
      </div>

      {/* ── NAVIGATION ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'py-5 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Team Cross Fit" width={200} height={60} className="h-14 w-auto" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { label: 'Product', href: '/product' },
              { label: 'How It Works', href: '/how-it-works' },
              { label: 'Integrations', href: '/integrations' },
              { label: 'Challenges', href: '/challenges' },
              { label: 'For HR Teams', href: '/for-employers' },
            ].map(item => (
              <Link key={item.href} href={item.href} className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900 rounded-lg hover:bg-black/5 transition-all">
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link href="/signup" className="hidden md:block px-5 py-2.5 text-sm font-medium text-white rounded-xl transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-lg"
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
              {[
                { label: 'Product', href: '/product' },
                { label: 'How It Works', href: '/how-it-works' },
                { label: 'Integrations', href: '/integrations' },
                { label: 'Challenges', href: '/challenges' },
                { label: 'For HR Teams', href: '/for-employers' },
              ].map(item => (
                <Link key={item.href} href={item.href} className="block px-3 py-2.5 text-sm text-gray-700 hover:text-gray-900 rounded-lg hover:bg-black/5">
                  {item.label}
                </Link>
              ))}
              <Link href="/signup" className="block w-full mt-3 px-5 py-3 text-sm font-medium text-white rounded-xl text-center"
                style={{ background: 'linear-gradient(135deg, #16a34a, #059669)' }}>
                Get Started
              </Link>
            </div>
          )}
      </nav>

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 px-6" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-green-700 mb-8"
              style={{ background: 'rgba(134,239,172,0.2)', border: '1px solid rgba(134,239,172,0.4)' }}>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Connected Employee Wellness
            </div>

            {/* Headline */}
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
              Wellness That{' '}
              <span className="gradient-text-green">Moves With You</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-4">
              Team Cross Fit connects the health apps and devices your employees already use with company wellness programs, challenges, and rewards.
            </p>
            <p className="text-lg text-gray-400 max-w-xl mx-auto mb-10">
              Employees keep doing the activities they already love. Team Cross Fit turns that activity into progress.
            </p>

            {/* Trust statement */}
            <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-500">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Connect your health apps. Choose what you share. Stay in control.
            </p>
          </div>

          {/* ── HERO VISUAL ── */}
          <div className="relative max-w-5xl mx-auto">
            {/* Main dashboard card */}
            <div className="glass-card p-8 mx-auto max-w-2xl relative z-10">
              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Today&apos;s Activity</p>
                  <p className="text-2xl font-bold text-gray-900 mt-0.5">Good morning, Sarah 👋</p>
                </div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #16a34a, #059669)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
              </div>

              {/* Metrics row */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'Steps', value: '8,462', icon: '👟', color: '#16a34a', pct: 84 },
                  { label: 'Active Min', value: '42', icon: '⚡', color: '#0891b2', pct: 70 },
                  { label: 'Challenges', value: '3/4', icon: '🏆', color: '#7c3aed', pct: 75 },
                ].map(m => (
                  <div key={m.label} className="text-center p-4 rounded-2xl" style={{ background: 'rgba(0,0,0,0.03)' }}>
                    <div className="relative inline-flex items-center justify-center mb-2">
                      <ProgressRing percent={m.pct} size={52} stroke={4} color={m.color} />
                      <span className="absolute text-lg">{m.icon}</span>
                    </div>
                    <p className="text-lg font-bold text-gray-900">{m.value}</p>
                    <p className="text-xs text-gray-400">{m.label}</p>
                  </div>
                ))}
              </div>

              {/* Activity bar */}
              <div className="p-4 rounded-2xl" style={{ background: 'rgba(0,0,0,0.03)' }}>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold text-gray-700">Weekly Activity</p>
                  <span className="text-xs text-green-600 font-medium">+12% vs last week</span>
                </div>
                <div className="flex items-end gap-1.5 h-12">
                  {[60, 80, 45, 90, 70, 85, 84].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-md transition-all"
                      style={{ height: `${h}%`, background: i === 6 ? 'linear-gradient(to top, #16a34a, #4ade80)' : 'rgba(22,163,74,0.2)' }} />
                  ))}
                </div>
                <div className="flex justify-between mt-1">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                    <span key={i} className="flex-1 text-center text-[10px] text-gray-400">{d}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating metric cards */}
            <div className="absolute top-4 -left-4 md:-left-16 glass-card p-4 w-44 float-animation z-20">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">👟</span>
                <div>
                  <p className="text-xs text-gray-400">Daily Goal</p>
                  <p className="text-lg font-bold text-gray-900">8,462</p>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div className="h-1.5 rounded-full" style={{ width: '84%', background: 'linear-gradient(to right, #16a34a, #4ade80)' }} />
              </div>
              <p className="text-xs text-gray-400 mt-1">84% complete</p>
            </div>

            <div className="absolute top-4 -right-4 md:-right-16 glass-card p-4 w-44 float-animation-delay-1 z-20">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">🏃</span>
                <div>
                  <p className="text-xs text-gray-400">Morning Run</p>
                  <p className="text-base font-bold text-gray-900">3.4 miles</p>
                </div>
              </div>
              <p className="text-xs text-green-600 font-medium">✓ Synced from Apple Health</p>
            </div>

            <div className="absolute bottom-4 -left-4 md:-left-20 glass-card p-4 w-44 float-animation-delay-2 z-20">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">🔥</span>
                <div>
                  <p className="text-xs text-gray-400">Movement Streak</p>
                  <p className="text-base font-bold text-gray-900">6 days</p>
                </div>
              </div>
              <p className="text-xs text-orange-500 font-medium">Keep it going!</p>
            </div>

            <div className="absolute bottom-4 -right-4 md:-right-20 glass-card p-4 w-48 float-animation-delay-3 z-20">
              <p className="text-xs text-gray-400 mb-1">Team Challenge</p>
              <p className="text-sm font-bold text-gray-900">Product Team</p>
              <p className="text-xs text-blue-600 font-medium mb-2">🥈 2nd Place</p>
              <div className="flex items-center gap-1">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-[10px]"
                    style={{ background: `hsl(${i * 60}, 70%, 60%)` }}>
                    {['S','M','J','A'][i-1]}
                  </div>
                ))}
                <span className="text-xs text-gray-400 ml-1">+8</span>
              </div>
            </div>

            {/* Points badge */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-2 md:-right-8 glass-card px-4 py-3 z-20">
              <p className="text-xs text-gray-400">Challenge Completed</p>
              <p className="text-xl font-bold gradient-text-green">+250 pts</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS ── */}
      <section className="py-24 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-green-600 uppercase tracking-widest mb-4">Connected Wellness</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              Your health data already lives somewhere.
              <br /><span className="gradient-text-green">Bring it with you.</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Employees shouldn&apos;t have to manually log every walk, workout, or activity just to participate in a workplace wellness program.
            </p>
          </div>

          {/* Apple Health — Primary */}
          <div className="glass-card p-8 md:p-12 mb-6 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-3xl flex items-center justify-center shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #ff2d55, #ff6b6b)' }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="white">
                    <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-gray-900">Apple Health</h3>
                  <span className="px-3 py-1 text-xs font-semibold text-green-700 rounded-full"
                    style={{ background: 'rgba(134,239,172,0.25)' }}>Primary Integration</span>
                </div>
                <p className="text-gray-500 mb-6">Connect eligible wellness activity from Apple Health. Employees choose what information they share.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Steps', 'Walking & Running', 'Workouts', 'Active Energy', 'Exercise Activity', 'Movement'].map(item => (
                    <div key={item} className="flex items-center gap-2 p-3 rounded-xl" style={{ background: 'rgba(0,0,0,0.03)' }}>
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-400 mt-4 flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-500">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  Employees choose what information they share.
                </p>
              </div>
            </div>
          </div>

          {/* Other integration tiles */}
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { icon: '⌚', title: 'Smartwatches', desc: 'Compatible smartwatch devices', color: '#0891b2' },
              { icon: '📱', title: 'Fitness Trackers', desc: 'Wearable fitness tracking devices', color: '#7c3aed' },
              { icon: '🏃', title: 'Fitness Apps', desc: 'Connected wellness platforms', color: '#059669' },
            ].map(item => (
              <div key={item.title} className="glass-card p-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: `${item.color}15` }}>
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Your routine stays the same.
              <br /><span className="gradient-text-green">The experience gets better.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Connect', desc: 'Connect supported health apps and wearable devices. Employees choose which eligible wellness activity they want to share.', icon: '🔗', color: '#16a34a' },
              { num: '02', title: 'Move', desc: 'Walk, run, work out, exercise, and build healthier habits. Eligible activity can automatically contribute to wellness goals.', icon: '🏃', color: '#0891b2' },
              { num: '03', title: 'Challenge', desc: 'Join company, team, and individual wellness challenges. Compete, collaborate, and celebrate together.', icon: '🏆', color: '#7c3aed' },
              { num: '04', title: 'Earn', desc: 'Reach milestones, build streaks, and earn points and rewards for healthy activity.', icon: '⭐', color: '#d97706' },
            ].map((step, i) => (
              <div key={step.num} className="glass-card p-6 relative">
                <div className="text-5xl font-black mb-4" style={{ color: `${step.color}20` }}>{step.num}</div>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: `${step.color}15` }}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 z-10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WELLNESS CHALLENGES ── */}
      <section className="py-24 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Turn everyday movement into
              <br /><span className="gradient-text-green">something your team can do together.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* 10K Step Challenge */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">👟</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">10K Step Challenge</p>
                  <p className="text-xs text-gray-400">Daily</p>
                </div>
              </div>
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <ProgressRing percent={84} size={80} stroke={6} color="#16a34a" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold text-gray-900">84%</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 text-center mb-1">8,462 / 10,000 steps</p>
              <div className="text-center">
                <span className="text-xs font-semibold text-green-600 px-2 py-1 rounded-full" style={{ background: 'rgba(134,239,172,0.2)' }}>+100 pts</span>
              </div>
            </div>

            {/* Movement Streak */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🔥</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Movement Streak</p>
                  <p className="text-xs text-gray-400">Weekly</p>
                </div>
              </div>
              <div className="flex gap-2 mb-4">
                {[1,2,3,4,5].map(d => (
                  <div key={d} className={`flex-1 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${d <= 4 ? 'text-white' : 'text-gray-300'}`}
                    style={{ background: d <= 4 ? 'linear-gradient(135deg, #f97316, #ef4444)' : 'rgba(0,0,0,0.05)' }}>
                    {d <= 4 ? '✓' : d}
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 text-center mb-1">4 / 5 days completed</p>
              <div className="text-center">
                <span className="text-xs font-semibold text-orange-600 px-2 py-1 rounded-full" style={{ background: 'rgba(251,146,60,0.15)' }}>+250 pts</span>
              </div>
            </div>

            {/* Team Challenge */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">👥</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Team Step Challenge</p>
                  <p className="text-xs text-gray-400">This month</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-3 rounded-xl" style={{ background: 'rgba(22,163,74,0.08)' }}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-semibold text-gray-700">🥇 Product</span>
                    <span className="text-xs font-bold text-green-600">1.28M</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div className="h-1.5 rounded-full bg-green-500" style={{ width: '100%' }} />
                  </div>
                </div>
                <div className="p-3 rounded-xl" style={{ background: 'rgba(0,0,0,0.03)' }}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-semibold text-gray-700">🥈 Sales</span>
                    <span className="text-xs font-bold text-gray-600">1.20M</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div className="h-1.5 rounded-full bg-blue-400" style={{ width: '94%' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Wellness Month */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🌿</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Wellness Month</p>
                  <p className="text-xs text-gray-400">15 activities</p>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-1.5 mb-4">
                {Array.from({ length: 15 }).map((_, i) => (
                  <div key={i} className={`h-6 rounded-md ${i < 11 ? 'bg-green-400' : 'bg-gray-100'}`} />
                ))}
              </div>
              <p className="text-xs text-gray-500 text-center mb-1">11 / 15 complete</p>
              <div className="text-center">
                <span className="text-xs font-semibold text-purple-600 px-2 py-1 rounded-full" style={{ background: 'rgba(196,181,253,0.25)' }}>+500 pts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WEARABLE EXPERIENCE ── */}
      <section className="py-24 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Already on your wrist.
              </h2>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Employees don&apos;t need to change how they track their wellness. Connect compatible health apps and devices and let everyday activity become part of their workplace wellness experience.
              </p>
              <div className="space-y-4">
                {[
                  { icon: '🔄', title: 'Automatic sync', desc: 'Eligible activity syncs automatically — no manual logging required.' },
                  { icon: '🔒', title: 'Privacy first', desc: 'Employees control exactly what data they share and can revoke access anytime.' },
                  { icon: '📊', title: 'Real-time progress', desc: 'See challenge progress update as activity is recorded throughout the day.' },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-4 p-4 rounded-2xl" style={{ background: 'rgba(0,0,0,0.02)' }}>
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Device mockups */}
            <div className="relative flex items-center justify-center gap-8">
              {/* Watch */}
              <div className="glass-card p-5 w-36 float-animation">
                <div className="w-full aspect-square rounded-2xl flex flex-col items-center justify-center p-3"
                  style={{ background: 'linear-gradient(135deg, #1a1a2e, #16213e)' }}>
                  <div className="relative mb-2">
                    <ProgressRing percent={84} size={56} stroke={5} color="#4ade80" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">84%</span>
                    </div>
                  </div>
                  <p className="text-[9px] text-gray-400 text-center">Movement Goal</p>
                </div>
                <p className="text-xs text-center text-gray-500 mt-2 font-medium">Smartwatch</p>
              </div>

              {/* Phone */}
              <div className="glass-card p-4 w-52 float-animation-delay-1">
                <div className="w-full rounded-2xl p-4" style={{ background: 'linear-gradient(135deg, #f0fdf4, #ecfdf5)' }}>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, #16a34a, #059669)' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-gray-700">Team Cross Fit</span>
                  </div>
                  <p className="text-[10px] text-gray-400 mb-3 font-medium uppercase tracking-wider">Today&apos;s Activity</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600">👟 Steps</span>
                      <span className="text-xs font-bold text-gray-900">8,462</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600">⚡ Active min</span>
                      <span className="text-xs font-bold text-gray-900">42</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600">🎯 Movement</span>
                      <span className="text-xs font-bold text-green-600">84%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600">🏆 Challenges</span>
                      <span className="text-xs font-bold text-gray-900">3 of 4</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EMPLOYER EXPERIENCE ── */}
      <section className="py-24 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Better wellness programs.
              <br /><span className="gradient-text-blue">Without more administration.</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Create wellness initiatives, launch challenges, reward participation, and understand program engagement from one place.
            </p>
          </div>

          <div className="glass-card p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Employer Dashboard</p>
                <p className="text-xl font-bold text-gray-900 mt-1">September Overview</p>
              </div>
              <span className="px-3 py-1.5 text-xs font-semibold text-green-700 rounded-full"
                style={{ background: 'rgba(134,239,172,0.2)' }}>Live</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[
                { label: 'Active Employees', value: '143', change: '+12%', icon: '👥' },
                { label: 'Challenge Participation', value: '68%', change: '+8%', icon: '🏆' },
                { label: 'Rewards Distributed', value: '2,840', change: '+340', icon: '⭐' },
                { label: 'Total Steps', value: '12.4M', change: 'This month', icon: '👟' },
                { label: 'Team Engagement', value: '91%', change: '+5%', icon: '📈' },
                { label: 'Active Challenges', value: '6', change: '2 ending soon', icon: '🎯' },
              ].map(stat => (
                <div key={stat.label} className="p-4 rounded-2xl" style={{ background: 'rgba(0,0,0,0.03)' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{stat.icon}</span>
                    <p className="text-xs text-gray-400">{stat.label}</p>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-green-600 font-medium mt-1">{stat.change}</p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl flex items-center gap-3" style={{ background: 'rgba(134,239,172,0.1)', border: '1px solid rgba(134,239,172,0.3)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <p className="text-sm text-green-800">
                <strong>Privacy protected:</strong> Employers see aggregate wellness engagement — not individual health data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRIVACY ── */}
      <section className="py-24 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Health information is personal.
                <br /><span className="gradient-text-green">Keep it that way.</span>
              </h2>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Team Cross Fit is designed around employee choice. Employees decide whether to connect supported health services and choose what eligible activity they authorize.
              </p>
              <div className="space-y-6">
                {[
                  { icon: '🔐', title: 'Your Data', desc: 'Your wellness information belongs to you.' },
                  { icon: '⚙️', title: 'Your Permissions', desc: 'Choose which supported information you share.' },
                  { icon: '✋', title: 'Your Choice', desc: 'Participating in connected wellness experiences should feel transparent and intentional.' },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Privacy permissions card */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #ff2d55, #ff6b6b)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Apple Health</p>
                  <p className="text-xs text-gray-400">Allow Team Cross Fit to access:</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { label: 'Steps', on: true },
                  { label: 'Workouts', on: true },
                  { label: 'Active Energy', on: true },
                  { label: 'Sleep', on: false },
                  { label: 'Heart Rate', on: false },
                ].map(item => (
                  <div key={item.label} className="flex items-center justify-between p-3 rounded-xl" style={{ background: 'rgba(0,0,0,0.03)' }}>
                    <span className="text-sm font-medium text-gray-700">{item.label}</span>
                    <Toggle on={item.on} />
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-400 mt-4 text-center">
                Conceptual visualization — employees control their own permissions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL / TEAM ── */}
      <section className="py-24 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Wellness works better <span className="gradient-text-green">together.</span>
          </h2>
          <p className="text-lg text-gray-500 mb-16 max-w-xl mx-auto">
            Build a culture where healthy habits are celebrated, not just tracked.
          </p>

          <div className="glass-card p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="text-left">
                <p className="font-bold text-gray-900">September Movement Challenge</p>
                <p className="text-sm text-gray-500">143 participants</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold gradient-text-green">68%</p>
                <p className="text-xs text-gray-400">complete</p>
              </div>
            </div>

            {/* Participant avatars */}
            <div className="flex items-center justify-center mb-6">
              <div className="flex -space-x-3">
                {['S', 'M', 'J', 'A', 'K', 'R', 'T', 'L'].map((letter, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-sm font-bold text-white shadow-sm"
                    style={{ background: `hsl(${i * 45}, 65%, 55%)` }}>
                    {letter}
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600 bg-gray-100 shadow-sm">
                  +135
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>12.4M total steps</span>
                <span>Goal: 18M</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="h-2 rounded-full" style={{ width: '68%', background: 'linear-gradient(to right, #16a34a, #4ade80)' }} />
              </div>
            </div>

            <div className="space-y-2">
              {[
                { emoji: '✅', text: 'Sarah completed today\'s goal' },
                { emoji: '🔥', text: 'Mike reached a 7-day streak' },
                { emoji: '🥇', text: 'Product moved into 1st place' },
                { emoji: '🎉', text: 'Team challenge completed!' },
              ].map((event, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl text-sm text-gray-600" style={{ background: 'rgba(0,0,0,0.02)' }}>
                  <span>{event.emoji}</span>
                  <span>{event.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── REWARDS ── */}
      <section className="py-24 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Make healthy habits <span className="gradient-text-green">rewarding.</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Companies can recognize wellness participation with points, perks, experiences, and rewards.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="glass-card p-8 mb-6 text-center">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Your Balance</p>
              <p className="text-5xl font-black gradient-text-green">2,840</p>
              <p className="text-gray-500 mt-1">points available</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Wellness Day', pts: 2500, icon: '🌿', available: true },
                { name: 'Team Lunch', pts: 1500, icon: '🍽️', available: true },
                { name: 'Fitness Credit', pts: 2000, icon: '💪', available: true },
                { name: 'Company Swag', pts: 750, icon: '👕', available: true },
              ].map(reward => (
                <div key={reward.name} className="glass-card p-5">
                  <span className="text-3xl mb-3 block">{reward.icon}</span>
                  <p className="font-semibold text-gray-900 mb-1">{reward.name}</p>
                  <p className="text-sm text-gray-500 mb-3">{reward.pts.toLocaleString()} pts</p>
                  <button className={`w-full py-2 rounded-xl text-sm font-semibold transition-all ${reward.available ? 'text-white hover:opacity-90' : 'text-gray-400 bg-gray-100'}`}
                    style={reward.available ? { background: 'linear-gradient(135deg, #16a34a, #059669)' } : {}}>
                    Redeem
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl p-12 md:p-16 text-center"
            style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 30%, #f0f9ff 60%, #f5f3ff 100%)' }}>
            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-64 h-64 blob opacity-40"
              style={{ background: 'radial-gradient(circle, rgba(134,239,172,0.5) 0%, transparent 70%)' }} />
            <div className="absolute bottom-0 right-0 w-64 h-64 blob opacity-30"
              style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.5) 0%, transparent 70%)' }} />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Make every move count.
              </h2>
              <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Connect the apps your employees already use, build wellness programs people actually participate in, and make healthier habits part of your company culture.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="px-10 py-4 text-base font-semibold text-white rounded-2xl shadow-xl hover:opacity-90 hover:-translate-y-0.5 transition-all"
                  style={{ background: 'linear-gradient(135deg, #16a34a, #059669)' }}>
                  Get Started
                </button>
                <button className="px-10 py-4 text-base font-semibold text-gray-700 rounded-2xl glass-button">
                  See How It Works
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <Footer />

    </div>
  );
}
