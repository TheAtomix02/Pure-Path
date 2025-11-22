
import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onSearch?: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Qur'an Sufficient", href: "#sufficient" },
    { name: "Contradictions", href: "#contradictions" },
    { name: "FAQs", href: "#faq" },
    { name: "Resources", href: "#resources" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark-950/70 backdrop-blur-xl border-b border-white/5 py-4 shadow-2xl shadow-black/50'
          : 'bg-transparent border-b border-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Premium Logo */}
          <a href="#" className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-700 flex items-center justify-center shadow-lg shadow-gold-500/20 group-hover:shadow-gold-500/40 transition-all duration-500 border border-white/10">
              <span className="font-arabic text-2xl text-dark-950 pt-1">۞</span>
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-xl font-bold text-gold-100 tracking-wide group-hover:text-gold-400 transition-colors duration-300">
                THE PURE PATH
              </span>
              <span className="font-serif italic text-xs text-gray-400 group-hover:text-white transition-colors duration-300">
                Divine Clarity & Guidance
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-bold tracking-[0.15em] uppercase text-gray-400 hover:text-gold-400 transition-colors relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-400 transition-all duration-500 ease-out group-hover:w-full" />
                </a>
              ))}
            </nav>

            <div className="h-8 w-px bg-white/10 mx-4" />

            {/* Premium Search Bar */}
            <div className={`relative flex items-center transition-all duration-500 ${searchActive ? 'w-72' : 'w-12'}`}>
              {searchActive ? (
                <>
                  <input
                    type="text"
                    placeholder="Search the revelation..."
                    autoFocus
                    onBlur={() => setSearchActive(false)}
                    onChange={(e) => onSearch?.(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-4 pr-10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold-500/50 focus:bg-dark-800/80 transition-all duration-300 font-sans"
                  />
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-500 pointer-events-none" />
                </>
              ) : (
                <button 
                  onClick={() => setSearchActive(true)}
                  className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors group"
                >
                  <Search className="w-5 h-5 text-gray-400 group-hover:text-gold-400 transition-colors" />
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-gold-400 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-950/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-4 text-lg font-cinzel font-bold text-gray-300 hover:text-gold-400 hover:bg-white/5 rounded-lg border border-transparent hover:border-white/5 transition-all"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
