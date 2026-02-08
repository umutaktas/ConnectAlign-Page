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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pattern-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] via-[#1a1a2e]/80 to-[#1a1a2e]"></div>
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-teal-500/30 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto px-4"
        >
          <motion.h1
            className="text-4xl md:text-7xl font-extrabold leading-relaxed tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 py-4"
            style={{ fontFamily: "'Inter', 'Poppins', sans-serif", fontWeight: 800, letterSpacing: '-0.02em', lineHeight: '1.3' }}
          >
            {text.mainTitle}
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, type: "spring" }}
          className="relative mt-16 lg:mt-20 max-w-5xl mx-auto"
        >
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-xl"></div>
          <img
            className="relative rounded-xl shadow-2xl w-full border border-white/10"
            alt="ConnectAlign platform dashboard interface"
            src="/connect-align-main.png"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={() => navigate('/demo')}
            className="btn-primary text-lg group"
          >
            {text.cta1}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            onClick={scrollToFeatures}
            className="btn-secondary text-lg"
          >
            {text.cta2}
          </Button>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gray-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;