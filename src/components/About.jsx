import React from 'react';
import { motion } from 'framer-motion';
import { GiFlowerEmblem, GiSparkles } from 'react-icons/gi';
import { FaHeart, FaHandsHelping, FaLightbulb, FaStar } from 'react-icons/fa';

const About = () => {
  // Key traits cards data
  const traits = [
    {
      icon: <FaStar className="text-pink-500" />,
      title: "Extremely Talented",
      desc: "Blessed with exceptional skills and creativity that naturally stand out in everything she does."
    },
    {
      icon: <FaHandsHelping className="text-rose-500" />,
      title: "Deeply Respectful",
      desc: "Has a heart full of respect, kindness, and genuine care for everyone around her."
    },
    {
      icon: <FaLightbulb className="text-amber-500" />,
      title: "Visionary Mindset",
      desc: "Always thinking ahead with brilliant ideas, ready to conquer the business world."
    },
    {
      icon: <FaHeart className="text-pink-500" />,
      title: "Pure & Golden Heart",
      desc: "Spread positivity and warmth wherever she goes, just like a blooming garden."
    }
  ];

  return (
    <section id="about" className="relative py-20 sm:py-28 bg-white overflow-hidden px-4 sm:px-8 lg:px-12">
      
      {/* Background Decorative Glowing Blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-pink-100/60 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-rose-100/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-pink-600 font-semibold text-xs uppercase tracking-widest mb-4 shadow-sm"
          >
            <GiSparkles />
            <span>The Soul & Personality</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-3xl sm:text-5xl font-extrabold text-gray-900 font-serif tracking-tight"
          >
            Behind the Grace of <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">Era</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-gray-600 text-base sm:text-lg mt-4 font-light leading-relaxed"
          >
            An inspiring blend of sharp intelligence, deep respect for others, and an unstoppable drive to build a massive entrepreneurial legacy.
          </motion.p>
        </div>

        {/* Grid Layout for Traits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {traits.map((trait, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="bg-gradient-to-b from-pink-50/40 to-white p-8 rounded-3xl border border-pink-100 shadow-sm hover:shadow-xl hover:border-pink-300 transition-all relative group overflow-hidden will-change-transform"
            >
              {/* Corner Continuous Spinning Flower Icon */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                className="absolute top-4 right-4 text-pink-300 text-2xl group-hover:text-pink-500 transition-colors"
              >
                <GiFlowerEmblem />
              </motion.div>

              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform border border-pink-100">
                {trait.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-serif">
                {trait.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed font-light">
                {trait.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight Quote Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-16 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 rounded-3xl p-8 sm:p-12 text-white text-center shadow-2xl relative overflow-hidden will-change-transform"
        >
          {/* Background Decorative Pattern */}
          <div className="absolute -right-10 -bottom-10 text-white/10 text-9xl pointer-events-none">
            <GiFlowerEmblem />
          </div>

          <span className="text-3xl sm:text-4xl mb-3 block">🌸</span>
          <h3 className="text-2xl sm:text-3xl font-bold font-serif mb-3 tracking-wide">
            "Respecting everyone, dreaming without limits."
          </h3>
          <p className="text-pink-100 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Era believes that true success isn't just about reaching the top as a boss, but lifting others up with respect, grace, and an unshakeable positive spirit.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;