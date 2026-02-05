import React from 'react';
import { Helmet } from 'react-helmet';
import LegalLayout from '@/components/legal/LegalLayout';
import { termsOfService } from '@/components/legal/legalContent';

export default function TermsOfServicePage({ language = 'tr' }) {
  const content = termsOfService[language] || termsOfService.tr;

  const pageTitle = language === 'tr'
    ? 'Kullanım Koşulları - ConnectAlign'
    : 'Terms of Service - ConnectAlign';

  const pageDescription = language === 'tr'
    ? 'ConnectAlign kullanım koşulları. Platform kullanımı ile ilgili hak ve yükümlülükleriniz hakkında detaylı bilgi.'
    : 'ConnectAlign terms of service. Detailed information about your rights and obligations regarding platform usage.';

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
