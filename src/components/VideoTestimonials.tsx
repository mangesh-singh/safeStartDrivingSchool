import React, { useState } from 'react';
import { Play, X, Video } from 'lucide-react';
import { videoTestimonialsData, VideoTestimonial } from '../data/reviews';
import { getGoogleDriveImageUrl, getGoogleDriveVideoPreviewUrl } from '../utils/drive';

export const VideoTestimonials: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoTestimonial | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-display font-extrabold text-2xl text-slate-900 flex items-center">
          <Video className="w-6 h-6 mr-2 text-brand-500" />
          Video Reviews
        </h3>
        <span className="text-xs text-slate-500 font-semibold">Hear from our learners</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {videoTestimonialsData.map((vid) => (
          <div
            key={vid.id}
            onClick={() => setActiveVideo(vid)}
            className="group relative rounded-2xl overflow-hidden bg-slate-950 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-800"
          >
            {/* Thumbnail */}
            <div className="relative h-44 overflow-hidden bg-slate-900">
              {vid.thumbnail.endsWith('.mp4') || vid.thumbnail.endsWith('.webm') || vid.thumbnail.endsWith('.mov') ? (
                <video
                  src={`${vid.thumbnail}#t=0.5`}
                  preload="metadata"
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-90 pointer-events-none"
                />
              ) : (
                <img
                  src={getGoogleDriveImageUrl(vid.thumbnail)}
                  alt={vid.studentName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-90"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-brand-500 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 fill-current translate-x-0.5" />
                </div>
              </div>

              {/* Duration badge */}
              <div className="absolute bottom-3 right-3 bg-slate-950/90 text-white text-[11px] font-bold px-2 py-0.5 rounded">
                {vid.duration}
              </div>
            </div>

            {/* Video description footer */}
            <div className="p-3.5 bg-slate-950 text-white">
              <div className="font-display font-extrabold text-sm text-brand-400">
                {vid.studentName}
              </div>
              <div className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                {vid.title}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
              <div>
                <h4 className="font-display font-extrabold text-white text-base">{activeVideo.studentName}</h4>
                <p className="text-xs text-slate-400">{activeVideo.title}</p>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="p-2 rounded-full bg-slate-800 text-white hover:bg-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video w-full bg-black">
              {activeVideo.embedUrl.endsWith('.mp4') || activeVideo.embedUrl.endsWith('.webm') || activeVideo.embedUrl.startsWith('/videos/') ? (
                <video
                  src={activeVideo.embedUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              ) : (
                <iframe
                  src={getGoogleDriveVideoPreviewUrl(activeVideo.embedUrl)}
                  title={activeVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
