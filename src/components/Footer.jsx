import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = ({ language }) => {
  const content = {
    tr: {
      description: 'İşletmenizi dijital dönüşüme taşıyan, tüm operasyonel ihtiyaçlarınızı tek platformda toplayan bulut tabanlı çözüm.',
      links: {
        title: 'Bağlantılar',
        items: ['Özellikler', 'Fiyatlandırma', 'SSS', 'Blog', 'İletişim']
      },
      contact: {
        title: 'İletişim',
        email: 'info@connectalign.com',
        phone: '+90 XXX XXX XX XX',
        address: 'Istanbul, Türkiye'
      },
      copyright: '© 2025 ConnectAlign. Tüm hakları saklıdır.',
      legal: ['Gizlilik Politikası', 'Kullanım Koşulları', 'GDPR']
    },
    en: {
      description: 'Cloud-based solution that transforms your business digitally and brings all your operational needs together in one platform.',
      links: {
        title: 'Links',
        items: ['Features', 'Pricing', 'FAQ', 'Blog', 'Contact']
      },
      contact: {
        title: 'Contact',
        email: 'info@connectalign.com',
        phone: '+90 XXX XXX XX XX',
        address: 'Istanbul, Turkey'
      },
      copyright: '© 2025 ConnectAlign. All rights reserved.',
      legal: ['Privacy Policy', 'Terms of Use', 'GDPR']
    }
  };

  const text = content[language];

  return (
    <footer id="footer" className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NGgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRoMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-2xl font-extrabold">ConnectAlign</span>
            </div>
            <p className="text-gray-400 mb-6">{text.description}</p>
            <div className="flex space-x-4">
              <a href="#" className="w-11 h-11 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-11 h-11 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-11 h-11 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-11 h-11 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{text.links.title}</h3>
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
            <h3 className="text-xl font-bold mb-4">{text.contact.title}</h3>
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

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">{text.copyright}</p>
            <div className="flex space-x-6">
              {text.legal.map((item, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
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