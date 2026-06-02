import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useMouseTilt } from '../../hooks/useMouseTilt';

const SiteHighlightImage = ({ src, alt }: { src: string, alt: string }) => {
  const { 
    ref, 
    handleMouseMove, 
    handleMouseLeave, 
    rotateX, 
    rotateY 
  } = useMouseTilt({ tiltRangeX: 10, tiltRangeY: 10 });

  return (
    <motion.div 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]"
    >
      <img src={src} className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-110" alt={alt} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a34]/60 to-transparent" />
    </motion.div>
  );
};

import { SectionHeading } from '../ui/SectionHeading';

export const SiteHighlights: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const highlights = [
    {
      title: "LUXURY INFRASTRUCTURE.",
      description: "Every layout is designed with premium infrastructure including wide asphalted roads, underground drainage, and modern street lighting.",
      points: ["9-24 Meter Wide Roads", "Underground Electricity", "STP & Rainwater Harvesting"],
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200",
      reverse: false
    },
    {
      title: "NATURE'S EMBRACE.",
      description: "Our developments prioritize green spaces, with landscaped gardens, parks, and tree-lined avenues that offer a serene living environment.",
      points: ["Landscaped Parks", "Children's Play Area", "Senior Citizen Park"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
      reverse: true
    }
  ];

  return (
    <section id="site-highlights" ref={containerRef} className="py-32 bg-[#1a3a34] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Unmatched Infrastructure"
          subtitle="Site Highlights"
          description="Every Land Hub development is crafted with meticulous attention to detail, ensuring a seamless blend of modern amenities and natural serenity."
          light
          centered
        />

        <div className="flex flex-col gap-48">
          {highlights.map((item, i) => (
            <div key={i} className={`flex flex-col ${item.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-24`}>
              <div className="md:w-1/2 relative group">
                <SiteHighlightImage src={item.image} alt={item.title} />
                <div className={`absolute ${item.reverse ? '-bottom-10 -right-10' : '-top-10 -left-10'} w-40 h-40 border border-[#c5a059]/20 rounded-full -z-10`} />
              </div>
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: item.reverse ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tighter">{item.title}</h3>
                  <p className="text-gray-400 mb-12 font-light leading-relaxed text-lg">
                    {item.description}
                  </p>
                  <div className="grid grid-cols-1 gap-6">
                    {item.points.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded-full bg-[#c5a059]/10 flex items-center justify-center text-[#c5a059] group-hover:bg-[#c5a059] group-hover:text-white transition-all">
                          <CheckCircle2 size={20} />
                        </div>
                        <span className="text-lg font-medium text-gray-200">{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
