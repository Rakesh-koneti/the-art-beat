import React from 'react';
import { Palette, Image as ImageIcon, Users, Wrench, CheckCircle, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-sky-50 pt-20">
      {/* Services Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-100 via-sky-100 to-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Design is my passion, and every project I take on is an opportunity to help bring your vision to life. 
              Whether you're a startup looking to establish your brand, or an established business seeking a refresh, 
              I offer a full range of graphic design services to meet your needs.
            </p>
          </div>

          {/* Main Services Grid */}
          <div className="grid grid-cols-1 gap-12">
            {/* Brand Identity & Logo Design */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Palette className="h-6 w-6 text-orange-500" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Brand Identity & Logo Design</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Your brand is more than just a logo—it's the face of your business. I specialize in creating
                comprehensive brand identities that clearly communicate your values, personality, and mission.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Logo Design</h3>
                    <p className="text-gray-600">A memorable, unique logo that captures the essence of your brand.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Brand Guidelines</h3>
                    <p className="text-gray-600">Consistent design elements like color palettes, typography, and imagery for cohesive brand messaging.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Visual Identity</h3>
                    <p className="text-gray-600">A complete brand image that resonates with your target audience and creates lasting recognition.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Print & Digital Media */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                  <ImageIcon className="h-6 w-6 text-sky-500" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Print & Digital Media</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Design goes beyond the screen. I offer a range of print and digital media services that help
                bring your brand to life in the physical world.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Business Collateral</h3>
                    <p className="text-gray-600">Business cards, letterheads, brochures, and more, designed to reflect your brand identity.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Marketing Materials</h3>
                    <p className="text-gray-600">Flyers, posters, email templates, and ads that grab attention and convey your message.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Social Media Graphics</h3>
                    <p className="text-gray-600">Eye-catching visuals for social media platforms to boost engagement and brand presence.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Illustration & Custom Graphics */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Wrench className="h-6 w-6 text-amber-700" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Illustration & Custom Graphics</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Sometimes a project needs that extra bit of creativity to truly stand out. I offer custom
                illustrations and digital art tailored to your needs.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Custom Illustrations</h3>
                    <p className="text-gray-600">Bespoke artwork to enhance storytelling, marketing materials, or product packaging.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Infographics</h3>
                    <p className="text-gray-600">Creative, clear, and engaging visual representations of data to make complex information more digestible.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Digital Art</h3>
                    <p className="text-gray-600">Unique digital designs that capture your brand's voice and energy.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Creative Direction & Consultation */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Creative Direction & Consultation</h2>
              </div>
              <p className="text-gray-600 mb-6">
                As a seasoned designer, I provide creative direction and consultation to guide your visual
                strategy. Whether you're working on a rebranding project or need help with creative direction
                for a marketing campaign, I offer expert advice to ensure your design strategy is aligned with
                your business goals.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Brand Strategy Consultation</h3>
                    <p className="text-gray-600">Guidance on how to position your brand effectively in the market.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Design Audit</h3>
                    <p className="text-gray-600">A detailed review of your existing design assets with recommendations for improvement.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Campaign Creative Direction</h3>
                    <p className="text-gray-600">Leading the creative vision for campaigns across digital, print, and media channels.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Why Work With Me Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Work With Me?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Tailored Solutions",
                  description: "Every project is unique, and I approach each one with fresh creativity, making sure your design solution is custom-tailored to your needs."
                },
                {
                  title: "Collaborative Process",
                  description: "I believe in working closely with clients, ensuring your vision is at the heart of every design decision."
                },
                {
                  title: "Attention to Detail",
                  description: "I take pride in my work, paying meticulous attention to every detail to ensure the highest quality results."
                },
                {
                  title: "End-to-End Service",
                  description: "From the initial concept to final delivery, I provide a full spectrum of services to bring your ideas to life."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Start?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              If you're looking for a designer who combines creativity with strategic insight, I'd love to work with you. 
              Whether you're launching a new business or refreshing your brand, I'm here to help.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rangakottalabusiness@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors duration-300"
            >
              <span>Get in Touch</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 