'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { AcademicCapIcon, BoltIcon, TrophyIcon } from '@heroicons/react/24/outline';
import ScrollFloat from './ScrollFloat';

interface DayEvent {
  time: string;
  activity: string;
  type: 'workshop' | 'hackathon' | 'pitch';
}

interface Day {
  title: string;
  subtitle: string;
  icon: any;
  color: string;
  events: DayEvent[];
}

const days: Day[] = [
  {
    title: "Day 1",
    subtitle: "Learning & Prep (Workshops)",
    icon: AcademicCapIcon,
    color: "blue",
    events: [
      { time: "9:30 AM", activity: "Participant check-in & breakfast", type: 'workshop' },
      { time: "10:00 AM", activity: "Opening note + orientation", type: 'workshop' },
      { time: "10:30 AM", activity: "Hands-on Workshop: AI/ML for SaaS Product Building", type: 'workshop' },
      { time: "1:00 PM", activity: "Lunch break", type: 'workshop' },
      { time: "2:00 PM", activity: "Post-lunch continuation of workshop and Q&A", type: 'workshop' },
      { time: "4:00 PM", activity: "Evening snack stall & informal networking", type: 'workshop' },
      { time: "5:00 PM", activity: "Drop-off to accommodation", type: 'workshop' },
    ]
  },
  {
    title: "Day 2",
    subtitle: "Hackathon Kickoff",
    icon: BoltIcon,
    color: "purple",
    events: [
      { time: "7:00 AM", activity: "Registration & breakfast", type: 'hackathon' },
      { time: "8:30 AM", activity: "Inauguration Ceremony", type: 'hackathon' },
      { time: "10:00 AM", activity: "Hackathon begins", type: 'hackathon' },
      { time: "1:00 PM", activity: "Lunch", type: 'hackathon' },
      { time: "4:00 PM", activity: "Snacks", type: 'hackathon' },
      { time: "5:00 PM", activity: "Checkpoint 1 - Mentor Review", type: 'hackathon' },
      { time: "9:00 PM", activity: "Dinner", type: 'hackathon' },
      { time: "11:00 PM", activity: "Midnight Jamming Session", type: 'hackathon' },
    ]
  },
  {
    title: "Day 3",
    subtitle: "Build, Pitch, Celebrate",
    icon: TrophyIcon,
    color: "yellow",
    events: [
      { time: "9:30 AM", activity: "Checkpoint 2 - Progress Review", type: 'pitch' },
      { time: "1:00 PM", activity: "Lunch", type: 'pitch' },
      { time: "4:00 PM", activity: "Snacks", type: 'pitch' },
      { time: "5:00 PM", activity: "Critical Checkpoint - Final polish before submission", type: 'pitch' },
      { time: "7:00 PM", activity: "Submission deadline", type: 'pitch' },
      { time: "8:00 PM", activity: "Final Presentations - Top 10 teams", type: 'pitch' },
      { time: "9:30 PM", activity: "Closing & Award Ceremony", type: 'pitch' },
      { time: "11:00 PM", activity: "Event concludes", type: 'pitch' },
    ]
  }
];

export default function ScheduleSection() {
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  return (
    <section id="schedule" className="py-32 relative overflow-hidden" style={{ backgroundColor: '#060010' }}>
      {/* Animated Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full opacity-12 blur-3xl"
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
          className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: '#BC61F5' }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -25, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent**) 1px)',
          backgroundSize: '50px 50px'
        }}></div>
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
            EVENT SCHEDULE
          </ScrollFloat>

          {/* Pulse Dots */}
          <div className="flex justify-center gap-3 mt-6">
            {days.map((_, idx) => (
              <div key={idx} className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{
                animationDelay: `${idx * 0.3}s`
              }}></div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {days.map((day, idx) => (
            <div key={idx}>
              <div 
                className={`bg-linear-to-r from-${day.color}-900/20 to-${day.color}-800/10 rounded-2xl p-8 border border-${day.color}-500/30 cursor-pointer transition-all duration-500 hover:border-${day.color}-400/60 hover:shadow-lg hover:shadow-${day.color}-500/20 ${
                  expandedDay === idx ? 'shadow-xl' : ''
                }`}
                onClick={() => setExpandedDay(expandedDay === idx ? null : idx)}
              >
                <div className="flex items-center gap-6 mb-4">
                  <div className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                    <day.icon className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-1">{day.title}</h3>
                    <p className="text-xl text-gray-300">{day.subtitle}</p>
                  </div>
                </div>

                {/* Expandable Timeline */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  expandedDay === idx ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    {day.events.map((event, eventIdx) => (
                      <div key={eventIdx} className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                        <div className="text-sm font-mono bg-white/5 px-3 py-1 rounded">
                          {event.time}
                        </div>
                        <div className="flex-1">{event.activity}</div>
                        <div className={`px-2 py-1 rounded text-xs bg-${day.color}-500/20 text-${day.color}-300`}>
                          {event.type}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expand Indicator */}
                <div className="text-center mt-4 text-gray-400 text-sm">
                  {expandedDay === idx ? 'Click to collapse ↑' : 'Click to view full schedule ↓'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
