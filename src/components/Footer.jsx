import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = ({ language }) => {
  const content = {
    tr: {
      description: 'İşletmenizi dijital dönüşüme taşıyan, tüm operasyonel ihtiyaçlarınızı tek platformda toplayan bulut tabanlı çözüm.',
      links: { title: 'Bağlantılar', items: ['Özellikler', 'Fiyatlandırma', 'SSS', 'Blog', 'İletişim'] },
      contact: { title: 'İletişim', email: 'info@connectalign.com', phone: '+90 XXX XXX XX XX', address: 'Istanbul, Türkiye' },
      copyright: '© 2025 ConnectAlign. Tüm hakları saklıdır.',
      legal: ['Gizlilik Politikası', 'Kullanım Koşulları', 'KVKK']
    },
    en: {
      description: 'Cloud-based solution that transforms your business digitally and brings all your operational needs together in one platform.',
      links: { title: 'Links', items: ['Features', 'Pricing', 'FAQ', 'Blog', 'Contact'] },
      contact: { title: 'Contact', email: 'info@connectalign.com', phone: '+90 XXX XXX XX XX', address: 'Istanbul, Turkey' },
      copyright: '© 2025 ConnectAlign. All rights reserved.',
      legal: ['Privacy Policy', 'Terms of Use', 'GDPR']
    }
  };

  const text = content[language];

  return (
    <footer id="footer" className="bg-[#10101d] text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <a href="#" className="flex items-center mb-4">
              <img
                src="/assets/logo.png"
                alt="ConnectAlign Logo"
                className="h-8 w-auto"
                style={{ maxWidth: '300px' }}
              />
            </a>
            <p className="text-gray-400 mb-6">{text.description}</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">{text.links.title}</h3>
            <ul className="space-y-3">
              {text.links.items.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
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
                <span className="text-gray-400">{text.contact.phone}</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">{text.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">{text.copyright}</p>
            <div className="flex space-x-6">
              {text.legal.map((item, index) => (
                <a key={index} href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;