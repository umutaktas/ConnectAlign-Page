import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cloud, Shield, Zap, MapPin } from 'lucide-react';

const Technology = ({ language }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const content = {
    tr: {
      headline: 'Modern Teknoloji, Güvenilir Altyapı',
      items: [
        { icon: Cloud, title: 'Bulut Tabanlı', description: 'Azure/AWS altyapısı' },
        { icon: Shield, title: 'ISO 27001', description: 'Güvenlik sertifikası' },
        { icon: Zap, title: '99.9% Uptime', description: 'Kesintisiz hizmet' },
        { icon: MapPin, title: 'Türkiye Veri Merkezi', description: 'GDPR uyumlu' }
      ]
    },
    en: {
      headline: 'Modern Technology, Reliable Infrastructure',
      items: [
        { icon: Cloud, title: 'Cloud Based', description: 'Azure/AWS infrastructure' },
        { icon: Shield, title: 'ISO 27001', description: 'Security certification' },
        { icon: Zap, title: '99.9% Uptime', description: 'Uninterrupted service' },
        { icon: MapPin, title: 'Turkey Data Center', description: 'GDPR compliant' }
      ]
    }
  };

  const text = content[language];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white leading-relaxed py-4"
          style={{ lineHeight: '1.3' }}
        >
          {text.headline}
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8">
          {text.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="text-center text-white"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-lg rounded-full mb-4">
                <item.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-blue-100">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;