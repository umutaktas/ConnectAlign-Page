import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FileText, MessageSquare, Building2, GraduationCap, BarChart3, Calendar, CreditCard, Smartphone, Shield } from 'lucide-react';
import { generateSlug } from '@/utils/featureHelpers';

const Features = ({ language }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const content = {
    tr: {
      headline: 'Tüm İhtiyaçlarınız Tek Platformda',
      features: [
        {
          icon: FileText,
          title: 'Doküman Yönetim Sistemi',
          description: 'Tüm dokümanlarınızı kategori bazlı organize edin. Kağıtsız ofise geçin, zamandan tasarruf edin.',
          featured: true
        },
        {
          icon: MessageSquare,
          title: 'İç İletişim Merkezi',
          description: 'SMS, push notification ve duyurularla çalışanlarınızla anında iletişim kurun.',
          featured: true
        },
        {
          icon: Building2,
          title: 'Organizasyon Yönetimi',
          description: 'Firma, departman ve kullanıcı yönetimini kolayca yapın. Merkezi kontrol.',
          featured: false
        },
        {
          icon: GraduationCap,
          title: 'Eğitim & Gelişim',
          description: 'Video bazlı eğitim içerikleri ile çalışanlarınızı geliştirin.',
          featured: false
        },
        {
          icon: BarChart3,
          title: 'Dashboard & Raporlama',
          description: 'Gerçek zamanlı grafiksel raporlar ile işletmenizi izleyin.',
          featured: false
        },
        {
          icon: Calendar,
          title: 'Etkinlik Yönetimi',
          description: 'Şirket etkinliklerini planlayın, duyurun ve katılım takibi yapın.',
          featured: false
        },
        {
          icon: CreditCard,
          title: 'Dijital Kartvizitler',
          description: 'QR kodlu dijital kartvizitler oluşturun ve paylaşın.',
          featured: false
        },
        {
          icon: Smartphone,
          title: 'Mobil Destek',
          description: 'Web ve mobil uygulama ile her yerden erişim.',
          featured: false
        },
        {
          icon: Shield,
          title: 'Güvenlik & Yetkilendirme',
          description: 'Kurumsal seviye güvenlik. Rol bazlı erişim kontrolü.',
          featured: false
        }
      ]
    },
    en: {
      headline: 'All Your Needs in One Platform',
      features: [
        {
          icon: FileText,
          title: 'Document Management System',
          description: 'Organize all documents by category. Go paperless, save time.',
          featured: true
        },
        {
          icon: MessageSquare,
          title: 'Internal Communication Hub',
          description: 'Instant communication with employees via SMS, push notifications and announcements.',
          featured: true
        },
        {
          icon: Building2,
          title: 'Organization Management',
          description: 'Easily manage companies, departments and users. Centralized control.',
          featured: false
        },
        {
          icon: GraduationCap,
          title: 'Training & Development',
          description: 'Develop your employees with video-based training content.',
          featured: false
        },
        {
          icon: BarChart3,
          title: 'Dashboard & Reporting',
          description: 'Monitor your business with real-time graphical reports.',
          featured: false
        },
        {
          icon: Calendar,
          title: 'Event Management',
          description: 'Plan, announce and track attendance for company events.',
          featured: false
        },
        {
          icon: CreditCard,
          title: 'Digital Business Cards',
          description: 'Create and share QR code digital business cards.',
          featured: false
        },
        {
          icon: Smartphone,
          title: 'Mobile Support',
          description: 'Access from anywhere with web and mobile app.',
          featured: false
        },
        {
          icon: Shield,
          title: 'Security & Authorization',
          description: 'Enterprise-level security. Role-based access control.',
          featured: false
        }
      ]
    }
  };

  const text = content[language];

  return (
    <section id="features" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          {text.headline}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {text.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="feature-card relative"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              
              <Link
                to={`/features/${generateSlug(feature.title)}`}
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors inline-block"
              >
                {language === 'tr' ? 'Daha Fazla →' : 'Learn More →'}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;