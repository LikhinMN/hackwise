'use client';

import { useRef } from 'react';
import VariableProximity from './VariableProximity';

export default function StatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#060010' }}>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Stat */}
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-4">
              <VariableProximity
                label="1 Lakh+"
                fromFontVariationSettings="'wght' 400, 'wdth' 100"
                toFontVariationSettings="'wght' 900, 'wdth' 130"
                containerRef={containerRef}
                radius={80}
                falloff="gaussian"
                className="text-white"
              />
            </div>
            <div className="text-sm md:text-base text-gray-300">
              Prize Pool
            </div>
          </div>
          
          {/* Second Stat */}
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-4">
              <VariableProximity
                label="3 Days"
                fromFontVariationSettings="'wght' 400, 'wdth' 100"
                toFontVariationSettings="'wght' 900, 'wdth' 130"
                containerRef={containerRef}
                radius={80}
                falloff="gaussian"
                className="text-white"
              />
            </div>
            <div className="text-sm md:text-base text-gray-300">
              Event Duration
            </div>
          </div>
          
          {/* Third Stat */}
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-4">
              <VariableProximity
                label="500+"
                fromFontVariationSettings="'wght' 400, 'wdth' 100"
                toFontVariationSettings="'wght' 900, 'wdth' 130"
                containerRef={containerRef}
                radius={80}
                falloff="gaussian"
                className="text-white"
              />
            </div>
            <div className="text-sm md:text-base text-gray-300">
              Expected Participants
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle background overlay for depth */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none" />
    </section>
  );
}
