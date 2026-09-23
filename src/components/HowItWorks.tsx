import React from 'react';
import { PhoneCall, BookOpen, CalendarCheck, Car } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Contact Us",
      desc: "Call, WhatsApp, or send an online enquiry with your location & course preference.",
      icon: <PhoneCall className="w-6 h-6 text-brand-500" />
    },
    {
      num: "02",
      title: "Choose Your Course",
      desc: "Select from Beginner, Refresher, or Test Prep package according to your experience level.",
      icon: <BookOpen className="w-6 h-6 text-brand-500" />
    },
    {
      num: "03",
      title: "Schedule Your Lessons",
      desc: "Pick flexible morning, afternoon, or evening training time slots that fit your daily schedule.",
      icon: <CalendarCheck className="w-6 h-6 text-brand-500" />
    },
    {
      num: "04",
      title: "Start Driving",
      desc: "Get behind the wheel of dual-control cars with patient certified instructors & build confidence!",
      icon: <Car className="w-6 h-6 text-brand-500" />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-md">
            Simple 4-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            How It Works
          </h2>
          <p className="text-slate-600 text-base">
            From your first phone call to getting your official driving license — we make the process smooth and stress-free.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group">
              
              {/* Step Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-slate-950 transition-colors">
                  {step.icon}
                </div>
                <span className="font-display font-black text-2xl text-slate-300 group-hover:text-brand-500 transition-colors">
                  {step.num}
                </span>
              </div>

              <h3 className="font-display font-extrabold text-lg text-slate-900 mb-2">
                {step.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
