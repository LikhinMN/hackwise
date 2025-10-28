'use client';

import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { BeakerIcon, ComputerDesktopIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import ScrollFloat from './ScrollFloat';

export default function JudgingSection() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [hoveredJudge, setHoveredJudge] = useState<number | null>(null);

  const criteria = [
    { icon: BeakerIcon, category: "Innovation", weight: "25%", description: "Uniqueness and originality of the solution" },
    { icon: ComputerDesktopIcon, category: "Technical Execution", weight: "35%", description: "Code quality, architecture, and implementation" },
    { icon: RocketLaunchIcon, category: "Feasibility & Impact", weight: "25%", description: "Real-world applicability and market potential" },
    { icon: BeakerIcon, category: "Presentation", weight: "15%", description: "Demo quality and communication" },
  ];

  const judges = [
    {
      name: "Dr. Sarah Johnson",
      designation: "Principal, KVG College",
      department: "Computer Science",
    },
    {
      name: "Prof. Michael Chen",
      designation: "Industry Expert",
      department: "SaaS Solutions",
    },
    {
      name: "Dr. Emily Rodriguez",
      designation: "Research Head",
      department: "AI & Machine Learning",
    },
    {
      name: "Mr. David Kumar",
      designation: "Tech Entrepreneur",
      department: "Startup Incubation",
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden" style={{ backgroundColor: '#060010' }}>
      {/* Animated Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full opacity-12 blur-3xl"
          style={{ backgroundColor: '#00C8FF' }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: '#BC61F5' }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -25, 0],
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
            containerClassName="mb-4"
            textClassName="text-white font-bold tracking-tight"
            animationDuration={1.2}
            stagger={0.04}
          >
            JUDGING & EVALUATION
          </ScrollFloat>
          
          <p className="text-xl text-gray-300 mt-4">
            Evaluated by Mentors, Judged by Visionaries
          </p>
        </div>

        {/* Glass Table Layout */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
            {/* Table Header */}
            <div className="bg-white/10 border-b border-white/10 px-6 py-4">
              <h3 className="text-xl font-bold text-white">Evaluation Criteria</h3>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-white/10">
              {criteria.map((criterion, idx) => {
                const Icon = criterion.icon;
                return (
                  <div
                    key={idx}
                    className={`px-6 py-6 flex items-center gap-6 transition-all duration-300 cursor-pointer ${
                      hoveredRow === idx ? 'bg-white/10' : ''
                    }`}
                    onMouseEnter={() => setHoveredRow(idx)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      hoveredRow === idx ? 'bg-purple-500/30' : 'bg-white/5'
                    } transition-all duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h4 className="text-lg font-bold text-white">{criterion.category}</h4>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold">
                          {criterion.weight}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm mt-1">{criterion.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Judges Section */}
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Panel of Judges</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {judges.map((judge, idx) => (
              <div
                key={idx}
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-300 cursor-pointer ${
                  hoveredJudge === idx ? 'border-white/30 bg-white/10 shadow-xl scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredJudge(idx)}
                onMouseLeave={() => setHoveredJudge(null)}
              >
                {/* Placeholder for Photo */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl text-white font-bold">
                    {judge.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <h4 className="text-lg font-bold text-white text-center mb-1">
                  {judge.name}
                </h4>
                <p className="text-purple-300 text-center text-sm font-semibold mb-1">
                  {judge.designation}
                </p>
                <p className="text-gray-400 text-center text-xs">
                  {judge.department}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
