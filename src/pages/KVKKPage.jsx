import React from 'react';
import { Helmet } from 'react-helmet';
import LegalLayout from '@/components/legal/LegalLayout';
import { kvkkPolicy } from '@/components/legal/legalContent';

export default function KVKKPage({ language = 'tr' }) {
  const content = kvkkPolicy[language] || kvkkPolicy.tr;

  const pageTitle = language === 'tr'
    ? 'KVKK Aydınlatma Metni - ConnectAlign'
    : 'Privacy Policy (GDPR) - ConnectAlign';

  const pageDescription = language === 'tr'
    ? 'ConnectAlign KVKK aydınlatma metni. Kişisel verilerinizin nasıl toplandığı, işlendiği, korunduğu ve haklarınız hakkında detaylı bilgi.'
    : 'ConnectAlign privacy policy (GDPR). Detailed information about how your personal data is collected, processed, protected, and your rights.';

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <LegalLayout
        title={content.title}
        lastUpdated={content.lastUpdated}
        sections={content.sections}
        backLink="/"
      />
    </>
  );
}
