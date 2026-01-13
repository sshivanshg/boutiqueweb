
import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

interface Category {
  title: string;
  image: string;
  tagline: string;
  details: string;
}

const collectionCategories: Category[] = [
  {
    title: "Bridal Wear",
    image: "https://images.unsplash.com/photo-1594144408221-5079815797f1?auto=format&fit=crop&q=80&w=1000",
    tagline: "The Wedding Dream",
    details: "Our bridal collections feature bespoke lehengas and shararas, intricately hand-embroidered with zardosi and sequins. Each piece is custom-tailored to the bride's story."
  },
  {
    title: "Festive Glamour",
    image: "https://images.unsplash.com/photo-1610030469614-f584e03d366a?auto=format&fit=crop&q=80&w=1000",
    tagline: "Celebrate in Style",
    details: "Elegant anarkalis and fusion drapes designed for the vibrant festivities of the subcontinent. Lightweight yet luxurious fabrics for effortless grace."
  },
  {
    title: "Custom Blouses",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=1000",
    tagline: "Intricate Artistry",
    details: "The centerpiece of saree styling. From backless wonders to structured masterpieces, our custom blouses are designed to complement your silhouette."
  },
  {
    title: "Indo-Western",
    image: "https://images.unsplash.com/photo-1591129841117-3adfd313e34f?auto=format&fit=crop&q=80&w=1000",
    tagline: "Modern Fusion",
    details: "A blend of traditional textiles and modern silhouettes. Think cape-style jackets, cigarette pants with drapes, and structured luxury for the global diva."
  }
];

const Collections: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
        <div>
          <span className="text-gold tracking-[0.3em] uppercase text-xs font-bold block mb-4">Curated Styles</span>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-800 dark:text-white transition-colors">Our Signature Collections</h2>
        </div>
        <a href="#gallery" className="text-gold text-sm tracking-widest uppercase border-b-2 border-gold/20 hover:border-gold transition-all pb-1 font-semibold">
          View Lookbook
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {collectionCategories.map((item, idx) => (
          <div 
            key={idx} 
            onClick={() => setSelectedCategory(item)}
            className="group relative cursor-pointer overflow-hidden rounded-sm shadow-xl aspect-[3/4]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-gold text-[10px] tracking-[0.4em] uppercase mb-2 block font-bold">{item.tagline}</span>
              <h3 className="font-serif text-2xl mb-4">{item.title}</h3>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[10px] tracking-widest uppercase flex items-center space-x-2">
                  <span>Explore Details</span>
                  <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedCategory && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-900/90 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white dark:bg-stone-900 w-full max-w-4xl rounded-sm overflow-hidden flex flex-col md:flex-row relative shadow-2xl">
            <button 
              onClick={() => setSelectedCategory(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/40 dark:hover:bg-stone-800 transition-colors rounded-full text-white md:text-stone-800 dark:md:text-white"
            >
              <X size={24} />
            </button>
            <div className="md:w-1/2 aspect-square md:aspect-auto">
              <img src={selectedCategory.image} className="w-full h-full object-cover" alt={selectedCategory.title} />
            </div>
            <div className="md:w-1/2 p-12 flex flex-col justify-center">
              <span className="text-gold tracking-[0.3em] uppercase text-xs font-bold block mb-4">{selectedCategory.tagline}</span>
              <h3 className="font-serif text-4xl text-stone-800 dark:text-white mb-6">{selectedCategory.title}</h3>
              <p className="text-stone-500 dark:text-stone-400 font-light leading-relaxed mb-8">
                {selectedCategory.details}
              </p>
              <a 
                href="#appointment" 
                onClick={() => setSelectedCategory(null)}
                className="inline-block py-4 px-8 bg-stone-900 dark:bg-gold text-white tracking-widest uppercase text-xs text-center transition-colors hover:bg-gold dark:hover:bg-gold-dark"
              >
                Inquire for Custom Order
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Collections;
