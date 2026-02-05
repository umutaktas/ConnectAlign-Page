// Feature utility functions for routing and navigation
import { featuresData } from '../data/featureData';

// Slug mapping (TR title → slug)
const slugMap = {
  'Doküman Yönetim Sistemi': 'document-management',
  'İç İletişim Merkezi': 'internal-communication',
  'Organizasyon Yönetimi': 'organization-management',
  'Eğitim & Gelişim': 'training-development',
  'Dashboard & Raporlama': 'dashboard-reporting',
  'Etkinlik Yönetimi': 'event-management',
  'Dijital Kartvizitler': 'digital-business-cards',
  'Mobil Destek': 'mobile-support',
  'Güvenlik & Yetkilendirme': 'security-authorization'
};

// English title → slug mapping
const slugMapEn = {
  'Document Management System': 'document-management',
  'Internal Communication Hub': 'internal-communication',
  'Organization Management': 'organization-management',
  'Training & Development': 'training-development',
  'Dashboard & Reporting': 'dashboard-reporting',
  'Event Management': 'event-management',
  'Digital Business Cards': 'digital-business-cards',
  'Mobile Support': 'mobile-support',
  'Security & Authorization': 'security-authorization'
};

/**
 * Generate slug from feature title
 * @param {string} title - Feature title (TR or EN)
 * @returns {string} URL-friendly slug
 */
export const generateSlug = (title) => {
  return slugMap[title] || slugMapEn[title] || title.toLowerCase().replace(/\s+/g, '-');
};

/**
 * Get feature data by slug
 * @param {string} slug - Feature slug
 * @param {string} language - 'tr' or 'en'
 * @returns {object|null} Feature data or null if not found
 */
export const getFeatureBySlug = (slug, language) => {
  const data = featuresData[slug];
  return data ? data[language] : null;
};

/**
 * Get adjacent features for prev/next navigation
 * @param {string} slug - Current feature slug
 * @returns {object} Object with prev and next slugs
 */
export const getAdjacentFeatures = (slug) => {
  const slugs = Object.keys(featuresData);
  const currentIndex = slugs.indexOf(slug);

  return {
    prev: currentIndex > 0 ? slugs[currentIndex - 1] : null,
    next: currentIndex < slugs.length - 1 ? slugs[currentIndex + 1] : null
  };
};

/**
 * Get all feature slugs
 * @returns {string[]} Array of all feature slugs
 */
export const getAllFeatureSlugs = () => {
  return Object.keys(featuresData);
};

/**
 * Get feature title by slug
 * @param {string} slug - Feature slug
 * @param {string} language - 'tr' or 'en'
 * @returns {string} Feature title
 */
export const getFeatureTitleBySlug = (slug, language) => {
  const feature = getFeatureBySlug(slug, language);
  return feature ? feature.hero.title : '';
};
