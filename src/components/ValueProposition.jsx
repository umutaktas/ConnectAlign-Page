import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { XCircle, CheckCircle } from 'lucide-react';

const ValueProposition = ({ language }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const content = {
    tr: {
      headline: 'İşletmeniz İçin Tek Bir Platform',
      problems: [
        'Dağınık iletişim kanalları',
        'Kaybolmuş dokümanlar',
        'Düşük çalışan bağlılığı',
        'Manuel süreçler'
      ],
      solutions: [
        'Merkezi iletişim platformu',
        'Dijital doküman yönetimi',
        'İnteraktif çalışan portalı',
        'Otomasyon ve verimlilik'
      ],
      problemTitle: 'Eski Yöntemlerin Zorlukları',
      solutionTitle: 'ConnectAlign ile Çözümler'
    },
    en: {
      headline: 'One Platform for Your Business',
      problems: [
        'Scattered communication channels',
        'Lost documents',
        'Low employee engagement',
        'Manual processes'
      ],
      solutions: [
        'Centralized communication platform',
        'Digital document management',
        'Interactive employee portal',
        'Automation and efficiency'
      ],
      problemTitle: 'Challenges of Old Methods',
      solutionTitle: 'Solutions with ConnectAlign'
    }
  };

  const text = content[language];

  return (
    <section ref={ref} className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-on-surface display-tight max-w-3xl mx-auto"
          style={{ lineHeight: '1.1' }}
        >
          {text.headline}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="bg-surface-container-lowest rounded-2xl p-8 shadow-ambient"
            style={{ borderLeft: '4px solid #c4c6c9' }}
          >
            <div className="flex items-center mb-6">
              <XCircle className="w-10 h-10 text-on-surface-variant mr-4" />
              <h3 className="text-2xl font-bold text-on-surface">{text.problemTitle}</h3>
            </div>
            <ul className="space-y-4">
              {text.problems.map((problem, index) => (
                <li key={index} className="flex items-start">
                  <XCircle className="w-5 h-5 text-on-surface-variant mr-3 mt-1 flex-shrink-0" />
                  <span className="text-on-surface-variant">{problem}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="bg-surface-container-lowest rounded-2xl p-8 shadow-ambient engagement-pulse"
          >
            <div className="flex items-center mb-6">
              <CheckCircle className="w-10 h-10 text-[#ff6f00] mr-4" />
              <h3 className="text-2xl font-bold text-on-surface">{text.solutionTitle}</h3>
            </div>
            <ul className="space-y-4">
              {text.solutions.map((solution, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#ff6f00] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-on-surface font-medium">{solution}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;