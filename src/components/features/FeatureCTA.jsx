import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, MessageCircle } from 'lucide-react';

/**
 * Feature CTA Section
 * Call-to-action for demo request
 */
const FeatureCTA = ({ language }) => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center feature-card p-12">
          <MessageCircle className="w-16 h-16 text-blue-400 mx-auto mb-6" />

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {language === 'tr' ? 'Bu Özelliği Keşfetmeye Hazır mısınız?' : 'Ready to Explore This Feature?'}
          </h2>

          <p className="text-xl text-gray-300 mb-8">
            {language === 'tr'
              ? 'Ücretsiz demo ile ConnectAlign\'ın gücünü keşfedin. Satış ekibimiz size yardımcı olmak için hazır.'
              : 'Discover the power of ConnectAlign with a free demo. Our sales team is ready to help you.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/demo')}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              {language === 'tr' ? 'Ücretsiz Demo İsteyin' : 'Request Free Demo'}
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-all border border-white/20"
            >
              {language === 'tr' ? 'Satış Ekibiyle İletişime Geçin' : 'Contact Sales Team'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCTA;
