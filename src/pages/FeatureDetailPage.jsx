import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import FeatureDetailLayout from '@/components/features/FeatureDetailLayout';
import FeatureHero from '@/components/features/FeatureHero';
import FeatureOverview from '@/components/features/FeatureOverview';
import FeatureBenefits from '@/components/features/FeatureBenefits';
import FeatureCapabilities from '@/components/features/FeatureCapabilities';
import FeatureUseCases from '@/components/features/FeatureUseCases';
import FeatureTechnicalSpecs from '@/components/features/FeatureTechnicalSpecs';
import FeatureCTA from '@/components/features/FeatureCTA';
import FeatureNavigation from '@/components/features/FeatureNavigation';
import { getFeatureBySlug } from '@/utils/featureHelpers';

/**
 * Feature Detail Page
 * Dynamic page for each feature based on slug parameter
 */
const FeatureDetailPage = ({ language }) => {
  const { slug } = useParams();
  const featureData = getFeatureBySlug(slug, language);

  // 404 handling - redirect to home if feature not found
  if (!featureData) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{featureData.hero.title} - ConnectAlign</title>
        <meta name="description" content={featureData.hero.tagline} />
        <meta property="og:title" content={`${featureData.hero.title} - ConnectAlign`} />
        <meta property="og:description" content={featureData.hero.tagline} />
        <meta property="og:url" content={`https://connectalign.com/features/${slug}`} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`https://connectalign.com/features/${slug}`} />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": featureData.hero.title,
            "description": featureData.hero.tagline,
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web, iOS, Android",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Helmet>

      <FeatureDetailLayout feature={featureData} language={language}>
        <FeatureHero data={featureData.hero} language={language} />
        <FeatureOverview data={featureData.overview} language={language} />

        {/* Only render benefits if data exists (for placeholder features) */}
        {featureData.benefits && featureData.benefits.length > 0 && (
          <FeatureBenefits benefits={featureData.benefits} language={language} />
        )}

        {/* Only render capabilities if data exists */}
        {featureData.capabilities && Object.keys(featureData.capabilities).length > 0 && (
          <FeatureCapabilities capabilities={featureData.capabilities} language={language} />
        )}

        {/* Only render use cases if data exists */}
        {featureData.useCases && featureData.useCases.length > 0 && (
          <FeatureUseCases useCases={featureData.useCases} language={language} />
        )}

        {/* Only render technical specs if data exists */}
        {featureData.technicalSpecs && Object.keys(featureData.technicalSpecs).length > 0 && (
          <FeatureTechnicalSpecs specs={featureData.technicalSpecs} language={language} />
        )}

        <FeatureCTA language={language} />
        <FeatureNavigation currentSlug={slug} language={language} />
      </FeatureDetailLayout>
    </>
  );
};

export default FeatureDetailPage;
