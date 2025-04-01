import React from 'react';

const BrandIdentity = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-sky-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Brand Identity Design</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Approach to Brand Identity</h2>
            <p className="text-gray-600 mb-6">
              At The Art Beat, we believe that a strong brand identity is the foundation of successful business communication. 
              Our approach combines strategic thinking with creative excellence to create distinctive and memorable brand identities.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li className="mb-3">Logo Design & Brand Marks</li>
              <li className="mb-3">Color Palette Development</li>
              <li className="mb-3">Typography Selection</li>
              <li className="mb-3">Brand Guidelines</li>
              <li className="mb-3">Visual Identity Systems</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Process</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">Discovery</h3>
                <p className="text-gray-600">Understanding your business, target audience, and market position</p>
              </div>
              <div className="bg-sky-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-sky-600 mb-3">Strategy</h3>
                <p className="text-gray-600">Developing a comprehensive brand strategy and positioning</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">Design</h3>
                <p className="text-gray-600">Creating visual elements that reflect your brand's essence</p>
              </div>
              <div className="bg-sky-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-sky-600 mb-3">Implementation</h3>
                <p className="text-gray-600">Ensuring consistent application across all touchpoints</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Strategic Thinking</h3>
                <p className="text-gray-600">Data-driven decisions for impactful brand identities</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Creative Excellence</h3>
                <p className="text-gray-600">Unique designs that stand out in the market</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Quick Turnaround</h3>
                <p className="text-gray-600">Efficient processes without compromising quality</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-sky-50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Transform Your Brand?</h2>
              <p className="text-gray-600 mb-6">
                Let's create a brand identity that resonates with your audience and drives business growth.
              </p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rangakottalabusiness@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-orange-500 to-sky-500 hover:from-orange-600 hover:to-sky-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <svg 
                  className="ml-2 h-5 w-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandIdentity; 