import React, { useState } from 'react';
import { ZoomIn } from 'lucide-react';
import { galleryData, GalleryItem } from '../data/gallery';
import { Lightbox } from './Lightbox';
import { getGoogleDriveImageUrl } from '../utils/drive';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Training', 'Cars', 'Students', 'Sessions'];

  const filteredItems = selectedCategory === 'All'
    ? galleryData
    : galleryData.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-md">
              Training Gallery
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight mt-3">
              Photo Gallery
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Moments from our driving lessons, training vehicles, and proud students.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            <span className="text-xs text-slate-500 font-semibold">Categories:</span>
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-all ${
                    selectedCategory === cat
                      ? 'bg-slate-950 text-brand-400 shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer h-64 border border-slate-100"
            >
              <img
                src={getGoogleDriveImageUrl(item.imageUrl)}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />

              {/* Hover Dark Overlay with Zoom Icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <div className="flex justify-end">
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-400 bg-slate-900/80 px-2.5 py-1 rounded-md">
                    {item.category}
                  </span>
                  <h3 className="font-display font-extrabold text-white text-base mt-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-xs line-clamp-1 mt-0.5">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <Lightbox
        item={activeLightboxItem}
        items={filteredItems}
        onClose={() => setActiveLightboxItem(null)}
        onNavigate={(newItem) => setActiveLightboxItem(newItem)}
      />
    </section>
  );
};
