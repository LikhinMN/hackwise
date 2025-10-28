'use client';

import { useRef } from 'react';
import { motion } from 'motion/react';
import { 
  HomeIcon, 
  WifiIcon, 
  LightBulbIcon, 
  MusicalNoteIcon 
} from '@heroicons/react/24/outline';
import ScrollFloat from './ScrollFloat';

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      title: "Food & Accommodation",
      description: "Complimentary meals and comfortable stay arrangements for all participants.",
      icon: HomeIcon,
    },
    {
      title: "24×7 Venue Access",
      description: "Round-the-clock access to venue facilities, perfect for late-night coding.",
      icon: WifiIcon,
    },
    {
      title: "Wi-Fi & Charging",
      description: "High-speed internet connectivity and dedicated charging stations.",
      icon: LightBulbIcon,
    },
    {
      title: "Mentor Support",
      description: "Expert mentors available throughout to guide and assist your project.",
      icon: LightBulbIcon,
    },
    {
      title: "Midnight Jam",
      description: "Music, energy drinks, and late-night networking to keep the energy high.",
      icon: MusicalNoteIcon,
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="py-32 relative overflow-hidden" 
      style={{ backgroundColor: '#060010' }}
    >
      {/* Animated Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 right-1/3 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{ backgroundColor: '#00C8FF' }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-72 h-72 rounded-full opacity-10 blur-3xl"
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
        <div className="text-center mb-16">
          <ScrollFloat
            containerClassName="mb-8"
            textClassName="text-white font-bold tracking-tight"
            animationDuration={1.2}
            stagger={0.04}
          >
            THE EXPERIENCE
          </ScrollFloat>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {experiences.map((experience, idx) => {
            const Icon = experience.icon;
            // Mobile bento: first and last cards span full width, rest are single column
            // Desktop: first card spans 2 columns, rest are single
            const mobileSpan = (idx === 0 || idx === experiences.length - 1) ? 'col-span-2' : '';
            const desktopSpan = idx === 0 ? 'lg:col-span-2' : '';
            const spanClass = `${mobileSpan} ${desktopSpan}`;
            return (
              <div
                key={idx}
                className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 transition-all duration-300 hover:shadow-xl group ${spanClass} overflow-hidden`}
              >
                {/* Shiny Border Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-purple-500/20 via-purple-400/40 to-purple-500/20 animate-shimmer"></div>
                  <div className="absolute inset-[2px] rounded-2xl bg-[#060010]"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {experience.title}
                </h3>

                 {/* Description */}
                 <p className="text-gray-300 text-sm leading-relaxed">
                   {experience.description}
                 </p>
                 </div>
               </div>
            );
          })}
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}