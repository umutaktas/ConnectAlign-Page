import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getAdjacentFeatures, getFeatureTitleBySlug } from '@/utils/featureHelpers';

/**
 * Feature Navigation
 * Previous and next feature links
 */
const FeatureNavigation = ({ currentSlug, language }) => {
  const { prev, next } = getAdjacentFeatures(currentSlug);
  const prevTitle = prev ? getFeatureTitleBySlug(prev, language) : null;
  const nextTitle = next ? getFeatureTitleBySlug(next, language) : null;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center max-w-7xl mx-auto gap-4">
        {/* Previous Feature */}
        {prev && prevTitle ? (
          <Link
            to={`/features/${prev}`}
            className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors group feature-card p-4 flex-1"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            <div className="text-left">
              <div className="text-sm text-gray-500 mb-1">
                {language === 'tr' ? 'Önceki Özellik' : 'Previous Feature'}
              </div>
              <div className="font-semibold">{prevTitle}</div>
            </div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}

        {/* Next Feature */}
        {next && nextTitle ? (
          <Link
            to={`/features/${next}`}
            className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors group feature-card p-4 flex-1 justify-end"
          >
            <div className="text-right">
              <div className="text-sm text-gray-500 mb-1">
                {language === 'tr' ? 'Sonraki Özellik' : 'Next Feature'}
              </div>
              <div className="font-semibold">{nextTitle}</div>
            </div>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </div>
  );
};

export default FeatureNavigation;
