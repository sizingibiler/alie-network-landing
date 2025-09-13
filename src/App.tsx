import React from 'react';
import { TopTicker } from './components/TopTicker';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TrustedBySection } from './components/TrustedBySection';
import { ServicesSection } from './components/ServicesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { InsightsSection } from './components/InsightsSection';
import { WhitepaperSection } from './components/WhitepaperSection';
import { TeamSection } from './components/TeamSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SectionDivider } from './components/SectionDivider';
import { useAnimationObserver } from './hooks/useAnimationObserver';

export default function App() {
  useAnimationObserver();
  
  return (
    <div className="bg-black text-white min-h-screen font-montserrat overflow-x-hidden scroll-smooth antialiased">
      <TopTicker />
      <Header />
      <HeroSection />
      <TrustedBySection />
      <SectionDivider />
      <ServicesSection />
      <SectionDivider />
      <HowItWorksSection />
      <SectionDivider />
      <InsightsSection />
      <SectionDivider />
      <WhitepaperSection />
      <SectionDivider />
      <TeamSection />
      <SectionDivider />
      <ContactSection />
      <Footer />
    </div>
  );
}