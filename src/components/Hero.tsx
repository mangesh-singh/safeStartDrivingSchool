import React from 'react';
import { Phone, MessageSquare, Shield, Clock, Car, Award, CheckCircle2 } from 'lucide-react';
import { businessConfig } from '../config/business';

interface HeroProps {
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="hero" className="relative bg-slate-950 text-white overflow-hidden pt-8 pb-16 lg:py-20">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Subtitle Badge */}
            <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 text-brand-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
              <span>{businessConfig.badgeSubtitle}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-none">
              Learn to Drive <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-500 to-amber-300">
                with Confidence
              </span>
            </h1>

            {/* Subtitle description */}
            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {businessConfig.slogan} Professional car driving lessons for beginners, refresher learners, and test preparation in {businessConfig.city}.
            </p>

            {/* Feature Pills Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="flex items-center space-x-2.5 bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl">
                <div className="w-8 h-8 rounded-lg bg-brand-500/20 text-brand-400 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <div className="font-bold text-white leading-tight">Experienced</div>
                  <div className="text-slate-400 text-[11px]">Instructors</div>
                </div>
              </div>

              <div className="flex items-center space-x-2.5 bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl">
                <div className="w-8 h-8 rounded-lg bg-brand-500/20 text-brand-400 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <div className="font-bold text-white leading-tight">Flexible</div>
                  <div className="text-slate-400 text-[11px]">Timings</div>
                </div>
              </div>

              <div className="flex items-center space-x-2.5 bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl">
                <div className="w-8 h-8 rounded-lg bg-brand-500/20 text-brand-400 flex items-center justify-center shrink-0">
                  <Car className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <div className="font-bold text-white leading-tight">Modern</div>
                  <div className="text-slate-400 text-[11px]">Training Cars</div>
                </div>
              </div>

              <div className="flex items-center space-x-2.5 bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl">
                <div className="w-8 h-8 rounded-lg bg-brand-500/20 text-brand-400 flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <div className="font-bold text-white leading-tight">Test Prep</div>
                  <div className="text-slate-400 text-[11px]">Support</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <button
                onClick={onOpenEnquiry}
                className="flex items-center justify-center bg-brand-500 hover:bg-brand-600 text-slate-950 font-extrabold text-base px-8 py-3.5 rounded-xl shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 transition-all transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 mr-2.5 text-slate-950 fill-current" />
                Book a Lesson
              </button>

              <a
                href={`https://wa.me/${businessConfig.whatsappNumber}?text=Hi%2C%20I%20am%20interested%20in%20learning%20car%20driving.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white font-bold text-base px-6 py-3.5 rounded-xl border border-slate-800 hover:border-slate-700 transition-all"
              >
                <MessageSquare className="w-5 h-5 mr-2.5 text-whatsapp-500 fill-current" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Trust highlights */}
            <div className="flex items-center space-x-6 text-xs text-slate-400 pt-2">
              <span className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-brand-400 mr-1.5" />
                Dual-Control Vehicles
              </span>
              <span className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-brand-400 mr-1.5" />
                Doorstep Pick & Drop
              </span>
            </div>

          </div>

          {/* Right Column Hero Banner Mockup Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800/80 bg-slate-900 group">
              {/* Image banner */}
              <img
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1000&q=80"
                alt="DriveRight Driving School Car"
                className="w-full h-[360px] sm:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              {/* Slogan Banner Overlay Top Right */}
              <div className="absolute top-4 right-4 bg-brand-500 text-slate-950 font-display font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-lg transform rotate-2">
                Good Drivers Build Better Futures ✨
              </div>

              {/* Learner L Badge Graphic Overlay */}
              <div className="absolute top-4 left-4 bg-white border-2 border-red-600 text-red-600 font-extrabold text-2xl w-10 h-10 rounded-lg flex items-center justify-center shadow-lg">
                L
              </div>

              {/* Bottom Card Content Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="text-brand-400 font-bold text-xs uppercase tracking-wider">Official Training Fleet</div>
                  <div className="text-white font-display font-extrabold text-lg">{businessConfig.name} Certified Hatchbacks</div>
                  <div className="text-slate-400 text-xs mt-0.5">Air-conditioned • Dual Controls • Clean & Safe</div>
                </div>

                <div className="hidden sm:block text-right">
                  <div className="text-2xl font-extrabold text-white font-display">98%</div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Pass Rate</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
