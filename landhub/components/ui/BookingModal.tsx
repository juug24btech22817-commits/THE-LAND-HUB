import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Phone, Mail, ArrowRight } from 'lucide-react';
import { Plot } from '../../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlot: Plot | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, selectedPlot }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#1a3a34]/90 backdrop-blur-xl"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <div className="p-12 md:p-20">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h3 className="text-4xl font-bold text-[#1a3a34] mb-4">Schedule Site Visit</h3>
                  <p className="text-gray-500 font-light">
                    {selectedPlot ? `Interested in ${selectedPlot.title}? Let's arrange a visit.` : "Choose a date and time that works for you."}
                  </p>
                </div>
                <button onClick={onClose} className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-[#1a3a34] hover:bg-[#1a3a34] hover:text-white transition-all">
                  <X size={24} />
                </button>
              </div>

              <form className="flex flex-col gap-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input type="text" className="w-full pl-16 pr-8 py-5 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#c5a059] transition-all" placeholder="John Doe" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input type="tel" className="w-full pl-16 pr-8 py-5 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#c5a059] transition-all" placeholder="+91 98765 43210" />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input type="email" className="w-full pl-16 pr-8 py-5 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#c5a059] transition-all" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">Preferred Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input type="date" className="w-full pl-16 pr-8 py-5 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#c5a059] transition-all" />
                    </div>
                  </div>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-6 bg-[#1a3a34] text-white rounded-2xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-4 shadow-2xl shadow-[#1a3a34]/20 mt-4"
                >
                  Confirm Site Visit <ArrowRight size={18} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
