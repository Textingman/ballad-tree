'use client';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

function ProgressBar({ pct, color }: { pct: number; color: string }) {
  return (
    <div className="w-full bg-gray-100 rounded-full h-2">
      <div className="h-2 rounded-full transition-all" style={{ width: `${pct}%`, background: color }} />
    </div>
  );
}

export default function ChallengesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] blob opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(134,239,172,0.4) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] blob opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.3) 0%, transparent 70%)' }} />
      </div>

      <Nav />

      <section className="pt-32 pb-20 px-6 relative text-center" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-orange-700 mb-8"
            style={{ background: 'rgba(251,146,60,0.15)', border: '1px solid rgba(251,146,60,0.3)' }}>
            <span>🏆</span>
            Wellness Challenges
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Turn everyday movement into
            <br /><span className="gradient-text-green">something your team does together.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Team Cross Fit challenges connect to real activity data from employees&apos; health apps — so participation is automatic, not manual. No logging. No guessing. Just real wellness.
          </p>
        </div>
      </section>

      {/* Challenge types */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Four types of challenges.
            </h2>
            <p className="text-lg text-gray-500">
              Each designed to drive real participation and healthy habits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Step Challenges */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ background: 'rgba(22,163,74,0.12)' }}>👟</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Step Challenges</h3>
                  <p className="text-sm text-gray-400">Daily, weekly, or monthly goals</p>
                </div>
              </div>
              <p className="text-gray-500 mb-6">
                Set daily or cumulative step targets. Steps sync automatically from Apple Health and compatible devices. Employees see their progress in real time.
              </p>
              <div className="p-5 rounded-2xl mb-4" style={{ background: 'rgba(0,0,0,0.03)' }}>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-semibold text-gray-900">10K Step Challenge</p>
                  <span className="text-xs font-bold text-green-600">+100 pts</span>
                </div>
                <p className="text-xs text-gray-400 mb-3">8,462 / 10,000 steps today</p>
                <ProgressBar pct={84} color="#16a34a" />
                <p className="text-xs text-gray-400 mt-1">84% complete</p>
              </div>
              <ul className="space-y-2">
                {['Daily 10K step goals', 'Weekly cumulative targets', 'Monthly step totals', 'Automatic sync from Apple Health'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Movement Streaks */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ background: 'rgba(249,115,22,0.12)' }}>🔥</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Movement Streaks</h3>
                  <p className="text-sm text-gray-400">Consistency over time</p>
                </div>
              </div>
              <p className="text-gray-500 mb-6">
                Reward consistent activity over multiple days. Streaks build habits and keep employees engaged week after week — not just during a single challenge.
              </p>
              <div className="p-5 rounded-2xl mb-4" style={{ background: 'rgba(0,0,0,0.03)' }}>
                <div className="flex justify-between items-center mb-3">
                  <p className="text-sm font-semibold text-gray-900">5-Day Movement Streak</p>
                  <span className="text-xs font-bold text-orange-600">+250 pts</span>
                </div>
                <div className="flex gap-2">
                  {[1,2,3,4,5].map(d => (
                    <div key={d} className={`flex-1 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${d <= 4 ? 'text-white' : 'text-gray-300'}`}
                      style={{ background: d <= 4 ? 'linear-gradient(135deg, #f97316, #ef4444)' : 'rgba(0,0,0,0.05)' }}>
                      {d <= 4 ? '✓' : d}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-2">4 of 5 days complete</p>
              </div>
              <ul className="space-y-2">
                {['Daily movement targets', 'Multi-day streak tracking', 'Streak protection options', 'Bonus points for long streaks'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Team Challenges */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ background: 'rgba(8,145,178,0.12)' }}>👥</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Team Challenges</h3>
                  <p className="text-sm text-gray-400">Compete together</p>
                </div>
              </div>
              <p className="text-gray-500 mb-6">
                Pit departments, locations, or custom teams against each other. Team challenges build camaraderie and drive higher participation than individual challenges alone.
              </p>
              <div className="p-5 rounded-2xl mb-4 space-y-3" style={{ background: 'rgba(0,0,0,0.03)' }}>
                <p className="text-sm font-semibold text-gray-900 mb-2">Team Step Challenge</p>
                {[
                  { name: '🥇 Product', steps: '1,284,430', pct: 100, color: '#16a34a' },
                  { name: '🥈 Sales', steps: '1,201,220', pct: 94, color: '#0891b2' },
                  { name: '🥉 Marketing', steps: '1,089,440', pct: 85, color: '#7c3aed' },
                ].map(t => (
                  <div key={t.name}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-medium text-gray-700">{t.name}</span>
                      <span className="text-gray-400">{t.steps}</span>
                    </div>
                    <ProgressBar pct={t.pct} color={t.color} />
                  </div>
                ))}
              </div>
              <ul className="space-y-2">
                {['Department vs. department', 'Custom team groupings', 'Real-time leaderboards', 'Team aggregate tracking'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Wellness Goals */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ background: 'rgba(124,58,237,0.12)' }}>🌿</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Wellness Goals</h3>
                  <p className="text-sm text-gray-400">Monthly programs</p>
                </div>
              </div>
              <p className="text-gray-500 mb-6">
                Longer-form wellness programs that reward employees for completing a set number of wellness activities over a month. Flexible and inclusive by design.
              </p>
              <div className="p-5 rounded-2xl mb-4" style={{ background: 'rgba(0,0,0,0.03)' }}>
                <div className="flex justify-between items-center mb-3">
                  <p className="text-sm font-semibold text-gray-900">Wellness Month</p>
                  <span className="text-xs font-bold text-purple-600">+500 pts</span>
                </div>
                <div className="grid grid-cols-5 gap-1.5 mb-2">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <div key={i} className={`h-6 rounded-md ${i < 11 ? 'bg-purple-400' : 'bg-gray-100'}`} />
                  ))}
                </div>
                <p className="text-xs text-gray-400">11 of 15 activities complete</p>
              </div>
              <ul className="space-y-2">
                {['Monthly activity targets', 'Multiple activity types count', 'Flexible completion windows', 'Inclusive for all fitness levels'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How challenges work */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Challenges that run themselves.
            </h2>
            <p className="text-lg text-gray-500">
              HR teams launch challenges. Employees participate. Activity syncs automatically.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              {[
                { icon: '⚡', title: 'Automatic activity tracking', desc: 'Steps, workouts, and movement sync from Apple Health automatically. Employees don\'t need to log anything manually.' },
                { icon: '📊', title: 'Real-time progress', desc: 'Employees see their challenge progress update throughout the day as activity is recorded.' },
                { icon: '🏆', title: 'Instant rewards', desc: 'When a challenge is completed, points are awarded automatically. No manual review required.' },
                { icon: '🔔', title: 'Encouragement & milestones', desc: 'Employees receive notifications when they hit milestones, complete challenges, or build streaks.' },
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

            <div className="glass-card p-6">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-4">Active Challenges</p>
              <div className="space-y-4">
                {[
                  { name: '10K Step Challenge', type: 'Daily', progress: 84, pts: '+100 pts', color: '#16a34a', icon: '👟' },
                  { name: 'Movement Streak', type: '5-day', progress: 80, pts: '+250 pts', color: '#f97316', icon: '🔥' },
                  { name: 'Team Step Challenge', type: 'Monthly', progress: 71, pts: 'Team', color: '#0891b2', icon: '👥' },
                  { name: 'Wellness Month', type: '15 activities', progress: 73, pts: '+500 pts', color: '#7c3aed', icon: '🌿' },
                ].map(c => (
                  <div key={c.name} className="p-4 rounded-2xl" style={{ background: 'rgba(0,0,0,0.03)' }}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span>{c.icon}</span>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{c.name}</p>
                          <p className="text-xs text-gray-400">{c.type}</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold" style={{ color: c.color }}>{c.pts}</span>
                    </div>
                    <ProgressBar pct={c.progress} color={c.color} />
                    <p className="text-xs text-gray-400 mt-1">{c.progress}% complete</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to launch your first challenge?</h2>
          <p className="text-lg text-gray-500 mb-8">
            HR teams can set up challenges in minutes. Employees join with a Company ID.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/for-employers"
              className="px-8 py-4 text-base font-semibold text-white rounded-2xl shadow-xl hover:opacity-90 transition-all"
              style={{ background: 'linear-gradient(135deg, #16a34a, #059669)' }}>
              Set Up a Program
            </Link>
            <Link href="/signup"
              className="px-8 py-4 text-base font-semibold text-gray-700 rounded-2xl glass-button">
              Employee Sign Up
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
