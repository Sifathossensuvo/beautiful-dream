import React from 'react';
import { motion } from 'framer-motion';
import { GiFlowerEmblem } from 'react-icons/gi';
import { FaHeart, FaCode, FaCrown } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-pink-50/60 to-pink-100/40 overflow-hidden px-4 sm:px-8 lg:px-12 border-t border-pink-200">
      
      {/* Background Floating Roses & Flowers in Blank Spaces */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div 
          animate={{ rotate: 360, y: [0, -10, 0] }} 
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }} 
          className="absolute top-10 left-10 sm:left-20 text-pink-400/20 text-7xl sm:text-8xl"
        >
          <GiFlowerEmblem />
        </motion.div>
        
        <motion.div 
          animate={{ rotate: -360, x: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 22, ease: 'linear' }} 
          className="absolute bottom-10 right-10 sm:right-20 text-rose-500/20 text-6xl sm:text-7xl"
        >
          <GiFlowerEmblem />
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        
        {/* Brand / Logo */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <GiFlowerEmblem className="text-pink-500 text-2xl animate-spin" style={{ animationDuration: '10s' }} />
          <h3 className="text-xl sm:text-2xl font-bold font-serif text-gray-900 tracking-tight">
            Era's <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600">Universe</span> 🌸
          </h3>
        </div>

        <p className="text-gray-600 text-xs sm:text-sm font-light max-w-md mx-auto mb-8">
          A legendary digital journey crafted with ambition, high-end design, and pure code.
        </p>

        {/* Divider Line */}
        <div className="w-24 h-0.5 bg-pink-200 mx-auto mb-8"></div>

        {/* Credits & Love Note */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm text-gray-500 font-light">
          <span className="flex items-center gap-1.5">
            Designed & Developed with <FaHeart className="text-pink-500 animate-pulse" /> by 
            <strong className="text-gray-800 font-semibold">Shuvo</strong>
          </span>
          <span className="hidden sm:inline text-pink-300">•</span>
          <span className="flex items-center gap-1 text-pink-600 font-medium">
            <FaCrown className="text-yellow-500 text-xs" /> Dedicated to Era
          </span>
        </div>

        <p className="text-[10px] text-gray-400 mt-4 tracking-widest uppercase">
          © {new Date().getFullYear()} Era's Universe. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;