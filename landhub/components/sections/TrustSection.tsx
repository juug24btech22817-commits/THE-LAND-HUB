import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Users, ShieldCheck, Clock } from 'lucide-react';
import { useMouseTilt } from '../../hooks/useMouseTilt';
import { Stat } from '../../types';

const StatCard: React.FC<{ stat: Stat, index: number }> = ({ stat, index }) => {
  const { 
    ref, 
    handleMouseMove, 
    handleMouseLeave, 
    rotateX, 
    rotateY 
  } = useMouseTilt({ tiltRangeX: 15, tiltRangeY: 15 });

  return (
    <motion.div 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className="relative group p-10 rounded-[2rem] hover:bg-[#f8f9fa] transition-all duration-500 cursor-default"
    >
      <div className="w-16 h-16 bg-[#f8f9fa] rounded-2xl flex items-center justify-center mb-8 text-[#1a3a34] group-hover:bg-[#1a3a34] group-hover:text-white transition-all duration-500 shadow-sm">
        {stat.icon}
      </div>
      <h4 className="text-5xl font-bold text-[#1a3a34] mb-4 tracking-tighter">{stat.value}</h4>
      <p className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.3em]">{stat.label}</p>
      
      <div className="absolute bottom-0 left-10 right-10 h-1 bg-[#c5a059] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
};

import { SectionHeading } from '../ui/SectionHeading';

export const TrustSection: React.FC = () => {
  const stats: Stat[] = [
    { label: "Acres Developed", value: "250+", icon: <Ruler className="w-6 h-6" /> },
    { label: "Families Served", value: "1,200+", icon: <Users className="w-6 h-6" /> },
    { label: "Clear Titles", value: "100%", icon: <ShieldCheck className="w-6 h-6" /> },
    { label: "Years Experience", value: "15+", icon: <Clock className="w-6 h-6" /> },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          title="Legacy of Excellence"
          subtitle="Why Trust Us"
          description="With over a decade of experience in transforming landscapes, we have built a reputation for transparency, quality, and timely delivery."
          centered
        />
        <div className="grid md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
