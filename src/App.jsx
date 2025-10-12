import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import ValueProposition from '@/components/ValueProposition';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Technology from '@/components/Technology';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const [language, setLanguage] = useState('tr');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'tr' ? 'en' : 'tr');
  };

  return (
    <>
      <Helmet>
        <title>{language === 'tr' ? 'ConnectAlign - Çalışanlarınızla Bağlantıda Kalın' : 'ConnectAlign - Stay Connected with Your Employees'}</title>
        <meta name="description" content={language === 'tr' ? 'ConnectAlign ile işletmenizi dijital dönüşüme taşıyın. İç iletişimden belge yönetimine, tek platformda hepsini yönetin.' : 'Transform your business with ConnectAlign. Manage everything from internal communication to document management in one platform.'} />
        <meta property="og:title" content="ConnectAlign - Digital Transformation Platform" />
        <meta property="og:description" content="All-in-one platform for internal communication, document management, and employee engagement" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <Header language={language} toggleLanguage={toggleLanguage} />
        <Hero language={language} />
        <Stats language={language} />
        <ValueProposition language={language} />
        <Features language={language} />
        <Pricing language={language} />
        <Technology language={language} />
        <FAQ language={language} />
        <CTA language={language} />
        <Footer language={language} />
        <Toaster />
      </div>
    </>
  );
}

export default App;