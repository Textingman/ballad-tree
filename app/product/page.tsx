import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] blob opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(134,239,172,0.4) 0%, transparent 70%)' }} />
        <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] blob opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.4) 0%, transparent 70%)' }} />
      </div>

      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-green-700 mb-8"
            style={{ background: 'rgba(134,239,172,0.2)', border: '1px solid rgba(134,239,172,0.4)' }}>
            <span>⚡</span>
            Product Overview
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            The connected wellness platform
            <br /><span className="gradient-text-green">built for how people actually live.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
            Team Cross Fit bridges the gap between the health apps employees already use and the wellness programs companies want to run — without friction, manual logging, or privacy concerns.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup"
              className="px-8 py-4 text-base font-semibold text-white rounded-2xl shadow-xl hover:opacity-90 transition-all"
              style={{ background: 'linear-gradient(135deg, #16a34a, #059669)' }}>
              Get Started
            </Link>
            <Link href="/for-employers"
              className="px-8 py-4 text-base font-semibold text-gray-700 rounded-2xl glass-button">
              For HR Teams
            </Link>
          </div>
        </div>
      </section>

      {/* Core product pillars */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">
              One platform. Three experiences.
            </h2>
            <p className="text-lg text-gray-500">
              Team Cross Fit works for employees, HR teams, and the whole organization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '📱',
                title: 'For Employees',
                color: '#16a34a',
                desc: 'Connect your health apps, join challenges, track progress, and earn rewards — without changing how you already track your health.',
                features: ['Apple Health integration', 'Personal wellness dashboard', 'Challenge participation', 'Points & rewards', 'Movement streaks', 'Team leaderboards'],
                cta: { label: 'Employee Sign Up', href: '/signup' },
              },
              {
                icon: '🏢',
                title: 'For HR Teams',
                color: '#0891b2',
                desc: 'Launch wellness programs, run challenges, distribute rewards, and understand engagement — all without accessing individual health data.',
                features: ['Company program setup', 'Challenge management', 'Aggregate analytics', 'Reward distribution', 'Employee onboarding', 'Privacy-first reporting'],
                cta: { label: 'HR Team Setup', href: '/for-employers' },
              },
              {
                icon: '📊',
                title: 'For Organizations',
                color: '#7c3aed',
                desc: 'Build a culture of health across departments, locations, and remote teams with programs that scale with your organization.',
                features: ['Multi-team challenges', 'Department segmentation', 'Participation trends', 'ROI reporting', 'Benefits integration', 'Custom programs'],
                cta: { label: 'Talk to Our Team', href: '/contact' },
              },
            ].map(pillar => (
              <div key={pillar.title} className="glass-card p-8 flex flex-col">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6"
                  style={{ background: `${pillar.color}15` }}>
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-gray-500 mb-6 leading-relaxed">{pillar.desc}</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {pillar.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: pillar.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={pillar.cta.href}
                  className="block text-center py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                  style={{ background: `linear-gradient(135deg, ${pillar.color}, ${pillar.color}cc)` }}>
                  {pillar.cta.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key differentiators */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Why Team Cross Fit is different.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '🔗',
                title: 'Connected, not manual',
                desc: 'Employees don\'t log workouts manually. Team Cross Fit connects with Apple Health and compatible devices so eligible activity counts automatically. No friction. No behavior change required.',
              },
              {
                icon: '🔐',
                title: 'Privacy by design',
                desc: 'Employees choose what they share. Employers see aggregate wellness engagement — never individual health records. This isn\'t a compliance checkbox. It\'s how the product is built.',
              },
              {
                icon: '🏃',
                title: 'Meets employees where they are',
                desc: 'Your employees already track their steps, workouts, and activity. Team Cross Fit connects to what they\'re already doing and makes it count toward workplace wellness goals.',
              },
              {
                icon: '⚡',
                title: 'Zero IT overhead',
                desc: 'HR teams set up programs in under 30 minutes. Employees self-enroll with a Company ID. No enterprise software procurement. No IT tickets. No training required.',
              },
              {
                icon: '🏆',
                title: 'Challenges that actually engage',
                desc: 'Step challenges, movement streaks, team competitions, and wellness goals that employees actually want to participate in — because they\'re connected to real activity.',
              },
              {
                icon: '📊',
                title: 'Insights without overreach',
                desc: 'Understand which programs drive participation, which teams are most engaged, and where to focus — without needing access to sensitive personal health information.',
              },
            ].map(item => (
              <div key={item.title} className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature deep dives */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-5xl mx-auto space-y-20">

          {/* Integrations */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold text-green-600 uppercase tracking-widest mb-3">Integrations</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Connect the apps your employees already use.</h2>
              <p className="text-gray-500 mb-6">Apple Health is our primary integration. Employees connect once and eligible activity automatically contributes to wellness goals and challenges.</p>
              <Link href="/integrations" className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700">
                See all integrations →
              </Link>
            </div>
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #ff2d55, #ff6b6b)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Apple Health</p>
                  <p className="text-xs text-green-600">Primary Integration</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {['Steps', 'Workouts', 'Active Energy', 'Walking & Running', 'Exercise Activity', 'Movement'].map(item => (
                  <div key={item} className="flex items-center gap-2 p-2 rounded-lg text-xs text-gray-600" style={{ background: 'rgba(0,0,0,0.03)' }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Challenges */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="glass-card p-6 order-2 md:order-1">
              <div className="space-y-3">
                {[
                  { name: '10K Step Challenge', progress: 84, pts: '+100 pts', color: '#16a34a' },
                  { name: 'Movement Streak', progress: 80, pts: '+250 pts', color: '#f97316' },
                  { name: 'Wellness Month', progress: 73, pts: '+500 pts', color: '#7c3aed' },
                ].map(c => (
                  <div key={c.name} className="p-4 rounded-2xl" style={{ background: 'rgba(0,0,0,0.03)' }}>
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-sm font-semibold text-gray-900">{c.name}</p>
                      <span className="text-xs font-bold" style={{ color: c.color }}>{c.pts}</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                      <div className="h-1.5 rounded-full" style={{ width: `${c.progress}%`, background: c.color }} />
                    </div>
                    <p className="text-xs text-gray-400 mt-1">{c.progress}% complete</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-xs font-semibold text-orange-600 uppercase tracking-widest mb-3">Challenges</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Wellness challenges that drive real participation.</h2>
              <p className="text-gray-500 mb-6">Step challenges, movement streaks, team competitions, and monthly wellness goals — all connected to real activity data so employees don&apos;t have to manually track anything.</p>
              <Link href="/challenges" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700">
                Explore challenges →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass-card p-12" style={{ background: 'linear-gradient(135deg, rgba(240,253,244,0.9), rgba(240,249,255,0.9))' }}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to get started?</h2>
            <p className="text-lg text-gray-500 mb-8">
              Employees can join with a Company ID. HR teams can set up a program in under 30 minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/signup"
                className="px-8 py-4 text-base font-semibold text-white rounded-2xl shadow-xl hover:opacity-90 transition-all"
                style={{ background: 'linear-gradient(135deg, #16a34a, #059669)' }}>
                Employee Sign Up
              </Link>
              <Link href="/for-employers"
                className="px-8 py-4 text-base font-semibold text-gray-700 rounded-2xl glass-button">
                HR Team Setup
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
