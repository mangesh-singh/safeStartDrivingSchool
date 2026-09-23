import React from 'react';
import { Compass, Facebook, Instagram, Youtube } from 'lucide-react';
import { businessConfig } from '../config/business';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs py-12 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          {/* Logo */}
          <a href="#hero" className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-brand-500 text-slate-950 flex items-center justify-center font-bold">
              <Compass className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg text-white tracking-tight">
                {businessConfig.namePrefix}<span className="text-brand-500">{businessConfig.nameHighlight}</span>
              </span>
              <span className="text-[9px] font-bold tracking-widest text-slate-400 uppercase">
                Driving School
              </span>
            </div>
          </a>

          {/* Nav links */}
          <div className="flex flex-wrap gap-6 text-sm font-medium text-slate-300">
            <a href="#hero" className="hover:text-brand-400 transition-colors">Home</a>
            <a href="#why-us" className="hover:text-brand-400 transition-colors">About</a>
            <a href="#courses" className="hover:text-brand-400 transition-colors">Courses</a>
            <a href="#gallery" className="hover:text-brand-400 transition-colors">Gallery</a>
            <a href="#reviews" className="hover:text-brand-400 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-brand-400 transition-colors">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href={businessConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-brand-400 hover:border-brand-500 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={businessConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-brand-400 hover:border-brand-500 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={businessConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-brand-400 hover:border-brand-500 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-slate-500 space-y-2 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} {businessConfig.fullName}. All rights reserved.
          </div>
          <div className="flex items-center space-x-1">
            <span>{businessConfig.topBarNotice}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
