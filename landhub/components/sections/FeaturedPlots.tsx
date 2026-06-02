import React from 'react';
import { motion } from 'framer-motion';
import { PlotCard } from '../ui/PlotCard';
import { PLOTS } from '../../constants/data';
import { Plot } from '../../types';

interface FeaturedPlotsProps {
  onBookVisit: (plot: Plot) => void;
  onViewImage: (plot: Plot) => void;
  onViewDetails: (plot: Plot) => void;
}

import { SectionHeading } from '../ui/SectionHeading';

export const FeaturedPlots: React.FC<FeaturedPlotsProps> = ({ onBookVisit, onViewImage, onViewDetails }) => {
  return (
    <section id="featured-plots" className="py-32 bg-[#fdfdfd] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Curated Developments"
          subtitle="Featured Plots"
          description="Explore our handpicked selection of premium plotted developments, each offering a unique blend of nature, luxury, and connectivity."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          {PLOTS.map((plot, i) => (
            <PlotCard 
              key={plot.id} 
              plot={plot} 
              index={i} 
              onBookVisit={onBookVisit}
              onViewImage={onViewImage}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
        
        <div className="mt-32 flex justify-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-6 border-2 border-[#1a3a34] text-[#1a3a34] rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#1a3a34] hover:text-white transition-all duration-500"
          >
            View All Developments
          </motion.button>
        </div>
      </div>
    </section>
  );
};
