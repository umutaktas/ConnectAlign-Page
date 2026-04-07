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
    <div className="min-h-screen bg-surface py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to={backLink}
          className="inline-flex items-center gap-2 text-[#ff6f00] hover:text-[#9e4200] transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          {backText[language]}
        </Link>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents - Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-ambient">
                <h3 className="text-on-surface font-semibold mb-4 text-sm uppercase tracking-wide">
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
                            ? 'bg-surface-container-low text-[#ff6f00] engagement-pulse'
                            : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
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
            <div className="bg-surface-container-lowest rounded-2xl p-8 md:p-12 shadow-ambient">
              <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-on-surface display-tight">
                  {title}
                </h1>
                <p className="text-on-surface-variant text-sm">
                  {lastUpdated}
                </p>
              </div>

              <div className="space-y-12">
                {sections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-24">
                    <h2 className="text-2xl md:text-3xl font-bold text-on-surface mb-6">
                      {section.title}
                    </h2>

                    <div className="space-y-4">
                      {section.content.map((paragraph, index) => (
                        <div key={index}>
                          {paragraph.includes('\n') ? (
                            <div className="text-on-surface-variant leading-relaxed whitespace-pre-line">
                              {paragraph}
                            </div>
                          ) : (
                            <p className="text-on-surface-variant leading-relaxed">
                              {paragraph}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              <div className="mt-16 pt-8">
                <div className="bg-surface-container-low rounded-2xl p-6 engagement-pulse">
                  <p className="text-on-surface text-sm leading-relaxed">
                    📧 {footerText[language]}{' '}
                    <a
                      href="mailto:info@utilwork.com"
                      className="text-[#ff6f00] hover:text-[#9e4200] underline"
                    >
                      info@utilwork.com
                    </a>
                    {' '}|{' '}
                    <a
                      href="mailto:kvkk@utilwork.com"
                      className="text-[#ff6f00] hover:text-[#9e4200] underline"
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
