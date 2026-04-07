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
    <section ref={ref} className="py-24 bg-surface-container-low">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="overline mb-4">Infrastructure</p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl md:text-5xl font-extrabold text-on-surface display-tight max-w-3xl mx-auto"
            style={{ lineHeight: '1.1' }}
          >
            {text.headline}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {text.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-surface-container-lowest shadow-ambient"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-surface-container-low rounded-full mb-4">
                <item.icon className="w-10 h-10 text-[#ff6f00]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-on-surface">{item.title}</h3>
              <p className="text-on-surface-variant">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;