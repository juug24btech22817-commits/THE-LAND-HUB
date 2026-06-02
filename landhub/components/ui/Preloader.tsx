import React from 'react';
import { motion } from 'framer-motion';

export const Preloader: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[200] bg-[#1a3a34] flex flex-col items-center justify-center"
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <div className="w-20 h-20 rounded-full border-2 border-[#c5a059] flex items-center justify-center mb-6">
          <span className="text-4xl font-display font-bold text-white">L</span>
        </div>
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-display font-bold text-white tracking-[0.2em] uppercase"
        >
          Land Hub
        </motion.h2>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: 100 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="h-0.5 bg-[#c5a059] mt-4"
        />
      </motion.div>
    </motion.div>
  );
};
