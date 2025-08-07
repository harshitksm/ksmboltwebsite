import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setShowContent(true);
      }, 100);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const newsItems = [
    {
      date: "July 16, 2025",
      title: "Investment Director Discusses Market Dynamics and Cyclical Opportunities on CNBC's Closing Bell"
    },
    {
      date: "July 10, 2025", 
      title: "KSM CEO Joins CNBC to Discuss Economic Tailwinds, Investor Trends, and Fiscal Responsibility"
    },
    {
      date: "July 2, 2025",
      title: "On Bloomberg's The Close, Portfolio Manager Weighs Impact of Policy Changes and Market Dynamics"
    },
    {
      date: "June 30, 2025",
      title: "Fixed Income Specialist Joins Bloomberg's The Close to Discuss Market Outlook"
    },
    {
      date: "June 25, 2025",
      title: "KSM Capital Announces Strategic Partnership with Leading Technology Firm"
    },
    {
      date: "June 20, 2025",
      title: "Wealth Management Division Expands Services for Ultra-High-Net-Worth Clients"
    }
  ];

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50">
        <div className="text-center animate-pulse">
          <div className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center mb-8 mx-auto">
            <span className="text-slate-900 text-3xl font-bold">K</span>
          </div>
          <div className="text-3xl font-playfair font-medium text-white tracking-wider">
            KSM CAPITAL
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-white transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-xl font-bold">K</span>
              </div>
              <div className="text-slate-900 text-2xl font-playfair font-medium">KSM Capital</div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <button className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors">
                Who We Are
              </button>
              <button className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors">
                Wealth Management
              </button>
              <button className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors">
                Asset Management
              </button>
              <button className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors">
                Investment Banking
              </button>
              <button className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors">
                News
              </button>
              <button className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </button>
              <button className="bg-gold-500 text-white hover:bg-gold-600 px-6 py-2 text-sm font-medium transition-colors rounded">
                Request Introduction
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-slate-900 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button className="block px-3 py-2 text-slate-600 hover:text-slate-900 w-full text-left text-sm">
                Who We Are
              </button>
              <button className="block px-3 py-2 text-slate-600 hover:text-slate-900 w-full text-left text-sm">
                Wealth Management
              </button>
              <button className="block px-3 py-2 text-slate-600 hover:text-slate-900 w-full text-left text-sm">
                Asset Management
              </button>
              <button className="block px-3 py-2 text-slate-600 hover:text-slate-900 w-full text-left text-sm">
                Investment Banking
              </button>
              <button className="block px-3 py-2 text-slate-600 hover:text-slate-900 w-full text-left text-sm">
                News
              </button>
              <button className="block px-3 py-2 text-slate-600 hover:text-slate-900 w-full text-left text-sm">
                Contact
              </button>
              <button className="block px-3 py-2 text-gold-500 hover:text-gold-600 w-full text-left text-sm">
                Request Introduction
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-20 hero-bg min-h-screen flex items-center relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium text-white leading-tight mb-8">
            For more than seven generations, we<br />
            have grown and evolved alongside<br />
            members of the KSM family,<br />
            pursuing
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium text-gold-400 mb-12">
            extraordinary possibilities.
          </h2>
          <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-sm font-medium transition-all duration-300 rounded">
            Who We Are
          </button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-medium text-slate-900 mb-8">
              Distinct Solutions, Personal Service
            </h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              We serve families and individuals, institutional investors, and corporations across a wide range 
              of needs and objectives. We continue to learn from our heritage and seek out new and 
              innovative ways of working, using our past success to help us continue pioneering the future 
              of financial services.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Wealth Management */}
            <div className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-gold-500/10 to-gold-500/5 rounded-lg mb-6 flex items-end p-6">
                <div className="w-full">
                  <div className="w-12 h-1 bg-gold-500 mb-4"></div>
                  <h3 className="text-2xl font-playfair font-medium text-slate-900 mb-2">
                    Wealth Management
                  </h3>
                </div>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Individualized service at every stage of wealth combined with the legacy that 
                has guided successful families for more than seven generations.
              </p>
              <div className="mb-6">
                <div className="text-slate-900 font-medium mb-2">KSM Global Family Office</div>
              </div>
              <button className="border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white px-6 py-2 text-sm font-medium transition-colors rounded">
                Learn More
              </button>
            </div>

            {/* Asset Management */}
            <div className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-lg mb-6 flex items-end p-6">
                <div className="w-full">
                  <div className="w-12 h-1 bg-gold-500 mb-4"></div>
                  <h3 className="text-2xl font-playfair font-medium text-slate-900 mb-2">
                    Asset Management
                  </h3>
                </div>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Seeking to generate insights and outcomes not commonly found in the 
                investment community to serve institutions, financial professionals, and 
                other institutionally-minded investors.
              </p>
              <div className="mb-6">
                <div className="text-slate-900 font-medium mb-2">KSM Asset Management</div>
              </div>
              <button className="border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white px-6 py-2 text-sm font-medium transition-colors rounded">
                Learn More
              </button>
            </div>

            {/* Investment Banking */}
            <div className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-slate-500/10 to-slate-500/5 rounded-lg mb-6 flex items-end p-6">
                <div className="w-full">
                  <div className="w-12 h-1 bg-gold-500 mb-4"></div>
                  <h3 className="text-2xl font-playfair font-medium text-slate-900 mb-2">
                    Investment Banking
                  </h3>
                </div>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Independent, strategic business advice and guidance for private and public 
                companies through a team of senior investment bankers with a commitment 
                to integrity.
              </p>
              <div className="mb-6">
                <div className="text-slate-900 font-medium mb-2">KSM Global Investment Banking</div>
              </div>
              <button className="border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white px-6 py-2 text-sm font-medium transition-colors rounded">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* What We Believe In */}
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-2xl font-playfair font-medium text-slate-900 mb-4">
                What We Believe In
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our values guide every decision we make and every relationship we build.
              </p>
              <button className="text-gold-500 hover:text-gold-600 font-medium text-sm transition-colors">
                Our Values →
              </button>
            </div>

            {/* A Distinct Heritage */}
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-2xl font-playfair font-medium text-slate-900 mb-4">
                A Distinct Heritage
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Seven generations of experience serving families and building lasting relationships.
              </p>
              <button className="text-gold-500 hover:text-gold-600 font-medium text-sm transition-colors">
                Our History →
              </button>
            </div>

            {/* An Inspired Future */}
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-2xl font-playfair font-medium text-slate-900 mb-4">
                An Inspired Future
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our people are the foundation of our success and the architects of our future.
              </p>
              <button className="text-gold-500 hover:text-gold-600 font-medium text-sm transition-colors">
                Our People →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-playfair font-medium text-white mb-8">
              In Good Company
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We have always distinguished ourselves by doing things not only well, but 
              differently. We seek to deliver the future of financial services to our clients, made 
              possible by our historic success.
            </p>
          </div>
        </div>
        
        <div className="news-container">
          <div className="news-track animate-scroll-news">
            {[...newsItems, ...newsItems].map((item, index) => (
              <div key={index} className="bg-slate-800 border border-slate-700 p-6 rounded-lg hover:border-gold-500/50 transition-all duration-300 min-w-[400px] flex-shrink-0">
                <div className="text-gold-400 text-sm font-medium mb-3">{item.date}</div>
                <h3 className="text-white text-sm font-medium leading-relaxed">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-lg font-bold">K</span>
                </div>
                <div className="text-white text-xl font-playfair font-medium">KSM Capital</div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Professional wealth management, asset management, and investment banking services 
                with personalized client care.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-medium mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><button className="hover:text-white transition-colors">Wealth Management</button></li>
                <li><button className="hover:text-white transition-colors">Asset Management</button></li>
                <li><button className="hover:text-white transition-colors">Investment Banking</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><button className="hover:text-white transition-colors">About Us</button></li>
                <li><button className="hover:text-white transition-colors">Our Values</button></li>
                <li><button className="hover:text-white transition-colors">History</button></li>
                <li><button className="hover:text-white transition-colors">Leadership</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-medium mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><button className="hover:text-white transition-colors">Get in Touch</button></li>
                <li><button className="hover:text-white transition-colors">Office Locations</button></li>
                <li><button className="hover:text-white transition-colors">Careers</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2025 KSM Capital. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</button>
              <button className="text-slate-400 hover:text-white text-sm transition-colors">Terms of Service</button>
              <button className="text-slate-400 hover:text-white text-sm transition-colors">Disclosures</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;