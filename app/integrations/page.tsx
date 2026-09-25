'use client';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] blob opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(134,239,172,0.4) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] blob opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.4) 0%, transparent 70%)' }} />
      </div>

      <Nav />

      <section className="pt-32 pb-20 px-6 relative text-center" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-green-700 mb-8"
            style={{ background: 'rgba(134,239,172,0.2)', border: '1px solid rgba(134,239,172,0.4)' }}>
            <span>🔗</span>
            Connected Wellness
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Your health data already lives somewhere.
            <br /><span className="gradient-text-green">Bring it with you.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Employees shouldn&apos;t have to manually log every walk, workout, or activity just to participate in a workplace wellness program. Team Cross Fit connects with supported health and fitness platforms so eligible activity can automatically count toward wellness goals.
          </p>
        </div>
      </section>

      {/* Apple Health — Primary */}
      <section className="py-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-10 mb-8">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-3xl flex items-center justify-center shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #ff2d55, #ff6b6b)' }}>
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="white">
                    <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-3xl font-bold text-gray-900">Apple Health</h2>
                  <span className="px-3 py-1 text-sm font-semibold text-green-700 rounded-full"
                    style={{ background: 'rgba(134,239,172,0.25)' }}>Primary Integration</span>
                </div>
                <p className="text-lg text-gray-500 mb-6 leading-relaxed">
                  Connect eligible wellness activity from Apple Health. Employees choose which data types they want to share, and eligible activity automatically contributes to wellness goals and challenges.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                  {[
                    { name: 'Steps', desc: 'Daily step count' },
                    { name: 'Walking & Running', desc: 'Distance tracked' },
                    { name: 'Workouts', desc: 'Exercise sessions' },
                    { name: 'Active Energy', desc: 'Calories burned' },
                    { name: 'Exercise Activity', desc: 'Active minutes' },
                    { name: 'Movement', desc: 'Stand hours & rings' },
                  ].map(item => (
                    <div key={item.name} className="p-4 rounded-2xl" style={{ background: 'rgba(0,0,0,0.03)' }}>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                      </div>
                      <p className="text-xs text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl flex items-start gap-3"
                  style={{ background: 'rgba(134,239,172,0.1)', border: '1px solid rgba(134,239,172,0.3)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" className="flex-shrink-0 mt-0.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <p className="text-sm text-green-800">
                    <strong>Employees choose what information they share.</strong> Permissions can be updated or revoked at any time. Team Cross Fit only accesses the specific data types an employee explicitly authorizes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Other integrations */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: '⌚',
                title: 'Smartwatches',
                desc: 'Compatible smartwatch devices that sync with Apple Health can contribute eligible activity to wellness programs.',
                examples: ['Apple Watch', 'Compatible wearables', 'Health-connected devices'],
                color: '#0891b2',
              },
              {
                icon: '📱',
                title: 'Fitness Trackers',
                desc: 'Wearable fitness tracking devices that connect through supported health platforms.',
                examples: ['Activity trackers', 'Step counters', 'Health monitors'],
                color: '#7c3aed',
              },
              {
                icon: '🏃',
                title: 'Fitness Apps',
                desc: 'Running, cycling, and workout apps that write activity data to Apple Health.',
                examples: ['Running apps', 'Workout trackers', 'Wellness platforms'],
                color: '#059669',
              },
            ].map(item => (
              <div key={item.title} className="glass-card p-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4"
                  style={{ background: `${item.color}15` }}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{item.desc}</p>
                <ul className="space-y-1">
                  {item.examples.map(e => (
                    <li key={e} className="flex items-center gap-2 text-xs text-gray-400">
                      <div className="w-1 h-1 rounded-full" style={{ background: item.color }} />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Important note */}
          <div className="glass-card p-8 text-center">
            <span className="text-3xl mb-4 block">⚠️</span>
            <h3 className="text-xl font-bold text-gray-900 mb-3">About Integration Support</h3>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Team Cross Fit connects with Apple Health as its primary integration. Devices and apps that sync with Apple Health may contribute eligible activity. We do not claim direct integrations with specific third-party brands unless explicitly supported. Employees should verify their device or app syncs with Apple Health before expecting activity to count.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">
              How the connection works.
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', icon: '📱', title: 'Employee connects', desc: 'Employee authorizes Team Cross Fit to access specific Apple Health data types they choose.' },
              { step: '2', icon: '🔄', title: 'Activity syncs', desc: 'Eligible activity from connected apps and devices automatically syncs to Team Cross Fit.' },
              { step: '3', icon: '📊', title: 'Progress updates', desc: 'Activity counts toward active wellness challenges and personal wellness goals in real time.' },
              { step: '4', icon: '⭐', title: 'Rewards earned', desc: 'Completed challenges and milestones earn points that can be redeemed for company rewards.' },
            ].map((item, i) => (
              <div key={item.step} className="glass-card p-6 text-center relative">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white mx-auto mb-4"
                  style={{ background: 'linear-gradient(135deg, #16a34a, #059669)' }}>
                  {item.step}
                </div>
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="py-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🔐</span>
              <h2 className="text-2xl font-bold text-gray-900">Privacy & permissions</h2>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Employees choose what to share', desc: 'When connecting Apple Health, employees select exactly which data types they authorize. They can enable steps but not heart rate, for example.' },
                { title: 'Permissions can be revoked anytime', desc: 'Employees can disconnect their health apps or update permissions at any time through their account settings.' },
                { title: 'Employers see aggregate data only', desc: 'Employers never see individual employee health data. They see aggregate wellness engagement metrics for their programs.' },
                { title: 'No medical data required', desc: 'Team Cross Fit focuses on wellness activity data — steps, workouts, movement. Medical or clinical health data is not required or accessed.' },
              ].map(item => (
                <div key={item.title} className="flex items-start gap-4 p-4 rounded-2xl" style={{ background: 'rgba(0,0,0,0.02)' }}>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(22,163,74,0.15)' }}>
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href="/privacy" className="text-sm font-semibold text-green-600 hover:text-green-700">
                Read our full privacy policy →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to connect?</h2>
          <p className="text-lg text-gray-500 mb-8">
            Employees need a Company ID from their HR team to get started.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/talk-to-sales"
              className="px-8 py-4 text-base font-semibold text-white rounded-2xl shadow-xl hover:opacity-90 transition-all"
              style={{ background: 'linear-gradient(135deg, #16a34a, #059669)' }}>
              Employee Sign Up
            </Link>
            <Link href="/how-it-works"
              className="px-8 py-4 text-base font-semibold text-gray-700 rounded-2xl glass-button">
              How It Works
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
