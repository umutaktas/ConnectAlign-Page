import React from 'react';
import * as Icons from 'lucide-react';

/**
 * Feature Hero Section
 * Large icon, title, tagline, and CTA button
 */
const FeatureHero = ({ data, language }) => {
  const Icon = Icons[data.icon] || Icons.Box;

  const scrollToContact = () => {
    // Scroll to footer contact section or open contact modal
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Icon */}
        <div
          className="inline-flex items-center justify-center w-24 h-24 rounded-2xl mb-8 shadow-ambient"
          style={{ backgroundImage: 'linear-gradient(135deg, #9e4200 0%, #ff6f00 100%)' }}
        >
          <Icon className="w-12 h-12 text-white" />
        </div>

        {/* Title */}
        <h1
          className="text-4xl md:text-6xl font-bold text-gradient mb-6"
        >
          {data.title}
        </h1>

        {/* Tagline */}
        <p
          className="text-xl text-on-surface-variant mb-10 leading-relaxed"
        >
          {data.tagline}
        </p>

        {/* CTA Button */}
        <div
        >
          <button
            onClick={scrollToContact}
            className="btn-primary text-lg"
          >
            {data.primaryCTA}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeatureHero;
