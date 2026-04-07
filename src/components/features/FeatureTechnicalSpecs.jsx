import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Cloud, Shield, Zap, Plug } from 'lucide-react';

/**
 * Feature Technical Specifications Section
 * Backend, API, Security, Integration details
 */
const FeatureTechnicalSpecs = ({ specs, language }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeTab, setActiveTab] = useState(Object.keys(specs)[0]);

  const iconMap = {
    backend: Code2,
    database: Database,
    api: Cloud,
    storage: Database,
    security: Shield,
    integration: Plug,
    firebase: Zap
  };

  const getIcon = (key) => {
    const Icon = iconMap[key] || Code2;
    return Icon;
  };

  return (
    <section ref={ref} className="py-20 bg-surface-container-low">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-on-surface display-tight mb-16">
          {language === 'tr' ? 'Teknik Özellikler' : 'Technical Specifications'}
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {Object.keys(specs).map((key) => {
              const Icon = getIcon(key);
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                    isActive
                      ? 'text-white shadow-ambient'
                      : 'bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container'
                  }`}
                  style={isActive ? { backgroundImage: 'linear-gradient(135deg, #9e4200 0%, #ff6f00 100%)' } : undefined}
                >
                  <Icon className="w-5 h-5" />
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </button>
              );
            })}
          </div>

          <div key={activeTab} className="feature-card p-8">
            <ul className="space-y-3">
              {specs[activeTab].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-on-surface-variant">
                  <span className="w-2 h-2 bg-[#ff6f00] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="leading-relaxed font-mono text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTechnicalSpecs;
