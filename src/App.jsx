import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import FeatureDetailPage from '@/pages/FeatureDetailPage';
import DemoPage from '@/pages/DemoPage';
import ContactPage from '@/pages/ContactPage';
import TermsOfServicePage from '@/pages/TermsOfServicePage';
import KVKKPage from '@/pages/KVKKPage';
import { Toaster } from '@/components/ui/toaster';
import ScrollToTop from '@/components/ScrollToTop';

const SITE_URL = 'https://connectalign.com';

// Route-aware SEO defaults; page-level Helmets override these where defined
function SeoDefaults({ language }) {
  const { pathname } = useLocation();
  const canonicalUrl = `${SITE_URL}${pathname === '/' ? '/' : pathname.replace(/\/+$/, '')}`;

  return (
    <Helmet>
      <html lang={language} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="ConnectAlign" />
      <meta property="og:locale" content={language === 'tr' ? 'tr_TR' : 'en_US'} />
      <meta property="og:image" content={`${SITE_URL}/connect-align-main.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={`${SITE_URL}/connect-align-main.png`} />
    </Helmet>
  );
}

function App() {
  const [language, setLanguage] = useState('tr');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'tr' ? 'en' : 'tr');
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <SeoDefaults language={language} />
      <Helmet>
        <title>{language === 'tr' ? 'ConnectAlign - Dijital Dönüşüm Platformu' : 'ConnectAlign - Digital Transformation Platform'}</title>
        <meta name="description" content={language === 'tr' ? 'ConnectAlign ile işletmenizi dijital dönüşüme taşıyın. İç iletişimden belge yönetimine, tek platformda hepsini yönetin.' : 'Transform your business with ConnectAlign. Manage everything from internal communication to document management in one platform.'} />
        <meta property="og:title" content={language === 'tr' ? 'ConnectAlign - Dijital Dönüşüm Platformu' : 'ConnectAlign - Digital Transformation Platform'} />
        <meta property="og:description" content={language === 'tr' ? 'İç iletişim, doküman yönetimi, eğitim ve etkinlik yönetimi tek platformda. Bulut tabanlı, KVKK/GDPR uyumlu SaaS çözümü.' : 'All-in-one platform for internal communication, document management, and employee engagement'} />
        <meta name="twitter:title" content={language === 'tr' ? 'ConnectAlign - Dijital Dönüşüm Platformu' : 'ConnectAlign - Digital Transformation Platform'} />
        <meta name="twitter:description" content={language === 'tr' ? 'İç iletişim, doküman yönetimi, eğitim ve etkinlik yönetimi tek platformda.' : 'All-in-one platform for internal communication, document management, and employee engagement'} />
        <meta property="og:type" content="website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="min-h-screen bg-[#1a1a2e] text-gray-200">
        <Header language={language} toggleLanguage={toggleLanguage} />

        <Routes>
          {/* Ana Sayfa Route */}
          <Route path="/" element={<HomePage language={language} />} />

          {/* Privacy Policy Routes - Separate TR/EN URLs for App Store */}
          <Route path="/gizlilik-politikasi" element={<PrivacyPolicyPage language="tr" />} />
          <Route path="/privacy" element={<PrivacyPolicyPage language="en" />} />

          {/* Feature Detail Pages */}
          <Route path="/features/:slug" element={<FeatureDetailPage language={language} />} />

          {/* Demo and Contact Pages */}
          <Route path="/demo" element={<DemoPage language={language} />} />
          <Route path="/contact" element={<ContactPage language={language} />} />

          {/* Legal Pages */}
          <Route path="/terms" element={<TermsOfServicePage language={language} />} />
          <Route path="/kvkk" element={<KVKKPage language="tr" />} />
          <Route path="/gdpr" element={<KVKKPage language="en" />} />
        </Routes>

        <Footer language={language} />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;