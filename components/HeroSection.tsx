'use client';

import { motion } from 'motion/react';

export default function HeroSection() {
  const handleScheduleClick = () => {
    const scheduleSection = document.getElementById('schedule');
    if (scheduleSection) {
      scheduleSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Blue Blob/Orb Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large animated blue blob */}
        <motion.div
          className="absolute top-1/4 -right-32 md:-right-32 sm:-right-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: '#00C8FF' }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Medium purple orb */}
        <motion.div
          className="absolute bottom-1/4 -left-32 md:-left-32 sm:-left-20 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full opacity-15 blur-3xl"
          style={{ backgroundColor: '#BC61F5' }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Hexagon Mesh Pattern */}
      <div className="absolute inset-0 opacity-[0.05] overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="hexagons"
              x="0"
              y="0"
              width="100"
              height="173.205"
              patternUnits="userSpaceOnUse"
            >
              <polygon
                points="50 0, 100 25, 100 75, 50 100, 0 75, 0 25"
                fill="none"
                stroke="#00C8FF"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" className="animate-[spin_60s_linear_infinite]" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 max-w-4xl mx-auto py-20 sm:py-0">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight text-white leading-tight"
          style={{
            fontFamily: 'var(--font-manrope)',
            letterSpacing: '-0.02em',
          }}
        >
          HACKWISE 2.0
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="text-base sm:text-lg md:text-xl mt-4 sm:mt-6 mb-8 sm:mb-10 text-[#C7D1E0] font-medium px-2"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          Build the Future, One SaaS at a Time.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-row gap-3 sm:gap-4 mb-8 justify-center flex-wrap"
        >
          {/* Register Button */}
          <motion.a
            href="https://unstop.com/hackathons/hackwise-20"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full border-2 font-medium transition-all duration-300 text-xs sm:text-sm md:text-base whitespace-nowrap"
            style={{ 
              fontFamily: 'var(--font-inter)',
              borderColor: '#BC61F5',
              backgroundColor: 'transparent',
              color: '#BC61F5'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(188, 97, 245, 0.1)';
              e.currentTarget.style.borderColor = '#BC61F5';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = '#BC61F5';
            }}
          >
            Register on Unstop
          </motion.a>

          {/* View Schedule Button */}
          <motion.button
            onClick={handleScheduleClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full border-2 font-medium transition-all duration-300 text-xs sm:text-sm md:text-base whitespace-nowrap"
            style={{ 
              fontFamily: 'var(--font-inter)',
              borderColor: '#00C8FF',
              backgroundColor: 'transparent',
              color: '#00C8FF'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 200, 255, 0.1)';
              e.currentTarget.style.borderColor = '#00C8FF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = '#00C8FF';
            }}
          >
            View Schedule
          </motion.button>
        </motion.div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="inline-flex items-center"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          <span className="text-white font-semibold tracking-wide text-base sm:text-lg uppercase">
            Coming Soon
          </span>
        </motion.div>
      </div>
    </div>
  );
}
