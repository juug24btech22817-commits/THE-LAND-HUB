import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from 'lucide-react';

import { SectionHeading } from '../ui/SectionHeading';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-[#fdfdfd] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-24">
          <div className="md:w-1/2">
            <SectionHeading 
              title="Let's Start Your Journey"
              subtitle="Contact Us"
              description="Whether you're looking for your dream home site or a strategic land investment, our team is here to guide you."
            />
            
            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-8 group cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center text-[#1a3a34] group-hover:bg-[#1a3a34] group-hover:text-white transition-all duration-500">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#c5a059] mb-1">Call Us</p>
                  <p className="text-2xl font-bold text-[#1a3a34]">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-center gap-8 group cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center text-[#1a3a34] group-hover:bg-[#1a3a34] group-hover:text-white transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#c5a059] mb-1">Email Us</p>
                  <p className="text-2xl font-bold text-[#1a3a34]">hello@landhub.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-8 group cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center text-[#1a3a34] group-hover:bg-[#1a3a34] group-hover:text-white transition-all duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#c5a059] mb-1">Visit Us</p>
                  <p className="text-2xl font-bold text-[#1a3a34]">Kanakapura Road, Bengaluru</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 md:p-20 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-50"
            >
              <h3 className="text-3xl font-bold text-[#1a3a34] mb-12">Send a Message</h3>
              <form className="flex flex-col gap-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">Full Name</label>
                    <input type="text" className="px-8 py-5 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#c5a059] transition-all" placeholder="John Doe" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">Email Address</label>
                    <input type="email" className="px-8 py-5 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#c5a059] transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">Phone Number</label>
                  <input type="tel" className="px-8 py-5 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#c5a059] transition-all" placeholder="+91 98765 43210" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">Your Message</label>
                  <textarea rows={4} className="px-8 py-5 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#c5a059] transition-all resize-none" placeholder="Tell us about your requirements..."></textarea>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-6 bg-[#1a3a34] text-white rounded-2xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-4 shadow-2xl shadow-[#1a3a34]/20"
                >
                  Send Inquiry <ArrowRight size={18} />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
