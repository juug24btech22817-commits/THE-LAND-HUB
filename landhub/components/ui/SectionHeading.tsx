import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  description, 
  centered = false,
  light = false
}) => {
  return (
    <div className={`mb-20 ${centered ? 'text-center mx-auto max-w-3xl' : ''}`}>
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`text-xs font-bold uppercase tracking-[0.4em] mb-6 block ${light ? 'text-[#c5a059]' : 'text-[#c5a059]'}`}
      >
        {subtitle}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-5xl md:text-7xl font-bold tracking-tighter mb-8 ${light ? 'text-white' : 'text-[#1a3a34]'}`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`text-xl font-light leading-relaxed ${light ? 'text-gray-400' : 'text-gray-500'}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
