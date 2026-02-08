import React from 'react';
import { Helmet } from 'react-helmet';
import LegalLayout from '@/components/legal/LegalLayout';
import { privacyPolicy } from '@/components/legal/legalContent';

const PrivacyPolicyPage = ({ language }) => {
  const content = privacyPolicy[language];

  return (
    <>
      <Helmet>
        <title>{content.title} - ConnectAlign</title>
        <meta name="description" content="ConnectAlign Gizlilik Politikası - Kişisel verilerinizin nasıl toplandığı, işlendiği ve korunduğu hakkında bilgi" />
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
