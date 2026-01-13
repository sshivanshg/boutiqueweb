
import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Ananya Sharma",
    occasion: "Bridal Wear",
    quote: "Sonia created exactly what I had envisioned for my wedding. The attention to detail on the embroidery was breathtaking. I felt like a queen."
  },
  {
    name: "Priya Malhotra",
    occasion: "Saree Styling",
    quote: "I came with a vintage saree of my mother's, and Sonia transformed it into a modern masterpiece. Her design sensibility is unmatched."
  },
  {
    name: "Riya Kapoor",
    occasion: "Fusion Wear",
    quote: "Desi Diva is my go-to for all my festive needs. The custom fit is so perfect that I've stopped buying off-the-rack completely."
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 flex flex-col justify-center">
          <span className="text-[#D4AF37] tracking-[0.3em] uppercase text-xs font-bold block mb-4">Voices of Grace</span>
          <h2 className="font-serif text-4xl text-stone-800 leading-tight mb-8">What Our Divas Say</h2>
          <p className="text-stone-500 font-light leading-relaxed">
            Our greatest reward is the smile on our clients' faces. Read about their experiences with our custom design journey.
          </p>
        </div>
        
        <div className="lg:col-span-2 grid md:grid-cols-1 gap-8">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-[#FAF9F6] p-10 rounded-sm shadow-sm border-t-2 border-[#D4AF37]/20 relative group hover:shadow-xl transition-all duration-300">
                <Quote className="text-[#D4AF37]/10 absolute top-4 right-4 w-12 h-12" />
                <p className="text-stone-600 font-light italic mb-8 relative z-10">"{t.quote}"</p>
                <div>
                  <h4 className="font-serif text-xl text-stone-800">{t.name}</h4>
                  <p className="text-[#D4AF37] text-[10px] tracking-widest uppercase mt-1">{t.occasion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
