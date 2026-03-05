import React from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * Feature Overview Section
 * Displays consolidated feature description
 */
const FeatureOverview = ({ data, language }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 bg-white/5">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent"
        >
          {language === 'tr' ? 'Genel Bakış' : 'Overview'}
        </h2>

        {/* Single Description Card */}
        <div
          className="max-w-4xl mx-auto"
        >
          <div className="feature-card p-10 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/30">
            <p className="text-lg text-gray-200 leading-relaxed whitespace-pre-line">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureOverview;
