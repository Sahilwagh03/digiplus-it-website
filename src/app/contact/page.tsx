import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us - DigiPlus IT',
  description: 'Get in touch with DigiPlus IT. We\'re here to help transform your business with innovative solutions.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-blue-variant">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container-1280">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-primary text-4xl md:text-5xl font-normal uppercase tracking-[-0.01em] leading-[0.875] text-black mb-6">
              Get in <span className="text-primary-blue">Touch</span>
            </h1>
            <p className="font-third text-md md:text-lg text-gray-700">
              Ready to transform your business? Let's discuss how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="font-primary text-2xl md:text-3xl font-bold mb-6">
                  Let's Start a Conversation
                </h2>
                <p className="font-third text-gray-600 mb-8">
                  Whether you have a project in mind or just want to learn more about our services, 
                  we'd love to hear from you.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-primary text-lg font-semibold mb-2">Email</h3>
                    <p className="font-third text-gray-600">info@digiplus-it.com</p>
                  </div>
                  <div>
                    <h3 className="font-primary text-lg font-semibold mb-2">Phone</h3>
                    <p className="font-third text-gray-600">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <h3 className="font-primary text-lg font-semibold mb-2">Address</h3>
                    <p className="font-third text-gray-600">
                      123 Innovation Drive<br />
                      Tech City, TC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block font-third text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent font-third"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block font-third text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent font-third"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-third text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent font-third"
                      placeholder="john.doe@company.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block font-third text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent font-third"
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block font-third text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent font-third"
                      placeholder="Tell us about your project or how we can help..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary-blue text-white font-primary text-lg font-semibold py-3 px-6 rounded-lg hover:bg-primary-blue/90 transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 