import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../data/gallery';
import { getGoogleDriveImageUrl } from '../utils/drive';

interface LightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (newItem: GalleryItem) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ item, items, onClose, onNavigate }) => {
  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onNavigate(items[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    onNavigate(items[nextIndex]);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-slate-800/80 text-white hover:bg-brand-500 hover:text-slate-950 transition-colors"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Main image container */}
      <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
        <img
          src={getGoogleDriveImageUrl(item.imageUrl)}
          alt={item.title}
          className="max-h-[70vh] w-auto object-contain rounded-2xl shadow-2xl border border-slate-800"
        />
        <div className="mt-4 text-center space-y-1">
          <h4 className="text-lg font-display font-extrabold text-white">{item.title}</h4>
          <p className="text-sm text-slate-400">{item.caption}</p>
        </div>
      </div>

      {/* Next button */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-slate-800/80 text-white hover:bg-brand-500 hover:text-slate-950 transition-colors"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

    </div>
  );
};
