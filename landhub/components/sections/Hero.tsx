import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useMouseTilt } from '../../hooks/useMouseTilt';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const textY = useTransform(scrollY, [0, 500], [0, 100]);

  const { 
    ref: heroRef, 
    mousePos, 
    handleMouseMove, 
    handleMouseLeave, 
    tiltX, 
    tiltY 
  } = useMouseTilt();

  return (
    <section 
      id="home" 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#1a3a34]"
    >
      {/* Background with Parallax */}
      <motion.div style={{ y: y1, scale }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000" 
          alt="Premium Land" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Editorial Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        <motion.div
          style={{ 
            y: textY,
            rotateX: mousePos.y * -5,
            rotateY: mousePos.x * 5,
          }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-left text-white"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="h-px w-12 bg-[#c5a059]" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#c5a059]">
              Premium Plotted Developments
            </span>
          </motion.div>
          
          <h1 className="text-7xl md:text-9xl font-bold mb-8 leading-[0.9] tracking-tighter">
            LAND <br /> <span className="text-[#c5a059]">HUB.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-md font-light leading-relaxed">
            Specializing in luxury plotted developments and strategic land investments across Bengaluru & Kanakapura Road.
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const element = document.getElementById('featured-plots');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group flex items-center gap-4 px-10 py-5 bg-[#c5a059] text-white rounded-full font-bold text-sm uppercase tracking-widest shadow-2xl transition-all"
            >
              Explore Plots 
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight size={18} />
              </motion.div>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                // Simulate brochure download
                const link = document.createElement('a');
                link.href = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
                link.target = '_blank';
                link.download = 'LandHub_Brochure.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="px-10 py-5 border border-white/20 text-white rounded-full font-bold text-sm uppercase tracking-widest backdrop-blur-sm hover:bg-white hover:text-[#1a3a34] transition-all"
            >
              Brochure
            </motion.button>
          </div>
        </motion.div>

        {/* Floating Visual Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          style={{ rotateX: tiltX, rotateY: tiltY, perspective: 1000 }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:block relative perspective-container"
        >
          <div className="relative aspect-[4/5] w-full max-w-sm mx-auto rounded-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1593510987046-1f8fcfc512a0?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover"
              alt="Luxury Living"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a34]/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#c5a059] mb-2 block">Featured Project</span>
              <h3 className="text-2xl font-bold">Royal Emerald Estates</h3>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-32 h-32 bg-[#c5a059]/20 rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#1a3a34]/40 rounded-full blur-3xl" 
          />
        </motion.div>
      </div>

      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-4"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-50">Scroll to Discover</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
};
