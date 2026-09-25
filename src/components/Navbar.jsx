
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GiFlowerEmblem } from 'react-icons/gi';
import { FaCar, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Entrepreneur', href: '#entrepreneur' },
    { name: 'Garage', href: '#garage' },
    { name: 'Skills', href: '#skills' },
    { name: 'Milestones', href: '#milestones' },
    { name: 'Wishes', href: '#wishes' },
    { name: 'Contact', href: '#contact' },
  ];

  // Smooth scroll handler for mobile menu
  const handleMobileNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = href.replace('#', '');

    setTimeout(() => {
      const element = document.getElementById(targetId);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 150);
  };

  return (
    // FIX: plain nav prevents Framer Motion transform from conflicting with fixed positioning
    <nav className="fixed top-0 left-0 right-0 w-full z-[99999]">
      
      {/* Navbar animation moved inside the fixed nav */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full bg-white/80 backdrop-blur-md border-b border-pink-100 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          
          {/* Brand / Logo with Rotating Flower */}
          <a href="#" className="flex items-center gap-3 group">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
              className="text-pink-500 text-3xl group-hover:scale-110 transition-transform"
            >
              <GiFlowerEmblem />
            </motion.div>

            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-wider text-gray-800 font-serif">
                ERA
              </span>

              <span className="text-[10px] tracking-widest text-pink-500 uppercase font-semibold flex items-center gap-1">
                Garden & <FaCar className="text-xs" />
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ scale: 1.08, color: '#ec4899' }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-600 font-medium text-sm tracking-wide transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-pink-500 hover:after:w-full after:transition-all"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="hidden lg:block">
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 10px 20px rgba(236, 72, 153, 0.2)',
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 text-white font-medium text-sm shadow-md tracking-wider flex items-center gap-2"
            >
              <span>Let's Connect</span>

              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                ✨
              </motion.span>
            </motion.a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 text-2xl focus:outline-none p-2 rounded-lg hover:bg-pink-50 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-lg border-b border-pink-100 px-6 py-6 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    onClick={(e) => handleMobileNavClick(e, link.href)}
                    className="text-gray-700 font-medium text-base hover:text-pink-500 transition-colors py-2 border-b border-gray-100 flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="text-pink-400 text-sm">🌸</span>
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={(e) => handleMobileNavClick(e, '#contact')}
                  className="mt-4 w-full py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 text-white text-center font-medium shadow-md"
                >
                  Let's Connect ✨
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};

export default Navbar;

