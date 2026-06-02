import React from 'react';
import { motion } from 'framer-motion';
import { useMouseTilt } from '../../hooks/useMouseTilt';

import { SectionHeading } from '../ui/SectionHeading';

export const About: React.FC = () => {
  const { 
    ref, 
    handleMouseMove, 
    handleMouseLeave, 
    rotateX, 
    rotateY 
  } = useMouseTilt({ tiltRangeX: 10, tiltRangeY: 10 });

  return (
    <section id="about-us" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-24 items-center">
          <div className="md:w-1/2 relative" ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              style={{ rotateX, rotateY, perspective: 1000 }}
              className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]"
            >
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200" alt="Founder" className="w-full h-[700px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a34]/40 to-transparent" />
            </motion.div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#c5a059]/10 rounded-full blur-3xl -z-10" />
          </div>
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <SectionHeading 
                title="Crafting Sustainable Living Spaces"
                subtitle="Our Legacy"
              />
              <p className="text-xl text-gray-500 font-light leading-relaxed mb-12">
                At Land Hub, we believe that every piece of land holds the potential for a legacy. With over 15 years of experience in the Bengaluru real estate market, we specialize in identifying high-growth corridors and developing premium plotted communities that stand the test of time.
              </p>
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-[#1a3a34] mb-4">Our Vision</h4>
                  <p className="text-gray-400 font-light leading-relaxed">To be the most trusted partner in land investment, delivering unmatched value and quality infrastructure.</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-[#1a3a34] mb-4">Our Mission</h4>
                  <p className="text-gray-400 font-light leading-relaxed">To simplify land ownership through transparency, legal integrity, and world-class development standards.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
