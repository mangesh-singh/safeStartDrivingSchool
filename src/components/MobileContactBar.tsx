import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { businessConfig } from '../config/business';

export const MobileContactBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-2.5 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 shadow-2xl">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        
        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${businessConfig.whatsappNumber}?text=Hi%2C%20I%20want%20to%20enquire%20about%20driving%20lessons.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-whatsapp-500 hover:bg-whatsapp-600 active:bg-whatsapp-600 text-white font-extrabold text-sm py-3 px-4 rounded-xl shadow-md transition-transform active:scale-95"
        >
          <MessageSquare className="w-4 h-4 mr-2 fill-current" />
          <span>WhatsApp</span>
        </a>

        {/* Call Now Button */}
        <a
          href={businessConfig.phoneCallUrl}
          className="flex items-center justify-center bg-brand-500 hover:bg-brand-600 active:bg-brand-600 text-slate-950 font-extrabold text-sm py-3 px-4 rounded-xl shadow-md transition-transform active:scale-95"
        >
          <Phone className="w-4 h-4 mr-2 text-slate-950 fill-current" />
          <span>Call Now</span>
        </a>

      </div>
    </div>
  );
};
