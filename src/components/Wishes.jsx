import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GiFlowerEmblem, GiSparkles } from 'react-icons/gi';
import { FaHeart, FaCode, FaCrown, FaStar, FaFreeCodeCamp } from 'react-icons/fa';

// Assets import (তোমার assets ফোল্ডারের নাম অনুযায়ী পাথ ঠিক করে নিও)
import eraImg from '../assets/era.png';
import myImg from '../assets/shuvo.png';

const Wishes = () => {
  // Parallax hooks for smooth background motion
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotateBg = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section id="wishes" className="relative py-28 sm:py-36 bg-gradient-to-b from-white via-pink-100/50 to-white overflow-hidden px-4 sm:px-8 lg:px-12">
      
      {/* Background Floating Spinning Flowers & Glowing Rosettes in Blank Spaces */}
      <motion.div style={{ y: yParallax }} className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div 
          style={{ rotate: rotateBg }}
          className="absolute top-10 left-5 sm:left-20 text-pink-500/20 text-9xl sm:text-[14rem]"
        >
          <GiFlowerEmblem />
        </motion.div>

        <motion.div 
          animate={{ rotate: -360, scale: [1, 1.2, 1] }} 
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }} 
          className="absolute bottom-10 right-5 sm:right-20 text-rose-500/20 text-8xl sm:text-[12rem]"
        >
          <GiFlowerEmblem />
        </motion.div>

        {/* Glowing Orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-pink-300/30 rounded-full blur-3xl pointer-events-none"></div>
      </motion.div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        
        {/* Section Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-md border border-pink-300 text-pink-600 font-semibold text-xs uppercase tracking-widest mb-6 shadow-lg shadow-pink-500/10"
        >
          <GiSparkles className="text-pink-500 animate-spin" /> 
          <span>Special Dedication & Wishes</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-6xl font-extrabold text-gray-900 font-serif tracking-tight mb-6"
        >
          Made with Passion & <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600">Pure Code</span> 💢
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 text-base sm:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-16"
        >
          A magical digital universe crafted specially to wish Era, built from scratch with passion, dedication, and elite web engineering.
        </motion.p>

        {/* Dual Holographic Avatar Showcase */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-16 mb-16">
          
          {/* Era's Profile Frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
            
            <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-full p-2 bg-white shadow-2xl border-4 border-pink-200 overflow-hidden">
              <img 
                src={eraImg} 
                alt="Era" 
                className="w-full h-full object-cover rounded-full group-hover:scale-110 transition duration-500"
                onError={(e)=>{e.target.src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"}} // Fallback image incase local path is missing
              />
            </div>
            
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5 whitespace-nowrap">
              <FaCrown className="text-yellow-300" /> Era (The Dreamer 👑)
            </div>
          </motion.div>

          {/* Glowing Connecting Heart Icon */}
          <motion.div 
            animate={{ scale: [1, 1.25, 1] }} 
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white flex items-center justify-center text-2xl shadow-xl shadow-pink-500/40 z-10 my-4 md:my-0"
          >
           <FaFreeCodeCamp />
          </motion.div>

          {/* Developer's Profile Frame */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05, rotate: -1 }}
            className="relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
            
            <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-full p-2 bg-white shadow-2xl border-4 border-purple-200 overflow-hidden">
              <img 
                src={myImg} 
                alt="Developer" 
                className="w-full h-full object-cover rounded-full group-hover:scale-110 transition duration-500"
                onError={(e)=>{e.target.src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"}} // Fallback image
              />
            </div>

            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5 whitespace-nowrap">
              <FaCode /> The Developer 💻
            </div>
          </motion.div>

        </div>

        {/* Master Wish Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-gray-900 via-pink-950 to-gray-900 text-white rounded-[2.5rem] p-8 sm:p-14 shadow-2xl border border-pink-500/40 relative overflow-hidden text-left"
        >
          {/* Internal Glowing Flower Watermark */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
            className="absolute -right-10 -bottom-10 text-white/5 text-[15rem] pointer-events-none"
          >
            <GiFlowerEmblem />
          </motion.div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <span className="text-pink-400 font-mono text-xs uppercase tracking-widest bg-pink-900/40 px-4 py-1.5 rounded-full border border-pink-500/30 inline-block mb-6">
              ✨ Ultimate Wish & Code Masterclass ✨
            </span>

            <h3 className="text-2xl sm:text-4xl font-bold font-serif mb-6 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-200 to-pink-400">
              "To the Absolute Dreamer, Era — Wishing You an Unstoppable & Legendary Life Journey!"
            </h3>

            <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed mb-8">
            Hey Era! As your friend, I built this website from scratch as a special gift to celebrate your grand ambitions. May your path ahead be filled with limitless success and joy! 🚀✨
            </p>

            <div className="pt-6 border-t border-gray-800 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-pink-500 animate-ping"></span>
                <span className="text-pink-300 font-medium">Deployed with Infinite Love & Passion</span>
              </div>
              <span className="font-serif tracking-wider text-pink-400">Sifat Hossen Shuvo</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Wishes;