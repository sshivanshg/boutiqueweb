
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Process from './components/Process';
import Collections from './components/Collections';
import Lookbook from './components/Lookbook';
import AppointmentForm from './components/AppointmentForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Initial check for system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // setIsDarkMode(true); 
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen selection:bg-gold/30 selection:text-gold-dark transition-colors duration-500`}>
      <Header scrolled={scrolled} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <main className="w-full">
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="py-24 bg-white dark:bg-stone-900 transition-colors">
          <About />
        </section>

        <section id="collections" className="py-24 bg-[#FAF9F6] dark:bg-stone-950 transition-colors">
          <Collections />
        </section>

        <section id="process" className="py-24 bg-stone-50 dark:bg-stone-950 transition-colors">
          <Process />
        </section>

        <Lookbook />

        <section id="appointment" className="py-24 bg-[#FDF2F2] dark:bg-stone-950/50 transition-colors">
          <AppointmentForm />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
