import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Ruler, Calendar, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Plot } from '../../types';

interface PlotDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlot: Plot | null;
  onBookVisit: (plot: Plot) => void;
}

export const PlotDetailsModal: React.FC<PlotDetailsModalProps> = ({ isOpen, onClose, selectedPlot, onBookVisit }) => {
  return (
    <AnimatePresence>
      {isOpen && selectedPlot && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 overflow-y-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1a3a34]/95 backdrop-blur-xl"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="relative w-full max-w-5xl bg-white rounded-[3rem] overflow-hidden shadow-2xl my-auto"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 h-[400px] md:h-auto relative">
                <img src={selectedPlot.image} alt={selectedPlot.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10 text-white">
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#c5a059] mb-4 block">Premium Listing</span>
                  <h3 className="text-5xl font-bold tracking-tighter">{selectedPlot.title}</h3>
                </div>
                <button onClick={onClose} className="absolute top-10 right-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all z-50">
                  <X size={24} />
                </button>
              </div>
              
              <div className="md:w-1/2 p-12 md:p-20 overflow-y-auto max-h-[80vh]">
                <div className="flex flex-wrap gap-8 mb-12">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-[#c5a059]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Location</p>
                      <p className="text-sm font-bold text-[#1a3a34]">{selectedPlot.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-[#c5a059]">
                      <Ruler size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Size</p>
                      <p className="text-sm font-bold text-[#1a3a34]">{selectedPlot.size}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-[#1a3a34] mb-6">Description</h4>
                  <p className="text-gray-500 font-light leading-relaxed">
                    {selectedPlot.description}
                  </p>
                </div>

                <div className="mb-12">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-[#1a3a34] mb-6">Key Amenities</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedPlot.amenities.map(amenity => (
                      <div key={amenity} className="flex items-center gap-3">
                        <CheckCircle2 size={16} className="text-[#c5a059]" />
                        <span className="text-sm text-gray-600 font-light">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8 bg-gray-50 rounded-3xl mb-12">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-sm font-bold uppercase tracking-widest text-gray-400">RERA Registration</span>
                    <ShieldCheck size={20} className="text-[#c5a059]" />
                  </div>
                  <p className="text-sm font-bold text-[#1a3a34] break-all">{selectedPlot.reraNumber}</p>
                </div>

                <div className="flex flex-col gap-4">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onBookVisit(selectedPlot)}
                    className="w-full py-6 bg-[#1a3a34] text-white rounded-2xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-4 shadow-2xl shadow-[#1a3a34]/20"
                  >
                    Schedule Site Visit <ArrowRight size={18} />
                  </motion.button>
                  <button 
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
                      link.target = '_blank';
                      link.download = `${selectedPlot.title.replace(/\s+/g, '_')}_Brochure.pdf`;
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="w-full py-6 border-2 border-[#1a3a34] text-[#1a3a34] rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-[#1a3a34] hover:text-white transition-all"
                  >
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
