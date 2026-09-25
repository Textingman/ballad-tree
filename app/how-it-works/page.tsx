'use client';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] blob opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(134,239,172,0.4) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] blob opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(196,181,253,0.4) 0%, transparent 70%)' }} />
      </div>

      <Nav />

      <section className="pt-32 pb-20 px-6 relative text-center" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-green-700 mb-8"
            style={{ background: 'rgba(134,239,172,0.2)', border: '1px solid rgba(134,239,172,0.4)' }}>
            <span>🔄</span>
            How It Works
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Your routine stays the same.
            <br /><span className="gradient-text-green">The experience gets better.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Team Cross Fit connects to the health apps and devices employees already use. No new habits required. No manual logging. Just better workplace wellness.
          </p>
        </div>
      </section>

      {/* Employee journey */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">For Employees</h2>
            <p className="text-gray-500">Four simple steps to connected workplace wellness.</p>
          </div>

          <div className="space-y-8">
            {[
              {
                num: '01',
                icon: '🔗',
                title: 'Connect',
                color: '#16a34a',
                desc: 'Your HR team provides a Company ID. Use it to create your Team Cross Fit account and connect your supported health apps and devices.',
                details: [
                  'Enter your Company ID from HR',
                  'Create your employee account',
                  'Connect Apple Health or compatible devices',
                  'Choose which eligible activity you want to share',
                  'You control your permissions — always',
                ],
                note: 'Employees choose what information they share. You can update permissions anytime.',
              },
              {
                num: '02',
                icon: '🏃',
                title: 'Move',
                color: '#0891b2',
                desc: 'Walk, run, work out, and build healthier habits. Eligible activity from your connected apps automatically contributes to your wellness goals.',
                details: [
                  'Walk, run, or work out as you normally would',
                  'Activity syncs automatically from Apple Health',
                  'Steps, workouts, and active minutes count',
                  'No manual logging required',
                  'Real-time progress updates',
                ],
                note: 'No behavior change required. Team Cross Fit works with what you\'re already doing.',
              },
              {
                num: '03',
                icon: '🏆',
                title: 'Challenge',
                color: '#7c3aed',
                desc: 'Join company, team, and individual wellness challenges. Compete with colleagues, build streaks, and celebrate progress together.',
                details: [
                  'Browse active company challenges',
                  'Join step challenges, movement streaks, and team competitions',
                  'See your progress on leaderboards',
                  'Cheer on teammates and celebrate milestones',
                  'New challenges launch regularly',
                ],
                note: 'Challenges are designed to be inclusive — not just for the most athletic employees.',
              },
              {
                num: '04',
                icon: '⭐',
                title: 'Earn',
                color: '#d97706',
                desc: 'Reach milestones, build streaks, and earn points and rewards for healthy activity. Redeem for perks your company offers.',
                details: [
                  'Earn points for completing challenges',
                  'Build streaks for consistent activity',
                  'Reach wellness milestones',
                  'Redeem points for company rewards',
                  'Track your wellness history over time',
                ],
                note: 'Rewards are set by your employer. Team Cross Fit distributes them automatically.',
              },
            ].map((step, i) => (
              <div key={step.num} className="glass-card p-8">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-5xl font-black" style={{ color: `${step.color}20` }}>{step.num}</div>
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                        style={{ background: `${step.color}15` }}>
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-500 leading-relaxed mb-4">{step.desc}</p>
                    <div className="p-4 rounded-xl text-sm text-gray-500 italic"
                      style={{ background: `${step.color}08`, borderLeft: `3px solid ${step.color}40` }}>
                      {step.note}
                    </div>
                  </div>
                  <div>
                    <ul className="space-y-3">
                      {step.details.map((d, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{ background: `${step.color}15` }}>
                            <div className="w-2 h-2 rounded-full" style={{ background: step.color }} />
                          </div>
                          <span className="text-sm text-gray-700">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HR journey */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">For HR & People Teams</h2>
            <p className="text-gray-500">Set up a connected wellness program in under 30 minutes.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                icon: '🏢',
                title: 'Set Up Your Program',
                color: '#16a34a',
                steps: ['Create your company account', 'Configure wellness program structure', 'Generate Company IDs for employees', 'Set up challenges and rewards', 'Define participation goals'],
              },
              {
                step: '02',
                icon: '📧',
                title: 'Invite Employees',
                color: '#0891b2',
                steps: ['Share Company IDs via email or Slack', 'Employees self-enroll in minutes', 'No IT involvement required', 'Employees connect their own apps', 'Automatic onboarding flow'],
              },
              {
                step: '03',
                icon: '📊',
                title: 'Track & Reward',
                color: '#7c3aed',
                steps: ['Monitor aggregate participation', 'Launch new challenges anytime', 'Distribute rewards automatically', 'Review engagement trends', 'Optimize programs over time'],
              },
            ].map(item => (
              <div key={item.step} className="glass-card p-6">
                <div className="text-3xl font-black mb-3" style={{ color: `${item.color}20` }}>{item.step}</div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4"
                  style={{ background: `${item.color}15` }}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.steps.map(s => (
                    <li key={s} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: item.color }} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/for-employers"
              className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700">
              Full HR setup guide →
            </Link>
          </div>
        </div>
      </section>

      {/* Privacy note */}
      <section className="py-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 text-center">
            <span className="text-4xl mb-4 block">🔐</span>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy is built in, not bolted on.</h2>
            <p className="text-gray-500 mb-6">
              Employees control what they share. Employers see aggregate wellness engagement — never individual health records. Team Cross Fit is designed so that participating in wellness programs feels transparent and intentional.
            </p>
            <Link href="/privacy"
              className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700">
              Read our privacy approach →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to get started?</h2>
          <p className="text-lg text-gray-500 mb-8">
            Employees need a Company ID from their HR team. HR teams can set up a program in under 30 minutes.
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
      </section>

      <Footer />
    </div>
  );
}
