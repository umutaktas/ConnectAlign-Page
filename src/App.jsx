import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import PrivacyPolicy from '@/components/PrivacyPolicy';
import FeatureDetailPage from '@/pages/FeatureDetailPage';
import DemoPage from '@/pages/DemoPage';
import ContactPage from '@/pages/ContactPage';
import TermsOfServicePage from '@/pages/TermsOfServicePage';
import KVKKPage from '@/pages/KVKKPage';
import { Toaster } from '@/components/ui/toaster';
import ScrollToTop from '@/components/ScrollToTop';

function App() {
  const [language, setLanguage] = useState('tr');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'tr' ? 'en' : 'tr');
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Helmet>
        <title>{language === 'tr' ? 'ConnectAlign - Dijital Dönüşüm Platformu' : 'ConnectAlign - Digital Transformation Platform'}</title>
        <meta name="description" content={language === 'tr' ? 'ConnectAlign ile işletmenizi dijital dönüşüme taşıyın. İç iletişimden belge yönetimine, tek platformda hepsini yönetin.' : 'Transform your business with ConnectAlign. Manage everything from internal communication to document management in one platform.'} />
        <meta property="og:title" content="ConnectAlign - Digital Transformation Platform" />
        <meta property="og:description" content="All-in-one platform for internal communication, document management, and employee engagement" />
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

          {/* Privacy Policy Route */}
          <Route path="/privacy" element={<PrivacyPolicy language={language} />} />

          {/* Feature Detail Pages */}
          <Route path="/features/:slug" element={<FeatureDetailPage language={language} />} />

          {/* Demo and Contact Pages */}
          <Route path="/demo" element={<DemoPage language={language} />} />
          <Route path="/contact" element={<ContactPage language={language} />} />

          {/* Legal Pages */}
          <Route path="/terms" element={<TermsOfServicePage language={language} />} />
          <Route path="/kvkk" element={<KVKKPage language={language} />} />
        </Routes>

        <Footer language={language} />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;