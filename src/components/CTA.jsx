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
    <section ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NGgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRoMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/30 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300/30 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-300/30 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center text-white max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
            {text.headline}
          </h2>

          <p className="text-xl md:text-2xl mb-16 text-white/90 font-medium">
            {text.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              onClick={() => handleCTAClick(text.cta1)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-white text-blue-600 hover:text-purple-600 text-lg font-bold px-12 py-6 rounded-2xl shadow-2xl transform transition-all duration-300 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                {text.cta1}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.button>

            <motion.button
              onClick={() => handleCTAClick(text.cta2)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white/20 text-lg font-bold px-12 py-6 rounded-2xl shadow-2xl transform transition-all duration-300 group"
            >
              <Phone className="inline mr-2 group-hover:rotate-12 transition-transform" />
              {text.cta2}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
