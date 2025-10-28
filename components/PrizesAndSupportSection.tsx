'use client';

import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { CurrencyDollarIcon, TrophyIcon, SparklesIcon } from '@heroicons/react/24/outline';
import ScrollFloat from './ScrollFloat';

export default function PrizesAndSupportSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const prizes = [
    {
      rank: 1,
      icon: TrophyIcon,
      prize: "50K",
      title: "Overall First Prize",
      description: "Cash prize + Certificate + Goodies",
      color: "yellow",
      hoverText: "Plus startup incubation opportunity",
    },
    {
      rank: 2,
      icon: CurrencyDollarIcon,
      prize: "30K",
      title: "Overall Second Prize",
      description: "Cash prize + Certificate + Goodies",
      color: "gray",
      hoverText: "Plus mentorship support",
    },
    {
      rank: 3,
      icon: SparklesIcon,
      prize: "20K",
      title: "Overall Third Prize",
      description: "Cash prize + Certificate + Goodies",
      color: "bronze",
      hoverText: "Plus networking opportunities",
    }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  };

  return (
    <section className="py-32 relative overflow-hidden" style={{ backgroundColor: '#060010' }}>
      {/* Animated Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full opacity-12 blur-3xl"
          style={{ backgroundColor: '#00C8FF' }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 25, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: '#BC61F5' }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -25, 0],
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
            PRIZES & SUPPORT
          </ScrollFloat>
        </div>

        {/* 3D Stacked Cards */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {prizes.map((prize, idx) => {
            const Icon = prize.icon;
            return (
              <div
                key={idx}
                className="relative transition-all duration-300"
                style={{
                  transform: idx === 0 ? 'translateY(-20px)' : idx === 1 ? 'translateY(-10px)' : 'translateY(0)',
                }}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={(e) => {
                  setHoveredCard(null);
                  handleMouseLeave(e);
                }}
                onMouseMove={handleMouseMove}
              >
                <div
                  className={`relative rounded-2xl p-8 border-2 transition-all duration-500 cursor-pointer ${
                    prize.color === 'yellow' ? 'border-yellow-500/50 bg-yellow-900/20' :
                    prize.color === 'gray' ? 'border-gray-400/50 bg-gray-900/20' :
                    'border-orange-500/50 bg-orange-900/20'
                  } ${
                    hoveredCard === idx ? 'shadow-2xl scale-105 z-10' : 'shadow-lg'
                  }`}
                  style={{
                    background: prize.color === 'yellow' 
                      ? 'linear-gradient(135deg, rgba(234, 179, 8, 0.1) 0%, rgba(234, 179, 8, 0.05) 100%)'
                      : prize.color === 'gray'
                      ? 'linear-gradient(135deg, rgba(156, 163, 175, 0.1) 0%, rgba(156, 163, 175, 0.05) 100%)'
                      : 'linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(249, 115, 22, 0.05) 100%)'
                  }}
                >
                  {/* Glowing Border Effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl ${
                      hoveredCard === idx
                        ? prize.color === 'yellow'
                          ? 'bg-yellow-500/20 blur-xl'
                          : prize.color === 'gray'
                          ? 'bg-gray-400/20 blur-xl'
                          : 'bg-orange-500/20 blur-xl'
                        : ''
                    } transition-all duration-500 -z-10`}
                  />

                  {/* Medal Indicator */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl">
                      {idx === 0 ? '🥇' : idx === 1 ? '🥈' : '🥉'}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-xl flex items-center justify-center mb-6 ${
                    prize.color === 'yellow' ? 'bg-yellow-500/20' :
                    prize.color === 'gray' ? 'bg-gray-500/20' :
                    'bg-orange-500/20'
                  }`}>
                    <Icon className={`w-12 h-12 ${
                      prize.color === 'yellow' ? 'text-yellow-300' :
                      prize.color === 'gray' ? 'text-gray-300' :
                      'text-orange-300'
                    }`} />
                  </div>

                  {/* Prize Amount */}
                  <div className="text-5xl font-black text-white mb-4 font-mono">
                    {prize.prize}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2">{prize.title}</h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 text-sm">{prize.description}</p>

                  {/* Hover Reveal Text */}
                  <div
                    className={`text-sm font-medium transition-all duration-300 ${
                      hoveredCard === idx
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-2 h-0 overflow-hidden'
                    }`}
                  >
                    <p className={`${
                      prize.color === 'yellow' ? 'text-yellow-300' :
                      prize.color === 'gray' ? 'text-gray-300' :
                      'text-orange-300'
                    }`}>
                      {prize.hoverText}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Startup Support Note */}
        <div className="max-w-4xl mx-auto mt-16 text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <SparklesIcon className="w-8 h-8 text-purple-400" />
            <h3 className="text-2xl font-bold text-white">Startup Incubation</h3>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed">
            Top startups get incubated under KVGCE with <span className="font-semibold text-purple-300">20% equity partnership</span> and mentorship support.
          </p>
        </div>
      </div>
    </section>
  );
}
