import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Pricing = ({ language }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handlePricingClick = (plan) => {
    toast({
      title: "🚧 " + (language === 'tr' ? 'Yakında!' : 'Coming Soon!'),
      description: language === 'tr' 
        ? `${plan} planı için demo talebiniz alındı! Ekibimiz en kısa sürede sizinle iletişime geçecek.`
        : `Your demo request for ${plan} plan has been received! Our team will contact you shortly.`,
    });
  };

  const content = {
    tr: {
      headline: 'İşletmenize Uygun Paket Seçin',
      plans: [
        {
          name: 'BASIC',
          icon: '💼',
          price: '$299',
          period: '/ay',
          target: 'KOBİ\'ler (50-200 kişi)',
          features: [
            { text: '50 Kullanıcı', included: true },
            { text: '5 Admin', included: true },
            { text: '10GB Depolama', included: true },
            { text: 'Doküman Yönetimi', included: true },
            { text: 'SMS (1,000/ay)', included: true },
            { text: 'Temel Raporlar', included: true },
            { text: 'Email Destek', included: true },
            { text: 'Push Notification', included: false },
            { text: 'API Erişimi', included: false }
          ],
          cta: 'Başlayın',
          popular: false
        },
        {
          name: 'PRO',
          icon: '🚀',
          price: '$599',
          period: '/ay',
          target: 'Orta Ölçekli Şirketler (200-500 kişi)',
          features: [
            { text: '200 Kullanıcı', included: true },
            { text: '10 Admin', included: true },
            { text: '50GB Depolama', included: true },
            { text: 'Tüm Basic Özellikler', included: true },
            { text: 'SMS (5,000/ay)', included: true },
            { text: 'Push Notification', included: true },
            { text: 'Etkinlik Yönetimi', included: true },
            { text: 'Gelişmiş Raporlar', included: true },
            { text: 'Öncelikli Destek', included: true },
            { text: 'API Erişimi', included: false }
          ],
          cta: 'Popüler Seçim',
          popular: true
        },
        {
          name: 'ENTERPRISE',
          icon: '👑',
          price: 'Özel',
          period: 'Fiyatlandırma',
          target: 'Büyük Kurumlar (500+ kişi)',
          features: [
            { text: 'Sınırsız Kullanıcı', included: true },
            { text: 'Sınırsız Admin', included: true },
            { text: 'Sınırsız Depolama', included: true },
            { text: 'Tüm Pro Özellikler', included: true },
            { text: 'API Erişimi', included: true },
            { text: 'Özel Entegrasyonlar', included: true },
            { text: 'Dedicated Server', included: true },
            { text: '7/24 Özel Destek', included: true },
            { text: 'Eğitim & Danışmanlık', included: true },
            { text: 'SLA Garantisi', included: true }
          ],
          cta: 'Teklif İsteyin',
          popular: false
        }
      ]
    },
    en: {
      headline: 'Choose the Right Plan for Your Business',
      plans: [
        {
          name: 'BASIC',
          icon: '💼',
          price: '$299',
          period: '/month',
          target: 'SMBs (50-200 people)',
          features: [
            { text: '50 Users', included: true },
            { text: '5 Admins', included: true },
            { text: '10GB Storage', included: true },
            { text: 'Document Management', included: true },
            { text: 'SMS (1,000/month)', included: true },
            { text: 'Basic Reports', included: true },
            { text: 'Email Support', included: true },
            { text: 'Push Notifications', included: false },
            { text: 'API Access', included: false }
          ],
          cta: 'Get Started',
          popular: false
        },
        {
          name: 'PRO',
          icon: '🚀',
          price: '$599',
          period: '/month',
          target: 'Mid-sized Companies (200-500 people)',
          features: [
            { text: '200 Users', included: true },
            { text: '10 Admins', included: true },
            { text: '50GB Storage', included: true },
            { text: 'All Basic Features', included: true },
            { text: 'SMS (5,000/month)', included: true },
            { text: 'Push Notifications', included: true },
            { text: 'Event Management', included: true },
            { text: 'Advanced Reports', included: true },
            { text: 'Priority Support', included: true },
            { text: 'API Access', included: false }
          ],
          cta: 'Popular Choice',
          popular: true
        },
        {
          name: 'ENTERPRISE',
          icon: '👑',
          price: 'Custom',
          period: 'Pricing',
          target: 'Large Corporations (500+ people)',
          features: [
            { text: 'Unlimited Users', included: true },
            { text: 'Unlimited Admins', included: true },
            { text: 'Unlimited Storage', included: true },
            { text: 'All Pro Features', included: true },
            { text: 'API Access', included: true },
            { text: 'Custom Integrations', included: true },
            { text: 'Dedicated Server', included: true },
            { text: '24/7 Dedicated Support', included: true },
            { text: 'Training & Consulting', included: true },
            { text: 'SLA Guarantee', included: true }
          ],
          cta: 'Request Quote',
          popular: false
        }
      ]
    }
  };

  const text = content[language];

  return (
    <section id="pricing" ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          {text.headline}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {text.plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              className={plan.popular ? 'pricing-card-popular' : 'pricing-card'}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  ⭐ {language === 'tr' ? 'POPÜLER' : 'POPULAR'}
                </div>
              )}

              <div className="text-center mb-6">
                <div className="text-5xl mb-3">{plan.icon}</div>
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.target}
                </p>
              </div>

              <div className="text-center mb-6">
                <div className={`text-5xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}
                </div>
                <div className={`text-lg ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.period}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    {feature.included ? (
                      <Check className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-green-300' : 'text-green-600'}`} />
                    ) : (
                      <X className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-red-300' : 'text-red-500'}`} />
                    )}
                    <span className={plan.popular ? 'text-white' : 'text-gray-700'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handlePricingClick(plan.name)}
                className={`w-full ${
                  plan.popular 
                    ? 'bg-white text-blue-600 hover:bg-gray-100' 
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