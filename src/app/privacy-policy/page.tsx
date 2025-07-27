import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - DigiPlus IT',
  description: 'Learn about how DigiPlus IT collects, uses, and protects your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-blue-variant">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container-1280">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-primary text-4xl md:text-5xl font-normal uppercase tracking-[-0.01em] leading-[0.875] text-black mb-6">
              Privacy <span className="text-primary-blue">Policy</span>
            </h1>
            <p className="font-third text-md md:text-lg text-gray-700">
              Your privacy is important to us. Learn how we protect and handle your information.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="font-primary text-2xl font-bold mb-6">Information We Collect</h2>
              <p className="font-third text-gray-700 mb-6">
                We collect information you provide directly to us, such as when you contact us, 
                subscribe to our newsletter, or use our services. This may include:
              </p>
              <ul className="font-third text-gray-700 mb-8 space-y-2">
                <li>• Name and contact information</li>
                <li>• Company information</li>
                <li>• Project requirements and specifications</li>
                <li>• Communication preferences</li>
              </ul>

              <h2 className="font-primary text-2xl font-bold mb-6">How We Use Your Information</h2>
              <p className="font-third text-gray-700 mb-6">
                We use the information we collect to:
              </p>
              <ul className="font-third text-gray-700 mb-8 space-y-2">
                <li>• Provide and improve our services</li>
                <li>• Communicate with you about projects and services</li>
                <li>• Send you updates and marketing materials (with your consent)</li>
                <li>• Comply with legal obligations</li>
              </ul>

              <h2 className="font-primary text-2xl font-bold mb-6">Information Sharing</h2>
              <p className="font-third text-gray-700 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy or as required by law.
              </p>

              <h2 className="font-primary text-2xl font-bold mb-6">Data Security</h2>
              <p className="font-third text-gray-700 mb-6">
                We implement appropriate security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="font-primary text-2xl font-bold mb-6">Your Rights</h2>
              <p className="font-third text-gray-700 mb-6">
                You have the right to:
              </p>
              <ul className="font-third text-gray-700 mb-8 space-y-2">
                <li>• Access your personal information</li>
                <li>• Correct inaccurate information</li>
                <li>• Request deletion of your information</li>
                <li>• Opt out of marketing communications</li>
              </ul>

              <h2 className="font-primary text-2xl font-bold mb-6">Contact Us</h2>
              <p className="font-third text-gray-700 mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="font-third text-gray-700">
                <p>Email: privacy@digiplus-it.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Innovation Drive, Tech City, TC 12345</p>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="font-third text-sm text-gray-500">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 