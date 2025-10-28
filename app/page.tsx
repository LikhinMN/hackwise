'use client';

import { useRef } from 'react';
import LaserFlow from '@/components/LaserFlow'; 
import Navbar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import CompaniesLogo from '@/components/CompaniesLogo';
import Lanyard from '@/components/Lanyard';
import StatsSection from '@/components/StatsSection';
import ScheduleSection from '@/components/ScheduleSection';
import PrizesAndSupportSection from '@/components/PrizesAndSupportSection';
import JudgingSection from '@/components/JudgingSection';
import ExperienceSection from '@/components/ExperienceSection';
import SphereHiveSection from '@/components/SphereHiveSection';
import AboutHackwiseSection from '@/components/AboutHackwiseSection';
import RoundsAndFormatSection from '@/components/RoundsAndFormatSection';

export default function Home() {
  const revealImgRef = useRef<HTMLImageElement>(null);


  return (
    <>
      {/* Hero Section */}
      <div 
        style={{ 
          height: '100vh', 
          position: 'relative', 
          overflow: 'hidden',
          backgroundColor: '#060010'
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const el = revealImgRef.current;
          if (el) {
            el.style.setProperty('--mx', `${x}px`);
            el.style.setProperty('--my', `${y + rect.height * 0.5}px`);
          }
        }}
        onMouseLeave={() => {
          const el = revealImgRef.current;
          if (el) {
            el.style.setProperty('--mx', '-9999px');
            el.style.setProperty('--my', '-9999px');
          }
        }}
      >
        {/* <img
          ref={revealImgRef}
          src="/bg/hero-bg.jpeg"
          alt="Reveal effect"
          style={{
            position: 'absolute',
            width: '100%',
            top: '-50%',
            zIndex: 5,
            mixBlendMode: 'lighten',
            opacity: 0.3,
            pointerEvents: 'none',
            WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
            maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat'
          } as React.CSSProperties}
        /> */}
        <Navbar />
        <HeroSection />
      </div>

      {/* Companies Logo Section */}
      <CompaniesLogo />

      {/* 3D Lanyard Section */}
      <Lanyard />

      {/* Stats Section */}
      <StatsSection />



      {/* Schedule Section */}
      <ScheduleSection />

      {/* Prizes & Support Section */}
      <PrizesAndSupportSection />

      {/* Judging Section */}
      <JudgingSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Rounds & Format Section */}
      <RoundsAndFormatSection />
   
      {/* Sphere Hive Section */}
      <SphereHiveSection />

      {/* About Hackwise Section */}
      <AboutHackwiseSection />
    </>
  );
}
