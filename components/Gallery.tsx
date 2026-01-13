
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const galleryImages = [
  "/images/img-1.jpg",
  "/images/img-2.jpg",
  "/images/img-3.jpg",
  "/images/img-4.jpg",
  "/images/img-5.jpg",
  "/images/img-6.jpg",
];

const Gallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const nextImage = () => {
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
  };
  const prevImage = () => {
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl text-stone-800 dark:text-white mb-6">The Lookbook</h2>
        <p className="text-stone-500 dark:text-stone-400 font-light max-w-xl mx-auto italic">
          A glimpse into the intricate details, luxurious fabrics, and handcrafted elegance that define every Desi Diva creation.
        </p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {galleryImages.map((src, idx) => (
          <div
            key={idx}
            onClick={() => setLightboxIndex(idx)}
            className="relative group overflow-hidden rounded-sm shadow-md cursor-zoom-in"
          >
            <img
              src={src}
              alt={`Gallery Image ${idx + 1}`}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Maximize2 className="text-white w-8 h-8 opacity-60" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[110] bg-black/95 flex items-center justify-center p-4 animate-in fade-in zoom-in-95 duration-300">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors z-[120]"
          >
            <X size={32} />
          </button>

          <button onClick={prevImage} className="absolute left-4 md:left-8 text-white/40 hover:text-white transition-colors z-[120]">
            <ChevronLeft size={48} />
          </button>

          <div className="relative max-w-4xl max-h-[85vh] w-full flex items-center justify-center">
            <img
              src={galleryImages[lightboxIndex]}
              className="max-w-full max-h-[85vh] object-contain shadow-2xl border-4 border-stone-800"
              alt="Full Look"
            />
            <div className="absolute bottom-[-40px] left-0 w-full text-center text-white/60 text-xs tracking-[0.3em] uppercase">
              Item {lightboxIndex + 1} of {galleryImages.length}
            </div>
          </div>

          <button onClick={nextImage} className="absolute right-4 md:right-8 text-white/40 hover:text-white transition-colors z-[120]">
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
