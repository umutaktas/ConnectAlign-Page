import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

const CTA = ({ language }) => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const content = {
    tr: {
      headline: 'Dijital Dönüşüme Hemen Başlayın',
      subheadline: '14 gün ücretsiz deneme. Kredi kartı gerekmez.',
      cta1: 'Ücretsiz Demo İsteyin',
      cta2: 'Satış Ekibiyle Görüşün'
    },
    en: {
      headline: 'Start Your Digital Transformation Today',
      subheadline: '14-day free trial. No credit card required.',
      cta1: 'Request Free Demo',
      cta2: 'Talk to Sales Team'
    }
  };

  const text = content[language];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden aurora-bg">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center text-white max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-relaxed py-4" style={{ lineHeight: '1.3' }}>
            {text.headline}
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-blue-100">
            {text.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={() => navigate('/demo')}
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-10 py-6 rounded-lg shadow-xl transform hover:scale-[1.02] transition-all duration-300 group font-bold"
            >
              {text.cta1}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              onClick={() => navigate('/contact')}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-10 py-6 rounded-lg shadow-xl transform hover:scale-[1.02] transition-all duration-300 group"
            >
              <Phone className="mr-2 group-hover:rotate-12 transition-transform" />
              {text.cta2}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;