
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TestimonialBar from './components/TestimonialBar';
import HowItWorks from './components/HowItWorks';
import CriticalMoment from './components/CriticalMoment';
import StrategicSteps from './components/StrategicSteps';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import FAQ from './components/FAQ';
import FinalRecap from './components/FinalRecap';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileStickyFooter from './components/MobileStickyFooter';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import ScrollReveal from './components/ScrollReveal';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative bg-white">
      <Navbar />
      <main className="flex-grow overflow-x-hidden">
        <section id="home">
          <Hero />
        </section>
        
        <ScrollReveal animation="fade-up">
          <TestimonialBar />
        </ScrollReveal>

        <ScrollReveal animation="fade-up">
          <HowItWorks />
        </ScrollReveal>

        <ScrollReveal animation="fade-up">
          <CriticalMoment />
        </CriticalMoment>

        <StrategicSteps />

        <section id="why-us" className="bg-white py-12 md:py-24">
          <WhyChooseUs />
        </section>

        <section id="about" className="bg-slate-50/50 py-12 md:py-24 overflow-hidden">
          <About />
        </section>
        
        <section id="services" className="bg-white py-12 md:py-24">
          <Services />
        </section>
        
        <section id="faq" className="bg-slate-50/50 py-12 md:py-24">
          <ScrollReveal animation="fade-up">
            <FAQ />
          </ScrollReveal>
        </section>

        <FinalRecap />
        
        <section id="contact" className="bg-slate-950 text-white pt-12 md:pt-24 pb-8 md:pb-12">
          <Contact />
        </section>
      </main>
      <Footer />
      <MobileStickyFooter />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default App;
