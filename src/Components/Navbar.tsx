
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-stone-900/95 backdrop-blur-sm py-3 shadow-xl' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <Logo className="h-10 w-10 md:h-12 md:w-12 group-hover:scale-110 transition-transform duration-300" />
            <span className={`text-xl font-bold tracking-widest uppercase ${isScrolled ? 'text-stone-50' : 'text-stone-50 md:text-stone-50'}`}>
              Carshi
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold uppercase tracking-widest transition-colors duration-300 ${isScrolled ? 'text-stone-300 hover:text-amber-500' : 'text-stone-100 hover:text-amber-400'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact-section"
              className="px-6 py-2 bg-amber-500 text-stone-900 font-bold uppercase tracking-widest text-xs rounded-none hover:bg-amber-400 transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="text-stone-100 p-2 hover:text-amber-500 transition-colors"
              aria-label="Open Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[60] bg-stone-950 transition-all duration-500 flex flex-col ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex justify-between items-center px-6 py-6 border-b border-stone-800">
          <div className="flex items-center gap-3">
            <Logo className="h-10 w-10" />
            <span className="text-xl font-bold tracking-widest uppercase text-stone-50">Carshi</span>
          </div>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="text-stone-400 p-2 hover:text-amber-500 transition-colors"
            aria-label="Close Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center gap-8 p-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="text-3xl font-black uppercase tracking-[0.2em] text-stone-300 hover:text-amber-500 transition-all transform hover:scale-110 italic"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact-section"
            onClick={handleLinkClick}
            className="mt-4 px-12 py-4 bg-amber-500 text-stone-900 font-bold uppercase tracking-widest text-sm rounded-none hover:bg-amber-400 transition-all"
          >
            Get In Touch
          </a>
        </div>

        <div className="p-10 text-center border-t border-stone-800">
          <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">© 2025 Carshi Fine Dining</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
