import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const CTA = ({ language }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const handleCTAClick = (type) => {
    toast({
      title: '🚀 ' + (language === 'tr' ? 'Harika!' : 'Awesome!'),
      description: language === 'tr'
        ? `${type} talebiniz alındı! Ekibimiz en kısa sürede sizinle iletişime geçecek.`
        : `Your ${type} request has been received! Our team will contact you shortly.`,
    });
  };

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
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>

      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center text-white max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {text.headline}
          </h2>

          <p className="text-xl md:text-2xl mb-12 text-blue-100">
            {text.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={() => handleCTAClick(text.cta1)}
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-10 py-6 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 group"
            >
              {text.cta1}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              onClick={() => handleCTAClick(text.cta2)}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-10 py-6 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 group"
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
