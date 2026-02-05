import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowLeft, CheckCircle2, Video, Calendar, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '@/components/forms/ContactForm';

export default function DemoPage({ language = 'tr' }) {
  const translations = getTranslations(language);

  return (
    <>
      <Helmet>
        <title>{translations.pageTitle}</title>
        <meta name="description" content={translations.pageDescription} />
        <meta property="og:title" content={translations.pageTitle} />
        <meta property="og:description" content={translations.pageDescription} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f1729] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            {translations.backToHome}
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Hero Content */}
            <div className="space-y-8">
              {/* Hero Section */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/30 rounded-full text-purple-300 text-sm mb-6">
                  <Video className="w-4 h-4" />
                  {translations.badge}
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {translations.title}
                </h1>

                <p className="text-xl text-gray-300 mb-8">
                  {translations.description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  {translations.featuresTitle}
                </h2>

                {translations.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-medium">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Demo Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-[#16213e] border border-gray-700 rounded-lg p-6">
                  <Calendar className="w-10 h-10 text-purple-400 mb-3" />
                  <h3 className="text-white font-semibold mb-2">
                    {translations.durationTitle}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {translations.durationDescription}
                  </p>
                </div>

                <div className="bg-[#16213e] border border-gray-700 rounded-lg p-6">
                  <Users className="w-10 h-10 text-pink-400 mb-3" />
                  <h3 className="text-white font-semibold mb-2">
                    {translations.personalizedTitle}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {translations.personalizedDescription}
                  </p>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-purple-900/20 border border-purple-800/30 rounded-lg p-6">
                <p className="text-purple-300 text-sm leading-relaxed">
                  {translations.trustMessage}
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-[#16213e] border border-gray-700 rounded-2xl p-8 shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {translations.formTitle}
                </h2>
                <p className="text-gray-400 mb-8">
                  {translations.formDescription}
                </p>

                <ContactForm
                  formType="demo"
                  language={language}
                  onSuccess={() => {
                    // Optional: Navigate to thank you page or show modal
                    console.log('Demo request submitted successfully');
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function getTranslations(language) {
  const translations = {
    tr: {
      // SEO
      pageTitle: 'Demo Talep Edin - ConnectAlign',
      pageDescription: 'ConnectAlign platformunu ücretsiz keşfedin. Uzman ekibimizle online demo görüşmesi planlayın ve işletmeniz için en iyi çözümü keşfedin.',
      // Navigation
      backToHome: 'Ana Sayfaya Dön',
      // Hero
      badge: 'Ücretsiz Demo',
      title: 'ConnectAlign\'ı Ücretsiz Keşfedin',
      description: 'İşletmenizin dijital dönüşümünü başlatın. Uzman ekibimizle online demo görüşmesi planlayın ve ConnectAlign\'ın tüm özelliklerini keşfedin.',
      // Features
      featuresTitle: 'Demo Görüşmesinde Neler Olacak?',
      features: [
        {
          title: 'Platform Turu',
          description: 'ConnectAlign\'ın tüm modüllerini ve özelliklerini canlı olarak görün',
        },
        {
          title: 'İhtiyaç Analizi',
          description: 'İşletmenizin özel ihtiyaçlarını analiz edelim',
        },
        {
          title: 'Kişiselleştirilmiş Çözüm',
          description: 'Sizin için en uygun paketi ve özellikleri belirleyin',
        },
        {
          title: 'Soru-Cevap',
          description: 'Aklınıza takılan tüm soruları sorun',
        },
      ],
      // Info Cards
      durationTitle: '30-45 Dakika',
      durationDescription: 'Interaktif online demo görüşmesi',
      personalizedTitle: 'Kişiselleştirilmiş',
      personalizedDescription: 'İşletmenize özel çözüm önerileri',
      // Trust
      trustMessage: '🔒 Bilgileriniz güvende. Kişisel verileriniz KVKK kapsamında korunmaktadır. Hiçbir satış baskısı olmadan, sadece ürünü tanıtmak için sizinle iletişime geçiyoruz.',
      // Form
      formTitle: 'Demo Talep Formu',
      formDescription: 'Formu doldurun, en kısa sürede sizinle iletişime geçelim.',
    },
    en: {
      // SEO
      pageTitle: 'Request a Demo - ConnectAlign',
      pageDescription: 'Explore ConnectAlign platform for free. Schedule an online demo with our expert team and discover the best solution for your business.',
      // Navigation
      backToHome: 'Back to Home',
      // Hero
      badge: 'Free Demo',
      title: 'Explore ConnectAlign for Free',
      description: 'Start your business digital transformation. Schedule an online demo with our expert team and discover all features of ConnectAlign.',
      // Features
      featuresTitle: 'What to Expect in the Demo?',
      features: [
        {
          title: 'Platform Tour',
          description: 'See all ConnectAlign modules and features live',
        },
        {
          title: 'Needs Analysis',
          description: 'Let\'s analyze your business specific needs',
        },
        {
          title: 'Personalized Solution',
          description: 'Find the best package and features for you',
        },
        {
          title: 'Q&A',
          description: 'Ask any questions you have',
        },
      ],
      // Info Cards
      durationTitle: '30-45 Minutes',
      durationDescription: 'Interactive online demo session',
      personalizedTitle: 'Personalized',
      personalizedDescription: 'Custom solution recommendations for your business',
      // Trust
      trustMessage: '🔒 Your information is safe. Your personal data is protected under GDPR. We contact you only to introduce the product, without any sales pressure.',
      // Form
      formTitle: 'Demo Request Form',
      formDescription: 'Fill out the form and we\'ll get in touch soon.',
    },
  };

  return translations[language] || translations.tr;
}
