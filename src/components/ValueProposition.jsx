import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, Check } from 'lucide-react';

const ValueProposition = ({ language }) => {
  const [ref, inView] = useInView({
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
      problemTitle: 'Sorunlar',
      solutionTitle: 'Çözümler'
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
      problemTitle: 'Problems',
      solutionTitle: 'Solutions'
    }
  };

  const text = content[language];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          {text.headline}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-500"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <X className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{text.problemTitle}</h3>
            </div>
            <ul className="space-y-4">
              {text.problems.map((problem, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start"
                >
                  <X className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{problem}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 shadow-lg border-l-4 border-green-500"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{text.solutionTitle}</h3>
            </div>
            <ul className="space-y-4">
              {text.solutions.map((solution, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start"
                >
                  <Check className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{solution}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;