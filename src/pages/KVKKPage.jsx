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
        <html lang={language} />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="alternate" hrefLang="tr" href="https://connectalign.com/kvkk" />
        <link rel="alternate" hrefLang="en" href="https://connectalign.com/gdpr" />
        <link rel="alternate" hrefLang="x-default" href="https://connectalign.com/kvkk" />
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
