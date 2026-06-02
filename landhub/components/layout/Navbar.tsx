import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { THEME } from '../../constants/theme';

interface NavbarProps {
  onScheduleVisit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onScheduleVisit }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Featured Plots', href: '#featured-plots' },
    { label: 'Site Highlights', href: '#site-highlights' },
    { label: 'About Us', href: '#about-us' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <motion.div 
            whileHover={{ rotate: 180 }}
            className={`w-10 h-10 rounded-full flex items-center justify-center font-display text-xl font-bold border-2 transition-colors ${isScrolled ? 'bg-[#1a3a34] text-white border-[#1a3a34]' : 'bg-white/10 text-white border-white/20'}`}
          >
            L
          </motion.div>
          <span className={`text-2xl font-display font-bold tracking-tight ${isScrolled ? 'text-[#1a3a34]' : 'text-white'}`}>LAND HUB</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className={`text-sm font-medium hover:text-[#c5a059] transition-colors relative group ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c5a059] transition-all group-hover:w-full"></span>
            </a>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onScheduleVisit}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${isScrolled ? 'bg-[#1a3a34] text-white' : 'bg-[#c5a059] text-white shadow-lg shadow-[#c5a059]/20'}`}
          >
            Schedule Site Visit
          </motion.button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(true)}>
          <Menu className={isScrolled ? 'text-[#1a3a34]' : 'text-white'} />
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-display font-bold text-[#1a3a34]">LAND HUB</span>
              <button onClick={() => setMobileMenuOpen(false)}><X className="text-[#1a3a34] w-8 h-8" /></button>
            </div>
            <div className="flex flex-col gap-8">
              {navItems.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  className="text-3xl font-display text-[#1a3a34] border-b border-gray-100 pb-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-8 flex flex-col gap-4">
                <button 
                  onClick={() => { setMobileMenuOpen(false); onScheduleVisit(); }}
                  className="w-full py-4 bg-[#1a3a34] text-white rounded-xl font-bold text-lg"
                >
                  Schedule Site Visit
                </button>
                <button className="w-full py-4 bg-[#25D366] text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2">
                  <MessageCircle size={24} /> WhatsApp Us
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
