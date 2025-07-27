import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions - DigiPlus IT',
  description: 'Read our terms and conditions for using DigiPlus IT services.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-blue-variant">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container-1280">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-primary text-4xl md:text-5xl font-normal uppercase tracking-[-0.01em] leading-[0.875] text-black mb-6">
              Terms & <span className="text-primary-blue">Conditions</span>
            </h1>
            <p className="font-third text-md md:text-lg text-gray-700">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="font-primary text-2xl font-bold mb-6">Acceptance of Terms</h2>
              <p className="font-third text-gray-700 mb-6">
                By accessing and using DigiPlus IT services, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>

              <h2 className="font-primary text-2xl font-bold mb-6">Use License</h2>
              <p className="font-third text-gray-700 mb-6">
                Permission is granted to temporarily download one copy of the materials (information or software) 
                on DigiPlus IT's website for personal, non-commercial transitory viewing only.
              </p>
              <p className="font-third text-gray-700 mb-8">
                This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="font-third text-gray-700 mb-8 space-y-2">
                <li>• Modify or copy the materials</li>
                <li>• Use the materials for any commercial purpose or for any public display</li>
                <li>• Attempt to reverse engineer any software contained on the website</li>
                <li>• Remove any copyright or other proprietary notations from the materials</li>
              </ul>

              <h2 className="font-primary text-2xl font-bold mb-6">Service Description</h2>
              <p className="font-third text-gray-700 mb-6">
                DigiPlus IT provides technology consulting, development, and implementation services including:
              </p>
              <ul className="font-third text-gray-700 mb-8 space-y-2">
                <li>• OSS/BSS Systems implementation</li>
                <li>• AI and Analytics solutions</li>
                <li>• Cloud-native development</li>
                <li>• Telecom expertise and consulting</li>
                <li>• Data governance and strategy</li>
              </ul>

              <h2 className="font-primary text-2xl font-bold mb-6">Intellectual Property</h2>
              <p className="font-third text-gray-700 mb-6">
                The materials on DigiPlus IT's website are provided on an 'as is' basis. DigiPlus IT makes no warranties, 
                expressed or implied, and hereby disclaims and negates all other warranties including without limitation, 
                implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement 
                of intellectual property or other violation of rights.
              </p>

              <h2 className="font-primary text-2xl font-bold mb-6">Limitations</h2>
              <p className="font-third text-gray-700 mb-6">
                In no event shall DigiPlus IT or its suppliers be liable for any damages (including, without limitation, 
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
                to use the materials on DigiPlus IT's website, even if DigiPlus IT or a DigiPlus IT authorized representative 
                has been notified orally or in writing of the possibility of such damage.
              </p>

              <h2 className="font-primary text-2xl font-bold mb-6">Revisions and Errata</h2>
              <p className="font-third text-gray-700 mb-6">
                The materials appearing on DigiPlus IT's website could include technical, typographical, or photographic errors. 
                DigiPlus IT does not warrant that any of the materials on its website are accurate, complete, or current. 
                DigiPlus IT may make changes to the materials contained on its website at any time without notice.
              </p>

              <h2 className="font-primary text-2xl font-bold mb-6">Links</h2>
              <p className="font-third text-gray-700 mb-6">
                DigiPlus IT has not reviewed all of the sites linked to its website and is not responsible for the contents 
                of any such linked site. The inclusion of any link does not imply endorsement by DigiPlus IT of the site. 
                Use of any such linked website is at the user's own risk.
              </p>

              <h2 className="font-primary text-2xl font-bold mb-6">Modifications</h2>
              <p className="font-third text-gray-700 mb-6">
                DigiPlus IT may revise these terms of service for its website at any time without notice. By using this website 
                you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
              </p>

              <h2 className="font-primary text-2xl font-bold mb-6">Contact Information</h2>
              <p className="font-third text-gray-700 mb-6">
                If you have any questions about these Terms & Conditions, please contact us at:
              </p>
              <div className="font-third text-gray-700">
                <p>Email: legal@digiplus-it.com</p>
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