import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      // Wait for DOM to render before scrolling
      requestAnimationFrame(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
      // Clear state so back navigation doesn't re-scroll
      window.history.replaceState({}, '');
    }
  }, [location.state]);

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
