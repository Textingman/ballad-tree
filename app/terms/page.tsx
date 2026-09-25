'use client';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] blob opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(134,239,172,0.4) 0%, transparent 70%)' }} />
      </div>

      <Nav />

      <section className="pt-32 pb-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-green-700 mb-8"
            style={{ background: 'rgba(134,239,172,0.2)', border: '1px solid rgba(134,239,172,0.4)' }}>
            <span>📋</span>
            Terms of Service
          </div>
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-500">Last Updated: September 8, 2026</p>
        </div>
      </section>

      <section className="py-12 px-6 pb-20 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto space-y-10">

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using the Team Cross Fit employee wellness platform (&quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the Service.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              These Terms apply to all users of the Service, including employees who access the platform through a Company ID provided by their employer, and employers who set up and manage wellness programs.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-600 leading-relaxed">
              Team Cross Fit is a connected employee wellness platform that allows employees to link supported health apps and devices, participate in wellness challenges, track progress, and earn rewards. Employers use the platform to create and manage wellness programs for their workforce.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Account Registration</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">3.1 Employee Accounts</h3>
            <p className="text-gray-600 leading-relaxed">
              To create an employee account, you must have a valid Company ID provided by your employer. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">3.2 Employer Accounts</h3>
            <p className="text-gray-600 leading-relaxed">
              Employers who set up wellness programs are responsible for ensuring their use of the Service complies with applicable employment laws and regulations, including those related to employee privacy and wellness programs.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">3.3 Eligibility</h3>
            <p className="text-gray-600 leading-relaxed">
              You must be at least 18 years old to use the Service. By using the Service, you represent that you meet this requirement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Health Data and Integrations</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Service integrates with Apple Health and compatible health and fitness platforms. By connecting these integrations, you acknowledge and agree that:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>You are voluntarily choosing to share specific health and wellness activity data</li>
              <li>You control which data types you authorize and can revoke access at any time</li>
              <li>Team Cross Fit will only access the specific data types you explicitly authorize</li>
              <li>Your employer will only receive aggregate wellness engagement data, not your individual health records</li>
              <li>Participation in connected wellness features is optional and not required for employment</li>
            </ul>
          </div>

          <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. SMS Communications — Transactional Account Alerts</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                By providing your phone number and checking the SMS opt-in box during account registration, you expressly consent to receive <strong>transactional account alert text messages</strong> from Team Cross Fit. These messages are limited to account-related notifications and wellness activity alerts, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Account access confirmations and onboarding instructions</li>
                <li>Wellness challenge milestone and completion alerts</li>
                <li>Movement streak notifications and activity reminders</li>
                <li>Reward points earned and redemption activity alerts</li>
                <li>Account security and access notifications</li>
              </ul>
              <div className="mt-4 p-4 rounded-xl" style={{ background: 'rgba(134,239,172,0.1)', border: '1px solid rgba(134,239,172,0.3)' }}>
                <p className="text-sm text-green-800 font-semibold mb-2">Important SMS Disclosures:</p>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• <strong>Message and data rates may apply.</strong></li>
                  <li>• Message frequency varies based on your account activity.</li>
                  <li>• To opt out at any time, reply <strong>STOP</strong> to any message.</li>
                  <li>• For help, reply <strong>HELP</strong> or contact <a href="mailto:support@teamcrossfit.com" className="underline">support@teamcrossfit.com</a>.</li>
                  <li>• Opting in to SMS is optional and not required to use the Service.</li>
                  <li>• <strong>No mobile information will be shared with or sold to third parties for marketing or promotional purposes.</strong></li>
                </ul>
              </div>
              <p className="text-gray-600 leading-relaxed mt-4">
                These SMS messages are strictly transactional in nature. We do not send marketing, promotional, or advertising text messages. Your consent to receive SMS is separate from your agreement to these Terms and may be withdrawn at any time without affecting your access to the Service.
              </p>
            </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Acceptable Use</h2>
            <p className="text-gray-600 leading-relaxed mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Use the Service for any unlawful purpose or in violation of these Terms</li>
              <li>Attempt to gain unauthorized access to any part of the Service</li>
              <li>Submit false or misleading information</li>
              <li>Interfere with or disrupt the integrity or performance of the Service</li>
              <li>Attempt to manipulate wellness challenge results or points</li>
              <li>Share your Company ID or account credentials with unauthorized individuals</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Wellness Challenges and Rewards</h2>
            <p className="text-gray-600 leading-relaxed">
              Wellness challenges, points, and rewards are administered by your employer through the Team Cross Fit platform. The specific terms of any rewards program, including eligibility, redemption, and expiration, are determined by your employer. Team Cross Fit is not responsible for the fulfillment of employer-offered rewards.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed">
              The Service and its original content, features, and functionality are owned by Team Cross Fit and are protected by applicable intellectual property laws. You may not copy, modify, distribute, or create derivative works based on the Service without our express written permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disclaimer of Warranties</h2>
            <p className="text-gray-600 leading-relaxed">
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. HEALTHY-TEMPLATE DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              The Service is not a medical device and is not intended to diagnose, treat, cure, or prevent any disease or health condition. Always consult a qualified healthcare professional for medical advice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, HEALTHY-TEMPLATE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              Your use of the Service is also governed by our <Link href="/privacy" className="text-green-600 hover:underline">Privacy Policy</Link>, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding your personal information and health data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to suspend or terminate your access to the Service at any time for violation of these Terms or for any other reason at our discretion. You may also terminate your account at any time by contacting us.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update these Terms from time to time. We will notify you of any material changes by posting the new Terms on this page and updating the &quot;Last Updated&quot; date. Your continued use of the Service after any changes constitutes your acceptance of the new Terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Us</h2>
            <div className="glass-card p-6">
              <p className="text-gray-600 mb-2">If you have questions about these Terms, please contact us:</p>
              <p className="text-gray-600 mb-2"><strong>Email:</strong> <a href="mailto:support@teamcrossfit.com" className="text-green-600 hover:underline">support@teamcrossfit.com</a></p>
              <p className="text-gray-600 mb-2"><strong>Phone:</strong> (855) XXX-XXXX</p>
              <p className="text-gray-600"><strong>Website:</strong> <a href="/" className="text-green-600 hover:underline">teamcrossfit.com</a></p>
            </div>
          </div>

          <div className="pt-4">
            <Link href="/privacy" className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700">
              ← View Privacy Policy
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
