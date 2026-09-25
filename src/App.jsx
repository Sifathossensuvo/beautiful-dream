
import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaHeart,
  FaMusic,
  FaPlay,
  FaStar,
  FaCrown,
} from 'react-icons/fa';
import { GiRose, GiSparkles } from 'react-icons/gi';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Garage from './components/Garage';
import Entrepreneur from './components/Entrepreneur';
import Skills from './components/Skills';
import Milestones from './components/Milestones';
import Wishes from './components/Wishes';
import Contact from './components/Contact';
import Footer from './components/Footer';

// 🎵 Music
import backgroundMusic from './assets/sanamre.mp3';

const App = () => {
  const [entered, setEntered] = useState(false);
  const [loading, setLoading] = useState(false);

  const audioRef = useRef(null);

  // =========================================================
  // ENTER WEBSITE + START MUSIC
  // =========================================================

  const enterWebsite = async () => {
    if (loading) return;

    setLoading(true);

    try {
      if (audioRef.current) {
        audioRef.current.volume = 0;

        await audioRef.current.play();

        let volume = 0;

        const fadeIn = setInterval(() => {
          volume += 0.04;

          if (audioRef.current) {
            audioRef.current.volume = Math.min(volume, 0.45);
          }

          if (volume >= 0.45) {
            clearInterval(fadeIn);
          }
        }, 100);
      }
    } catch (error) {
      console.log('Music could not start:', error);
    }

    // Cinematic entrance delay
    setTimeout(() => {
      setEntered(true);
    }, 900);
  };

  return (
    <div className="relative min-h-[100dvh] overflow-x-hidden bg-white">
      {/* =====================================================
          AUDIO
      ====================================================== */}

      <audio
        ref={audioRef}
        src={backgroundMusic}
        loop
        preload="auto"
      />

      {/* =====================================================
          MAIN WEBSITE
          IMPORTANT:
          Navbar is OUTSIDE motion.main.
          This fixes fixed-position Navbar issues caused by
          transform/filter animations on motion.main.
      ====================================================== */}

      <AnimatePresence mode="wait">
        {entered && (
          <>
            {/* =================================================
                FIXED NAVBAR
                IMPORTANT: NOT INSIDE motion.main
            ================================================== */}

            <Navbar />

            {/* =================================================
                WEBSITE CONTENT
            ================================================== */}

            <motion.main
              initial={{
                opacity: 0,
                scale: 1.04,
                filter: 'blur(12px)',
              }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: 'blur(0px)',
              }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="min-h-[100dvh]"
            >
              <Banner />
              <About />
              <Entrepreneur />
              <Garage />
              <Skills />
              <Milestones />
              <Wishes />
              <Contact />
              <Footer />
            </motion.main>
          </>
        )}
      </AnimatePresence>

      {/* =====================================================
          ENTRY SCREEN
      ====================================================== */}

      <AnimatePresence>
        {!entered && (
          <motion.section
            initial={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.08,
              filter: 'blur(18px)',
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed
              inset-0
              z-[99999]
              flex
              min-h-[100dvh]
              items-center
              justify-center
              overflow-hidden
              bg-[#fff8fc]
              px-4
              py-5
              sm:px-6
              sm:py-8
            "
          >
            {/* =================================================
                SOFT BACKGROUND
            ================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-[radial-gradient(circle_at_15%_15%,rgba(244,114,182,0.20),transparent_25%),radial-gradient(circle_at_85%_25%,rgba(216,180,254,0.17),transparent_25%),radial-gradient(circle_at_50%_100%,rgba(251,207,232,0.24),transparent_35%),linear-gradient(135deg,#fff8fc,#ffffff,#fff6fb)]
              "
            />

            {/* =================================================
                SOFT GRID
            ================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.25]
                [background-image:linear-gradient(rgba(236,72,153,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.035)_1px,transparent_1px)]
                [background-size:42px_42px]
                sm:[background-size:55px_55px]
              "
            />

            {/* =================================================
                CENTER GLOW
            ================================================== */}

            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.18, 0.36, 0.18],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[230px]
                w-[230px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-pink-300/30
                blur-[75px]

                min-[360px]:h-[270px]
                min-[360px]:w-[270px]

                sm:h-[420px]
                sm:w-[420px]
                sm:blur-[120px]

                lg:h-[600px]
                lg:w-[600px]
              "
            />

            {/* =================================================
                PURPLE GLOW
            ================================================== */}

            <motion.div
              animate={{
                x: [-20, 25, -20],
                y: [20, -25, 20],
                opacity: [0.10, 0.24, 0.10],
                scale: [1, 1.12, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-56
                w-56
                rounded-full
                bg-purple-300/25
                blur-[80px]

                sm:h-80
                sm:w-80
              "
            />

            {/* =================================================
                PINK BOTTOM GLOW
            ================================================== */}

            <motion.div
              animate={{
                x: [-15, 15, -15],
                opacity: [0.08, 0.20, 0.08],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                pointer-events-none
                absolute
                -bottom-24
                left-1/2
                h-52
                w-72
                -translate-x-1/2
                rounded-full
                bg-pink-300/20
                blur-[75px]

                sm:h-72
                sm:w-96
              "
            />

            {/* =================================================
                FLOATING PETALS
            ================================================== */}

            {[...Array(16)].map((_, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 80,
                  x: 0,
                  rotate: 0,
                  scale: 0.6,
                }}
                animate={{
                  opacity: [0, 0.55, 0],
                  y: [-20, -160, -340],
                  x: [
                    0,
                    index % 2 === 0 ? 35 : -35,
                    index % 2 === 0 ? -20 : 20,
                  ],
                  rotate: [0, 120, 240],
                  scale: [0.6, 1, 0.7],
                }}
                transition={{
                  duration: 7 + (index % 4),
                  delay: (index % 8) * 0.55,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
                className="
                  pointer-events-none
                  absolute
                  bottom-[-30px]
                  text-pink-300/45
                "
                style={{
                  left: `${(index * 17) % 100}%`,
                }}
              >
                {index % 3 === 0 ? (
                  <GiRose className="text-sm sm:text-2xl" />
                ) : (
                  <span className="text-sm sm:text-xl">
                    🌸
                  </span>
                )}
              </motion.div>
            ))}

            {/* =================================================
                FLOATING SPARKLES
            ================================================== */}

            {[...Array(12)].map((_, index) => (
              <motion.div
                key={`star-${index}`}
                animate={{
                  opacity: [0.12, 0.8, 0.12],
                  scale: [0.6, 1.25, 0.6],
                  rotate: [0, 90, 180],
                }}
                transition={{
                  duration: 2.5 + (index % 3),
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: 'easeInOut',
                }}
                className="
                  pointer-events-none
                  absolute
                  text-pink-300/70
                "
                style={{
                  left: `${6 + ((index * 23) % 88)}%`,
                  top: `${7 + ((index * 31) % 82)}%`,
                }}
              >
                <GiSparkles className="text-[10px] sm:text-lg" />
              </motion.div>
            ))}

            {/* =================================================
                MAIN CONTENT
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 35,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                z-10
                flex
                w-full
                max-w-2xl
                flex-col
                items-center
                justify-center
                text-center
              "
            >
              {/* =================================================
                  CROWN
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  rotate: -20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  delay: 0.25,
                  type: 'spring',
                  stiffness: 180,
                  damping: 12,
                }}
                className="
                  mb-3
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-[16px]
                  border
                  border-pink-200/80
                  bg-white/65
                  text-base
                  text-yellow-500
                  shadow-[0_15px_45px_rgba(236,72,153,0.14)]
                  backdrop-blur-2xl

                  min-[360px]:h-14
                  min-[360px]:w-14

                  sm:mb-6
                  sm:h-20
                  sm:w-20
                  sm:rounded-2xl
                  sm:text-2xl
                "
              >
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <FaCrown />
                </motion.div>
              </motion.div>

              {/* =================================================
                  LABEL
              ================================================== */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.45,
                  duration: 0.6,
                }}
                className="
                  mb-2
                  px-2
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[0.26em]
                  text-pink-500

                  min-[360px]:text-[8px]

                  sm:mb-4
                  sm:text-xs
                  sm:tracking-[0.4em]
                "
              >
                A Little World Made For You
              </motion.p>

              {/* =================================================
                  MAIN HEADING
              ================================================== */}

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.6,
                  duration: 0.9,
                }}
                className="
                  w-full
                  px-2
                  font-serif
                  text-[2.35rem]
                  font-bold
                  leading-[1.04]
                  tracking-[-0.04em]
                  text-gray-900

                  min-[360px]:text-[2.65rem]

                  sm:text-6xl
                  md:text-7xl
                "
              >
                Welcome to
                <br />

                <span className="relative inline-block">
                  <span
                    className="
                      bg-gradient-to-r
                      from-pink-500
                      via-rose-500
                      to-purple-500
                      bg-clip-text
                      text-transparent
                    "
                  >
                    Era's World
                  </span>

                  <motion.span
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: '100%',
                    }}
                    transition={{
                      delay: 1.2,
                      duration: 1,
                      ease: 'easeInOut',
                    }}
                    className="
                      absolute
                      -bottom-1
                      left-0
                      h-[2px]
                      rounded-full
                      bg-gradient-to-r
                      from-pink-400
                      via-rose-400
                      to-purple-400

                      sm:-bottom-2
                      sm:h-[3px]
                    "
                  />
                </span>

                <motion.span
                  animate={{
                    rotate: [0, 8, -8, 0],
                    y: [0, -2, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="ml-1 inline-block"
                >
                  🌸
                </motion.span>
              </motion.h1>

              {/* =================================================
                  DESCRIPTION
              ================================================== */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.85,
                  duration: 0.8,
                }}
                className="
                  mx-auto
                  mt-3
                  max-w-[300px]
                  px-2
                  text-[11px]
                  font-light
                  leading-5
                  text-gray-500

                  min-[360px]:max-w-[325px]
                  min-[360px]:text-[12px]
                  min-[360px]:leading-6

                  sm:mt-6
                  sm:max-w-lg
                  sm:text-base
                  sm:leading-7
                "
              >
                A beautiful little journey filled with dreams,
                passion, elegance and everything that makes Era
                wonderfully unique.
              </motion.p>

              {/* =================================================
                  ENTER CARD
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  delay: 1.1,
                  duration: 0.8,
                }}
                className="
                  mx-auto
                  mt-5
                  w-full
                  max-w-[330px]
                  rounded-[23px]
                  border
                  border-white/80
                  bg-white/55
                  p-2
                  shadow-[0_25px_80px_rgba(190,24,93,0.13)]
                  backdrop-blur-2xl

                  min-[360px]:max-w-[345px]

                  sm:mt-9
                  sm:max-w-sm
                  sm:rounded-[28px]
                  sm:p-3
                "
              >
                {/* =================================================
                    ENTER BUTTON
                ================================================== */}

                <motion.button
                  onClick={enterWebsite}
                  disabled={loading}
                  whileHover={{
                    scale: 1.025,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="
                    group
                    relative
                    flex
                    min-h-[57px]
                    w-full
                    items-center
                    justify-center
                    gap-2.5
                    overflow-hidden
                    rounded-[17px]
                    bg-gradient-to-r
                    from-pink-500
                    via-rose-500
                    to-purple-500
                    px-3
                    text-white
                    shadow-[0_15px_40px_rgba(236,72,153,0.30)]
                    outline-none
                    transition-shadow
                    duration-300

                    hover:shadow-[0_20px_55px_rgba(236,72,153,0.40)]

                    sm:min-h-[68px]
                    sm:gap-4
                    sm:rounded-[22px]
                    sm:px-6
                  "
                >
                  {/* =================================================
                      BUTTON SHINE
                  ================================================== */}

                  {!loading && (
                    <motion.span
                      animate={{
                        x: ['-180%', '260%'],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: 'easeInOut',
                      }}
                      className="
                        pointer-events-none
                        absolute
                        inset-y-0
                        w-16
                        skew-x-[-20deg]
                        bg-white/25
                        blur-md
                      "
                    />
                  )}

                  {/* =================================================
                      BUTTON ICON
                  ================================================== */}

                  <span
                    className="
                      relative
                      z-10
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-white/15

                      min-[360px]:h-9
                      min-[360px]:w-9

                      sm:h-10
                      sm:w-10
                    "
                  >
                    {loading ? (
                      <motion.span
                        animate={{
                          rotate: 360,
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                        className="
                          block
                          h-4
                          w-4
                          rounded-full
                          border-2
                          border-white/40
                          border-t-white

                          sm:h-5
                          sm:w-5
                        "
                      />
                    ) : (
                      <FaPlay className="ml-0.5 text-[10px] sm:text-sm" />
                    )}
                  </span>

                  {/* =================================================
                      BUTTON TEXT
                  ================================================== */}

                  <span
                    className="
                      relative
                      z-10
                      whitespace-nowrap
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.08em]

                      min-[360px]:text-[11px]

                      sm:text-base
                      sm:tracking-[0.16em]
                    "
                  >
                    {loading
                      ? 'Opening Her World...'
                      : 'Enter Her World'}
                  </span>

                  {/* =================================================
                      HEART
                  ================================================== */}

                  {!loading && (
                    <motion.span
                      animate={{
                        x: [0, 5, 0],
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="relative z-10 shrink-0"
                    >
                      <FaHeart className="text-[10px] sm:text-sm" />
                    </motion.span>
                  )}
                </motion.button>

                {/* =================================================
                    MUSIC INDICATOR
                ================================================== */}

                <div
                  className="
                    flex
                    items-center
                    justify-center
                    gap-1
                    px-1
                    pb-1
                    pt-2.5

                    min-[360px]:gap-1.5

                    sm:gap-2
                    sm:px-3
                    sm:pt-4
                  "
                >
                  <motion.span
                    animate={{
                      scaleY: [0.5, 1, 0.7, 1, 0.5],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                    }}
                    className="
                      h-2.5
                      w-[2px]
                      rounded-full
                      bg-pink-300

                      sm:h-3
                      sm:w-1
                    "
                  />

                  <motion.span
                    animate={{
                      scaleY: [1, 0.4, 1, 0.6, 1],
                    }}
                    transition={{
                      duration: 0.7,
                      repeat: Infinity,
                    }}
                    className="
                      h-3.5
                      w-[2px]
                      rounded-full
                      bg-pink-400

                      sm:h-4
                      sm:w-1
                    "
                  />

                  <FaMusic
                    className="
                      mx-0.5
                      text-[8px]
                      text-pink-400

                      min-[360px]:mx-1

                      sm:text-[10px]
                    "
                  />

                  <span
                    className="
                      whitespace-nowrap
                      text-[6px]
                      font-semibold
                      uppercase
                      tracking-[0.08em]
                      text-gray-400

                      min-[360px]:text-[7px]
                      min-[360px]:tracking-[0.12em]

                      sm:text-[9px]
                      sm:tracking-[0.2em]
                    "
                  >
                    Tap to enter • Music awaits
                  </span>

                  <motion.span
                    animate={{
                      scaleY: [0.4, 1, 0.5, 1, 0.4],
                    }}
                    transition={{
                      duration: 0.9,
                      repeat: Infinity,
                    }}
                    className="
                      h-2.5
                      w-[2px]
                      rounded-full
                      bg-pink-300

                      sm:h-3
                      sm:w-1
                    "
                  />

                  <motion.span
                    animate={{
                      scaleY: [1, 0.5, 1, 0.7, 1],
                    }}
                    transition={{
                      duration: 0.75,
                      repeat: Infinity,
                    }}
                    className="
                      h-3.5
                      w-[2px]
                      rounded-full
                      bg-pink-400

                      sm:h-4
                      sm:w-1
                    "
                  />
                </div>
              </motion.div>

              {/* =================================================
                  BOTTOM MESSAGE
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1.5,
                  duration: 0.7,
                }}
                className="
                  mt-4
                  flex
                  items-center
                  justify-center
                  gap-1.5
                  px-3
                  text-[6px]
                  font-medium
                  uppercase
                  tracking-[0.13em]
                  text-gray-400

                  min-[360px]:text-[7px]

                  sm:mt-7
                  sm:gap-2
                  sm:text-[9px]
                  sm:tracking-[0.25em]
                "
              >
                <FaStar className="shrink-0 text-yellow-400" />

                <span>Made with a little extra love</span>

                <FaStar className="shrink-0 text-yellow-400" />
              </motion.div>
            </motion.div>

            {/* =================================================
                TOP LEFT ROSE
            ================================================== */}

            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                pointer-events-none
                absolute
                left-4
                top-5
                hidden
                text-4xl
                text-pink-200/70

                sm:left-6
                sm:top-8
                sm:block
                sm:text-5xl
              "
            >
              <GiRose />
            </motion.div>

            {/* =================================================
                BOTTOM RIGHT ROSE
            ================================================== */}

            <motion.div
              animate={{
                rotate: [0, -10, 10, 0],
                y: [0, 8, 0],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                pointer-events-none
                absolute
                bottom-5
                right-4
                hidden
                text-4xl
                text-pink-200/70

                sm:bottom-8
                sm:right-6
                sm:block
                sm:text-5xl
              "
            >
              <GiRose />
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;

