import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = ({ language }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const content = {
    tr: {
      description: 'İşletmenizi dijital dönüşüme taşıyan, tüm operasyonel ihtiyaçlarınızı tek platformda toplayan bulut tabanlı çözüm.',
      links: { title: 'Bağlantılar', items: ['Özellikler', 'Fiyatlandırma', 'SSS', 'İletişim'] },
      navLinks: ['features', 'pricing', 'faq', 'footer'],
      contact: {
        title: 'İletişim',
        email: 'info@utilwork.com',
        phone: '+90 216 706 30 01',
        address: 'Küçükbakkalköy, Dereboyu Cd Brandium Residence D:3A R5 Blok K:7 D:48, 34758 Ataşehir/İstanbul'
      },
      copyright: '© 2026 ConnectAlign. Utilwork firmasına aittir. Tüm hakları saklıdır.',
      legal: ['Gizlilik Politikası', 'Kullanım Koşulları', 'KVKK'],
      legalLinks: ['/gizlilik-politikasi', '/terms', '/kvkk']
    },
    en: {
      description: 'Cloud-based solution that transforms your business digitally and brings all your operational needs together in one platform.',
      links: { title: 'Links', items: ['Features', 'Pricing', 'FAQ', 'Contact'] },
      navLinks: ['features', 'pricing', 'faq', 'footer'],
      contact: {
        title: 'Contact',
        email: 'info@utilwork.com',
        phone: '+90 216 706 30 01',
        address: 'Brandium Residence D:3A R5 Block Floor:7 No:48, Dereboyu Cd, Küçükbakkalköy, 34758 Ataşehir/Istanbul'
      },
      copyright: '© 2026 ConnectAlign. Powered by Utilwork. All rights reserved.',
      legal: ['Privacy Policy', 'Terms of Use', 'GDPR'],
      legalLinks: ['/privacy', '/terms', '/gdpr']
    }
  };

  const text = content[language];

  return (
    <footer id="footer" className="bg-[#10101d] text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img
                src="/assets/logo.png"
                alt="ConnectAlign Logo"
                className="h-8 w-auto"
                style={{ maxWidth: '300px' }}
              />
            </Link>
            <p className="text-gray-400 mb-6">{text.description}</p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.youtube.com/@utilwork" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:bg-red-600 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">{text.links.title}</h3>
            <ul className="space-y-3">
              {text.links.items.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(text.navLinks[index])}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">{text.contact.title}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-1 text-blue-400 flex-shrink-0" />
                <a href={`mailto:${text.contact.email}`} className="text-gray-400 hover:text-white transition-colors">
                  {text.contact.email}
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-1 text-blue-400 flex-shrink-0" />
                <a href={`tel:${text.contact.phone.replace(/\s/g, '')}`} className="text-gray-400 hover:text-white transition-colors">
                  {text.contact.phone}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">{text.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6">
            <p className="text-gray-500 text-center md:text-left">{text.copyright}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              {text.legal.map((item, index) => (
                <Link
                  key={index}
                  to={text.legalLinks[index]}
                  className="text-gray-500 hover:text-white transition-colors text-sm text-center md:text-left"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
