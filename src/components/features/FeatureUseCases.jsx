import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Lightbulb } from 'lucide-react';

/**
 * Feature Use Cases Section
 * Real-world scenario stories
 */
const FeatureUseCases = ({ useCases, language }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-on-surface display-tight mb-16">
          {language === 'tr' ? 'Gerçek Kullanım Senaryoları' : 'Real-World Use Cases'}
        </h2>

        <div className="max-w-6xl mx-auto space-y-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="feature-card p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundImage: 'linear-gradient(135deg, #9e4200 0%, #ff6f00 100%)' }}>
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-on-surface mb-4">{useCase.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed whitespace-pre-line">
                    {useCase.scenario}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureUseCases;
