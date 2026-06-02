import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Plot } from '../../types';

interface ImageGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlot: Plot | null;
}

export const ImageGalleryModal: React.FC<ImageGalleryModalProps> = ({ isOpen, onClose, selectedPlot }) => {
  return (
    <AnimatePresence>
      {isOpen && selectedPlot && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-6 bg-black/95 backdrop-blur-xl">
          <button 
            onClick={onClose} 
            className="absolute top-10 right-10 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all z-50"
          >
            <X size={32} />
          </button>
          
          <div className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={selectedPlot.image} 
              alt={selectedPlot.title}
              className="w-full h-full object-cover"
            />
            
            <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
              <div className="text-white">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#c5a059] mb-4 block">Gallery View</span>
                <h3 className="text-5xl font-bold tracking-tighter">{selectedPlot.title}</h3>
                <p className="text-gray-400 font-light mt-4">{selectedPlot.location}</p>
              </div>
              
              <div className="flex gap-4">
                <button className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                  <ChevronLeft size={24} />
                </button>
                <button className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
