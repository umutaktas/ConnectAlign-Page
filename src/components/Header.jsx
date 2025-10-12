import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = ({ language, toggleLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = language === 'tr' 
    ? ['Özellikler', 'Fiyatlandırma', 'SSS', 'İletişim']
    : ['Features', 'Pricing', 'FAQ', 'Contact'];

  const navIds = ['features', 'pricing', 'faq', 'footer'];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-200/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src={isScrolled ? '/assets/logo-dark.svg' : '/assets/logo-light.svg'}
              alt="ConnectAlign"
              className="h-7 md:h-8 transition-all duration-300"
            />
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(navIds[index])}
                className={`font-medium hover:text-blue-600 transition-colors ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item}
              </button>
            ))}
            
            <motion.button
              onClick={toggleLanguage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl border-2 transition-all duration-300 ${
                isScrolled
                  ? 'border-blue-600 text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-purple-600'
                  : 'border-white text-white hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              <span className="text-xl">{language === 'tr' ? '🇹🇷' : '🇬🇧'}</span>
              <span className="font-semibold">{language === 'tr' ? 'TR' : 'EN'}</span>
            </motion.button>

            <Button className="btn-primary">
              {language === 'tr' ? 'Ücretsiz Demo' : 'Free Demo'}
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-6 space-y-4 border border-gray-100"
          >
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(navIds[index])}
                className="block w-full text-left text-gray-700 font-medium hover:text-blue-600 py-2"
              >
                {item}
              </button>
            ))}
            <button
              onClick={toggleLanguage}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg border-2 border-blue-600 text-blue-600"
            >
              <span className="text-xl">{language === 'tr' ? '🇹🇷' : '🇬🇧'}</span>
              <span className="font-medium">{language === 'tr' ? 'TR' : 'EN'}</span>
            </button>
            <Button className="w-full btn-primary">
              {language === 'tr' ? 'Ücretsiz Demo' : 'Free Demo'}
            </Button>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;