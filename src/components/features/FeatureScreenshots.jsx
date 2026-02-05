import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Image } from 'lucide-react';

/**
 * Feature Screenshots Section
 * Placeholder for future screenshots
 */
const FeatureScreenshots = ({ data, language }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  if (!data.enabled) {
    return (
      <section ref={ref} className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-bold text-center text-gradient mb-16"
          >
            {language === 'tr' ? 'Ekran Görüntüleri' : 'Screenshots'}
          </h2>

          <div
            className="max-w-4xl mx-auto"
          >
            <div className="feature-card p-16 text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center mx-auto mb-6">
                <Image className="w-12 h-12 text-blue-400" />
              </div>
              <p className="text-gray-400 text-lg">
                {data.placeholderText}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // When enabled, render actual screenshots
  return (
    <section ref={ref} className="py-20 bg-black/20">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-gradient mb-16"
        >
          {language === 'tr' ? 'Ekran Görüntüleri' : 'Screenshots'}
        </h2>

        {/* TODO: Implement screenshot gallery when images are available */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Screenshot items will go here */}
        </div>
      </div>
    </section>
  );
};

export default FeatureScreenshots;
