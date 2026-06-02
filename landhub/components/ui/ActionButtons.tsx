import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';

interface FloatingActionButtonProps {
  onScheduleVisit: () => void;
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onScheduleVisit }) => {
  return (
    <div className="fixed bottom-10 right-10 z-40 hidden md:flex flex-col gap-4">
      <motion.button 
        whileHover={{ scale: 1.1, x: -10 }}
        whileTap={{ scale: 0.9 }}
        onClick={onScheduleVisit}
        className="w-16 h-16 bg-[#c5a059] text-white rounded-full flex items-center justify-center shadow-2xl shadow-[#c5a059]/40 group relative"
      >
        <Phone size={24} />
        <span className="absolute right-20 bg-white text-[#1a3a34] px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
          Schedule Visit
        </span>
      </motion.button>
      <motion.button 
        whileHover={{ scale: 1.1, x: -10 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.open('https://wa.me/919900088777', '_blank')}
        className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 group relative"
      >
        <MessageCircle size={24} />
        <span className="absolute right-20 bg-white text-[#1a3a34] px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
          WhatsApp Us
        </span>
      </motion.button>
    </div>
  );
};

export const MobileStickyBar: React.FC<FloatingActionButtonProps> = ({ onScheduleVisit }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/90 backdrop-blur-xl border-t border-gray-100 p-4 flex gap-4">
      <button 
        onClick={onScheduleVisit}
        className="flex-1 py-4 bg-[#1a3a34] text-white rounded-2xl font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2"
      >
        <Phone size={18} /> Schedule Visit
      </button>
      <button 
        onClick={() => window.open('https://wa.me/919900088777', '_blank')}
        className="flex-1 py-4 bg-[#25D366] text-white rounded-2xl font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2"
      >
        <MessageCircle size={18} /> WhatsApp
      </button>
    </div>
  );
};
