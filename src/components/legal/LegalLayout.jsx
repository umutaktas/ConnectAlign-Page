import React, { useState, useEffect } from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Reusable legal page layout with table of contents
 */
export default function LegalLayout({ title, lastUpdated, sections, language = 'tr', backLink = '/' }) {
  const backText = {
    tr: 'Ana Sayfaya Dön',
    en: 'Back to Home'
  };
  const tocTitle = {
    tr: 'İçindekiler',
    en: 'Table of Contents'
  };
  const footerText = {
    tr: 'Sorularınız için:',
    en: 'For questions:'
  };
  const [activeSection, setActiveSection] = useState('');
  const [isScrolling, setIsScrolling] = useState(false);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, isScrolling]);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setIsScrolling(true);
      setActiveSection(sectionId);

      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Reset scrolling flag after animation
      setTimeout(() => setIsScrolling(false), 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f1729] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to={backLink}
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          {backText[language]}
        </Link>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents - Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <div className="bg-[#16213e] border border-gray-700 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
                  {tocTitle[language]}
                </h3>

                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`
                        w-full text-left px-3 py-2 rounded-lg text-sm transition-colors
                        flex items-center gap-2 group
                        ${
                          activeSection === section.id
                            ? 'bg-purple-900/30 text-purple-300 border-l-2 border-purple-400'
                            : 'text-gray-400 hover:text-gray-300 hover:bg-[#0f1729]'
                        }
                      `}
                    >
                      <ChevronRight
                        className={`
                          w-4 h-4 transition-transform
                          ${activeSection === section.id ? 'translate-x-1' : 'group-hover:translate-x-1'}
                        `}
                      />
                      <span className="line-clamp-2">{section.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-[#16213e] border border-gray-700 rounded-2xl p-8 md:p-12">
              {/* Header */}
              <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {title}
                </h1>
                <p className="text-gray-400 text-sm">
                  {lastUpdated}
                </p>
              </div>

              {/* Sections */}
              <div className="space-y-12">
                {sections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-24">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 pb-3 border-b border-gray-700">
                      {section.title}
                    </h2>

                    <div className="space-y-4">
                      {section.content.map((paragraph, index) => (
                        <div key={index}>
                          {paragraph.includes('\n') ? (
                            // Preserve line breaks for lists
                            <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                              {paragraph}
                            </div>
                          ) : (
                            <p className="text-gray-300 leading-relaxed">
                              {paragraph}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-16 pt-8 border-t border-gray-700">
                <div className="bg-purple-900/20 border border-purple-800/30 rounded-lg p-6">
                  <p className="text-purple-300 text-sm leading-relaxed">
                    📧 {footerText[language]}{' '}
                    <a
                      href="mailto:info@utilwork.com"
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      info@utilwork.com
                    </a>
                    {' '}|{' '}
                    <a
                      href="mailto:kvkk@utilwork.com"
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      kvkk@utilwork.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
