import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a3a34] text-white py-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-24 mb-32">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-12">
              <div className="w-12 h-12 rounded-full bg-[#c5a059] flex items-center justify-center font-display text-2xl font-bold text-white">L</div>
              <span className="text-3xl font-display font-bold tracking-tight">LAND HUB</span>
            </div>
            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-md mb-12">
              Building the future of plotted developments in Bengaluru. Trust, transparency, and excellence in every acre.
            </p>
            <div className="flex gap-6">
              {['Instagram', 'Facebook', 'LinkedIn', 'Twitter'].map(social => (
                <motion.a 
                  key={social}
                  whileHover={{ y: -5, color: '#c5a059' }}
                  href="#" 
                  className="text-sm font-bold uppercase tracking-widest text-gray-500 transition-colors"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#c5a059] mb-10">Quick Links</h4>
            <div className="flex flex-col gap-6">
              {['Home', 'Featured Plots', 'Site Highlights', 'About Us', 'Contact'].map(link => (
                <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition-colors font-light">
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#c5a059] mb-10">Contact Us</h4>
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4 text-gray-400">
                <Phone size={18} className="text-[#c5a059]" />
                <span className="font-light">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <Mail size={18} className="text-[#c5a059]" />
                <span className="font-light">hello@landhub.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <MapPin size={18} className="text-[#c5a059]" />
                <span className="font-light text-sm">Kanakapura Road, Bengaluru</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
            © 2026 Land Hub Developments. All Rights Reserved.
          </p>
          <div className="flex gap-12">
            <a href="#" className="text-gray-500 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Background Text */}
      <div className="absolute -bottom-20 -right-20 text-[20vw] font-bold text-white/[0.02] leading-none pointer-events-none select-none tracking-tighter">
        LANDHUB
      </div>
    </footer>
  );
};
