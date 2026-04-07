import React from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * Feature Overview Section
 * Displays consolidated feature description
 */
const FeatureOverview = ({ data, language }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 bg-surface-container-low">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center mb-12 text-on-surface display-tight">
          {language === 'tr' ? 'Genel Bakış' : 'Overview'}
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="feature-card p-10 engagement-pulse">
            <p className="text-lg text-on-surface leading-relaxed whitespace-pre-line">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureOverview;
