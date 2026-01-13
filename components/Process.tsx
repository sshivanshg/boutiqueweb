
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
    description: "Final adjustments to ensure perfection before your outfit is elegantly delivered."
  }
];

const Process: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <span className="text-[#D4AF37] tracking-[0.3em] uppercase text-xs font-bold block mb-4">Handcrafted Journey</span>
        <h2 className="font-serif text-4xl md:text-5xl text-stone-800">The Bespoke Experience</h2>
        <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
      </div>

      <div className="relative">
        {/* Connection Line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-stone-100 -z-10 hidden lg:block"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-white border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shadow-lg group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-500 mb-6 relative">
                <span className="absolute -top-2 -left-2 w-6 h-6 bg-[#FAF9F6] text-stone-400 text-[10px] rounded-full border border-stone-100 flex items-center justify-center font-bold">
                  0{idx + 1}
                </span>
                {step.icon}
              </div>
              <h4 className="font-serif text-xl text-stone-800 mb-3">{step.title}</h4>
              <p className="text-sm text-stone-500 font-light leading-relaxed px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
