import React from 'react';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import ValueProposition from '@/components/ValueProposition';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Technology from '@/components/Technology';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

/**
 * HomePage Component
 * Main landing page with all sections
 */
const HomePage = ({ language }) => {
  return (
    <main>
      <Hero language={language} />
      <Stats language={language} />
      <ValueProposition language={language} />
      <Features language={language} />
      <Pricing language={language} />
      <Technology language={language} />
      <FAQ language={language} />
      <CTA language={language} />
    </main>
  );
};

export default HomePage;
