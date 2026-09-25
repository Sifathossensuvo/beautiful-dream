import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { GiFlowerEmblem, GiSparkles } from 'react-icons/gi';
import { FaChartLine, FaLightbulb, FaRocket, FaHandshake } from 'react-icons/fa';

const Entrepreneur = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Parallax scroll hooks for butter-smooth effect
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotateBg = useTransform(scrollYProgress, [0, 1], [0, 180]);

  // Era's Entrepreneurial Vision Data
  const visions = [
    {
      id: 0,
      icon: <FaRocket className="text-pink-500" />,
      title: "Global Empire Builder",
      desc: "Aiming to build world-class startups and businesses that create massive impact and inspire generations.",
      badge: "Big Vision",
      metric: "100% Impact",
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 1,
      icon: <FaLightbulb className="text-rose-500" />,
      title: "Innovative Strategy",
      desc: "Combining sharp intellect and creative problem-solving to turn bold ideas into thriving market realities.",
      badge: "Smart Leadership",
      metric: "Visionary Tech",
      color: "from-rose-400 to-purple-500"
    },
    {
      id: 2,
      icon: <FaHandshake className="text-amber-500" />,
      title: "Respect & Integrity",
      desc: "Leading teams with deep respect, empathy, and grace—proving true bosses uplift everyone around them.",
      badge: "Core Value",
      metric: "Pure Grace",
      color: "from-pink-400 to-pink-600"
    },
    {
      id: 3,
      icon: <FaChartLine className="text-purple-500" />,
      title: "Unstoppable Growth",
      desc: "Constantly learning, adapting, and accelerating forward just like a high-performance machine on full throttle.",
      badge: "Future Boss",
      metric: "Infinite Scale",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section id="entrepreneur" className="relative py-20 sm:py-28 bg-gradient-to-b from-white via-pink-50/40 to-white overflow-hidden px-4 sm:px-8 lg:px-12">
      
      {/* Background Parallax & Animated Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          style={{ y: y1 }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl will-change-transform"
        />
        <motion.div
          style={{ y: y2 }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-rose-200/40 rounded-full blur-3xl will-change-transform"
        />
        <motion.div
          style={{ rotate: rotateBg }}
          className="absolute top-1/3 right-1/4 text-pink-500/5 text-9xl will-change-transform"
        >
          <GiFlowerEmblem />
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-pink-600 font-semibold text-xs uppercase tracking-widest mb-4 shadow-sm"
          >
            <GiSparkles />
            <span>Future Business Tycoon</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-3xl sm:text-5xl font-extrabold text-gray-900 font-serif tracking-tight"
          >
            Era's <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500">Entrepreneurial Vision</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-gray-600 text-base sm:text-lg mt-4 font-light leading-relaxed"
          >
            Destined to conquer the business world with unstoppable passion, sharp vision, and a golden heart.
          </motion.p>
        </div>

        {/* Interactive Pods & Holographic Spotlight Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Interactive Selection Pills */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {visions.map((vision, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className={`cursor-pointer p-5 rounded-2xl transition-all flex items-center justify-between border will-change-transform ${
                    isActive 
                      ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white border-transparent shadow-lg shadow-pink-500/25' 
                      : 'bg-white/90 backdrop-blur-md text-gray-800 border-pink-100 hover:border-pink-300 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl bg-white shadow-sm ${isActive ? 'text-pink-600' : ''}`}>
                      {vision.icon}
                    </div>
                    <div>
                      <span className={`text-xs uppercase tracking-wider font-semibold block mb-0.5 ${isActive ? 'text-pink-100' : 'text-pink-500'}`}>
                        {vision.badge}
                      </span>
                      <h4 className="font-serif font-bold text-base sm:text-lg">
                        {vision.title}
                      </h4>
                    </div>
                  </div>

                  {isActive && (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
                      className="text-white text-xl will-change-transform"
                    >
                      <GiFlowerEmblem />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Right Side: Dynamic Holographic Spotlight Display */}
          <div className="lg:col-span-7">
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-pink-500/30 overflow-hidden min-h-[340px] flex flex-col justify-between">
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/15 rounded-full blur-3xl pointer-events-none"></div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.97 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-4 py-1 rounded-full text-xs font-semibold bg-pink-500/20 text-pink-300 border border-pink-500/30">
                      {visions[activeIndex].badge}
                    </span>
                    <span className="text-pink-400 font-mono text-sm tracking-widest">
                      {visions[activeIndex].metric}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-serif mb-4 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-100 to-pink-300">
                    {visions[activeIndex].title}
                  </h3>

                  <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed mb-8">
                    {visions[activeIndex].desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="relative z-10 pt-6 border-t border-gray-700/60 flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
                  <span>Interactive Hub Active</span>
                </div>
                <span>Era's Empire 👑</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Master Quote Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-16 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white rounded-3xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden will-change-transform"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
            className="absolute -right-16 -bottom-16 text-white/10 text-9xl pointer-events-none will-change-transform"
          >
            <GiFlowerEmblem />
          </motion.div>

          <span className="text-3xl sm:text-4xl mb-3 block">👑</span>
          <h3 className="text-2xl sm:text-3xl font-bold font-serif mb-3 tracking-wide">
            "Building an empire where talent meets respect."
          </h3>
          <p className="text-pink-100 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Era's journey as an entrepreneur is all about creating value, breaking limits, and leaving a legendary footprint in the business world with absolute grace.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Entrepreneur;