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
    <section
      ref={ref}
      className="py-28 relative overflow-hidden"
      style={{ backgroundImage: 'linear-gradient(135deg, #9e4200 0%, #ff6f00 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center text-white max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 display-tight" style={{ lineHeight: '1.1' }}>
            {text.headline}
          </h2>

          <p className="text-xl md:text-2xl mb-12 text-white/85">
            {text.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate('/demo')}
              className="bg-white text-[#9e4200] hover:bg-surface-container-low text-base px-8 py-6 rounded-lg shadow-ambient transition-all duration-300 group font-semibold"
            >
              {text.cta1}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              onClick={() => navigate('/contact')}
              className="bg-white/10 backdrop-blur-md text-white hover:bg-white/20 text-base px-8 py-6 rounded-lg transition-all duration-300 group font-semibold"
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