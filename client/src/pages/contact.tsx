import Header from "@/components/header";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Contact Lendura Capital | Business Loan Specialists | Brooklyn, NY"
        description="Contact Lendura Capital for business loans and funding solutions. Call (305) 765-7168 for fast approval. Brooklyn office serving all 50 states & Canada. Free consultation."
        keywords="contact business lender, Brooklyn business loans, New York business funding, business funding consultation, commercial lending contact, small business loan specialist, business capital contact"
        canonical="/contact"
      />
      <Header transparent={true} />
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 md:pt-32 lg:pt-40 pb-8 sm:pb-12" style={{ backgroundColor: '#193a59' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Contact <span className="text-white">Lendura Capital</span>
            </h1>
          </div>
        </div>
      </section>
      {/* Contact Information & Form Section */}
      <section className="py-8 sm:py-12" style={{ backgroundColor: '#f5f6f6' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black text-center">
              Contact Lendura Capital
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Contact Information */}
            <div className="space-y-6">
              {/* General Questions Contact */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-black mb-6">
                  General Questions
                </h3>
                
                <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-[#193a59]">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-500 p-2 rounded-lg flex-shrink-0">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#193a59] text-lg">Phone</h4>
                        <a href="https://calendly.com/fundtek/30min" target="_blank" rel="noopener noreferrer" className="text-[#193a59] hover:text-[#285d8a] transition-colors duration-200 font-bold text-xl">(305) 765-7168</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div style={{ backgroundColor: '#193a59' }} className="p-2 rounded-lg flex-shrink-0">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#193a59] text-lg">Email</h4>
                        <a href="mailto:Admin@lenduracapital.com" className="text-[#193a59] hover:text-[#285d8a] transition-colors duration-200 font-bold text-lg break-all">Admin@lenduracapital.com</a>
                      </div>
                    </div>
                    
                    <p className="text-[#193a59] text-sm mt-3">Loan inquiries, applications, partnership inquiries, and general business matters</p>
                  </div>
                </div>
              </div>

              {/* Customer Support Contact */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-black mb-6">
                  Customer Support
                </h3>
                
                <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-[#193a59]">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-500 p-2 rounded-lg flex-shrink-0">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#193a59] text-lg">Phone</h4>
                        <span className="text-[#193a59] font-bold text-xl">(305) 765-7168</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div style={{ backgroundColor: '#193a59' }} className="p-2 rounded-lg flex-shrink-0">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#193a59] text-lg">Email</h4>
                        <a href="mailto:support@lenduracapital.com" className="text-[#193a59] hover:text-[#285d8a] transition-colors duration-200 font-bold text-lg break-all">support@lenduracapital.com</a>
                      </div>
                    </div>
                    
                    <p className="text-[#193a59] text-sm mt-3">Account access, payment issues, technical assistance, and customer support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="space-y-6">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-lg">
                <iframe
                  id="JotFormIFrame-251674789886078"
                  title="Lendura Capital Contact Form"
                  onLoad={() => window.parent.scrollTo(0, 0)}
                  allowtransparency="true"
                  allow="geolocation; microphone; camera; fullscreen"
                  src="https://form.jotform.com/251674789886078"
                  frameBorder="0"
                  style={{
                    minWidth: '100%',
                    maxWidth: '100%',
                    border: 'none',
                  }}
                  className="w-full h-[500px] rounded-lg"
                  scrolling="yes"
                />
              </div>

              {/* Business Hours */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-black mb-4 flex items-center">
                  <Clock className="h-5 w-5 text-[#193a59] mr-2" />
                  Business Hours
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <span className="text-[#193a59] mr-3">✓</span>
                      <span className="text-black">Mon : 09:00 am - 07:30 pm</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-[#193a59] mr-3">✓</span>
                      <span className="text-black">Tue : 09:00 am - 07:30 pm</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-[#193a59] mr-3">✓</span>
                      <span className="text-black">Wed : 09:00 am - 07:30 pm</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-[#193a59] mr-3">✓</span>
                      <span className="text-black">Thu : 09:00 am - 07:30 pm</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-[#193a59] mr-3">✓</span>
                      <span className="text-black">Fri : 09:00 am - 07:30 pm</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-[#193a59] mr-3">✓</span>
                      <span className="text-black">Sat & Sun : Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div style={{ backgroundColor: '#193a59' }} className="p-6 rounded-lg">
                <h3 className="text-white font-semibold text-lg mb-2">
                  Same-Day Response Guarantee
                </h3>
                <p className="text-white text-base">
                  Get funding decisions within 24 hours. Our specialists are standing by to provide immediate assistance with your business financing needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Next Steps Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black mb-6">
              Next Steps - Your Path to Funding
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Getting business funding with Lendura Capital is straightforward. Here's exactly what to expect from application to approval.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* How to Apply */}
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-[#193a59] font-semibold">
              <div style={{ backgroundColor: '#193a59' }} className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#193a59] mb-4 text-center">How to Apply</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-semibold text-[#193a59] mr-2">1.</span>
                  Complete our 5-minute online application
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-[#193a59] mr-2">2.</span>
                  Upload 3 months of bank statements
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-[#193a59] mr-2">3.</span>
                  Provide basic business information
                </li>
              </ul>
            </div>

            {/* What to Expect */}
            <div className="bg-green-50 p-8 rounded-lg border-l-4 border-green-400 font-semibold">
              <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#193a59] mb-4 text-center">What to Expect</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-semibold text-[#193a59] mr-2">•</span>
                  Same-day application review
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-[#193a59] mr-2">•</span>
                  Dedicated specialist assigned
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-[#193a59] mr-2">•</span>
                  Multiple funding options presented
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-[#193a59] mr-2">•</span>
                  Transparent terms and rates
                </li>
              </ul>
            </div>

            {/* Timeline Breakdown */}
            <div className="bg-yellow-50 p-8 rounded-lg border-l-4 border-yellow-400">
              <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#193a59] mb-4 text-center">Timeline Breakdown</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-semibold mr-2 text-[#374151]">Day 1: Application submitted, reviewed (30 minutes to 1 hour), and approval decision made the same day</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2 text-[#374151]">Day 2: Final documentation, contracts, and funding disbursed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h3 className="text-4xl font-bold text-[#193a59] mb-6">Ready to Get Started?</h3>
            <p className="text-xl text-[#193a59] mb-8">Join thousands of businesses we've helped secure funding.</p>
            <button
              onClick={() => window.open("https://form.jotform.com/251965461165159", "_blank")}
              className="px-8 py-4 rounded-lg font-semibold text-lg text-white hover:bg-[#285d8a] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
              style={{ backgroundColor: '#193a59' }}
            >
              Apply for Funding Now
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}