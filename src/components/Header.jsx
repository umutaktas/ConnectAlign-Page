import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = ({ language, toggleLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
      setIsMobileMenuOpen(false);
      return;
    }
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
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-header' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.a
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer"
            onClick={() => {
              if (location.pathname !== '/') {
                navigate('/');
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <img
              src="/assets/logo.png"
              alt="ConnectAlign Logo"           
              style={{ maxWidth: '400px' }}
            />
          </motion.a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(navIds[index])}
                className="font-medium text-on-surface-variant hover:text-on-surface transition-colors"
              >
                {item}
              </button>
            ))}
            
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors"
            >
              <span className="text-lg">{language === 'tr' ? '🇹🇷' : '🇬🇧'}</span>
              <span className="font-medium text-sm">{language === 'tr' ? 'TR' : 'EN'}</span>
            </button>

            <Button
              onClick={() => window.open('https://dashboard.connectalign.com', '_blank')}
              className="btn-primary !px-6 !py-2.5"
              size="lg"
            >
              {language === 'tr' ? 'Dashboard\'a Giriş' : 'Login to Dashboard'}
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-on-surface"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 bg-surface-container-lowest backdrop-blur-lg rounded-lg shadow-ambient p-6 space-y-4"
          >
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(navIds[index])}
                className="block w-full text-left text-on-surface-variant font-medium hover:text-on-surface py-2"
              >
                {item}
              </button>
            ))}
            <button
              onClick={toggleLanguage}
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-surface-container-low text-on-surface"
            >
              <span className="text-xl">{language === 'tr' ? '🇹🇷' : '🇬🇧'}</span>
              <span className="font-medium">{language === 'tr' ? 'TR' : 'EN'}</span>
            </button>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;