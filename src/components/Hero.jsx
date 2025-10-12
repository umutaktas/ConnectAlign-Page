import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = ({ language }) => {
  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const content = {
    tr: {
      headline: 'Çalışanlarınızla Bağlantıda Kalın, Dijitalleşin',
      subheadline: 'ConnectAlign ile işletmenizi dijital dönüşüme taşıyın. İç iletişimden belge yönetimine, tek platformda hepsini yönetin.',
      cta1: 'Ücretsiz Demo İsteyin',
      cta2: 'Özellikleri Keşfedin'
    },
    en: {
      headline: 'Stay Connected with Your Employees, Go Digital',
      subheadline: 'Transform your business with ConnectAlign. Manage everything from internal communication to document management in one platform.',
      cta1: 'Request Free Demo',
      cta2: 'Explore Features'
    }
  };

  const text = content[language];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pattern-bg">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold leading-tight"
            >
              {text.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-200 leading-relaxed"
            >
              {text.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button className="btn-primary text-lg group">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-6 opacity-20"></div>
              <img 
                className="relative rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500" 
                alt="Modern dashboard mockup showing ConnectAlign platform interface"
               src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;