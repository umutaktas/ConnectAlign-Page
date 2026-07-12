import React from 'react';
import { Helmet } from 'react-helmet';
import LegalLayout from '@/components/legal/LegalLayout';
import { privacyPolicy } from '@/components/legal/legalContent';

const PrivacyPolicyPage = ({ language }) => {
  const content = privacyPolicy[language];

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{content.title} - ConnectAlign</title>
        <meta name="description" content={language === 'tr'
          ? 'ConnectAlign Gizlilik Politikası - Kişisel verilerinizin nasıl toplandığı, işlendiği ve korunduğu hakkında bilgi'
          : 'ConnectAlign Privacy Policy - Information about how your personal data is collected, processed and protected'} />
        <meta property="og:title" content={`${content.title} - ConnectAlign`} />
        <meta property="og:description" content={language === 'tr'
          ? 'ConnectAlign Gizlilik Politikası - Kişisel verilerinizin nasıl toplandığı, işlendiği ve korunduğu hakkında bilgi'
          : 'ConnectAlign Privacy Policy - Information about how your personal data is collected, processed and protected'} />
        <link rel="alternate" hrefLang="tr" href="https://connectalign.com/gizlilik-politikasi" />
        <link rel="alternate" hrefLang="en" href="https://connectalign.com/privacy" />
        <link rel="alternate" hrefLang="x-default" href="https://connectalign.com/gizlilik-politikasi" />
      </Helmet>
      <LegalLayout
        title={content.title}
        lastUpdated={content.lastUpdated}
        sections={content.sections}
        language={language}
        backLink="/"
      />
    </>
  );
};

export default PrivacyPolicyPage;
