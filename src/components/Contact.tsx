import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, ExternalLink, Instagram } from 'lucide-react';
import { businessConfig } from '../config/business';

interface ContactProps {
  onOpenEnquiry: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Business Details */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-md">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
              Contact {businessConfig.fullName}
            </h2>
            <p className="text-slate-600 text-base">
              Have questions about our training packages, timings, or licensing procedure? Call or WhatsApp us today!
            </p>

            <div className="space-y-4 pt-4">
              {/* Phone Card */}
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-300 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 text-brand-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider">Phone / Direct Call</h4>
                  <a
                    href={businessConfig.phoneCallUrl}
                    className="text-lg font-display font-extrabold text-slate-900 hover:text-brand-600 transition-colors"
                  >
                    {businessConfig.phoneDisplay}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Click to call immediately</p>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-whatsapp-500 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 text-whatsapp-500">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider">WhatsApp Instant Chat</h4>
                  <a
                    href={`https://wa.me/${businessConfig.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-display font-extrabold text-slate-900 hover:text-whatsapp-600 transition-colors"
                  >
                    {businessConfig.whatsappDisplay}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Quick responses during working hours</p>
                </div>
              </div>

              {/* Instagram Card */}
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-pink-500 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 text-pink-600">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider">Follow On Instagram</h4>
                  <a
                    href={businessConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-display font-extrabold text-slate-900 hover:text-pink-600 transition-colors flex items-center mt-0.5"
                  >
                    @SafeStartDrivingSchool <ExternalLink className="w-3 h-3 ml-1 text-slate-400" />
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Check out latest student practice videos & updates</p>
                </div>
              </div>

              {/* Address Card */}
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-11 h-11 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 text-brand-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider">Training Centre Address</h4>
                  <p className="text-sm font-extrabold text-slate-900 mt-0.5">
                    {businessConfig.fullAddress}
                  </p>
                  <a
                    href={businessConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold text-brand-600 hover:underline mt-1"
                  >
                    Open in Google Maps <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-11 h-11 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 text-brand-500">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider">Opening Hours</h4>
                  <p className="text-xs font-semibold text-slate-800 mt-1">
                    {businessConfig.hours.weekdays}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {businessConfig.hours.sunday}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Google Maps Interactive Card */}
          <div className="lg:col-span-6 h-full flex flex-col">
            <div className="bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 p-2 h-full flex flex-col justify-between">
              
              <div className="p-6 text-white space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-400">Location Map</span>
                  <span className="flex items-center text-xs text-emerald-400 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-1.5" />
                    Open Today
                  </span>
                </div>
                <h3 className="text-xl font-display font-extrabold">Visit Our Training Grounds</h3>
                <p className="text-xs text-slate-400">
                  Conveniently located near the central RTO track with ample parking & practice area.
                </p>
              </div>

              {/* Styled Map Box Graphic */}
              <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center group">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
                  alt="Location Map Preview"
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]" />

                <div className="relative z-10 text-center p-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-brand-500 text-slate-950 flex items-center justify-center mx-auto shadow-xl">
                    <MapPin className="w-6 h-6 fill-current" />
                  </div>
                  <div className="text-white font-display font-extrabold text-base">
                    {businessConfig.fullName}
                  </div>
                  <a
                    href={businessConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-white hover:bg-slate-100 text-slate-950 font-extrabold text-xs px-5 py-2.5 rounded-xl shadow-lg transition-all"
                  >
                    View Directions on Google Maps <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Pre-Footer Banner Matching the Template Mockup */}
        <div className="relative bg-slate-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl overflow-hidden border border-slate-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl">
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
                Ready to Start Your Driving Journey?
              </h3>
              <p className="text-slate-300 text-sm">
                Get in touch today and take the first step towards your driving goals.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenEnquiry}
                className="bg-brand-500 hover:bg-brand-600 text-slate-950 font-extrabold text-sm px-6 py-3 rounded-xl shadow-lg shadow-brand-500/20 transition-all transform hover:-translate-y-0.5"
              >
                Enquire Now
              </button>
              
              <a
                href={businessConfig.phoneCallUrl}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm px-6 py-3 rounded-xl border border-slate-800 transition-all flex items-center"
              >
                <Phone className="w-4 h-4 mr-2 text-brand-400" />
                Call Now
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
