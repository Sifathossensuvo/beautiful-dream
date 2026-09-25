import React from 'react';
import { motion } from 'framer-motion';
import { GiFlowerEmblem } from 'react-icons/gi';
import { FaCar, FaTachometerAlt, FaBolt } from 'react-icons/fa';

import car1 from '../assets/car1.png';
import car2 from '../assets/car2.png';
import car3 from '../assets/car3.png';

const Garage = () => {
  // Era's Dream Cars Data with Local Assets Images
  const cars = [
    {
      name: "Era's Phantom Rose",
      type: "Luxury Hypercar",
      speed: "350+ KM/H",
      desc: "A breathtaking blend of raw luxury and supreme elegance, designed for a boss who leads with style.",
      badge: "Ultimate Dream",
      color: "from-pink-500 to-rose-500",
      image: car1
    },
    {
      name: "Blossom Speedster",
      type: "Sporty Elegance",
      speed: "320 KM/H",
      desc: "Fast, fierce, and utterly unstoppable—mirroring Era's energetic and ambitious entrepreneurial drive.",
      badge: "Power & Grace",
      color: "from-rose-400 to-purple-500",
      image: car2
    },
    {
      name: "Garden Royale GT",
      type: "Classic Grand Tourer",
      speed: "300 KM/H",
      desc: "Built for smooth long-distance journeys, symbolizing patience, focus, and a vision for the future.",
      badge: "Visionary Ride",
      color: "from-pink-400 to-pink-600",
      image: car3
    }
  ];

  return (
    <section id="garage" className="relative py-20 sm:py-28 bg-gradient-to-b from-white via-pink-50/40 to-white overflow-hidden px-4 sm:px-8 lg:px-12">
      
      {/* Background Decorative Glowing Elements */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-pink-100/60 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-72 h-72 bg-rose-100/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-pink-600 font-semibold text-xs uppercase tracking-widest mb-4 shadow-sm"
          >
            <FaCar />
            <span>Era's Automotive Universe</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-3xl sm:text-5xl font-extrabold text-gray-900 font-serif tracking-tight"
          >
            Era's <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">Dream Garage</span> 🌸
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-gray-600 text-base sm:text-lg mt-4 font-light leading-relaxed"
          >
            Where high-speed luxury meets blooming floral elegance. A tribute to her ultimate passion for cars.
          </motion.p>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.2, ease: "easeOut" } }}
              className="bg-white/90 backdrop-blur-xl rounded-3xl border border-pink-200 shadow-xl hover:shadow-2xl transition-all relative group overflow-hidden will-change-transform flex flex-col justify-between"
            >
              {/* Local Car Image Container with Butter-smooth Zoom Effect */}
              <div className="relative h-52 sm:h-56 overflow-hidden bg-gray-100">
                <motion.img 
                  src={car.image} 
                  alt={car.name}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full h-full object-cover will-change-transform"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Badge over image */}
                <span className={`absolute bottom-3 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${car.color} shadow-md`}>
                  {car.badge}
                </span>

                {/* Corner Continuous Spinning Flower */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                  className="absolute top-4 right-4 text-pink-400 text-2xl drop-shadow-md will-change-transform"
                >
                  <GiFlowerEmblem />
                </motion.div>
              </div>

              {/* Content Container */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                  {/* Fixed Responsive Header for Title & Type Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h3 className="text-xl font-bold text-gray-800 font-serif">
                      {car.name}
                    </h3>
                    <span className="self-start sm:self-auto text-xs text-pink-500 font-medium bg-pink-50 px-3 py-1 rounded-full border border-pink-100">
                      {car.type}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
                    {car.desc}
                  </p>
                </div>

                {/* Specs Footer */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-500">
                  <div className="flex items-center gap-1.5 text-pink-600">
                    <FaTachometerAlt />
                    <span>{car.speed}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-rose-500">
                    <FaBolt />
                    <span>Pure Power</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Interactive Car Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white rounded-3xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden will-change-transform border border-pink-500/30"
        >
          {/* Background Rose Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <span className="text-3xl sm:text-4xl mb-3 block">💢</span>
          <h3 className="text-2xl sm:text-3xl font-bold font-serif mb-3 tracking-wide">
            "Speed, Style, and Unstoppable Ambition."
          </h3>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Just like high-performance cars require precision and power, Era drives her entrepreneurial dreams with supreme focus, talent, and respect for everyone on the road.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Garage;