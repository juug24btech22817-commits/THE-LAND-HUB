import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { MapPin, Ruler, ArrowRight, Eye } from 'lucide-react';
import { Plot } from '../../types';
import { useMouseTilt } from '../../hooks/useMouseTilt';

interface PlotCardProps {
  plot: Plot;
  index: number;
  onBookVisit: (plot: Plot) => void;
  onViewImage: (plot: Plot) => void;
  onViewDetails: (plot: Plot) => void;
}

export const PlotCard: React.FC<PlotCardProps> = ({ plot, index, onBookVisit, onViewImage, onViewDetails }) => {
  const { 
    ref: cardRef, 
    handleMouseMove, 
    handleMouseLeave, 
    rotateX: rotateXMouse, 
    rotateY: rotateYMouse 
  } = useMouseTilt({ tiltRangeX: 20, tiltRangeY: 20 });

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const springScale = useSpring(scale, { stiffness: 100, damping: 20 });

  return (
    <motion.div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        y, 
        rotateX: rotateXMouse, 
        rotateY: rotateYMouse,
        scale: springScale,
        perspective: 1000
      }}
      className="group relative cursor-pointer"
      onClick={() => onViewDetails(plot)}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-2xl transition-shadow duration-500 group-hover:shadow-[#c5a059]/10">
        <motion.div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
        <img 
          src={plot.image} 
          alt={plot.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        <div className="absolute top-6 left-6 z-20">
          <span className="px-4 py-2 bg-white/90 backdrop-blur-md text-[#1a3a34] text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
            {plot.tag}
          </span>
        </div>

        <div className="absolute top-6 right-6 z-20 flex gap-2">
          <button 
            onClick={(e) => { e.stopPropagation(); onViewImage(plot); }}
            className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#1a3a34] hover:bg-[#c5a059] hover:text-white transition-all shadow-lg"
          >
            <Eye size={18} />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex items-center gap-2 mb-2 text-[#c5a059]">
            <MapPin size={14} />
            <span className="text-[10px] font-bold uppercase tracking-widest">{plot.location}</span>
          </div>
          <h3 className="text-2xl font-bold mb-4">{plot.title}</h3>
          
          <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <span className="text-[8px] uppercase tracking-widest opacity-60">Starting from</span>
                <span className="text-lg font-bold text-[#c5a059]">{plot.price}</span>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="flex flex-col">
                <span className="text-[8px] uppercase tracking-widest opacity-60">Dimensions</span>
                <span className="text-sm font-medium">{plot.size}</span>
              </div>
            </div>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); onBookVisit(plot); }}
              className="w-12 h-12 bg-[#c5a059] rounded-full flex items-center justify-center shadow-xl"
            >
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex flex-wrap gap-2">
        {plot.features.map(feature => (
          <span key={feature} className="text-[9px] font-bold uppercase tracking-widest text-gray-400 border border-gray-100 px-3 py-1 rounded-full">
            {feature}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
