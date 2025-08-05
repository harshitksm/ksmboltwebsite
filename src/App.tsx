import React, { useState } from 'react';
import { useEffect } from 'react';
import { Menu, X, Search, ArrowRight } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Small delay to allow loading screen to fade out before content fades in
      setTimeout(() => {
        setShowContent(true);
      }, 100);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900 flex items-center justify-center z-50 animate-fade-out">
        <div className="text-center">
          <div className="animate-fade-in">
            <div className="text-6xl font-light tracking-wider text-amber-400 mb-4">
              <span className="font-normal">KSM</span>
            </div>
            <div className="text-lg text-teal-100 tracking-widest">
              CAPITAL
            </div>
            <div className="mt-8">
              <div className="w-16 h-0.5 bg-amber-400 mx-auto animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-white transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-navy-900/95 backdrop-blur-sm border-b border-navy-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="text-2xl font-light tracking-wider text-gold-600">
                  <span className="font-normal">KSM</span>
                  <div className="text-xs text-gold-700 tracking-widest mt-1">CAPITAL</div>
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button className="text-gray-300 hover:text-gold-600 px-3 py-2 text-sm font-medium tracking-wide transition-colors">
                  WEALTH MANAGEMENT
                </button>
                <button className="text-gray-300 hover:text-gold-600 px-3 py-2 text-sm font-medium tracking-wide transition-colors">
                  ASSET MANAGEMENT
                </button>
                <button className="text-gray-300 hover:text-gold-600 px-3 py-2 text-sm font-medium tracking-wide transition-colors">
                  INVESTMENT BANKING
                </button>
                <button className="text-gray-300 hover:text-gold-600 px-3 py-2 text-sm font-medium tracking-wide transition-colors">
                  OUR PROMISE
                </button>
                <button className="text-gray-300 hover:text-gold-600 px-3 py-2 text-sm font-medium tracking-wide transition-colors">
                  NEWS
                </button>
                <button className="border border-gold-700 text-gray-300 hover:border-gold-600 hover:text-gold-600 px-4 py-2 text-sm font-medium tracking-wide transition-colors">
                  CLIENT LOGIN
                </button>
                <button className="text-gray-300 hover:text-gold-600 p-2">
                  <Search size={18} />
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-gold-600 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-navy-900 border-t border-navy-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button className="block px-3 py-2 text-gray-300 hover:text-gold-600 w-full text-left text-sm tracking-wide">
                WEALTH MANAGEMENT
              </button>
              <button className="block px-3 py-2 text-gray-300 hover:text-gold-600 w-full text-left text-sm tracking-wide">
                ASSET MANAGEMENT
              </button>
              <button className="block px-3 py-2 text-gray-300 hover:text-gold-600 w-full text-left text-sm tracking-wide">
                INVESTMENT BANKING
              </button>
              <button className="block px-3 py-2 text-gray-300 hover:text-gold-600 w-full text-left text-sm tracking-wide">
                OUR PROMISE
              </button>
              <button className="block px-3 py-2 text-gray-300 hover:text-gold-600 w-full text-left text-sm tracking-wide">
                NEWS
              </button>
              <button className="block px-3 py-2 text-gray-300 hover:text-gold-600 w-full text-left text-sm tracking-wide">
                CLIENT LOGIN
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - What We Believe In */}
      <section className="pt-20 bg-gradient-to-br from-navy-900 via-charcoal-800 to-brown-900 min-h-screen relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gold-600 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-brown-600 rounded-full"></div>
          <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-navy-600 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <div className="space-y-8">
              {/* Historical image */}
              <div className="bg-white p-6 rounded-lg shadow-xl max-w-md">
                <img 
                  src="https://images.pexels.com/photos/8919564/pexels-photo-8919564.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Historical business meeting"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="bg-teal-600 text-white p-6 rounded-lg">
                  <div className="text-gold-600 mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-light mb-4">In Good Company</h3>
                  <p className="text-gray-200 leading-relaxed">
                    We have always distinguished ourselves by doing things not only well, but differently. We seek to deliver the future of financial services to our clients, made possible by our historic success.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-white space-y-12">
              <div>
                <h1 className="text-5xl lg:text-6xl font-light leading-tight mb-8">
                  What We<br />
                  Believe In
                </h1>
                <p className="text-xl text-teal-100 mb-8 leading-relaxed max-w-lg">
                <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
                  Our principles have been shaped by over 140 years working alongside members of the KSM family. Today, those principles guide our growth.
                </p>
                <button className="text-white border-b border-white pb-1 hover:border-gold-600 hover:text-gold-600 transition-colors flex items-center space-x-2 text-sm tracking-wide">
                  <span>OUR VALUES</span>
                  <ArrowRight size={16} />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-light mb-4">A Distinct Heritage</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Our history is filled with moments that define us; not because of the past, but because of what they mean for our future.
                  </p>
                  <button className="text-white border-b border-white pb-1 hover:border-gold-600 hover:text-gold-600 transition-colors flex items-center space-x-2 text-sm tracking-wide">
                    <span>OUR HISTORY</span>
                    <ArrowRight size={16} />
                  </button>
                </div>

                <div>
                  <h3 className="text-2xl font-light mb-4">An Inspired Future</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    We're nothing without our people. Our experienced and talented team approaches each challenge with energy, creativity, and care.
                  </p>
                  <button className="text-white border-b border-white pb-1 hover:border-gold-600 hover:text-gold-600 transition-colors flex items-center space-x-2 text-sm tracking-wide">
                    <span>OUR PEOPLE</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal-900 to-transparent"></div>
      </section>

      {/* Expect the Exceptional Section */}
      <section className="py-20 bg-charcoal-900 relative">
        {/* Decorative dots pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="grid grid-cols-20 gap-4 h-full">
            {Array.from({ length: 400 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-gold-600 rounded-full"></div>
            ))}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-gold-600 mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                </svg>
              </div>
              <h2 className="text-5xl lg:text-6xl font-light text-gold-600 leading-tight mb-8">
                Expect the<br />
                <span className="border-b-2 border-gold-600 pb-2">Exceptional</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We seek to deliver the unique promise of the KSM family legacy to distinguished individuals, families, and institutions.
              </p>
              <button className="border border-gold-600 text-gold-600 px-8 py-3 hover:bg-gold-600 hover:text-navy-900 transition-colors text-sm tracking-wide">
                WHO WE ARE
              </button>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Business professional"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <img 
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Modern workspace"
                  className="w-full h-64 object-cover rounded-lg mt-8"
                />
              </div>
              {/* Signature overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 p-4 rounded-lg">
                <div className="text-brown-800 font-script text-2xl">KSM Capital</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-light text-white mb-6">
              Distinct Solutions,<br />
              Personal Service
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              We serve families and individuals, institutional investors, and corporations across a wide range of needs and objectives. We continue to learn from our heritage and seek out new and innovative ways of working, using our past success to help us continue pioneering the future of financial services.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Wealth Management */}
            <div className="bg-brown-800 text-white p-8 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl font-light mb-6">
                Wealth<br />
                Management
              </h3>
              <p className="text-brown-200 mb-8 leading-relaxed">
                Individualized service at every stage of wealth combined with the legacy that has guided members of the KSM family for more than seven generations.
              </p>
              <button className="text-white border-b border-white pb-1 hover:border-gold-600 transition-colors flex items-center space-x-2 text-sm tracking-wide">
                <span>KSM GLOBAL FAMILY OFFICE</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Asset Management */}
            <div className="bg-charcoal-800 text-white p-8 rounded-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200" 
                  alt="Financial charts"
                  className="w-full h-full object-cover rounded-bl-full"
                />
              </div>
              <h3 className="text-3xl font-light mb-6 relative z-10">
                Asset<br />
                Management
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed relative z-10">
                Seeking to generate insights and outcomes not commonly found in the investment community to serve institutions, financial professionals, and other institutionally-minded investors.
              </p>
              <button className="text-white border-b border-white pb-1 hover:border-gold-600 transition-colors flex items-center space-x-2 text-sm tracking-wide relative z-10">
                <span>KSM ASSET MANAGEMENT</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Investment Banking */}
            <div className="bg-navy-800 text-white p-8 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl font-light mb-6">
                Investment<br />
                Banking
              </h3>
              <p className="text-navy-200 mb-8 leading-relaxed">
                Independent, strategic business advice and guidance for private and public companies through a team of senior investment bankers with a commitment to integrity.
              </p>
              <button className="text-white border-b border-white pb-1 hover:border-gold-600 transition-colors flex items-center space-x-2 text-sm tracking-wide">
                <span>KSM GLOBAL INVESTMENT BANKING</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Updates Section */}
      <section className="py-20 bg-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-4">Updates</h2>
            <div className="w-24 h-0.5 bg-gold-600 mx-auto"></div>
          </div>
          
          <div className="updates-container">
            <div className="updates-track animate-scroll">
              {[
                {
                  title: "Market Outlook 2024",
                  date: "December 15, 2024",
                  excerpt: "Our investment team shares insights on emerging market trends and opportunities for the coming year, focusing on sustainable growth strategies."
                },
                {
                  title: "ESG Investment Strategies",
                  date: "December 10, 2024", 
                  excerpt: "Exploring how environmental, social, and governance factors are reshaping investment portfolios and creating long-term value."
                },
                {
                  title: "Wealth Transfer Planning",
                  date: "December 5, 2024",
                  excerpt: "Essential considerations for multi-generational wealth preservation and the importance of early planning for family legacy."
                },
                {
                  title: "Technology in Finance",
                  date: "November 28, 2024",
                  excerpt: "How artificial intelligence and digital transformation are revolutionizing wealth management and client service delivery."
                },
                {
                  title: "Global Economic Trends",
                  date: "November 20, 2024",
                  excerpt: "Analysis of international markets, currency fluctuations, and geopolitical factors affecting investment strategies worldwide."
                }
              ].concat([
                {
                  title: "Market Outlook 2024",
                  date: "December 15, 2024",
                  excerpt: "Our investment team shares insights on emerging market trends and opportunities for the coming year, focusing on sustainable growth strategies."
                },
                {
                  title: "ESG Investment Strategies",
                  date: "December 10, 2024", 
                  excerpt: "Exploring how environmental, social, and governance factors are reshaping investment portfolios and creating long-term value."
                },
                {
                  title: "Wealth Transfer Planning",
                  date: "December 5, 2024",
                  excerpt: "Essential considerations for multi-generational wealth preservation and the importance of early planning for family legacy."
                },
                {
                  title: "Technology in Finance",
                  date: "November 28, 2024",
                  excerpt: "How artificial intelligence and digital transformation are revolutionizing wealth management and client service delivery."
                },
                {
                  title: "Global Economic Trends",
                  date: "November 20, 2024",
                  excerpt: "Analysis of international markets, currency fluctuations, and geopolitical factors affecting investment strategies worldwide."
                }
              ]).map((update, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex-shrink-0 w-80">
                <div key={index} className="bg-navy-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex-shrink-0 w-80">
                  <div className="text-gold-600 text-sm font-medium mb-2">{update.date}</div>
                  <h3 className="text-lg font-medium text-white mb-3 whitespace-normal">{update.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 whitespace-normal">{update.excerpt}</p>
                  <button className="text-gold-600 text-sm font-medium hover:text-gold-700 transition-colors flex items-center space-x-1">
                    <span>Read More</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-navy-900 via-brown-900 to-charcoal-900 relative overflow-hidden">
        {/* Abstract background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold-600 via-brown-600 to-navy-600 mix-blend-overlay"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-light mb-6">
                We're inspired<br />
                that you're here.
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We can connect you with the experts that can help guide your financial achieving your unique goals.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-light text-gray-900 mb-6">Request an Introduction</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-xs text-gray-600 tracking-wide mb-2">NAME (REQUIRED)</label>
                  <input
                    type="text"
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gold-600 focus:ring-0 bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 tracking-wide mb-2">PHONE NUMBER</label>
                  <input
                    type="tel"
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gold-600 focus:ring-0 bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 tracking-wide mb-2">EMAIL (REQUIRED)</label>
                  <input
                    type="email"
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gold-600 focus:ring-0 bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 tracking-wide mb-2">STATE</label>
                  <input
                    type="text"
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gold-600 focus:ring-0 bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 tracking-wide mb-2">PREFERRED METHOD OF CONTACT (REQUIRED)</label>
                  <select className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gold-600 focus:ring-0 bg-transparent">
                    <option>Please Select</option>
                    <option>Phone</option>
                    <option>Email</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 tracking-wide mb-2">TO HELP US ANSWER YOUR NEEDS, CAN YOU SHARE A RANGE FOR YOUR INVESTABLE ASSETS? (REQUIRED)</label>
                  <select className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gold-600 focus:ring-0 bg-transparent">
                    <option>Please Select</option>
                    <option>Under $1M</option>
                    <option>$1M - $5M</option>
                    <option>$5M - $25M</option>
                    <option>$25M+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 tracking-wide mb-2">MESSAGE</label>
                  <textarea
                    rows={4}
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gold-600 focus:ring-0 bg-transparent resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold-700 text-navy-900 py-4 rounded-lg font-medium hover:bg-gold-600 transition-colors tracking-wide"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-light tracking-wider text-gold-600 mb-4">
              <span className="font-normal">KSM</span>
              <div className="text-xs text-gold-700 tracking-widest mt-1">CAPITAL</div>
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 KSM Capital. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;