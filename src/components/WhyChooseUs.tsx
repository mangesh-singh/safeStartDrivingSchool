import React from 'react';
import { Users, ShieldCheck, Calendar, TrendingUp } from 'lucide-react';
import { businessConfig } from '../config/business';

export const WhyChooseUs: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    instructors: <Users className="w-7 h-7 text-brand-500" />,
    safety: <ShieldCheck className="w-7 h-7 text-brand-500" />,
    flexibility: <Calendar className="w-7 h-7 text-brand-500" />,
    passrate: <TrendingUp className="w-7 h-7 text-brand-500" />,
  };

  return (
    <section id="why-us" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-md">
            Why Choose {businessConfig.name}?
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            We focus on safety, confidence, and real-world driving skills.
          </h2>
          <p className="text-slate-600 text-base">
            Learning to drive is an essential life skill. Our structured curriculum and friendly instructors ensure you become a calm, skilled, and responsible driver.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {businessConfig.highlights.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 border border-slate-100 p-6 rounded-2xl hover:shadow-xl hover:border-brand-200 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-5 group-hover:bg-brand-500 group-hover:text-slate-950 transition-colors">
                {iconMap[item.id] || <ShieldCheck className="w-7 h-7 text-brand-500" />}
              </div>

              <h3 className="font-display font-extrabold text-lg text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                {item.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics Bar */}
        <div className="mt-16 bg-slate-950 rounded-3xl p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-brand-500/10 rounded-full blur-2xl" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
            {businessConfig.stats.map((stat, idx) => (
              <div key={idx} className={`${idx !== 0 ? 'pt-6 lg:pt-0' : ''}`}>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-brand-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
