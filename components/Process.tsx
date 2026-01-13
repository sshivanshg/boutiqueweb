
import React from 'react';
import { MessageSquare, Scissors, PenTool, Ruler, Heart } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Consultation",
    description: "A personal meeting to understand your vision, occasion, and style preferences."
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "Sketching",
    description: "Bringing your dreams to paper with detailed hand-drawn design illustrations."
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Fabric Selection",
    description: "Curating the finest silks, linens, and hand-embroidered textiles for your piece."
  },
  {
    icon: <Scissors className="w-6 h-6" />,
    title: "Tailoring",
    description: "Expert craftsmanship where our artisans meticulously stitch your garment."
  },
  {
    icon: <Ruler className="w-6 h-6" />,
    title: "Fitting & Delivery",
    description: "Final adjustments to ensure perfection before your outfit is elegantly delivered.",
    id: "05"
  }
];

const Process: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] mb-4 font-bold">Handcrafted Journey</p>
        <h2 className="text-4xl md:text-5xl font-serif text-stone-800 dark:text-stone-100 mb-6">The Bespoke Experience</h2>
        <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-5 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center group">
            <div className="relative mb-6">
              <div className="w-16 h-16 rounded-full border border-stone-200 dark:border-stone-700 flex items-center justify-center bg-white dark:bg-stone-800 text-[#D4AF37] transition-all duration-500 group-hover:bg-[#D4AF37] group-hover:text-white group-hover:scale-110 shadow-lg">
                {step.icon}
              </div>
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-stone-100 dark:bg-stone-700 border border-stone-200 dark:border-stone-600 flex items-center justify-center text-[10px] font-bold text-stone-500 dark:text-stone-300">
                {step.id}
              </div>
            </div>
            <h3 className="text-lg font-serif text-stone-800 dark:text-stone-100 mb-3">{step.title}</h3>
            <p className="text-sm text-stone-500 dark:text-stone-400 font-light leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
