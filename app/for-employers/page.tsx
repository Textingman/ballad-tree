'use client';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function ForEmployersPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] blob opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(134,239,172,0.4) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] blob opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.4) 0%, transparent 70%)' }} />
      </div>

      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-blue-700 mb-8"
            style={{ background: 'rgba(147,197,253,0.2)', border: '1px solid rgba(147,197,253,0.4)' }}>
            <span>🏢</span>
            For HR & People Teams
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Build a wellness program
            <br /><span style={{ background: 'linear-gradient(135deg, #16a34a, #0891b2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              your employees actually use.
            </span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
            Team Cross Fit gives HR and people teams the tools to launch connected wellness programs, run challenges, and understand engagement — without adding administrative burden.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact"
              className="px-8 py-4 text-base font-semibold text-white rounded-2xl shadow-xl hover:opacity-90 transition-all"
              style={{ background: 'linear-gradient(135deg, #16a34a, #059669)' }}>
              Talk to Our Team
            </Link>
            <Link href="/signup"
              className="px-8 py-4 text-base font-semibold text-gray-700 rounded-2xl glass-button">
              Employee Sign Up
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '68%', label: 'Average challenge participation rate' },
                { value: '3x', label: 'More engagement vs. traditional programs' },
                { value: '91%', label: 'Employee satisfaction with connected wellness' },
                { value: '0', label: 'Manual data entry required from employees' },
              ].map(stat => (
                <div key={stat.label}>
                  <p className="text-4xl font-black mb-2" style={{ background: 'linear-gradient(135deg, #16a34a, #059669)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works for HR */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Simple to set up. Easy to run.
            </h2>
            <p className="text-lg text-gray-500">
              Team Cross Fit is designed to minimize HR administration while maximizing employee participation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                icon: '🏢',
                title: 'Set Up Your Organization',
                desc: 'Create your company account, configure your wellness program structure, and generate Company IDs for your employees. Takes less than 30 minutes.',
                color: '#16a34a',
              },
              {
                step: '02',
                icon: '📧',
                title: 'Invite Your Employees',
                desc: 'Share Company IDs with employees via email, Slack, or your HRIS. Employees self-enroll and connect their own health apps — no IT involvement needed.',
                color: '#0891b2',
              },
              {
                step: '03',
                icon: '📊',
                title: 'Track & Reward Engagement',
                desc: 'Monitor aggregate participation, launch challenges, distribute rewards, and understand what\'s working — all from your employer dashboard.',
                color: '#7c3aed',
              },
            ].map(item => (
              <div key={item.step} className="glass-card p-8">
                <div className="text-4xl font-black mb-4" style={{ color: `${item.color}20` }}>{item.step}</div>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: `${item.color}15` }}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employer dashboard preview */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-6">
                Everything you need to run a healthy workplace.
              </h2>
              <div className="space-y-5">
                {[
                  { icon: '📊', title: 'Aggregate Engagement Analytics', desc: 'See participation rates, challenge completion, and wellness trends across your organization — without accessing individual health data.' },
                  { icon: '🏆', title: 'Challenge Management', desc: 'Create and launch step challenges, movement streaks, team competitions, and custom wellness goals in minutes.' },
                  { icon: '🎁', title: 'Rewards & Recognition', desc: 'Distribute points, perks, and rewards to recognize wellness participation and healthy habits.' },
                  { icon: '🔐', title: 'Privacy-First Design', desc: 'Employees control their own data. You see what you need to run programs — nothing more.' },
                  { icon: '📱', title: 'No App to Build', desc: 'Employees use the health apps they already have. Team Cross Fit connects the dots.' },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard mockup */}
            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Employer Dashboard</p>
                  <p className="text-lg font-bold text-gray-900 mt-0.5">September Overview</p>
                </div>
                <span className="px-3 py-1 text-xs font-semibold text-green-700 rounded-full"
                  style={{ background: 'rgba(134,239,172,0.2)' }}>Live</span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { label: 'Active Employees', value: '143', icon: '👥', change: '+12%' },
                  { label: 'Participation Rate', value: '68%', icon: '🏆', change: '+8%' },
                  { label: 'Total Steps', value: '12.4M', icon: '👟', change: 'This month' },
                  { label: 'Rewards Given', value: '2,840', icon: '⭐', change: '+340' },
                ].map(stat => (
                  <div key={stat.label} className="p-4 rounded-2xl" style={{ background: 'rgba(0,0,0,0.03)' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-base">{stat.icon}</span>
                      <p className="text-xs text-gray-400">{stat.label}</p>
                    </div>
                    <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-green-600 font-medium mt-0.5">{stat.change}</p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl" style={{ background: 'rgba(134,239,172,0.1)', border: '1px solid rgba(134,239,172,0.3)' }}>
                <p className="text-xs text-green-800 font-medium">
                  🔒 Individual health data is never visible to employers. You see aggregate wellness engagement only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Built for every type of workplace.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🏢',
                title: 'Corporate & Enterprise',
                desc: 'Run wellness programs across departments, locations, and remote teams. Segment by team, tenure, or role.',
                features: ['Multi-department challenges', 'Location-based programs', 'Manager-led recognition', 'Advanced reporting'],
              },
              {
                icon: '🌱',
                title: 'Mid-Size Companies',
                desc: 'Build a wellness culture from the ground up. Easy to launch, easy to manage, high employee adoption.',
                features: ['Quick setup', 'Peer-to-peer challenges', 'Flexible reward options', 'Participation tracking'],
              },
              {
                icon: '💻',
                title: 'Remote & Hybrid Teams',
                desc: 'Keep distributed teams connected through shared wellness goals and team challenges.',
                features: ['Virtual team challenges', 'Async participation', 'Digital recognition', 'Cross-location leaderboards'],
              },
            ].map(item => (
              <div key={item.title} className="glass-card p-8">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-5">{item.desc}</p>
                <ul className="space-y-2">
                  {item.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-12 text-center"
            style={{ background: 'linear-gradient(135deg, rgba(240,253,244,0.9), rgba(240,249,255,0.9))' }}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to launch your wellness program?</h2>
            <p className="text-lg text-gray-500 mb-8">
              Talk to our team about setting up Team Cross Fit for your organization. We&apos;ll help you configure your program, generate Company IDs, and get employees enrolled.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact"
                className="px-8 py-4 text-base font-semibold text-white rounded-2xl shadow-xl hover:opacity-90 transition-all"
                style={{ background: 'linear-gradient(135deg, #16a34a, #059669)' }}>
                Talk to Our Team
              </Link>
              <Link href="/how-it-works"
                className="px-8 py-4 text-base font-semibold text-gray-700 rounded-2xl glass-button">
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
