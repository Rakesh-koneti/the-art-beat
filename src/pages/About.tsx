import React from 'react';
import { Users } from 'lucide-react';
import aboutImage from '../about.png.jpg';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-sky-50 pt-20">
      <section className="bg-gradient-to-l from-orange-100 via-sky-100 to-amber-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">About Me</h2>
                <p className="text-gray-600 mb-4">
                  Hello, I'm Kottala Rangaswamy, a seasoned graphic designer with a deep passion for visual storytelling. 
                  For me, design is more than just a profession – it's a way to bring meaning to the world through art and creativity. 
                  With 2+ years of experience, I've had the privilege of collaborating with a diverse range of clients, 
                  from ambitious startups to well-established brands, helping them shape their visual identities and communicate 
                  their messages with purpose.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">The Art of Design</h3>
                <p className="text-gray-600 mb-4">
                  Design is an ever-evolving process, and I see it as a bridge between ideas and reality. It's about understanding 
                  a brand's soul, capturing its essence, and translating it into an impactful visual narrative. My approach blends 
                  artistic innovation with strategic thinking, ensuring that every design not only looks beautiful but also serves 
                  a functional and meaningful purpose.
                </p>
                <p className="text-gray-600">
                  Whether it's creating a logo that speaks volumes with simplicity or designing a website that offers a seamless 
                  user experience, I aim to craft designs that resonate, engage, and leave a lasting impression. Each project I 
                  take on is a journey, and I work closely with my clients to ensure that the final product is something they 
                  are truly proud of.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Design Philosophy</h3>
                <p className="text-gray-600">
                  I believe that design is more than just decoration – it's a powerful tool for communication. My work is driven 
                  by the idea that great design can make a statement, solve a problem, and elevate a brand. It's about creating 
                  timeless visuals that not only stand out today but also remain relevant for years to come. Every design is 
                  carefully considered, meticulously crafted, and refined to perfection.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">My Expertise</h3>
                <p className="text-gray-600 mb-4">
                  Over the years, I've honed my expertise in a variety of design disciplines, each of which plays a vital role 
                  in building a cohesive brand experience:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2 group hover:translate-x-2 transition-transform duration-300 ease-in-out">
                    <svg className="h-5 w-5 text-green-500 mt-1 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="group-hover:text-orange-600 transition-colors duration-300"><strong>Brand Identity & Logo Design:</strong> Crafting distinct, memorable logos and brand identities that resonate with your target audience.</span>
                  </li>
                  <li className="flex items-start space-x-2 group hover:translate-x-2 transition-transform duration-300 ease-in-out">
                    <svg className="h-5 w-5 text-green-500 mt-1 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="group-hover:text-orange-600 transition-colors duration-300"><strong>Web & Digital Design:</strong> Designing intuitive, responsive websites and digital experiences that captivate users and drive results.</span>
                  </li>
                  <li className="flex items-start space-x-2 group hover:translate-x-2 transition-transform duration-300 ease-in-out">
                    <svg className="h-5 w-5 text-green-500 mt-1 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="group-hover:text-orange-600 transition-colors duration-300"><strong>Print & Packaging:</strong> Designing print collateral and packaging that reflects the essence of your brand while delivering a tactile, memorable experience.</span>
                  </li>
                  <li className="flex items-start space-x-2 group hover:translate-x-2 transition-transform duration-300 ease-in-out">
                    <svg className="h-5 w-5 text-green-500 mt-1 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="group-hover:text-orange-600 transition-colors duration-300"><strong>Illustration & Custom Graphics:</strong> Creating unique, custom illustrations and graphics to bring personality and creativity to your brand.</span>
                  </li>
                  <li className="flex items-start space-x-2 group hover:translate-x-2 transition-transform duration-300 ease-in-out">
                    <svg className="h-5 w-5 text-green-500 mt-1 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="group-hover:text-orange-600 transition-colors duration-300"><strong>Creative Direction & Consultation:</strong> Offering guidance on all aspects of your brand's visual strategy to ensure consistency and coherence.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Let's Build Something Beautiful</h3>
                <p className="text-gray-600 mb-4">
                  Every design has the potential to change perceptions, spark conversations, and inspire action. If you're seeking 
                  a designer who blends creativity with strategic insight, who values both aesthetics and functionality, I would 
                  love to collaborate with you.
                </p>
                <p className="text-gray-600">
                  Please feel free to explore my portfolio, where you can see the work I've done with a wide array of clients. 
                  If you feel we could be a good fit, I'd love to discuss how we can create something extraordinary together. 
                  Reach out to me via the contact page, and let's bring your vision to life.
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={aboutImage}
                alt="About Me"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About; 