
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 text-center">
      <div className="space-y-12">
        <div className="inline-block relative">
          <span className="text-gold tracking-[0.4em] uppercase text-xs font-bold block mb-4">The Visionary Story</span>
          <h2 className="font-serif text-4xl md:text-6xl text-stone-800 dark:text-white leading-tight">
            The Heart Behind <br /> <span className="italic text-gold">Desi Diva</span>
          </h2>
          <div className="w-24 h-px bg-gold/30 mx-auto mt-8"></div>
        </div>
        
        <div className="space-y-8 text-stone-600 dark:text-stone-400 leading-relaxed font-light text-lg md:text-xl max-w-2xl mx-auto">
          <p className="italic font-serif text-2xl text-stone-700 dark:text-stone-300">
            "Fashion is the most powerful art there is. It's movement, design, and architecture all in one."
          </p>
          <p>
            Desi Diva was founded with a simple yet profound vision: to make every woman feel like the ultimate diva. With over 15 years of experience in textile artistry and design, Sonia Gupta brings a personal touch to every bespoke creation.
          </p>
          <p>
            The journey began in the vibrant heritage markets of India, where Sonia fell in love with the intricate weaves and vibrant dyes. Today, her boutique in Jhansi is a sanctuary for those who seek individuality in a world of mass production.
          </p>
          <p>
            Every outfit at Desi Diva is a collaboration. From the initial consultation to the final fabric selection and fittings, Sonia personally oversees every detail to ensure that the silhouette doesn't just fit your body, but your personality too.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 pt-12 border-t border-stone-100 dark:border-stone-800 max-w-md mx-auto">
          <div>
            <h4 className="font-serif text-4xl text-stone-800 dark:text-white">15+</h4>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold mt-2 font-bold">Years of Craft</p>
          </div>
          <div>
            <h4 className="font-serif text-4xl text-stone-800 dark:text-white">2k+</h4>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold mt-2 font-bold">Happy Divas</p>
          </div>
        </div>
        
        <div className="pt-8">
           <p className="font-serif text-stone-400 italic">By Sonia Gupta</p>
        </div>
      </div>
    </div>
  );
};

export default About;
