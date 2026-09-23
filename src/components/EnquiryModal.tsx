import React, { useState } from 'react';
import { X, Send, MessageSquare, CheckCircle, Shield } from 'lucide-react';
import { businessConfig } from '../config/business';
import { coursesData } from '../data/courses';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCourse?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedCourse = 'Beginner Lessons',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState(preselectedCourse);
  const [preferredTime, setPreferredTime] = useState('Morning (7 AM - 10 AM)');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const buildWhatsAppMessage = () => {
    return encodeURIComponent(
      `Hi ${businessConfig.fullName},\nI would like to enquire about driving lessons.\n\n👤 Name: ${name || 'Learner'}\n📱 Phone: ${phone || 'Not provided'}\n🚗 Course: ${course}\n⏰ Preferred Time: ${preferredTime}${notes ? `\n📝 Note: ${notes}` : ''}`
    );
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitted(true);

    // Automatically open WhatsApp directly with all form details
    const text = buildWhatsAppMessage();
    window.open(`https://wa.me/${businessConfig.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleWhatsAppClick = () => {
    const text = buildWhatsAppMessage();
    window.open(`https://wa.me/${businessConfig.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
        
        {/* Header Bar */}
        <div className="bg-slate-950 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-xs font-bold uppercase tracking-wider text-brand-400">Quick Enquiry</span>
          <h3 className="text-2xl font-display font-extrabold text-white mt-1">Book Driving Lessons</h3>
          <p className="text-xs text-slate-300 mt-1">
            Fill out the form below or talk directly to our head instructor on WhatsApp ({businessConfig.phoneDisplay}).
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-display font-extrabold text-slate-900">Enquiry Sent to WhatsApp!</h4>
              <p className="text-slate-600 text-sm max-w-xs mx-auto">
                Thank you, <strong>{name}</strong>! Your message has opened in WhatsApp for <strong>{businessConfig.phoneDisplay}</strong>. We will respond right away!
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="bg-slate-900 text-white font-bold text-sm px-6 py-2.5 rounded-xl hover:bg-slate-800 transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Mobile / WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 7669595777"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm text-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Select Course
                  </label>
                  <select
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-xs font-semibold text-slate-900 bg-white"
                  >
                    {coursesData.map((c) => (
                      <option key={c.id} value={c.title}>
                        {c.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-xs font-semibold text-slate-900 bg-white"
                  >
                    <option value="Morning (7 AM - 10 AM)">Morning (7–10 AM)</option>
                    <option value="Afternoon (11 AM - 3 PM)">Afternoon (11 AM–3 PM)</option>
                    <option value="Evening (4 PM - 7 PM)">Evening (4–7 PM)</option>
                    <option value="Weekend Special">Weekend Special</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Optional Message / Pickup Location
                </label>
                <textarea
                  rows={2}
                  placeholder="Any specific area in Rudrapur..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm text-slate-900 resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-brand-500 hover:bg-brand-600 text-slate-950 font-extrabold text-sm py-3 rounded-xl shadow-md transition-all flex items-center justify-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit & WhatsApp Us
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="flex-1 bg-whatsapp-500 hover:bg-whatsapp-600 text-white font-extrabold text-sm py-3 rounded-xl shadow-md transition-all flex items-center justify-center"
                >
                  <MessageSquare className="w-4 h-4 mr-2 fill-current" />
                  Direct WhatsApp Chat
                </button>
              </div>

              <div className="flex items-center justify-center space-x-1 text-[11px] text-slate-400 pt-1">
                <Shield className="w-3 h-3 text-emerald-600" />
                <span>Sends directly to {businessConfig.phoneDisplay} on WhatsApp</span>
              </div>

            </form>
          )}
        </div>

      </div>

    </div>
  );
};
