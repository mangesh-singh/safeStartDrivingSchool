import React from 'react';
import { Facebook, Instagram, Youtube, Phone, ShieldCheck } from 'lucide-react';
import { businessConfig } from '../config/business';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden md:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="flex items-center text-brand-400 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 mr-1.5" />
            {businessConfig.topBarNotice}
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">
            📍 {businessConfig.address}
          </span>
        </div>

        <div className="flex items-center space-x-6">
          <a
            href={businessConfig.phoneCallUrl}
            className="flex items-center text-slate-300 hover:text-brand-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 mr-1.5 text-brand-400" />
            <span>Call Us: {businessConfig.phoneDisplay}</span>
          </a>

          <div className="flex items-center space-x-3 text-slate-400">
            <span className="text-slate-500">Follow Us:</span>
            <a
              href={businessConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-400 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href={businessConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href={businessConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-400 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
