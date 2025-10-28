'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import ScrollFloat from './ScrollFloat';

export default function RoundsAndFormatSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const rounds = [
    {
      number: 1,
      title: "Online Screening",
      subtitle: "Round 1",
      description: "Submit your innovative SaaS idea and get a chance to participate in the final hackathon.",
      details: [
        "Submit idea on Unstop (PPT + Concept note)",
        "Top 30 teams shortlisted"
      ],
      cta: {
        text: "Submit via Unstop",
        link: "https://unstop.com/hackathons/hackwise-2-0-kvg-college-of-engineering-sullia-307122" // Add actual Unstop link
      },
      gradient: "from-purple-500 to-pink-500",
      glowColor: "rgba(168, 85, 247, 0.4)",
    },
    {
      number: 2,
      title: "Onsite Hackathon",
      subtitle: "Round 2",
      location: "@ KVGCE",
      description: "Build your SaaS solution in an intense 36-hour coding marathon.",
      details: [
        "36-hour build session",
        "₹500/team (includes food & stay)"
      ],
      cta: {
        text: "Learn More",
        link: "#"
      },
      gradient: "from-blue-500 to-cyan-500",
      glowColor: "rgba(59, 130, 246, 0.4)",
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden" style={{ backgroundColor: '#060010' }}>
      {/* Animated Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-12 blur-3xl"
          style={{ backgroundColor: '#00C8FF' }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 35, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: '#BC61F5' }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -35, 0],
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
        <div className="text-center mb-16">
          <ScrollFloat
            containerClassName="mb-4"
            textClassName="text-white font-bold tracking-tight"
            animationDuration={1.2}
            stagger={0.04}
          >
            ROUNDS & FORMAT
          </ScrollFloat>
          <p className="text-gray-400 text-lg">Two rounds to victory</p>
        </div>

        {/* Rounds Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {rounds.map((round, idx) => (
            <div
              key={idx}
              className="relative group"
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glowing Border */}
              <div 
                className="absolute -inset-1 rounded-3xl blur-lg transition-all duration-500"
                style={{ 
                  opacity: hoveredCard === idx ? 1 : 0,
                  background: `linear-gradient(135deg, ${round.glowColor}, transparent)`
                }}
              ></div>
              
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 transition-all duration-500 hover:border-white/20 overflow-hidden h-full">

                {/* Content */}
                <div className="relative z-10">
                  {/* Round Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center font-bold text-white text-xl shadow-lg">
                      {round.number}
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                        {round.subtitle}
                      </div>
                      <div className="text-lg font-bold text-white">
                        {round.title}
                      </div>
                    </div>
                  </div>

                  {/* Location (for Round 2) */}
                  {round.location && (
                    <div className="mb-4 flex items-center gap-2 text-cyan-400">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm font-medium">{round.location}</span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {round.description}
                  </p>

                  {/* Details List */}
                  <div className="space-y-3 mb-6">
                    {round.details.map((detail, detailIdx) => (
                      <div 
                        key={detailIdx}
                        className="flex items-start gap-3 opacity-80 hover:opacity-100 transition-opacity"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2 shrink-0"></div>
                        <span className="text-gray-400 text-sm leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href={round.cta.link}
                    target={round.cta.link.startsWith('http') ? '_blank' : '_self'}
                    rel={round.cta.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-white/30 bg-transparent text-white font-medium hover:border-white hover:bg-white/5 transition-all duration-300 transform hover:scale-105 group/btn"
                  >
                    <span>{round.cta.text}</span>
                    <ArrowTopRightOnSquareIcon className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Qualified teams will receive official confirmation via email
          </p>
        </div>
      </div>
    </section>
  );
}

