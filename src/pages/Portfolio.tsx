import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import brandIdentity1 from '../assets/images/brand-identity-1.jpg.jpg';
import brandIdentity2 from '../assets/images/brand-identity-2.jpg.jpg';
import brandIdentity3 from '../assets/images/brand-identity-3.jpg.jpg';
import brandIdentity4 from '../assets/images/brand-identity-4.jpg.jpg';
import brandIdentity5 from '../assets/images/brand-identity-5.jpg.jpg';
import webDesign1 from '../assets/images/web-design/web-design-1.jpg';
import webDesign2 from '../assets/images/web-design/web-design-2.jpg';
import webDesign3 from '../assets/images/web-design/web-design-3.jpg';
import webDesign4 from '../assets/images/web-design/web-design-4.jpg';
import catalogue1 from '../assets/images/catalogue-design/catalogue-1.jpg.jpg';
import catalogue2 from '../assets/images/catalogue-design/catalogue-2.jpg.jpg';
import catalogue3 from '../assets/images/catalogue-design/catalogue-3.jpg.jpg';
import catalogue4 from '../assets/images/catalogue-design/catalogue-4.jpg.jpg';
import catalogue5 from '../assets/images/catalogue-design/catalogue-5.jpg.jpg';
import catalogue6 from '../assets/images/catalogue-design/catalogue-6.jpg.jpg';
import officeCatalogue1 from '../assets/images/office-catalogue/office-catalogue-1.jpg.jpg';
import officeCatalogue2 from '../assets/images/office-catalogue/office-catalogue-2.jpg.jpg';
import officeCatalogue3 from '../assets/images/office-catalogue/office-catalogue-3.jpg.jpg';
import officeCatalogue4 from '../assets/images/office-catalogue/office-catalogue-4.jpg.jpg';
import officeCatalogue5 from '../assets/images/office-catalogue/office-catalogue-5.jpg.jpg';
import priceList1 from '../assets/images/price-list-catalogue/price-list-1.jpg.jpg';
import priceList2 from '../assets/images/price-list-catalogue/price-list-2.jpg.jpg';
import priceList3 from '../assets/images/price-list-catalogue/price-list-3.jpg.jpg';
import priceList4 from '../assets/images/price-list-catalogue/price-list-4.jpg.jpg';
import priceList5 from '../assets/images/price-list-catalogue/price-list-5.jpg.jpg';
import logo1 from '../assets/images/logo-designs/logo-1.jpg.jpg';
import logo2 from '../assets/images/logo-designs/logo-2.jpg.jpg';
import logo3 from '../assets/images/logo-designs/logo-3.jpg.jpg';
import logo4 from '../assets/images/logo-designs/logo-4.jpg.jpg';

interface PortfolioItem {
  id?: number;
  title: string;
  category: string;
  image: string;
  description?: string;
  images?: string[];
  link?: string;
}

const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollContainerRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollContainerRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  };

  const portfolioItems: PortfolioItem[] = [
    {
      title: 'Brand Identity Design',
      category: 'Branding',
      image: brandIdentity1,
      description: 'Complete brand identity design including logo, color palette, typography, and brand guidelines.',
      images: [brandIdentity1, brandIdentity2, brandIdentity3, brandIdentity4, brandIdentity5]
    },
    {
      title: 'Web Design Project',
      category: 'Digital Design',
      image: webDesign1,
      description: 'Modern and responsive web design showcasing user interface and experience design principles.',
      images: [webDesign1, webDesign2, webDesign3, webDesign4]
    },
    {
      title: 'Catalogue Designs',
      category: 'Print Design',
      image: catalogue1,
      description: 'Professional catalogue designs that showcase products and services in an engaging and organized manner.',
      images: [catalogue1, catalogue2, catalogue3, catalogue4, catalogue5, catalogue6]
    },
    {
      title: 'Office Catalogue Designs',
      category: 'Print Design',
      image: officeCatalogue1,
      description: 'Specialized office equipment and supplies catalogue with detailed product information and specifications.',
      images: [officeCatalogue1, officeCatalogue2, officeCatalogue3, officeCatalogue4, officeCatalogue5]
    },
    {
      title: 'Price List Catalogue',
      category: 'Print Design',
      image: priceList1,
      description: 'Comprehensive price list catalogue featuring product pricing, specifications, and promotional offers.',
      images: [priceList1, priceList2, priceList3, priceList4, priceList5]
    },
    {
      title: 'Logo Designs',
      category: 'Branding',
      image: logo1,
      description: 'Creative and memorable logo designs that capture the essence of your brand.',
      images: [logo1, logo2, logo3, logo4]
    }
  ];

  const handleItemClick = (item: PortfolioItem) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-sky-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-l from-orange-50 via-sky-50 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our collection of creative works that showcase our expertise in design and branding.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Scrollable Section */}
      <section className="py-16 relative bg-gradient-to-b from-white to-orange-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide gap-8 py-4"
          >
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="flex-none w-[calc(33.333%-1.333rem)] group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
                onClick={() => handleItemClick(item)}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-sm font-medium text-white/80 bg-black/50 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="mt-2 text-sm text-white/80 line-clamp-2">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-50 via-sky-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Contact us to discuss your design needs.
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rangakottalabusiness@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-orange-500 to-sky-500 hover:from-orange-600 hover:to-sky-600 transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
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
      </section>

      {/* Full Screen Image Modal */}
      {showModal && selectedItem?.images && selectedItem.images.length > 0 && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <button
            onClick={() => setShowModal(false)}
            className="fixed top-4 right-4 text-gray-700 hover:text-gray-900 z-10 bg-white/80 rounded-full p-2 shadow-lg"
          >
            <X size={32} />
          </button>

          {/* Web View Container */}
          <div className="w-full">
            {selectedItem.images.map((image, index) => (
              <div
                key={index}
                className="w-full min-h-screen bg-white relative"
              >
                {/* Header */}
                <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-10">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <span className="text-lg font-medium text-gray-900">
                      {selectedItem.title}
                    </span>
                  </div>
                </header>

                {/* Main Content */}
                <main className="pt-16">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`${selectedItem.title}`}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </main>

                {/* Footer */}
                <footer className="bg-gray-50 border-t">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="text-sm text-gray-500">
                      {selectedItem.title}
                    </div>
                  </div>
                </footer>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio; 