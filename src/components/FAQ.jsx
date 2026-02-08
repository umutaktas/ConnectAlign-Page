import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown } from 'lucide-react';

const FAQ = ({ language }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [openIndex, setOpenIndex] = useState(null);

  const content = {
    tr: {
      headline: 'Sıkça Sorulan Sorular',
      faqs: [
        { question: 'ConnectAlign nedir ve ne işe yarar?', answer: 'ConnectAlign, işletmelerin iç iletişim, doküman yönetimi, eğitim ve etkinlik yönetimi gibi tüm operasyonel ihtiyaçlarını tek bir platformda toplayan bulut tabanlı bir SaaS çözümüdür.' },
        { question: 'Hangi cihazlardan erişebilirim?', answer: 'ConnectAlign\'a web tarayıcısı üzerinden her cihazdan erişebilirsiniz. Ayrıca iOS ve Android mobil uygulamalarımız da yakında kullanıma sunulacak.' },
        { question: 'Verilerim güvende mi?', answer: 'Evet, verileriniz ISO 27001 sertifikalı veri merkezlerinde saklanır. Tüm veriler şifrelenir ve KVKK/GDPR uyumlu olarak işlenir.' },
        { question: 'Kaç kullanıcı ekleyebilirim?', answer: 'Seçtiğiniz pakete göre değişir. Basic pakette 50, Pro pakette 200 kullanıcı, Enterprise pakette ise sınırsız kullanıcı ekleyebilirsiniz.' },
        { question: 'Mobil uygulama var mı?', answer: 'Şu anda responsive web arayüzümüz mevcut. iOS ve Android mobil uygulamalarımız geliştirme aşamasında ve yakında yayınlanacak.' },
        { question: 'Destek hizmeti nasıl çalışır?', answer: 'Basic pakette email destek, Pro pakette öncelikli destek, Enterprise pakette ise 7/24 özel destek ekibi hizmetinizdedir.' },
      ]
    },
    en: {
      headline: 'Frequently Asked Questions',
      faqs: [
        { question: 'What is ConnectAlign and what does it do?', answer: 'ConnectAlign is a cloud-based SaaS solution that brings together all operational needs of businesses such as internal communication, document management, training and event management in one platform.' },
        { question: 'Which devices can I access from?', answer: 'You can access ConnectAlign from any device via web browser. Our iOS and Android mobile applications will also be available soon.' },
        { question: 'Is my data secure?', answer: 'Yes, your data is stored in ISO 27001 certified data centers. All data is encrypted and processed in compliance with GDPR.' },
        { question: 'How many users can I add?', answer: 'It varies depending on the package you choose. You can add 50 users in Basic package, 200 users in Pro package, and unlimited users in Enterprise package.' },
        { question: 'Is there a mobile app?', answer: 'We currently have a responsive web interface. Our iOS and Android mobile applications are under development and will be released soon.' },
        { question: 'How does support service work?', answer: 'Email support in Basic package, priority support in Pro package, and 24/7 dedicated support team in Enterprise package.' },
      ]
    }
  };

  const text = content[language];

  return (
    <section id="faq" ref={ref} className="py-24 pattern-bg">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient leading-relaxed py-4"
          style={{ lineHeight: '1.3' }}
        >
          {text.headline}
        </motion.h2>

        <div className="space-y-4">
          {text.faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-white pr-4 text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-blue-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pt-2 pb-5 text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;