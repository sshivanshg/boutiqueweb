
import React from 'react';
import { Instagram, Facebook, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-4 flex flex-col items-center mb-12">
            <img src="/images/logo.png" alt="Desi Diva" className="h-40 w-auto mb-6 opacity-90" />
            <p className="text-stone-400 font-light max-w-lg text-center leading-relaxed">
              Crafting timeless elegance for the modern woman. Every outfit is a masterpiece of tradition and luxury, designed exclusively for you by Sonia Gupta.
            </p>
            <div className="flex space-x-6 mt-8">
              <a href="https://instagram.com/desidivaboutique" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors"><Instagram size={24} /></a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors"><Facebook size={24} /></a>
              <a href="https://wa.me/918840972081" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors"><MessageCircle size={24} /></a>
            </div>
          </div>

          <div className="md:col-start-2 md:col-span-1">
            <h4 className="text-xs tracking-[0.3em] uppercase font-bold text-[#D4AF37] mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm text-stone-400 font-light">
              <li><a href="#about" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#collections" className="hover:text-white transition-colors">Collections</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Lookbook</a></li>
              <li><a href="#appointment" className="hover:text-white transition-colors">Book Consultation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="md:col-start-3 md:col-span-1">
            <h4 className="text-xs tracking-[0.3em] uppercase font-bold text-[#D4AF37] mb-8">Visit Us</h4>
            <ul className="space-y-6 text-sm text-stone-400 font-light">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#D4AF37] mt-0.5 shrink-0" />
                <a
                  href="https://maps.app.goo.gl/oHVCXeoWwnRr8JCaA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  825 1, near Allahabad Bank Chauraha,<br />Civil Lines, Jhansi, UP 284001
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-[#D4AF37] shrink-0" />
                <a href="tel:+918840972081" className="hover:text-white transition-colors">+91 88409 72081</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-[#D4AF37] shrink-0" />
                <a href="mailto:sonia@desidivaboutique.com" className="hover:text-white transition-colors">sonia@desidivaboutique.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-stone-500 font-light tracking-wider">
            © {new Date().getFullYear()} Desi Diva Boutique by Sonia Gupta. All rights reserved.
          </p>
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#D4AF37]">
            Designed for the Diva in You
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
