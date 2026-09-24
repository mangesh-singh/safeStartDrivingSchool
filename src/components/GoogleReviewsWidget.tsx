import React, { useEffect } from 'react';
import { businessConfig } from '../config/business';
import { ExternalLink } from 'lucide-react';

interface GoogleReviewsWidgetProps {
  widgetId?: string; // Elfsight or widget app ID (e.g. "1a2b3c4d-...")
}

export const GoogleReviewsWidget: React.FC<GoogleReviewsWidgetProps> = ({ widgetId }) => {
  useEffect(() => {
    if (widgetId) {
      const scriptId = 'elfsight-platform-script';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://elfsightcdn.com/platform.js';
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [widgetId]);

  if (widgetId) {
    return (
      <div className="w-full my-4">
        <div className={`elfsight-app-${widgetId}`} data-elfsight-app-lazy></div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
            G
          </div>
          <div>
            <h4 className="font-display font-extrabold text-slate-900 text-base">
              {businessConfig.fullName}
            </h4>
            <div className="flex items-center space-x-1.5 text-xs text-slate-500 mt-0.5">
              <span className="font-bold text-amber-600">4.9 ★★★★★</span>
              <span>• Google Business Profile</span>
            </div>
          </div>
        </div>

        <a
          href={businessConfig.googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-brand-500 hover:bg-brand-600 text-slate-950 font-extrabold text-xs px-4 py-2.5 rounded-xl shadow-sm transition-all"
        >
          <span>Write a Google Review</span>
          <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
        </a>
      </div>

      <div className="text-xs text-slate-500 flex items-center justify-between pt-1">
        <span>To display live automated Google reviews, paste your widget ID in config.</span>
        <a
          href={businessConfig.googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-600 font-bold hover:underline"
        >
          View all reviews on Google Maps →
        </a>
      </div>
    </div>
  );
};
