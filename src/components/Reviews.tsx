import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { reviewsData } from '../data/reviews';
import { businessConfig } from '../config/business';
import { VideoTestimonials } from './VideoTestimonials';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-100 px-3 py-1 rounded-md">
            Student Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            What Our Students Say
          </h2>
          <p className="text-slate-600 text-base">
            Read real reviews from learners who passed their driving tests with {businessConfig.name}.
          </p>
        </div>

        {/* 2-Column Split: Written Reviews on Left + Video Reviews on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Written Reviews Grid */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display font-extrabold text-2xl text-slate-900 flex items-center">
                <MessageSquareQuote className="w-6 h-6 mr-2 text-brand-500" />
                Written Testimonials
              </h3>
              <div className="flex items-center space-x-1 bg-amber-50 text-amber-800 text-xs font-bold px-3 py-1 rounded-full border border-amber-200">
                <span>4.9 / 5.0 Rating</span>
              </div>
            </div>

            <div className="space-y-4">
              {reviewsData.map((rev) => (
                <div
                  key={rev.id}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={rev.avatar}
                        alt={rev.name}
                        className="w-11 h-11 rounded-full object-cover border border-slate-200"
                      />
                      <div>
                        <h4 className="font-display font-extrabold text-slate-900 text-base leading-tight">
                          {rev.name}
                        </h4>
                        <span className="text-xs text-brand-600 font-semibold">{rev.course}</span>
                      </div>
                    </div>

                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-slate-700 text-sm italic leading-relaxed">
                    "{rev.text}"
                  </p>

                  <div className="text-[11px] text-slate-400 font-medium">
                    Verified Learner • {rev.date}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Reviews Column */}
          <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <VideoTestimonials />
          </div>

        </div>

      </div>
    </section>
  );
};
