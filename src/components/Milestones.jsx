import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GiFlowerEmblem, GiSparkles } from 'react-icons/gi';
import { FaFlagCheckered, FaStar, FaGem, FaTrophy } from 'react-icons/fa';

const Milestones = () => {
  // Parallax scroll hooks for smooth background motion
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const steps = [
    {
      phase: "Phase 01",
      title: "The Visionary Spark",
      desc: "The beginning of an extraordinary journey where big dreams, ambition, and a passion for leadership first ignited.",
      icon: <FaFlagCheckered />
    },
    {
      phase: "Phase 02",
      title: "Mastering the Craft",
      desc: "Sharpening strategic intellect, creative problem-solving, and building an unstoppable mindset for success.",
      icon: <FaStar />
    },
    {
      phase: "Phase 03",
      title: "Automotive & Style Universe",
      desc: "Blending high-speed luxury passion with personal identity, proving that style and speed go hand-in-hand.",
      icon: <FaGem />
    },
    {
      phase: "Phase 04",
      title: "Empire & Leadership",
      desc: "Stepping up as a future business leader, inspiring communities, and creating value with absolute grace and respect.",
      icon: <FaTrophy />
    }
  ];

  return (
    <section id="milestones" className="relative py-24 sm:py-32 bg-gradient-to-b from-white via-pink-50/30 to-white overflow-hidden px-4 sm:px-8 lg:px-12">
      
      {/* Background Floating Roses & Flowers in Blank Spaces */}
      <motion.div style={{ y: yParallax }} className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div 
          animate={{ rotate: 360, y: [0, -15, 0] }} 
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }} 
          className="absolute top-20 left-10 sm:left-20 text-rose-400/20 text-8xl sm:text-9xl"
        >
          <GiFlowerEmblem />
        </motion.div>
        
        <motion.div 
          animate={{ rotate: -360, x: [0, 15, 0] }} 
          transition={{ repeat: Infinity, duration: 22, ease: 'linear' }} 
          className="absolute bottom-20 right-10 sm:right-20 text-pink-400/20 text-7xl sm:text-8xl"
        >
          <GiFlowerEmblem />
        </motion.div>
      </motion.div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-pink-600 font-semibold text-xs uppercase tracking-widest mb-4 shadow-sm"
          >
            <GiSparkles /> Timeline of Greatness
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-gray-900 font-serif tracking-tight"
          >
            Era's <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Milestones</span> 🏆
          </motion.h2>
        </div>

        {/* Step by Step Flow Timeline Layout */}
        <div className="relative border-l-2 border-pink-200 ml-4 sm:ml-32 space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-8 sm:pl-12 group"
            >
              {/* Timeline Glowing Node Dot */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white flex items-center justify-center shadow-lg shadow-pink-500/30 group-hover:scale-125 transition-transform">
                <span className="text-xs">{step.icon}</span>
              </div>

              {/* Step Card */}
              <div className="bg-white/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-pink-200 shadow-xl relative overflow-hidden">
                <div className="absolute top-2 right-2 text-pink-100 text-6xl pointer-events-none">
                  <GiFlowerEmblem />
                </div>
                <span className="text-xs font-semibold text-pink-500 uppercase tracking-widest block mb-1">
                  {step.phase}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Milestones;