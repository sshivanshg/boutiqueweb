
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
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 dark:bg-stone-900/95 backdrop-blur-md shadow-md py-2' : 'bg-gradient-to-b from-stone-900/60 to-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 items-center h-28 md:h-40">

        {/* Left: Navigation (Desktop) / Menu (Mobile) */}
        <div className="flex justify-start items-center">
          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-800 dark:text-white p-2 hover:bg-white/10 rounded-full transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[11px] tracking-widest uppercase hover:text-gold transition-colors font-semibold luxury-underline ${scrolled ? 'text-stone-600 dark:text-stone-300' : 'text-stone-200 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Center: Logo */}
        <div className="flex justify-center items-center">
          <a href="#home" className="group relative">
            <img
              src="/images/logo.png"
              alt="Desi Diva"
              className={`w-auto transition-all duration-500 ${scrolled ? 'h-24 md:h-32' : 'h-28 md:h-48 drop-shadow-lg'}`}
            />
          </a>
        </div>

        {/* Right: Actions */}
        <div className="flex justify-end items-center space-x-4 md:space-x-6">

          {/* Desktop Nav Continued (Balance) - Optional, or kept all left. Let's put remaining links here or keep actions? 
                Actually, simpler to keep all nav left or split. Let's keep minimal or maybe put 'Process/Gallery' here? 
                The prompt asked for "Left: Nav, Center: Logo, Right: Actions". Let's stick to that but maybe hide some links if space is tight?
                Let's put the rest of nav links here for balance on desktop? No, plan said Left: Nav. 
                Wait, standard center logo usually splits nav. 
                But prompt plan said: "Left: Navigation Links". 
                Okay, I'll put all visible nav links on the left for desktop, OR split them. 
                Splitting looks better with center logo. Let's do a split nav approach for best aesthetics? 
                Plan says "Left: Navigation Links". I will stick to the plan but maybe adds to "Right" if it looks empty?
                No, clean Actions on right is modern.
            */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 mr-4">
            {navLinks.slice(3).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[11px] tracking-widest uppercase hover:text-gold transition-colors font-semibold luxury-underline ${scrolled ? 'text-stone-600 dark:text-stone-300' : 'text-stone-200 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${scrolled ? 'text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800' : 'text-white hover:bg-white/10'}`}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a
            href="#appointment"
            className={`hidden md:inline-block px-6 py-2 border text-xs tracking-widest uppercase transition-all duration-300 rounded-sm font-bold ${scrolled ? 'border-gold text-gold hover:bg-gold hover:text-white' : 'border-white/50 text-white hover:bg-white hover:text-stone-900'}`}
          >
            Consult
          </a>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full h-screen bg-white/95 dark:bg-stone-900/95 backdrop-blur-xl md:hidden animate-in fade-in slide-in-from-top-4 duration-300 flex flex-col items-center justify-center -mt-2">
          <div className="flex flex-col space-y-8 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl tracking-[0.2em] uppercase text-stone-800 dark:text-stone-100 font-serif hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#appointment"
              onClick={() => setIsOpen(false)}
              className="mt-8 px-8 py-3 bg-gold text-white tracking-widest uppercase rounded-sm shadow-xl font-bold"
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
