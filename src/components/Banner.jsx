import React from 'react';
import { motion } from 'framer-motion';
import { GiFlowerEmblem, GiRose, GiSparkles } from 'react-icons/gi';
import { FaCar, FaArrowRight, FaCrown } from 'react-icons/fa';

const Banner = () => {
  // Floating background flowers/elements generator array
  const floatingIcons = [
    { icon: <GiRose />, top: '15%', left: '10%', delay: 0 },
    { icon: <GiFlowerEmblem />, top: '75%', left: '15%', delay: 2 },
    { icon: <FaCar />, top: '25%', left: '85%', delay: 1 },
    { icon: <GiSparkles />, top: '70%', left: '80%', delay: 1.5 },
  ];

  return (
    <div id="home" className="relative min-h-screen bg-gradient-to-b from-pink-50/60 via-white to-pink-50/30 flex items-center justify-center overflow-hidden pt-24 px-6 lg:px-12">
      
      {/* Background Floating Animated Elements */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ y: 0, opacity: 0.4 }}
          animate={{ y: [-20, 20, -20], rotate: [0, 15, -15, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{
            repeat: Infinity,
            duration: 6 + index,
            delay: item.delay,
            ease: 'easeInOut',
          }}
          style={{ top: item.top, left: item.left }}
          className="absolute text-pink-300 text-4xl lg:text-5xl pointer-events-none z-0"
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-12">
        
        {/* Left Content: Text & Vision */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Badge */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100/80 border border-pink-200 text-pink-600 font-semibold text-xs tracking-wider uppercase mb-6 shadow-sm"
          >
            <FaCrown className="text-yellow-500 text-sm" />
            <span>The Visionary & Future Boss</span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight font-serif mb-6">
            Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 underline decoration-pink-300 decoration-wavy">Era</span> 🌸
          </h1>

          {/* Subtitle / Description */}
          <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed mb-8 max-w-2xl">
            A brilliantly talented soul with a heart full of respect for everyone. Dreaming big to become a world-class entrepreneur, while fueling her ultimate passion for high-speed luxury cars and blooming gardens. 
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4">
            <motion.a
              href="#entrepreneur"
              whileHover={{ scale: 1.05, boxShadow: '0px 15px 30px rgba(236, 72, 153, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium text-base shadow-lg flex items-center gap-3 tracking-wide group"
            >
              <span>Explore Her World</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
              >
                <FaArrowRight />
              </motion.span>
            </motion.a>

            <motion.a
              href="#garage"
              whileHover={{ scale: 1.05, borderColor: '#ec4899', color: '#ec4899' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-white border-2 border-gray-200 text-gray-700 font-medium text-base shadow-sm flex items-center gap-3 transition-colors"
            >
              <FaCar className="text-pink-500" />
              <span>Era's Dream Garage</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Right Content: Stunning Visual / Card Showcase */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="lg:col-span-5 flex justify-center relative"
        >
          {/* Glowing Aura Effect */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-pink-300/40 to-rose-300/40 rounded-full blur-3xl -z-10 animate-pulse"></div>

          {/* Glassmorphic Profile/Passion Card */}
          <motion.div 
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-md bg-white/80 backdrop-blur-xl border border-pink-200 p-8 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            {/* Decorative Corner Flower */}
            <div className="absolute top-4 right-4 text-pink-400 text-3xl opacity-70">
              <GiFlowerEmblem />
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-400 flex items-center justify-center text-white text-3xl shadow-md">
                👑
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 font-serif">Era</h3>
                <p className="text-sm text-pink-500 font-medium">Talented • Respectful • Boss</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-600 text-sm mb-6">
              <div className="flex items-center justify-between p-3 rounded-xl bg-pink-50/50 border border-pink-100">
                <span className="font-medium text-gray-700">Future Goal</span>
                <span className="text-pink-600 font-semibold"> Entrepreneur 💢</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-pink-50/50 border border-pink-100">
                <span className="font-medium text-gray-700">Core Passion</span>
                <span className="text-pink-600 font-semibold flex items-center gap-1"><FaCar /> Luxury Cars</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-pink-50/50 border border-pink-100">
                <span className="font-medium text-gray-700">Vibe</span>
                <span className="text-pink-600 font-semibold">Blooming Garden 🌸</span>
              </div>
            </div>

            {/* Bottom mini banner */}
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
              <span>World Class Project</span>
              <span className="text-pink-500 font-semibold">Made with ❤️</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default Banner;