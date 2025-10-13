import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Building2, Zap, Headphones } from 'lucide-react';

const Stats = ({ language }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const content = {
    tr: {
      stats: [
        { icon: Users, value: '500+', label: 'Aktif Kullanıcı' },
        { icon: Building2, value: '50+', label: 'Şirket' },
        { icon: Zap, value: '99.9%', label: 'Uptime' },
        { icon: Headphones, value: '7/24', label: 'Destek' }
      ]
    },
    en: {
      stats: [
        { icon: Users, value: '500+', label: 'Active Users' },
        { icon: Building2, value: '50+', label: 'Companies' },
        { icon: Zap, value: '99.9%', label: 'Uptime' },
        { icon: Headphones, value: '24/7', label: 'Support' }
      ]
    }
  };

  const stats = content[language].stats;

  return (
    <section ref={ref} className="py-20 bg-[#1a1a2e]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center p-4 rounded-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-blue-400" />
              </div>
              <motion.div
                className="text-4xl font-bold text-white mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;