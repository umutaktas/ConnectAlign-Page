import React from 'react';
import { useInView } from 'react-intersection-observer';
import * as Icons from 'lucide-react';

/**
 * Feature Benefits Section
 * Grid of benefits with icons
 */
const FeatureBenefits = ({ benefits, language }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 bg-surface-container-low">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-on-surface display-tight mb-16">
          {language === 'tr' ? 'Temel Faydalar' : 'Key Benefits'}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = Icons[benefit.icon];

            return (
              <div key={index} className="feature-card p-6">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundImage: 'linear-gradient(135deg, #9e4200 0%, #ff6f00 100%)' }}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-3">
                  {benefit.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureBenefits;
