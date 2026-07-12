import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = ({ language }) => {
  const navigate = useNavigate();

  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const content = {
    tr: {
      mainTitle: 'Ekibinizi Bağlayın, İşinizi Hizalayın',
      cta1: 'Ücretsiz Demo İsteyin',
      cta2: 'Özellikleri Keşfedin'
    },
    en: {
      mainTitle: 'Connect Your Team, Align Your Business',
      cta1: 'Request Free Demo',
      cta2: 'Explore Features'
    }
  };

  const text = content[language];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-surface">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#ff6f00]/10 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#ffe0cc]/40 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-[#9e4200]/5 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        {/* Asymmetric layout: headline left, CTA right */}
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold display-tight text-on-surface"
              style={{ lineHeight: '1.05' }}
            >
              {text.mainTitle.split(',')[0]},
              <span className="block text-gradient mt-2">{text.mainTitle.split(',')[1]?.trim()}</span>
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-4 flex flex-col gap-3 lg:items-end"
          >
            <Button
              onClick={() => navigate('/demo')}
              className="btn-primary text-base group w-full lg:w-auto"
            >
              {text.cta1}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={scrollToFeatures}
              className="btn-secondary text-base w-full lg:w-auto"
            >
              {text.cta2}
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="relative mt-20 max-w-6xl mx-auto"
        >
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-[#9e4200]/10 to-[#ff6f00]/10 blur-2xl"></div>
          <img
            className="relative rounded-2xl shadow-ambient-lg w-full"
            alt={language === 'tr' ? 'ConnectAlign platform yönetim paneli arayüzü' : 'ConnectAlign platform dashboard interface'}
            src="/connect-align-main.png"
            width="1240"
            height="742"
            fetchpriority="high"
          />
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full flex items-start justify-center p-2 bg-surface-container-low">
          <div className="w-1 h-2 bg-[#ff6f00] rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;