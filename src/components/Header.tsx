import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, Phone, MessageSquare } from 'lucide-react';
import { businessConfig } from '../config/business';

interface HeaderProps {
  onOpenEnquiry: (courseTitle?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#why-us' },
    { name: 'Courses', href: '#courses' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-white border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-full bg-slate-950 flex items-center justify-center text-brand-500 shadow-md group-hover:bg-brand-500 group-hover:text-slate-950 transition-all duration-300">
            <Compass className="w-6 h-6 transform group-hover:rotate-45 transition-transform duration-500" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-xl text-slate-900 tracking-tight leading-none">
              {businessConfig.namePrefix}<span className="text-brand-500">{businessConfig.nameHighlight}</span>
            </span>
            <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase mt-0.5">
              Driving School
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-700 hover:text-brand-600 transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Call-To-Action */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href={businessConfig.phoneCallUrl}
            className="flex items-center text-sm font-bold text-slate-800 hover:text-brand-600 transition-colors px-3 py-2"
          >
            <Phone className="w-4 h-4 mr-2 text-brand-500" />
            <span>{businessConfig.phoneDisplay}</span>
          </a>

          <button
            onClick={() => onOpenEnquiry()}
            className="bg-brand-500 hover:bg-brand-600 text-slate-950 font-extrabold text-sm px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Enquire Now
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center space-x-2">
          <button
            onClick={() => onOpenEnquiry()}
            className="bg-brand-500 text-slate-950 text-xs font-bold px-3 py-2 rounded-md"
          >
            Enquire
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-brand-600 hover:bg-slate-50 px-3 py-2 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col space-y-2">
            <a
              href={`https://wa.me/${businessConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-whatsapp-500 hover:bg-whatsapp-600 text-white font-bold text-sm py-2.5 rounded-md"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              WhatsApp Us
            </a>
            <a
              href={businessConfig.phoneCallUrl}
              className="flex items-center justify-center w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm py-2.5 rounded-md"
            >
              <Phone className="w-4 h-4 mr-2 text-brand-400" />
              Call {businessConfig.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
