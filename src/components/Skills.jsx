import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { GiFlowerEmblem, GiSparkles } from 'react-icons/gi';
import { FaBrain, FaRocket, FaCrown, FaLightbulb, FaHeart, FaBolt } from 'react-icons/fa';

const Skills = () => {
  const [activeNode, setActiveNode] = useState(0);

  // Parallax scroll hooks for ultimate smooth momentum
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotateConstellation = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // Era's God-Tier Skills & Superpowers Data
  const skillNodes = [
    {
      id: 0,
      title: "Visionary Strategy",
      tag: "God-Tier Intellect",
      metric: "100% Precision",
      desc: "Spotting multi-dimensional opportunities ahead of time and architecting masterclass blueprints for success.",
      icon: <FaBrain className="text-pink-400 text-xl" />,
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 1,
      title: "Hyper Velocity Drive",
      tag: "Execution Power",
      metric: "Full Throttle",
      desc: "Blazing momentum and relentless execution capacity that turns complex mountains into stepping stones.",
      icon: <FaRocket className="text-rose-400 text-xl" />,
      color: "from-rose-400 to-purple-500"
    },
    {
      id: 2,
      title: "Royal Grace & Empathy",
      tag: "Leadership Aura",
      metric: "Pure Elegance",
      desc: "Uplifting every person in the room with absolute respect, kindness, and an unshakeable magnetic presence.",
      icon: <FaCrown className="text-amber-400 text-xl" />,
      color: "from-pink-400 to-pink-600"
    },
    {
      id: 3,
      title: "Creative Innovation",
      tag: "Out-of-the-Box",
      metric: "Infinite Ideas",
      desc: "Infusing high-end aesthetic value, floral elegance, and luxury concepts into every single project.",
      icon: <FaLightbulb className="text-purple-400 text-xl" />,
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: 4,
      title: "Golden Heart",
      tag: "Core Character",
      metric: "Priceless Soul",
      desc: "Spreading genuine joy, building deep connections, and ensuring success is shared with mutual love.",
      icon: <FaHeart className="text-rose-300 text-xl" />,
      color: "from-rose-500 to-pink-500"
    }
  ];

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-gradient-to-b from-white via-pink-50/40 to-white overflow-hidden px-4 sm:px-8 lg:px-12">
      
      {/* Background Cosmic Particle & Glow Motion */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          style={{ y: y1 }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-[30rem] h-[30rem] bg-pink-200/40 rounded-full blur-3xl will-change-transform"
        />
        <motion.div
          style={{ y: y2 }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-10 w-[32rem] h-[32rem] bg-rose-200/40 rounded-full blur-3xl will-change-transform"
        />
        <motion.div
          style={{ rotate: rotateConstellation }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-pink-500/5 text-[20rem] md:text-[28rem] pointer-events-none will-change-transform"
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
            <FaBolt />
            <span>Neural Superpower Core</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-3xl sm:text-5xl font-extrabold text-gray-900 font-serif tracking-tight"
          >
            Era's <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600">God-Tier Skills</span> ⚡
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-gray-600 text-base sm:text-lg mt-4 font-light leading-relaxed"
          >
            An elite constellation of unmatched intellect, creative mastery, and royal leadership.
          </motion.p>
        </div>

        {/* Unique 3D Neural Matrix Layout (Completely Different from Entrepreneur & Hobbies) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Vertical Glowing Neural Hex-Orbits */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {skillNodes.map((node, index) => {
              const isActive = activeNode === index;
              return (
                <motion.div
                  key={index}
                  onClick={() => setActiveNode(index)}
                  whileHover={{ scale: 1.03, x: 8 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className={`cursor-pointer p-4 sm:p-5 rounded-3xl transition-all flex items-center justify-between border backdrop-blur-xl will-change-transform ${
                    isActive 
                      ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white border-pink-500/50 shadow-2xl shadow-pink-500/20' 
                      : 'bg-white/80 text-gray-800 border-pink-100 hover:border-pink-300 shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md transition-transform ${isActive ? 'bg-pink-500 text-white scale-110 rotate-6' : 'bg-white text-gray-800'}`}>
                      {node.icon}
                    </div>
                    <div>
                      <span className={`text-[11px] uppercase tracking-wider font-semibold block mb-0.5 ${isActive ? 'text-pink-300' : 'text-pink-500'}`}>
                        {node.tag}
                      </span>
                      <h4 className="font-serif font-bold text-base sm:text-lg">
                        {node.title}
                      </h4>
                    </div>
                  </div>

                  {isActive && (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
                      className="text-pink-400 text-2xl will-change-transform pr-2"
                    >
                      <GiFlowerEmblem />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: High-Tech Holographic Core Command Center */}
          <div className="lg:col-span-7">
            <div className="relative bg-gradient-to-br from-pink-950 via-gray-950 to-gray-900 text-white rounded-[2.5rem] p-8 sm:p-12 shadow-2xl border border-pink-500/40 overflow-hidden min-h-[420px] flex flex-col justify-between">
              
              {/* Internal Pulsing Hologram Light */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-purple-500/15 rounded-full blur-3xl pointer-events-none"></div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeNode}
                  initial={{ opacity: 0, scale: 0.94, filter: "blur(8px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.94, filter: "blur(8px)" }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-pink-500/20 text-pink-300 border border-pink-500/30 flex items-center gap-2">
                      <GiSparkles className="text-pink-400" />
                      {skillNodes[activeNode].tag}
                    </span>
                    <span className="text-pink-300 font-mono text-xs uppercase tracking-widest bg-pink-900/40 px-3.5 py-1 rounded-full border border-pink-500/30">
                      {skillNodes[activeNode].metric}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold font-serif mb-5 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-100 to-pink-300">
                    {skillNodes[activeNode].title}
                  </h3>

                  <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed mb-8">
                    {skillNodes[activeNode].desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Core System Footer Status */}
              <div className="relative z-10 pt-6 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-pink-500 animate-ping"></span>
                  <span className="text-pink-300 font-medium">Neural Core Link Operational</span>
                </div>
                <span className="font-serif tracking-wider">Era's Mastery Matrix ⚡</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Immersive Quote Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-16 bg-gradient-to-r from-gray-900 via-pink-950 to-gray-900 text-white rounded-3xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden will-change-transform border border-pink-500/30"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
            className="absolute -right-16 -bottom-16 text-white/10 text-9xl pointer-events-none will-change-transform"
          >
            <GiFlowerEmblem />
          </motion.div>

          <span className="text-3xl sm:text-4xl mb-3 block">⚡</span>
          <h3 className="text-2xl sm:text-3xl font-bold font-serif mb-3 tracking-wide">
            "Mastery is when unstoppable focus meets royal grace."
          </h3>
          <p className="text-pink-200 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Era doesn't just build skills; she operates at god-tier precision, turning every ambition into an unforgettable victory.
          </p>
        </motion.div>

      </div>
    </section>
  );
};


export default Skills;