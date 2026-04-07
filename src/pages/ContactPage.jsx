import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '@/components/forms/ContactForm';

export default function ContactPage({ language = 'tr' }) {
  const translations = getTranslations(language);

  return (
    <>
      <Helmet>
        <title>{translations.pageTitle}</title>
        <meta name="description" content={translations.pageDescription} />
        <meta property="og:title" content={translations.pageTitle} />
        <meta property="og:description" content={translations.pageDescription} />
      </Helmet>

      <div className="min-h-screen bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#ff6f00] hover:text-[#9e4200] transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            {translations.backToHome}
          </Link>

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-full text-[#ff6f00] text-sm mb-6">
              <MessageCircle className="w-4 h-4" />
              {translations.badge}
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-on-surface display-tight">
              {translations.title}
            </h1>

            <p className="text-xl text-on-surface-variant max-w-3xl mx-auto">
              {translations.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-ambient transition-all hover:-translate-y-0.5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-surface-container-low rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#ff6f00]" />
                    </div>
                    <div>
                      <h3 className="text-on-surface font-semibold mb-1">
                        {translations.emailTitle}
                      </h3>
                      <p className="text-on-surface-variant text-sm mb-2">
                        {translations.emailDescription}
                      </p>
                      <a
                        href="mailto:info@utilwork.com"
                        className="text-[#ff6f00] hover:text-[#9e4200] transition-colors"
                      >
                        info@utilwork.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-ambient transition-all hover:-translate-y-0.5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-surface-container-low rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#ff6f00]" />
                    </div>
                    <div>
                      <h3 className="text-on-surface font-semibold mb-1">
                        {translations.phoneTitle}
                      </h3>
                      <p className="text-on-surface-variant text-sm mb-2">
                        {translations.phoneDescription}
                      </p>
                      <a
                        href="tel:+902167063001"
                        className="text-[#ff6f00] hover:text-[#9e4200] transition-colors"
                      >
                        +90 (216) 706 30 01
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-ambient transition-all hover:-translate-y-0.5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-surface-container-low rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#ff6f00]" />
                    </div>
                    <div>
                      <h3 className="text-on-surface font-semibold mb-1">
                        {translations.addressTitle}
                      </h3>
                      <p className="text-on-surface-variant text-sm">
                        {translations.addressDescription}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-ambient transition-all hover:-translate-y-0.5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-surface-container-low rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#ff6f00]" />
                    </div>
                    <div>
                      <h3 className="text-on-surface font-semibold mb-1">
                        {translations.hoursTitle}
                      </h3>
                      <p className="text-on-surface-variant text-sm">
                        {translations.hoursDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-low rounded-2xl p-6 engagement-pulse">
                <h3 className="text-on-surface font-semibold mb-3">
                  {translations.infoTitle}
                </h3>
                <ul className="space-y-2 text-on-surface-variant text-sm">
                  {translations.infoItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#ff6f00] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-ambient">
                <h2 className="text-2xl font-bold text-on-surface mb-2">
                  {translations.formTitle}
                </h2>
                <p className="text-on-surface-variant mb-8">
                  {translations.formDescription}
                </p>

                <ContactForm
                  formType="contact"
                  language={language}
                  onSuccess={() => {}}
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
      pageTitle: 'İletişim - ConnectAlign',
      pageDescription: 'ConnectAlign ekibiyle iletişime geçin. Sorularınız için bize ulaşın, size yardımcı olmaktan mutluluk duyarız.',
      // Navigation
      backToHome: 'Ana Sayfaya Dön',
      // Hero
      badge: 'İletişim',
      title: 'Bizimle İletişime Geçin',
      description: 'Sorularınız mı var? Yardıma mı ihtiyacınız var? Size en kısa sürede dönüş yapalım.',
      // Contact Info
      emailTitle: 'E-posta',
      emailDescription: '7/24 e-posta desteği',
      phoneTitle: 'Telefon',
      phoneDescription: 'Hafta içi 09:00 - 18:00',
      addressTitle: 'Adres',
      addressDescription: 'Küçükbakkalköy, Dereboyu Cd Brandium Residence D:3A R5 Blok K:7 D:48, 34758 Ataşehir/İstanbul',
      hoursTitle: 'Çalışma Saatleri',
      hoursDescription: 'Pazartesi - Cuma: 09:00 - 18:00',
      // Additional Info
      infoTitle: 'Hızlı Destek',
      infoItems: [
        'Ortalama yanıt süresi: 2 saat',
        'Teknik destek: 7/24 e-posta',
        'Telefon desteği: Hafta içi',
        'Demo görüşmeleri: Online',
      ],
      // Form
      formTitle: 'İletişim Formu',
      formDescription: 'Formu doldurun, en kısa sürede sizinle iletişime geçelim.',
    },
    en: {
      // SEO
      pageTitle: 'Contact Us - ConnectAlign',
      pageDescription: 'Get in touch with ConnectAlign team. Contact us for your questions, we\'re happy to help.',
      // Navigation
      backToHome: 'Back to Home',
      // Hero
      badge: 'Contact',
      title: 'Get in Touch',
      description: 'Have questions? Need help? Let us get back to you as soon as possible.',
      // Contact Info
      emailTitle: 'Email',
      emailDescription: '24/7 email support',
      phoneTitle: 'Phone',
      phoneDescription: 'Weekdays 09:00 AM - 06:00 PM',
      addressTitle: 'Address',
      addressDescription: 'Brandium Residence D:3A R5 Block Floor:7 No:48, Dereboyu Cd, Küçükbakkalköy, 34758 Ataşehir/Istanbul',
      hoursTitle: 'Working Hours',
      hoursDescription: 'Monday - Friday: 09:00 AM - 06:00 PM',
      // Additional Info
      infoTitle: 'Quick Support',
      infoItems: [
        'Average response time: 2 hours',
        'Technical support: 24/7 email',
        'Phone support: Weekdays',
        'Demo sessions: Online',
      ],
      // Form
      formTitle: 'Contact Form',
      formDescription: 'Fill out the form and we\'ll get in touch soon.',
    },
  };

  return translations[language] || translations.tr;
}
