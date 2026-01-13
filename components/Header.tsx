
import React from 'react';
import { Menu, X, Instagram, Phone, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ scrolled, isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Collections', href: '#collections' },
    { name: 'Process', href: '#process' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 dark:bg-stone-900/90 backdrop-blur-md py-4 shadow-md' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#home" className="group">
            <h1 className={`font-serif text-2xl md:text-3xl tracking-widest transition-colors duration-300 ${scrolled ? 'text-stone-800 dark:text-white' : 'text-stone-800 dark:text-white'}`}>
              DESI DIVA
            </h1>
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-medium opacity-80 group-hover:opacity-100 transition-opacity">
              By Sonia Gupta
            </p>
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] tracking-widest uppercase text-stone-600 dark:text-stone-300 hover:text-gold transition-colors font-semibold luxury-underline"
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={toggleTheme}
            className="p-2 text-stone-600 dark:text-stone-300 hover:text-gold transition-colors"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a
            href="#appointment"
            className="px-6 py-2 border border-gold text-gold text-xs tracking-widest uppercase hover:bg-gold hover:text-white transition-all duration-300 rounded-sm font-bold"
          >
            Consult
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleTheme} className="text-stone-800 dark:text-white p-1">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-stone-800 dark:text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-stone-900 shadow-2xl md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col p-8 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg tracking-widest uppercase text-stone-600 dark:text-stone-300 hover:text-gold"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#appointment"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-4 bg-gold text-white tracking-widest uppercase rounded-sm shadow-md font-bold"
            >
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
