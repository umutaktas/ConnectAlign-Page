import React from 'react';
import { useInView } from 'react-intersection-observer';
import { CheckCircle } from 'lucide-react';

/**
 * Feature Capabilities Section
 * Categorized list of capabilities
 */
const FeatureCapabilities = ({ capabilities, language }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 bg-white/5">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-gradient mb-16"
        >
          {language === 'tr' ? 'Yetenekler ve Özellikler' : 'Capabilities & Features'}
        </h2>

        <div className="max-w-6xl mx-auto space-y-12">
          {Object.entries(capabilities).map(([category, items], categoryIndex) => (
            <div
              key={categoryIndex}
              className="feature-card p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded"></span>
                {category}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCapabilities;
