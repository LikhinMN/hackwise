'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import ScrollFloat from './ScrollFloat';

export default function AboutHackwiseSection() {
  const [hovered, setHovered] = useState(false);
  return (
    <section className="py-32 relative overflow-hidden" style={{ backgroundColor: '#060010' }}>
      {/* Animated Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-15 blur-3xl"
          style={{ backgroundColor: '#BC61F5' }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: '#00C8FF' }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <ScrollFloat
            containerClassName="mb-8"
            textClassName="text-white font-bold tracking-tight"
            animationDuration={1.2}
            stagger={0.04}
          >
            ABOUT HACKWISE 2.0
          </ScrollFloat>
          
          {/* Animated Underline */}
          <div className="relative inline-block">
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-linear-to-r from-purple-500 to-blue-500 rounded-full opacity-80"></div>
            <div className={`absolute -bottom-2 left-0 h-1 bg-linear-to-r from-purple-400 to-blue-400 rounded-full transition-all duration-1000 ${
              hovered ? 'w-full' : 'w-0'
            }`}></div>
          </div>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Text Content */}
          <div className="space-y-6">
            {/* Tagline Banner */}
            <div className="bg-linear-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="text-sm text-gray-300 mb-2 font-medium tracking-wider uppercase">
                Theme
              </div>
              <div 
                className="text-2xl md:text-3xl font-bold text-white cursor-pointer"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                Building a <span className="relative inline-block">
                  <span className="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">SaaS</span>
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-linear-to-r from-purple-400 to-blue-400 transition-all duration-500 ${
                    hovered ? 'w-full' : 'w-0'
                  }`}></span>
                </span> - Software that Serves the World.
              </div>
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg">
                <span className="font-bold text-white">Hackwise 2.0</span> is a national-level SaaS hackathon that brings together the brightest minds in software engineering to create innovative Software as a Service solutions that address real-world challenges.
              </p>
              <p className="text-lg">
                Hosted by <span className="font-semibold text-white">Sphere Hive</span> at <span className="font-semibold text-white">KVG College of Engineering</span>, this 36-hour event challenges participants to ideate, design, and develop SaaS products that can scale globally and serve millions of users.
              </p>
              <p className="text-lg">
                Our mission is to foster innovation in cloud computing, artificial intelligence, and modern web technologies while building a community of creators who are passionate about solving problems through software.
              </p>
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className="relative h-[500px]">
            {/* Floating SaaS Logos */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Cloud Icon */}
              <div className="absolute top-20 left-20 w-16 h-16 animate-float-slow">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
              </div>

              {/* AI Chip Icon */}
              <div className="absolute bottom-20 right-20 w-16 h-16 animate-float-reverse opacity-80">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
              </div>

              {/* Graph Icon */}
              <div className="absolute top-1/2 right-1/4 w-16 h-16 animate-float opacity-60">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
      
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-5deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
