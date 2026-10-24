import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
// import { Expertise } from './components/Expertise';
import { SecStackHQ } from './components/SecStackHQ';
// import { Approach } from './components/Approach';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>(
    'Offensive Security & Penetration Testing'
  );

  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'services',
      'projects',
      // 'expertise',
      'secstackhq',
      // 'approach',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // offset for navbar

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForContact(serviceTitle);
  };

  const handleSelectProjectForContact = (projectTitle: string) => {
    setSelectedServiceForContact(`Project Discussion: ${projectTitle}`);
    handleScrollToContact();
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Services onSelectService={handleSelectService} />
        <Projects onSelectProjectForContact={handleSelectProjectForContact} />
        {/* <Expertise /> */}
        <SecStackHQ onCtaClick={handleScrollToContact} />
        {/* <Approach /> */}
        <Testimonials onCtaClick={handleScrollToContact} />
        <Contact preSelectedService={selectedServiceForContact} />
      </main>

      {/* Dark Navy Footer */}
      <Footer />
    </div>
  );
}
