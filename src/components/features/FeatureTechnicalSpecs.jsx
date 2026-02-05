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
    <section ref={ref} className="py-20 bg-white/5">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-gradient mb-16"
        >
          {language === 'tr' ? 'Teknik Özellikler' : 'Technical Specifications'}
        </h2>

        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {Object.keys(specs).map((key) => {
              const Icon = getIcon(key);
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                    activeTab === key
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div
            key={activeTab}
            className="feature-card p-8"
          >
            <ul className="space-y-3">
              {specs[activeTab].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
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
