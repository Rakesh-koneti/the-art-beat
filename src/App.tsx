import React, { useState } from 'react';
import { Palette, Image as ImageIcon, Wrench, Users, Menu, X } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import design1 from './design1.jpg';
import design2 from './design2.jpg';
import design3 from './design3.jpg';
import design4 from './design4.jpg';
import whyChooseUsImage from './whyChooseUs.jpg.png';
import logoImage from './logo.png.jpg';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import BrandIdentity from './pages/BrandIdentity';
import brandIdentity1 from './assets/images/brand-identity-1.jpg.jpg';
import brandIdentity2 from './assets/images/brand-identity-2.jpg.jpg';
import brandIdentity3 from './assets/images/brand-identity-3.jpg.jpg';
import brandIdentity4 from './assets/images/brand-identity-4.jpg.jpg';
import brandIdentity5 from './assets/images/brand-identity-5.jpg.jpg';
import AIBackground from './components/AIBackground';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-sky-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
                <img 
                  src={logoImage}
                  alt="The Art Beat Logo"
                  className="w-10 h-10 rounded-full object-cover border-2 border-orange-500 shadow-md"
                />
                <Link to="/" className="ml-2 text-2xl font-bold text-orange-500">
                The Art Beat
                </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-orange-500"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
                <NavLink href="/" icon={<Palette className="h-4 w-4" />}>Home</NavLink>
                <NavLink href="/portfolio" icon={<ImageIcon className="h-4 w-4" />}>Portfolio</NavLink>
                <NavLink href="/services" icon={<Wrench className="h-4 w-4" />}>Services</NavLink>
                <NavLink href="/about" icon={<Users className="h-4 w-4" />}>About Us</NavLink>
                <NavLink href="/contact" icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>}>Contact Us</NavLink>
              </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
                <MobileNavLink href="/">Home</MobileNavLink>
                <MobileNavLink href="/portfolio">Portfolio</MobileNavLink>
                <MobileNavLink href="/services">Services</MobileNavLink>
                <MobileNavLink href="/about">About Us</MobileNavLink>
                <MobileNavLink href="/contact">Contact Us</MobileNavLink>
              </div>
          </div>
        )}
      </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={
            <>
      {/* Hero Section */}
              <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <AIBackground />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <h1 className="text-6xl font-bold drop-shadow-lg leading-tight">
                          <span className="inline-block bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 text-transparent bg-clip-text animate-slide-in-left opacity-0 [animation-fill-mode:forwards]">
                            Where Bold Ideas
                          </span>
                          <br />
                          <span className="inline-block bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 text-transparent bg-clip-text animate-slide-in-right opacity-0 [animation-fill-mode:forwards] [animation-delay:0.3s]">
                            Become Beautiful Designs
                          </span>
                        </h1>
                        <p className="text-gray-800 text-lg drop-shadow-md max-w-xl animate-fade-in-up opacity-0 [animation-fill-mode:forwards] [animation-delay:0.6s]">
                          Discover the perfect blend of artistry and innovation at The Art Beat. 
                          We bring your creative visions to life with passion and precision.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        <Link
                          to="/portfolio"
                          className="bg-white/90 text-blue-700 px-8 py-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                Explore Our Work
                        </Link>
                        <a
                          href="/resume.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-transparent border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full hover:bg-gray-900/10 transition-all duration-300 flex items-center gap-2"
                        >
                          View Resume
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
            </div>
                      <div className="flex items-center gap-8 pt-4">
                        <div className="flex -space-x-4">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-800 overflow-hidden">
                              <img 
                                src={`https://i.pravatar.cc/150?img=${i}`}
                                alt={`Team member ${i}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                        <div className="text-white/80">
                          <div className="font-semibold text-brown-700">20+ Happy Clients</div>
                          <div className="text-sm text-brown-600">Trusted by artists worldwide</div>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-xl transform hover:scale-105 transition-all duration-300">
                        <div className="grid grid-cols-2 gap-6">
                          {[
                            { number: "100+", label: "Projects Completed" },
                            { number: "20+", label: "Happy Clients" },
                            { number: "2+", label: "Years Experience" },
                            { number: "24/7", label: "Support" }
                          ].map((stat, index) => (
                            <div key={index} className="text-center group">
                              <div className="text-4xl font-bold text-brown-700 mb-2 drop-shadow-lg group-hover:text-blue-400 transition-colors duration-300">{stat.number}</div>
                              <div className="text-brown-600 text-sm group-hover:text-blue-300 transition-colors duration-300">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
            </div>
          </div>
        </div>
      </section>

              {/* My Designs Section */}
              <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid md:grid-cols-2 gap-12">
                    {/* Left Side Content */}
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 via-sky-500 to-amber-700 text-transparent bg-clip-text mb-6 animate-gradient-shift">
                          My Creative Journey
                        </h2>
                        <p className="text-gray-600 mb-6 animate-fade-in-up">
                          With over 2 years of experience in graphic design, I've developed a unique style that combines modern aesthetics with functional design principles.
                        </p>
                      </div>
                       
                      <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">Design Philosophy</h3>
                          <p className="text-gray-600">Creating designs that not only look beautiful but also serve their purpose effectively.</p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105 hover:-translate-y-1 duration-300">
                          <h3 className="text-xl font-semibold text-gray-800 mb-6 animate-fade-in bg-gradient-to-r from-orange-500 via-sky-500 to-amber-700 text-transparent bg-clip-text">
                            Skills & Expertise
                          </h3>
                          <div className="grid grid-cols-2 gap-6">
                            {[
                              { skill: "UI/UX Design", delay: "0", icon: "🎨", color: "from-purple-500 to-pink-500", textColor: "text-purple-600" },
                              { skill: "Brand Identity", delay: "100", icon: "✨", color: "from-blue-500 to-teal-500", textColor: "text-blue-600" },
                              { skill: "Logo Design", delay: "200", icon: "🎯", color: "from-amber-500 to-orange-500", textColor: "text-amber-600" },
                              { skill: "Web Design", delay: "300", icon: "🌐", color: "from-green-500 to-emerald-500", textColor: "text-green-600" },
                              { skill: "Mobile Design", delay: "400", icon: "📱", color: "from-indigo-500 to-purple-500", textColor: "text-indigo-600" },
                              { skill: "Graphic Design", delay: "500", icon: "🎪", color: "from-rose-500 to-red-500", textColor: "text-rose-600" }
                            ].map((item, index) => (
                              <div 
                                key={index}
                                className="group relative overflow-hidden rounded-xl hover:shadow-lg transition-all duration-500 ease-out"
                                style={{
                                  animation: `fadeSlideIn 0.6s ease-out ${item.delay}ms both`
                                }}
                              >
                                <div className="relative p-4 bg-white border border-gray-100 rounded-xl group-hover:border-transparent transition-all duration-300">
                                  {/* Animated gradient background */}
                                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                                       style={{
                                         backgroundImage: `linear-gradient(120deg, ${item.color})`,
                                         opacity: 0,
                                         transform: 'scale(0.8)',
                                       }}
                                  />
                                  
                                  <div className="relative flex items-center space-x-3 z-20">
                                    {/* Skill Icon with bounce animation */}
                                    <div className="text-2xl group-hover:animate-bounce">{item.icon}</div>
                                    
                                    {/* Skill Name */}
                                    <span className={`font-medium ${item.textColor} transition-colors duration-300 relative z-20`}>
                                      {item.skill}
                                      
                                      {/* Animated underline */}
                                      <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${item.textColor} group-hover:w-full transition-all duration-300`}/>
                                    </span>
                                  </div>
                                  
                                  {/* Progress indicator */}
                                  <div className="mt-2 relative h-1 bg-gray-100 rounded-full overflow-hidden">
                                    <div 
                                      className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r group-hover:animate-progress"
                                      style={{
                                        backgroundImage: `linear-gradient(90deg, ${item.color})`,
                                        width: '0%'
                                      }}
                                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">Project Stats</h3>
                          <div className="grid grid-cols-2 gap-6">
                            <div className="text-center">
                              <div className="text-3xl font-bold text-blue-600">100+</div>
                              <div className="text-gray-600">Projects</div>
                            </div>
                            <div className="text-center">
                              <div className="text-3xl font-bold text-blue-600">20+</div>
                              <div className="text-gray-600">Clients</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side Content */}
                    <div className="space-y-6">
                      {/* Logo */}
                      <div className="flex justify-center mb-8">
                        <img 
                          src={logoImage}
                          alt="Logo"
                          className="w-32 h-32 rounded-full object-cover border-4 border-orange-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        />
                      </div>

                      {/* Images Grid */}
                      <div className="grid grid-cols-2 gap-6">
                        {[design1, design2, design3, design4].map((image, index) => (
                          <div key={index} className="group relative overflow-hidden rounded-xl aspect-[4/3] shadow-lg hover:shadow-xl transition-all duration-300">
                            <img 
                              src={image}
                              alt={`Design ${index + 1}`}
                              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
                      </div>
                    </div>
          </div>
        </div>
      </section>

              {/* Side Matter Section */}
              <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  {/* Why Choose Us Section */}
                  <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
                      <p className="text-gray-600">We combine creativity with technical expertise to deliver exceptional designs that help your brand stand out.</p>
                      <ul className="space-y-3">
                        {[
                          "Professional and experienced team",
                          "Customized design solutions",
                          "Modern design trends",
                          "Competitive pricing",
                          "Regular updates and revisions"
                        ].map((item, index) => (
                          <li 
                            key={index} 
                            className="flex items-center space-x-2 animate-fade-in-up"
                            style={{ animationDelay: `${index * 200}ms` }}
                          >
                            <svg 
                              className="h-5 w-5 text-green-500 animate-bounce" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                              style={{ animationDelay: `${index * 200}ms` }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
            </div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl"></div>
                      <img 
                        src={whyChooseUsImage}
                        alt="Why Choose Us"
                        className="relative rounded-2xl shadow-2xl w-full h-[300px] object-cover"
              />
            </div>
          </div>

                  {/* Fast Delivery Section */}
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 animate-bounce">
                        <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                      <p className="text-gray-600">Quick turnaround time for all your design projects without compromising quality.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 animate-bounce">
                        <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                      <p className="text-gray-600">Every design goes through rigorous quality checks to ensure perfection.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4 animate-bounce">
                        <svg className="h-6 w-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                      <p className="text-gray-600">Round-the-clock support to help you with any design-related queries.</p>
                    </div>
                  </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                        <span className="text-xl font-bold">The Art Beat</span>
              </div>
              <p className="text-gray-400">
                Creating art that moves and inspires.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                        <li>
                          <Link 
                            to="/" 
                            onClick={(e) => {
                              e.preventDefault();
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                              setTimeout(() => {
                                window.location.href = '/';
                              }, 500);
                            }}
                            className="text-gray-400 hover:text-white"
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/portfolio" 
                            onClick={(e) => {
                              e.preventDefault();
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                              setTimeout(() => {
                                window.location.href = '/portfolio';
                              }, 500);
                            }}
                            className="text-gray-400 hover:text-white"
                          >
                            Portfolio
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/services" 
                            onClick={(e) => {
                              e.preventDefault();
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                              setTimeout(() => {
                                window.location.href = '/services';
                              }, 500);
                            }}
                            className="text-gray-400 hover:text-white"
                          >
                            Services
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/about" 
                            onClick={(e) => {
                              e.preventDefault();
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                              setTimeout(() => {
                                window.location.href = '/about';
                              }, 500);
                            }}
                            className="text-gray-400 hover:text-white"
                          >
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/contact" 
                            onClick={(e) => {
                              e.preventDefault();
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                              setTimeout(() => {
                                window.location.href = '/contact';
                              }, 500);
                            }}
                            className="text-gray-400 hover:text-white"
                          >
                            Contact Us
                          </Link>
                        </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                        <li>Ayyappan Society</li>
                        <li>Madhapur, Hyderabad</li>
                        <li>Telangana</li>
                        <li>
                          <a 
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=rangakottalabusiness@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 font-bold hover:text-white transition-colors duration-300 flex items-center group"
                          >
                            rangakottalabusiness@gmail.com
                            <svg 
                              className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </li>
                        <li>+91 96420 03828</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 The Art Beat. All rights reserved.</p>
          </div>
        </div>
      </footer>
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/brand-identity" element={<BrandIdentity />} />
        </Routes>
    </div>
    </Router>
  );
}

function NavLink({ href, children, icon }: { href: string; children: React.ReactNode; icon: React.ReactNode }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      window.location.href = href;
    }, 500);
  };

  return (
    <Link
      to={href}
      onClick={handleClick}
      className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors"
    >
      {icon}
      <span>{children}</span>
    </Link>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      window.location.href = href;
    }, 500);
  };

  return (
    <Link
      to={href}
      onClick={handleClick}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition-colors"
    >
      {children}
    </Link>
  );
}

export default App;