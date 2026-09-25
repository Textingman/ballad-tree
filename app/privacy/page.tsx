import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] blob opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(134,239,172,0.4) 0%, transparent 70%)' }} />
      </div>

      <Nav />

      <section className="pt-32 pb-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-green-700 mb-8"
            style={{ background: 'rgba(134,239,172,0.2)', border: '1px solid rgba(134,239,172,0.4)' }}>
            <span>🔐</span>
            Privacy Policy
          </div>
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-500">Last Updated: September 8, 2026</p>
        </div>
      </section>

      <section className="py-12 px-6 pb-20 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">

          {/* Privacy principles */}
          <div className="glass-card p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Privacy Principles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '🔐', title: 'Your Data', desc: 'Your wellness information belongs to you. You decide what to share and can revoke access at any time.' },
                { icon: '⚙️', title: 'Your Permissions', desc: 'You choose which supported health information you authorize. Granular control over every data type.' },
                { icon: '✋', title: 'Your Choice', desc: 'Participating in connected wellness experiences should feel transparent and intentional — never coerced.' },
              ].map(item => (
                <div key={item.title} className="text-center p-4">
                  <span className="text-3xl mb-3 block">{item.icon}</span>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="prose prose-lg max-w-none space-y-10">

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                Team Cross Fit (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our connected employee wellness platform.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Team Cross Fit is designed around employee choice. Employees decide whether to connect supported health services and choose what eligible activity they authorize. Employers receive the information necessary to operate wellness programs without needing access to an employee&apos;s broader personal health history.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.1 Information You Provide</h3>
              <p className="text-gray-600 mb-3">When you create an account, we may collect:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Name and contact information (email, phone number)</li>
                <li>Company ID and employer information</li>
                <li>Job title and department</li>
                <li>Account credentials</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.2 Health & Wellness Activity Data</h3>
              <p className="text-gray-600 mb-3">
                When you connect Apple Health or compatible devices, we collect only the specific data types you explicitly authorize. This may include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Step count and walking/running distance</li>
                <li>Workout and exercise activity records</li>
                <li>Active energy and movement data</li>
                <li>Exercise minutes and activity rings</li>
              </ul>
              <div className="mt-4 p-4 rounded-xl" style={{ background: 'rgba(134,239,172,0.1)', border: '1px solid rgba(134,239,172,0.3)' }}>
                <p className="text-sm text-green-800">
                  <strong>Important:</strong> You choose which data types to share. You can enable steps but not heart rate, for example. You can update or revoke permissions at any time.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.3 Mobile Information Sharing</h3>
              <div className="p-4 rounded-xl" style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.2)' }}>
                <p className="text-sm font-bold text-red-800 mb-1">No Mobile Data Sharing Policy</p>
                <p className="text-sm text-red-700">
                  <strong>No mobile information will be shared with or sold to third parties for marketing or promotional purposes.</strong> All categories of mobile information are excluded from sharing with third-party marketers. We are committed to protecting your mobile information and will only use it for the purposes outlined in this Privacy Policy, such as providing our wellness platform and communicating with you about your account via transactional account alert SMS messages.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.4 Automatically Collected Information</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Device information (browser type, operating system)</li>
                <li>IP address and general location data</li>
                <li>Usage data (pages visited, features used)</li>
                <li>Platform performance data</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide and maintain the Team Cross Fit wellness platform</li>
                <li>Track your progress toward wellness challenges and goals</li>
                <li>Calculate and award points and rewards</li>
                <li>Send service-related communications and wellness updates</li>
                <li>Generate aggregate analytics for your employer&apos;s wellness program</li>
                <li>Detect and prevent fraud or abuse</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. What Employers Can See</h2>
              <p className="text-gray-600 mb-4">
                Employers who use Team Cross Fit to run wellness programs have access to aggregate wellness engagement data — not individual employee health records.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl" style={{ background: 'rgba(134,239,172,0.1)', border: '1px solid rgba(134,239,172,0.3)' }}>
                  <p className="text-sm font-semibold text-green-800 mb-2">✅ Employers CAN see:</p>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Overall participation rates</li>
                    <li>• Challenge completion percentages</li>
                    <li>• Team-level engagement trends</li>
                    <li>• Aggregate step totals</li>
                    <li>• Rewards distributed</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl" style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.2)' }}>
                  <p className="text-sm font-semibold text-red-800 mb-2">❌ Employers CANNOT see:</p>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Individual employee health data</li>
                    <li>• Personal medical information</li>
                    <li>• Heart rate or sleep data</li>
                    <li>• Individual step counts by name</li>
                    <li>• Any data you haven&apos;t authorized</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Information Sharing and Disclosure</h2>
              <p className="text-gray-600 mb-4">We may share your information with:</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">5.1 Service Providers</h3>
              <p className="text-gray-600">Third-party vendors who perform services on our behalf, such as hosting, analytics, and customer support. These providers are contractually obligated to protect your information.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">5.2 Your Employer</h3>
              <p className="text-gray-600">Aggregate wellness engagement data as described in Section 4. Individual health data is never shared with employers.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">5.3 Legal Requirements</h3>
              <p className="text-gray-600">When required by law, court order, or government regulation.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. SMS Communications</h2>
              <p className="text-gray-600 mb-4">
                Team Cross Fit may send SMS (text message) communications to users who have opted in. Our SMS program is limited exclusively to <strong>alert related text messages</strong>, which may include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Account access and onboarding confirmations</li>
                <li>Challenge milestone and completion alerts</li>
                <li>Streak notifications and reminders</li>
                <li>Reward and points activity alerts</li>
              </ul>
              <p className="text-gray-600 mt-4">
                <strong>We do not send marketing or promotional SMS messages.</strong> No mobile information will be shared with or sold to third parties for marketing or promotional purposes.
              </p>
              <p className="text-gray-600 mt-4">
                Message and data rates may apply. Message frequency varies based on account activity. To opt out of SMS notifications at any time, reply <strong>STOP</strong> to any message. For help, reply <strong>HELP</strong> or contact us at <a href="mailto:support@teamcrossfit.com" className="text-green-600 hover:underline">support@teamcrossfit.com</a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights and Choices</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Permissions:</strong> Update or revoke health data permissions at any time</li>
                <li><strong>Opt-out:</strong> Opt out of SMS communications by replying STOP</li>
              </ul>
              <p className="text-gray-600 mt-4">
                To exercise these rights, contact us at <a href="mailto:support@teamcrossfit.com" className="text-green-600 hover:underline">support@teamcrossfit.com</a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Security</h2>
              <p className="text-gray-600">
                We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption of data in transit (HTTPS/TLS), secure hosting infrastructure, access controls, and regular security assessments.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children&apos;s Privacy</h2>
              <p className="text-gray-600">
                Our service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
              <div className="glass-card p-6">
                <p className="text-gray-600 mb-2"><strong>Email:</strong> <a href="mailto:support@teamcrossfit.com" className="text-green-600 hover:underline">support@teamcrossfit.com</a></p>
                <p className="text-gray-600 mb-2"><strong>Phone:</strong> (855) XXX-XXXX</p>
                <p className="text-gray-600"><strong>Website:</strong> <a href="/" className="text-green-600 hover:underline">teamcrossfit.com</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
