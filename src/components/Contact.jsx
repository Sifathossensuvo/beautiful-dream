import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GiFlowerEmblem, GiSparkles } from 'react-icons/gi';
import { FaPaperPlane, FaHeart, FaCrown, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Parallax background hooks
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-gradient-to-b from-white via-pink-50/50 to-white overflow-hidden px-4 sm:px-8 lg:px-12">
      
      {/* Background Floating Roses & Flowers in Blank Spaces */}
      <motion.div style={{ y: yParallax }} className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div 
          animate={{ rotate: 360, y: [0, -20, 0] }} 
          transition={{ repeat: Infinity, duration: 22, ease: 'linear' }} 
          className="absolute top-16 left-10 sm:left-24 text-pink-400/20 text-8xl sm:text-9xl"
        >
          <GiFlowerEmblem />
        </motion.div>
        
        <motion.div 
          animate={{ rotate: -360, x: [0, 20, 0] }} 
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }} 
          className="absolute bottom-16 right-10 sm:right-24 text-rose-500/20 text-7xl sm:text-8xl"
        >
          <GiFlowerEmblem />
        </motion.div>

        {/* Glow Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-pink-200/40 rounded-full blur-3xl pointer-events-none"></div>
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-pink-600 font-semibold text-xs uppercase tracking-widest mb-4 shadow-sm"
          >
            <GiSparkles /> Get In Touch
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-gray-900 font-serif tracking-tight"
          >
            Connect With <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600">Era's Universe</span> 🌸
          </motion.h2>
          <p className="text-gray-600 text-sm sm:text-base font-light mt-3">
            Have a message, collaboration idea, or a wonderful note to drop? Send it right here!
          </p>
        </div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/90 backdrop-blur-2xl p-8 sm:p-12 rounded-[2.5rem] border border-pink-200 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Watermark Flower */}
          <div className="absolute -right-12 -bottom-12 text-pink-100/60 text-9xl pointer-events-none">
            <GiFlowerEmblem />
          </div>

          {submitted ? (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="py-16 text-center"
            >
              <div className="w-20 h-20 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl shadow-inner">
                <FaCheckCircle />
              </div>
              <h3 className="text-2xl font-bold font-serif text-gray-900 mb-2">Message Sent Successfully!</h3>
              <p className="text-gray-600 text-sm font-light">Thank you for reaching out to Era's universe. Have a wonderful day! ✨</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name" 
                    className="w-full px-5 py-4 rounded-2xl bg-pink-50/50 border border-pink-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email" 
                    className="w-full px-5 py-4 rounded-2xl bg-pink-50/50 border border-pink-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">Your Message</label>
                <textarea 
                  rows="4" 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your beautiful message here..." 
                  className="w-full px-5 py-4 rounded-2xl bg-pink-50/50 border border-pink-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all placeholder:text-gray-400 resize-none"
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white font-semibold text-sm uppercase tracking-wider shadow-lg shadow-pink-500/30 flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <FaPaperPlane /> Send Message
              </motion.button>
            </form>
          )}

        </motion.div>

      </div>
    </section>
  );
};

export default Contact;