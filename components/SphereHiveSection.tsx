'use client';

import { useRef, useState } from 'react';
import { SparklesIcon } from '@heroicons/react/24/outline';
import ScrollFloat from './ScrollFloat';

export default function SphereHiveSection() {
  const [hovered, setHovered] = useState(false);

  const teamMembers = [
    { name: "Team Member 1", role: "Lead Organizer" },
    { name: "Team Member 2", role: "Tech Lead" },
    { name: "Team Member 3", role: "Event Coordinator" },
    { name: "Team Member 4", role: "Design Lead" },
    { name: "Team Member 5", role: "Marketing Lead" },
    { name: "Team Member 6", role: "Volunteer" },
  ];

  return (
    <section className="py-32 relative overflow-hidden" style={{ backgroundColor: '#060010' }}>
      {/* Background Hex Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(
              60deg,
              transparent,
              transparent 10px,
              rgba(147, 51, 234, 0.1) 10px,
              rgba(147, 51, 234, 0.1) 20px
            ),
            repeating-linear-gradient(
              -30deg,
              transparent,
              transparent 10px,
              rgba(59, 130, 246, 0.1) 10px,
              rgba(59, 130, 246, 0.1) 20px
            )
          `,
          animation: 'rotate 60s linear infinite'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Cinematic Intro */}
        <div className="text-center mb-20">
          <ScrollFloat
            containerClassName="mb-8"
            textClassName="text-white font-bold tracking-tight"
            animationDuration={1.2}
            stagger={0.04}
          >
            ORGANIZED BY SPHERE HIVE
          </ScrollFloat>
          
          {/* Subtitle with Fade */}
          <div className="mt-6">
            <p 
              className="text-2xl md:text-3xl font-light text-gray-300 mb-4 transition-all duration-1000"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              The Innovation Engine of{' '}
              <span className={`inline-block transition-all duration-500 ${
                hovered ? 'text-white scale-110' : 'text-purple-300'
              }`}>
                KVG College of Engineering
              </span>
            </p>
            
            {/* Collab Mention */}
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mt-6">
              <SparklesIcon className="w-4 h-4" />
              <span>with ❤️</span>
              <SparklesIcon className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* About Sphere Hive */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              Sphere Hive is the innovation and entrepreneurship cell of KVG College of Engineering, 
              dedicated to fostering creativity, innovation, and technological excellence. We bring together 
              students, faculty, and industry experts to create groundbreaking solutions that make a real impact.
            </p>
            
            <div className="mt-8 flex items-center justify-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100+</div>
                <div className="text-sm text-gray-400">Events Organized</div>
              </div>
              <div className="h-12 w-px bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-400">Projects Mentored</div>
              </div>
              <div className="h-12 w-px bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-400">Startups Incubated</div>
              </div>
            </div>
          </div>
        </div>

       
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
