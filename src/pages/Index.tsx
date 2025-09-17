import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Catalog from '@/components/Catalog';
import CTASection from '@/components/CTASection';
import AboutUs from '@/components/AboutUs';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <Catalog />
      <CTASection />
      <AboutUs />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
