import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Home, Grid3X3 } from 'lucide-react';
/**
 * Feature Detail Layout
 * Provides consistent layout with breadcrumb navigation and back button
 */
const FeatureDetailLayout = ({ children, feature, language }) => {
  const navigate = useNavigate();

  const handleFeaturesClick = (e) => {
    e.preventDefault();
    navigate('/', { state: { scrollTo: 'features' } });
  };

  const breadcrumbs = [
    { label: language === 'tr' ? 'Ana Sayfa' : 'Home', href: '/', icon: Home, onClick: null },
    { label: language === 'tr' ? 'Özellikler' : 'Features', href: '/#features', icon: Grid3X3, onClick: handleFeaturesClick },
    { label: feature.hero.title, href: null, onClick: null }
  ];

  return (
    <div className="min-h-screen pattern-bg">
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 pt-24 pb-8">
        <nav className="flex items-center gap-2 text-sm text-on-surface-variant">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span className="text-on-surface-variant/50">/</span>}
              {crumb.href ? (
                crumb.onClick ? (
                  <button
                    onClick={crumb.onClick}
                    className="flex items-center gap-1 hover:text-[#ff6f00] transition-colors"
                  >
                    {crumb.icon && <crumb.icon className="w-4 h-4" />}
                    {crumb.label}
                  </button>
                ) : (
                  <Link
                    to={crumb.href}
                    className="flex items-center gap-1 hover:text-[#ff6f00] transition-colors"
                  >
                    {crumb.icon && <crumb.icon className="w-4 h-4" />}
                    {crumb.label}
                  </Link>
                )
              ) : (
                <span className="text-on-surface font-medium">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Back Button */}
        <button
          onClick={handleFeaturesClick}
          className="inline-flex items-center gap-2 mt-4 text-[#ff6f00] hover:text-[#9e4200] transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          {language === 'tr' ? 'Tüm Özelliklere Dön' : 'Back to Features'}
        </button>
      </div>

      {/* Main Content */}
      <div
      >
        {children}
      </div>
    </div>
  );
};

export default FeatureDetailLayout;
