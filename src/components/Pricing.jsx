import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { Check, X, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = ({ language }) => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const content = {
    tr: {
      headline: 'İşletmenize Uygun Paket Seçin',
      plans: [
        { name: 'BASIC', icon: '💼', price: '$399', period: '/ay', target: 'KOBİ\'ler (50-200 kişi)', features: [ { text: '50 Kullanıcı', included: true }, { text: '5 Admin', included: true }, { text: '10GB Depolama', included: true }, { text: 'Doküman Yönetimi', included: true }, { text: 'SMS (1,000/ay)', included: true }, { text: 'Temel Raporlar', included: true }, { text: 'Email Destek', included: true }, { text: 'Push Notification', included: false }, { text: 'API Erişimi', included: false } ], cta: 'Başlayın', popular: false },
        { name: 'PRO', icon: '🚀', price: '$599', period: '/ay', target: 'Orta Ölçekli Şirketler (200-500 kişi)', features: [ { text: '200 Kullanıcı', included: true }, { text: '10 Admin', included: true }, { text: '50GB Depolama', included: true }, { text: 'Tüm Basic Özellikler', included: true }, { text: 'SMS (5,000/ay)', included: true }, { text: 'Push Notification', included: true }, { text: 'Etkinlik Yönetimi', included: true }, { text: 'Gelişmiş Raporlar', included: true }, { text: 'Öncelikli Destek', included: true }, { text: 'API Erişimi', included: false } ], cta: 'Popüler Seçim', popular: true },
        { name: 'ENTERPRISE', icon: '👑', price: 'Özel', period: 'Fiyatlandırma', target: 'Büyük Kurumlar (500+ kişi)', features: [ { text: 'Sınırsız Kullanıcı', included: true }, { text: 'Sınırsız Admin', included: true }, { text: 'Sınırsız Depolama', included: true }, { text: 'Tüm Pro Özellikler', included: true }, { text: 'API Erişimi', included: true }, { text: 'Özel Entegrasyonlar', included: true }, { text: 'Dedicated Server', included: true }, { text: '7/24 Özel Destek', included: true }, { text: 'Eğitim & Danışmanlık', included: true }, { text: 'SLA Garantisi', included: true } ], cta: 'Teklif İsteyin', popular: false }
      ]
    },
    en: {
      headline: 'Choose the Right Plan for Your Business',
      plans: [
        { name: 'BASIC', icon: '💼', price: '$399', period: '/month', target: 'SMBs (50-200 people)', features: [ { text: '50 Users', included: true }, { text: '5 Admins', included: true }, { text: '10GB Storage', included: true }, { text: 'Document Management', included: true }, { text: 'SMS (1,000/month)', included: true }, { text: 'Basic Reports', included: true }, { text: 'Email Support', included: true }, { text: 'Push Notifications', included: false }, { text: 'API Access', included: false } ], cta: 'Get Started', popular: false },
        { name: 'PRO', icon: '🚀', price: '$599', period: '/month', target: 'Mid-sized Companies (200-500 people)', features: [ { text: '200 Users', included: true }, { text: '10 Admins', included: true }, { text: '50GB Storage', included: true }, { text: 'All Basic Features', included: true }, { text: 'SMS (5,000/month)', included: true }, { text: 'Push Notifications', included: true }, { text: 'Event Management', included: true }, { text: 'Advanced Reports', included: true }, { text: 'Priority Support', included: true }, { text: 'API Access', included: false } ], cta: 'Popular Choice', popular: true },
        { name: 'ENTERPRISE', icon: '👑', price: 'Custom', period: 'Pricing', target: 'Large Corporations (500+ people)', features: [ { text: 'Unlimited Users', included: true }, { text: 'Unlimited Admins', included: true }, { text: 'Unlimited Storage', included: true }, { text: 'All Pro Features', included: true }, { text: 'API Access', included: true }, { text: 'Custom Integrations', included: true }, { text: 'Dedicated Server', included: true }, { text: '24/7 Dedicated Support', included: true }, { text: 'Training & Consulting', included: true }, { text: 'SLA Guarantee', included: true } ], cta: 'Request Quote', popular: false }
      ]
    }
  };

  const text = content[language];

  return (
    <section id="pricing" ref={ref} className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <p className="overline mb-4">Pricing</p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl md:text-5xl font-extrabold text-on-surface display-tight"
            style={{ lineHeight: '1.1' }}
          >
            {text.headline}
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {text.plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              className={`${plan.popular ? 'pricing-card-popular' : 'pricing-card'} h-full flex flex-col relative`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-surface-container-lowest text-[#9e4200] px-6 py-2 rounded-full font-bold text-sm shadow-ambient">
                  ⭐ {language === 'tr' ? 'ÖNERİLEN' : 'RECOMMENDED'}
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-on-surface'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? 'text-white/80' : 'text-on-surface-variant'}`}>
                  {plan.target}
                </p>
              </div>

              <div className="text-center mb-8">
                <span className={`text-5xl font-extrabold display-tight ${plan.popular ? 'text-white' : 'text-on-surface'}`}>
                  {plan.price}
                </span>
                <span className={`text-lg ml-1 ${plan.popular ? 'text-white/80' : 'text-on-surface-variant'}`}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    {feature.included ? (
                      <Check className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-[#ff6f00]'}`} />
                    ) : (
                      <X className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-white/50' : 'text-on-surface-variant/50'}`} />
                    )}
                    <span className={plan.popular ? 'text-white' : 'text-on-surface-variant'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => navigate('/demo')}
                className={`w-full text-base py-3 ${
                  plan.popular
                    ? 'bg-surface-container-lowest text-[#9e4200] hover:bg-surface-container-low rounded-lg font-semibold'
                    : 'btn-primary'
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;