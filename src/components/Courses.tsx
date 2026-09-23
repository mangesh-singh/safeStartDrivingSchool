import React from 'react';
import { Check, ArrowRight, Clock, Tag } from 'lucide-react';
import { coursesData, Course } from '../data/courses';

interface CoursesProps {
  onSelectCourse: (course: Course) => void;
}

export const Courses: React.FC<CoursesProps> = ({ onSelectCourse }) => {
  return (
    <section id="courses" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-100 px-3 py-1 rounded-md">
              Training Packages
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight mt-3">
              Our Driving Courses
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Choose a course that fits your goals and confidence level.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center text-sm font-bold text-brand-600 hover:text-brand-700 mt-4 sm:mt-0 transition-colors group"
          >
            Custom Lesson Packages
            <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 ${
                course.popular
                  ? 'border-brand-500 ring-2 ring-brand-500/20 shadow-md'
                  : 'border-slate-200 shadow-sm'
              }`}
            >
              <div>
                {/* Image Header with Badge */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={course.imageUrl}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {course.popular && (
                    <div className="absolute top-3 left-3 bg-brand-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full shadow-md">
                      ★ Most Popular
                    </div>
                  )}
                  {course.price && (
                    <div className="absolute bottom-3 right-3 bg-slate-950/90 backdrop-blur-md text-white font-display font-extrabold text-sm px-3 py-1 rounded-lg">
                      {course.price}
                    </div>
                  )}
                </div>

                {/* Course Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center text-xs font-semibold text-slate-500">
                    <Clock className="w-3.5 h-3.5 mr-1 text-brand-500" />
                    {course.duration}
                  </div>

                  <h3 className="text-xl font-display font-extrabold text-slate-900 leading-snug">
                    {course.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {course.shortDesc}
                  </p>

                  <div className="pt-2 border-t border-slate-100">
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center">
                      <Tag className="w-3 h-3 mr-1 text-brand-500" /> What's Included:
                    </div>
                    <ul className="space-y-1.5">
                      {course.features.slice(0, 4).map((feat, idx) => (
                        <li key={idx} className="flex items-start text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-brand-500 shrink-0 mr-1.5 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectCourse(course)}
                  className={`w-full py-2.5 px-4 rounded-xl font-extrabold text-sm transition-all shadow-sm ${
                    course.popular
                      ? 'bg-brand-500 hover:bg-brand-600 text-slate-950 shadow-brand-500/20'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  Enquire Now
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
