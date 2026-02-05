/**
 * Feature Data for ConnectAlign Landing Page
 * Content generated from backend module analysis (D:\dev\ConnectAlign\Connect.Align\src)
 *
 * Structure:
 * - Each feature has TR and EN content
 * - hero: Title, tagline, CTA
 * - overview: Problem, Solution, Value Proposition
 * - benefits: Grid of 4-6 benefits with icons
 * - capabilities: Categorized feature lists
 * - useCases: Real-world scenarios
 * - technicalSpecs: Backend tech details
 * - screenshots: Gallery settings
 */

export const featuresData = {
  'document-management': {
    tr: {
      hero: {
        icon: 'FileText',
        title: 'Doküman Yönetim Sistemi',
        tagline: 'Kağıtsız ofise geçin, tüm dokümanlarınızı kategori bazlı organize edin ve güvenli bir şekilde yönetin',
        primaryCTA: 'Ücretsiz Demo İsteyin'
      },
      overview: {
        description: 'Şirketlerde dokümanlar e-posta ekleri, USB diskler ve dağınık klasörlerde saklanır. Doğru dosyayı bulmak saatler alır, versiyon karmaşası yaşanır, kağıt dokümanlar kaybolur ve arşivleme maliyetlidir.\n\nConnectAlign Doküman Yönetim Sistemi, tüm dokümanlarınızı hiyerarşik kategori yapısında merkezi bir platformda organize eder. Rol bazlı erişim kontrolü ile sadece yetkili kişiler hassas dosyalara erişir. Gelişmiş arama özellikleri ile doküman içeriğinde anında arama yapabilir, tüm işlemleri detaylı kayıtlarla takip edebilirsiniz. Cloud depolama sistemleri ile güvenli saklama sağlanır.\n\nDoküman arama süresini %85 azaltın, kağıt maliyetlerinde %90 tasarruf edin ve işlem kayıtları ile %100 uyumluluk sağlayın.'
      },
      benefits: [
        {
          icon: 'FolderTree',
          title: 'Hiyerarşik Kategori Yapısı',
          description: 'Sınırsız seviye kategori ağacı. Alt kategoriler ile firma, departman, proje bazlı organize edin. Renk kodlu kategoriler ile görsel ayırt edin.'
        },
        {
          icon: 'Lock',
          title: 'Rol Bazlı Erişim Kontrolü',
          description: 'Departman, kullanıcı ve rol bazında doküman görüntüleme/düzenleme izinleri. Firma bazlı veri ayrımı.'
        },
        {
          icon: 'Search',
          title: 'Gelişmiş Arama ve Filtreleme',
          description: 'Gelişmiş arama ile doküman içeriğinde arama, kategori filtresi, tarih aralığı, dosya tipi ve gelişmiş filtreleme seçenekleri.'
        },
        {
          icon: 'HardDrive',
          title: 'Esnek Saklama Seçenekleri',
          description: 'Sunucu depolama veya uzak depolama seçenekleri. Cloud depolama sistemleri ile entegrasyon hazır. Özelleştirilebilir depolama yolları.'
        },
        {
          icon: 'Smartphone',
          title: 'Mobil ve Web Erişim',
          description: 'Güçlü web arayüzü ile uyumlu ekran tasarımı. Mobil uygulama (iOS/Android) desteği. Her yerden güvenli erişim.'
        },
        {
          icon: 'Shield',
          title: 'Audit Trail ve Güvenlik',
          description: 'Her işlem loglanır (oluşturma/değiştirme zaman damgaları). Güvenli bağlantı, şifreli veri saklama, güvenli kimlik doğrulama, rol bazlı yetkiler.'
        }
      ],
      capabilities: {
        'Dosya Yönetimi': [
          'Sürükle-bırak ile dosya yükleme',
          'Toplu dosya indirme',
          'Dosya taşıma ve kopyalama',
          'Gelişmiş arama ve filtreleme',
          'Dosya önizleme (PDF, resim, video)',
          'Tüm dosya formatları desteklenir'
        ],
        'Erişim Kontrolü': [
          'Kullanıcı bazlı izin yönetimi',
          'Departman bazlı erişim sınırlama',
          'Rol tanımlama (okuma, yazma, silme)',
          'Tüm işlemlerin kayıt altına alınması',
          'Firma bazlı veri ayrımı',
          'Güvenli dosya paylaşımı'
        ],
        'Kategori ve Organizasyon': [
          'Sınırsız alt klasör oluşturma',
          'Renk kodlu kategoriler',
          'Kategori bazlı arama',
          'Toplu kategori taşıma',
          'Favori klasörler',
          'Hiyerarşik dosya yapısı'
        ],
        'Arama ve Raporlama': [
          'Akıllı arama (dosya içinde arama)',
          'Kategori ve tarih filtresi',
          'Kullanım istatistikleri',
          'Erişim raporları',
          'Sayfalama desteği',
          'Rapor dışa aktarma'
        ],
        'Platform Özellikleri': [
          'Web tabanlı arayüz',
          'Mobil uygulama (iOS/Android)',
          'Bulut ve sunucu depolama seçenekleri',
          'Departman entegrasyonu',
          'Bildirim sistemi',
          'Anlık senkronizasyon'
        ]
      },
      useCases: [
        {
          title: 'İnsan Kaynakları Departmanı',
          scenario: 'İK departmanı, tüm personel dosyalarını (sözleşmeler, performans değerlendirmeleri, özgeçmişler) kategori bazlı organize eder. "İK > Personel > Sözleşmeler" ve "İK > Personel > Performans" gibi alt kategoriler oluşturur. Departman yöneticileri kendi departmanlarının dosyalarını görür (rol bazlı yetkiler). Yeni çalışan işe alımında tüm dokümanlar merkezi sistemde saklanır. Performans değerlendirme döneminde "Performans" kategorisindeki tüm dosyalara kolayca erişilir. Arama özelliği ile çalışan adı veya tarih aralığı filtresi kullanılır.'
        },
        {
          title: 'Muhasebe Departmanı',
          scenario: 'Muhasebe, tüm faturaları, makbuzları ve mali raporları dijital ortamda "Muhasebe > Faturalar > Gelen" ve "Muhasebe > Faturalar > Giden" kategorilerinde saklar. Vergi denetiminde geçmiş 5 yılın tüm belgelerine arama özelliği ile anında erişilir. Fatura aramak için tarih filtresi ve kategori filtresi kullanılır. Mali müşavire güvenli bağlantı ile paylaşım yapılır (yetki bazlı erişim). İşlem kayıtları sayesinde kim hangi dosyaya ne zaman erişmiş görülür.'
        },
        {
          title: 'Proje Yönetimi',
          scenario: 'Proje yöneticileri, proje bazlı kategoriler oluşturur: "Projeler > Proje A > Teklifler", "Projeler > Proje A > Sözleşmeler", "Projeler > Proje A > Teknik Dokümanlar". Her proje için ayrı renk kodu atanır. Proje ekibi üyeleri sadece kendi projelerinin dosyalarını görür (veri ayrımı + rol bazlı). Proje tamamlandığında tüm dokümanlar "Arşiv" kategorisine taşınır. Kategori ağacı ile hiyerarşik yapı mobil uygulamada ağaç görünümünde gösterilir.'
        }
      ],
      technicalSpecs: {
        platform: [
          'Web tabanlı (tüm tarayıcılar)',
          'iOS mobil uygulama',
          'Android mobil uygulama',
          'Çevrimdışı çalışma desteği'
        ],
        security: [
          'Kurumsal seviye güvenlik',
          'Şifreli veri saklama',
          'Çok katmanlı yetkilendirme',
          'Düzenli güvenlik güncellemeleri'
        ],
        integration: [
          'Departman ve kullanıcı yönetimi entegrasyonu',
          'Bildirim sistemi entegrasyonu',
          'Mobil uygulama senkronizasyonu'
        ]
      },
      screenshots: {
        enabled: false,
        placeholderText: 'Gerçek ekran görüntüleri yakında eklenecek. Blazor admin panelinden doküman yükleme, kategori ağacı, arama ve filtreleme ekranları gösterilecek.'
      }
    },
    en: {
      hero: {
        icon: 'FileText',
        title: 'Document Management System',
        tagline: 'Go paperless, organize all documents by category and manage them securely on a centralized platform',
        primaryCTA: 'Request Free Demo'
      },
      overview: {
        description: 'Companies store documents as email attachments, USB drives, and scattered folders. Finding the right file takes hours, version confusion occurs, paper documents get lost, and archiving is costly.\n\nConnectAlign Document Management System organizes all your documents in a hierarchical category structure on a centralized platform. Role-based access control ensures only authorized personnel can access sensitive files. Advanced search features enable instant searching within document content, and all operations are tracked with detailed logs. Cloud storage systems ensure secure storage.\n\nReduce document search time by 85%, save 90% on paper costs, and ensure 100% compliance with operation logs.'
      },
      benefits: [
        {
          icon: 'FolderTree',
          title: 'Hierarchical Category Structure',
          description: 'Unlimited level category tree. Organize by company, department, project with subcategories. Color-coded categories for visual distinction.'
        },
        {
          icon: 'Lock',
          title: 'Role-Based Access Control',
          description: 'Document view/edit permissions by department, user, and role. Company-based data separation.'
        },
        {
          icon: 'Search',
          title: 'Advanced Search & Filtering',
          description: 'Advanced search within document content, category filter, date range, file type, and advanced filtering options.'
        },
        {
          icon: 'HardDrive',
          title: 'Flexible Storage Options',
          description: 'Server storage or remote storage options. Cloud storage systems integration ready. Customizable storage paths.'
        },
        {
          icon: 'Smartphone',
          title: 'Mobile and Web Access',
          description: 'Powerful web interface with responsive screen design. Mobile app (iOS/Android) support. Secure access from anywhere.'
        },
        {
          icon: 'Shield',
          title: 'Audit Trail & Security',
          description: 'All operations logged (created/modified timestamps). Secure connection, encrypted data storage, secure authentication, role-based permissions.'
        }
      ],
      capabilities: {
        'File Management': [
          'Drag-and-drop file upload',
          'Bulk file download',
          'File move and copy',
          'Advanced search and filtering',
          'File preview (PDF, images, video)',
          'All file formats supported'
        ],
        'Access Control': [
          'User-based permission management',
          'Department-based access restriction',
          'Role definition (read, write, delete)',
          'All operations logged and tracked',
          'Company-based data separation',
          'Secure file sharing'
        ],
        'Category and Organization': [
          'Unlimited subfolder creation',
          'Color-coded categories',
          'Category-based search',
          'Bulk category operations',
          'Favorite folders',
          'Hierarchical file structure'
        ],
        'Search and Reporting': [
          'Smart search (search within files)',
          'Category and date filters',
          'Usage statistics',
          'Access reports',
          'Pagination support',
          'Export to Excel'
        ],
        'Platform Features': [
          'Web-based interface',
          'iOS and Android mobile apps',
          'Cloud and server storage options',
          'Department integration',
          'Notification system',
          'Real-time synchronization'
        ]
      },
      useCases: [
        {
          title: 'Human Resources Department',
          scenario: 'HR department organizes all personnel files (contracts, performance reviews, resumes) by category. Creates subcategories like "HR > Personnel > Contracts" and "HR > Personnel > Performance". Department managers see only their department files (role-based permissions). When hiring new employees, all documents are stored in the central system. During performance review period, easy access to all files in the "Performance" category. Search endpoint used with employee name or date range filters.'
        },
        {
          title: 'Accounting Department',
          scenario: 'Accounting stores all invoices, receipts, and financial reports digitally in "Accounting > Invoices > Incoming" and "Accounting > Invoices > Outgoing" categories. During tax audits, instant access to all documents from the past 5 years via search endpoint. Date filter (CreatedOn date range) and category filter used to find invoices. Secure sharing with tax consultants via permission-based access. Audit trail shows who accessed which file and when.'
        },
        {
          title: 'Project Management',
          scenario: 'Project managers create project-based categories: "Projects > Project A > Proposals", "Projects > Project A > Contracts", "Projects > Project A > Technical Documents". Each project assigned a color code (color property). Project team members see only their project files (multi-tenant + role-based). When project completes, all documents moved to "Archive" category. Category tree endpoint displays hierarchical structure in mobile app tree view.'
        }
      ],
      technicalSpecs: {
        platform: [
          'Web-based (all browsers)',
          'iOS mobile app',
          'Android mobile app',
          'Offline mode support'
        ],
        security: [
          'Enterprise-level security',
          'Encrypted data storage',
          'Multi-layer authorization',
          'Regular security updates'
        ],
        integration: [
          'Department and user management integration',
          'Notification system integration',
          'Mobile app synchronization'
        ]
      },
      screenshots: {
        enabled: false,
        placeholderText: 'Real screenshots coming soon. Will showcase document upload, category tree, search and filtering screens from Blazor admin panel.'
      }
    }
  },

  'internal-communication': {
    tr: {
      hero: {
        icon: 'MessageSquare',
        title: 'İç İletişim Merkezi',
        tagline: 'Anlık bildirimler, SMS ve duyurularla çalışanlarınızla anında iletişim kurun. Güvenilir bildirim altyapısı ile etkili iç iletişim.',
        primaryCTA: 'Ücretsiz Demo İsteyin'
      },
      overview: {
        description: 'Şirketlerde önemli duyurular e-posta ile kaybolur, okunma oranı %15\'in altındadır. Acil bildirimler zamanında ulaşmaz ve çalışan katılımı düşüktür.\n\nConnectAlign İç İletişim Merkezi, anlık bildirim servisi ile mobil cihazlara (iOS/Android) anında bildirim gönderir. Grup bildirim gönderimi sayesinde departman, rol veya tüm çalışanlara toplu mesaj iletebilirsiniz. Kimler okudu takibi ile her duyurunun okunma durumunu gerçek zamanlı izleyebilir, SMS yedekleme ile mobil uygulaması olmayan kullanıcılara da ulaşabilirsiniz.\n\nOkunma oranını %85\'e çıkarın, duyuru teslim süresini %95 azaltın ve etkileşim analitiği ile etkinliği ölçün.'
      },
      benefits: [
        {
          icon: 'Bell',
          title: 'Anlık Bildirimler',
          description: 'Mobil uygulama (iOS/Android) ile anında bildirim gönderin. Merkezi cihaz yönetimi, grup abonelikleri ve toplu mesajlaşma özellikleri ile tüm çalışanlarınıza etkili bir şekilde ulaşın.'
        },
        {
          icon: 'Users',
          title: 'Esnek Hedefleme',
          description: 'Duyurularınızı doğru kişilere ulaştırın. Tüm organizasyona, belirli departmanlara, rollere veya bireysel kullanıcılara özel hedeflenmiş mesajlar gönderin. Özel kullanıcı grupları oluşturarak iletişim stratejinizi optimize edin.'
        },
        {
          icon: 'BarChart3',
          title: 'İletişim Analitiği',
          description: 'Duyurularınızın etkinliğini detaylı raporlarla ölçün. Görüntülenme sayısı, okunma oranı ve teslim başarı metrikleriyle iletişim stratejinizi optimize edin. Departman ve platform bazlı analizlerle hedef kitlenizi daha iyi anlayın.'
        },
        {
          icon: 'Tag',
          title: 'Kategori ve Önceliklendirme',
          description: 'Duyurularınızı renk kodlu kategorilerle organize edin. Önemli mesajları en üstte sabitleyin, taslak kaydedin veya ileri tarihli yayınlama planlayın. Son kullanma tarihi belirleme ile mesajlarınızın güncelliğini koruyun.'
        },
        {
          icon: 'CheckCircle',
          title: 'Okundu Takibi',
          description: 'Hangi çalışanların duyuruları okuduğunu ve ne zaman okuduğunu detaylı olarak takip edin. Okunmamış mesaj sayacı ile çalışanlarınızın bilgilenme durumunu anlık izleyin. Raporlama ile iletişim etkinliğini ölçümleyin.'
        }
      ],
      capabilities: {
        'Anlık Bildirimler': [
          'iOS ve Android cihazlara anında bildirim',
          'Sesli ve sessiz bildirim seçenekleri',
          'Bildirim öncelik seviyeleri',
          'Görsel destekli bildirimler',
          'Toplu bildirim gönderimi',
          'Özel bildirim içeriği (4KB\'a kadar)'
        ],
        'Hedefleme ve Filtreleme': [
          'Tüm çalışanlara gönderim',
          'Departman bazlı gönderim',
          'Rol bazlı gönderim',
          'Bireysel kullanıcı seçimi',
          'Özel kullanıcı grupları',
          'Şirket bazlı gönderim'
        ],
        'Takip ve Analiz': [
          'Kimler okudu görüntüleme',
          'Okunma oranları',
          'Teslim edilme başarısı',
          'Platform bazlı analiz (mobil/web)',
          'Departman bazlı istatistikler',
          'Gerçek zamanlı metrikler'
        ],
        'Duyuru Yönetimi': [
          'Taslak kaydetme',
          'İleri tarihli yayınlama',
          'Son kullanma tarihi belirleme',
          'Önemli duyuruları sabitleme',
          'Kategori bazlı organizasyon',
          'Duyuru arama ve filtreleme'
        ],
        'Cihaz Yönetimi': [
          'Otomatik cihaz kaydı',
          'Mobil ve web desteği',
          'Cihaz model ve versiyon takibi',
          'Eski cihazları otomatik devre dışı bırakma',
          'Grup abonelik yönetimi',
          'Cihaz doğrulama'
        ],
        'Entegrasyon': [
          'Departman ve kullanıcı yönetimi entegrasyonu',
          'SMS geri bildirim desteği',
          'Web ve mobil uygulama',
          'Otomatik bildirim tetikleme',
          'Merkezi bildirim altyapısı',
          'Olay tabanlı mimari'
        ]
      },
      useCases: [
        {
          title: 'Acil Duyuru Senaryosu',
          scenario: 'Şirket genelinde elektrik kesintisi planlanmıştır. İK departmanı bir duyuru oluşturur, hedef olarak "Tüm Kullanıcılar" seçer, kategori olarak "Acil" seçer ve duyuruyu sabitleme özelliğini etkinleştirir. Duyuru yayınlandığında sistem otomatik olarak tüm kayıtlı cihazlara bildirim gönderir. Her platform için optimize edilmiş ayarlar kullanılarak tüm cihazlara anında ulaşılır. Mobil uygulama bildirimi aldığında kullanıcıyı duyuru detay sayfasına yönlendirir. Kullanıcılar duyuruyu okudukça sistem bunu kaydeder. Analiz sayfasında gerçek zamanlı okunma oranı görülür. 500 çalışandan 480\'i 5 dakika içinde okumuştur (%96 okunma oranı).'
        },
        {
          title: 'Departman Bazlı Bildirim',
          scenario: 'Bilgi İşlem departmanı için sistem bakımı duyurusu yapılacak. Yönetici duyuru oluşturur, hedef olarak "Departman" seçer ve Bilgi İşlem departmanını seçer. Duyuru yayınlandığında sistem bu departmandaki tüm kullanıcıların cihazlarını bulur ve toplu bildirim gönderir. Aynı zamanda grup aboneliği olan tüm cihazlar da otomatik olarak bildirimi alır. Analiz sayfasında platform dağılımı gösterilir: 25 mobil kullanıcı, 35 web kullanıcısı. Departman yöneticisi kontrol panelinde departman bazlı etkileşim metriklerini görür.'
        },
        {
          title: 'Zamanlanmış Duyuru',
          scenario: 'Yeni yıl kutlama etkinliği için duyuru hazırlanır ve taslak olarak kaydedilir. Yayınlanma tarihi 31 Aralık 09:00, son kullanma tarihi 1 Ocak 23:59 olarak ayarlanır. Sistem belirtilen tarihte duyuruyu otomatik olarak yayınlar ve tüm kullanıcılara bildirim gönderir. Etkinlik sona erdiğinde (1 Ocak 23:59) duyuru artık mobil uygulamada gösterilmez. Analiz sayfasında hangi saatte kaç kişinin okuduğu detaylı olarak görülür.'
        }
      ],
      technicalSpecs: {
        platform: [
          'Web tabanlı arayüz',
          'iOS mobil uygulama',
          'Android mobil uygulama',
          'Gerçek zamanlı bildirimler'
        ],
        notification: [
          'iOS için Apple Push Notification Service',
          'Android için Firebase Cloud Messaging',
          'Web için push notification desteği',
          'Öncelikli bildirim gönderimi',
          'Görsel ve ses desteği',
          'Özel bildirim verileri'
        ],
        security: [
          'Kurumsal seviye güvenlik',
          'Şifreli cihaz kayıtları',
          'Çok katmanlı yetkilendirme',
          'Güvenli bildirim gönderimi',
          'Erişim kayıtları',
          'IP adresi takibi'
        ],
        integration: [
          'Departman ve kullanıcı yönetimi',
          'SMS geri bildirim sistemi',
          'Mobil uygulama senkronizasyonu',
          'Otomatik olay tetikleme',
          'Merkezi bildirim altyapısı'
        ]
      },
      screenshots: {
        enabled: false,
        placeholderText: 'Gerçek ekran görüntüleri yakında eklenecek. Duyuru oluşturma, hedefleme, analytics dashboard, read receipt ekranları gösterilecek.'
      }
    },
    en: {
      hero: {
        icon: 'MessageSquare',
        title: 'Internal Communication Hub',
        tagline: 'Instantly communicate with employees via push notifications, SMS, and announcements. Reliable notification infrastructure for effective internal communication.',
        primaryCTA: 'Request Free Demo'
      },
      overview: {
        description: 'Important company announcements get lost in emails, read rate is below 15%. Urgent notifications don\'t reach on time, and employee engagement is low.\n\nConnectAlign Internal Communication Hub sends instant notifications to mobile devices (iOS/Android) via instant notification service. With group notification delivery, you can send bulk messages to departments, roles, or all employees. Track who read each announcement in real-time with read receipt tracking, and reach users without mobile app via SMS fallback.\n\nIncrease read rate to 85%, reduce announcement delivery time by 95%, and measure effectiveness with engagement analytics.'
      },
      benefits: [
        {
          icon: 'Bell',
          title: 'Instant Notifications',
          description: 'Send instant notifications via mobile app (iOS/Android). Reach all your employees effectively with centralized device management, group subscriptions, and bulk messaging features.'
        },
        {
          icon: 'Users',
          title: 'Flexible Targeting',
          description: 'Deliver your announcements to the right people. Send targeted messages to the entire organization, specific departments, roles, or individual users. Optimize your communication strategy by creating custom user groups.'
        },
        {
          icon: 'BarChart3',
          title: 'Communication Analytics',
          description: 'Measure the effectiveness of your announcements with detailed reports. Optimize your communication strategy with view counts, read rates, and delivery success metrics. Better understand your audience with department and platform-based analytics.'
        },
        {
          icon: 'Tag',
          title: 'Categories & Prioritization',
          description: 'Organize your announcements with color-coded categories. Pin important messages to the top, save drafts, or schedule future publishing. Keep your messages current with expiration date management.'
        },
        {
          icon: 'CheckCircle',
          title: 'Read Receipt Tracking',
          description: 'Track in detail which employees read announcements and when. Monitor your employees\' information status in real-time with unread message counter. Measure communication effectiveness with reporting.'
        }
      ],
      capabilities: {
        'Instant Notifications': [
          'Instant notifications to iOS and Android devices',
          'Sound and silent notification options',
          'Notification priority levels',
          'Image-supported notifications',
          'Bulk notification sending',
          'Custom notification content (up to 4KB)'
        ],
        'Targeting and Filtering': [
          'Send to all employees',
          'Department-based sending',
          'Role-based sending',
          'Individual user selection',
          'Custom user groups',
          'Company-based sending'
        ],
        'Tracking and Analytics': [
          'View who read notifications',
          'Read rates',
          'Delivery success',
          'Platform-based analysis (iOS/Android/Web)',
          'Department-based statistics',
          'Real-time metrics'
        ],
        'Announcement Management': [
          'Save as draft',
          'Schedule future publishing',
          'Set expiration date',
          'Pin important announcements',
          'Category-based organization',
          'Search and filter announcements'
        ],
        'Device Management': [
          'Automatic device registration',
          'iOS, Android and Web support',
          'Device model and version tracking',
          'Auto-deactivate old devices',
          'Group subscription management',
          'Device validation'
        ],
        'Integration': [
          'Department and user management integration',
          'SMS fallback support',
          'Web and mobile applications',
          'Automatic notification triggering',
          'Centralized notification infrastructure',
          'Event-driven architecture'
        ]
      },
      useCases: [
        {
          title: 'Emergency Announcement Scenario',
          scenario: 'A company-wide power outage is planned. HR department creates an announcement, selects "All Users" as target, selects "Emergency" category, and enables the pin feature. When the announcement is published, the system automatically sends notifications to all registered devices. Optimized settings are used for each platform to instantly reach all devices. When the mobile app receives the notification, it directs the user to the announcement detail page. As users read the announcement, the system records it. The analytics page shows real-time read rates. 480 out of 500 employees read within 5 minutes (96% read rate).'
        },
        {
          title: 'Department-Based Notification',
          scenario: 'IT department needs to announce system maintenance. Admin creates announcement, selects "Department" as target and chooses IT department. When published, the system finds all users\' devices in the IT department and sends bulk notifications. All devices with group subscriptions also automatically receive the notification. The analytics page shows platform distribution: iOS: 25 users, Android: 35 users. Department manager views department-based engagement metrics on the dashboard.'
        },
        {
          title: 'Scheduled Announcement',
          scenario: 'New year celebration event announcement is prepared and saved as draft. Publish date is set to December 31 09:00, expiry date is set to January 1 23:59. The system automatically publishes the announcement at the specified date and sends notifications to all users. When the event ends (January 1 23:59), the announcement is no longer shown in the mobile app. The analytics page shows detailed information about how many people read at which hour.'
        }
      ],
      technicalSpecs: {
        platform: [
          'Web-based interface',
          'iOS mobile app',
          'Android mobile app',
          'Real-time notifications'
        ],
        notification: [
          'Apple Push Notification Service for iOS',
          'Firebase Cloud Messaging for Android',
          'Web push notification support',
          'Priority notification sending',
          'Image and sound support',
          'Custom notification data'
        ],
        security: [
          'Enterprise-level security',
          'Encrypted device registrations',
          'Multi-layer authorization',
          'Secure notification sending',
          'Access logs',
          'IP address tracking'
        ],
        integration: [
          'Department and user management',
          'SMS fallback system',
          'Mobile app synchronization',
          'Automatic event triggering',
          'Centralized notification infrastructure'
        ]
      },
      screenshots: {
        enabled: false,
        placeholderText: 'Real screenshots coming soon. Will showcase announcement creation, targeting, analytics dashboard, and read receipt screens.'
      }
    }
  },

  // Placeholder structures for remaining features
  // These will be implemented in Phase 2
  'organization-management': {
    tr: {
      hero: {
        icon: 'Building2',
        title: 'Organizasyon Yönetimi',
        tagline: 'Şirket, departman ve kullanıcı yönetimini merkezi bir platformda yönetin',
        primaryCTA: 'Ücretsiz Demo İsteyin'
      },
      overview: {
        description: 'Şirketlerde organizasyon yapısı karmaşıktır, departman hiyerarşisi takip edilemez, kullanıcı yetkileri dağınıktır. Yeni çalışan işe alımında sistem erişimleri manuel olarak verilir, departman değişikliklerinde tüm sistemler ayrı ayrı güncellenir.\n\nConnectAlign Organizasyon Yönetimi ile şirket, departman ve kullanıcı bilgilerini hiyerarşik yapıda merkezi platformda yönetin. Departman bazlı yetkilendirme ile her departmanın kendi verilerine erişimini kontrol edin. Kullanıcı rolleri ile sistem genelinde izinleri otomatik olarak yönetin. Tüm modüller organizasyon yapısıyla entegre çalışır.\n\nYeni çalışan onboarding süresini %70 azaltın, yetki karmaşasını ortadan kaldırın ve merkezi yönetim ile organizasyon şeffaflığını artırın.'
      },
      benefits: [],
      capabilities: {},
      useCases: [],
      technicalSpecs: {},
      screenshots: { enabled: false, placeholderText: 'Yakında eklenecek' }
    },
    en: {
      hero: {
        icon: 'Building2',
        title: 'Organization Management',
        tagline: 'Manage companies, departments and users on a centralized platform',
        primaryCTA: 'Request Free Demo'
      },
      overview: {
        description: 'In companies, organization structure is complex, department hierarchy cannot be tracked, and user permissions are scattered. During new employee onboarding, system access is granted manually, and when departments change, all systems must be updated separately.\n\nWith ConnectAlign Organization Management, manage company, department, and user information in a hierarchical structure on a centralized platform. Control each department\'s access to their own data with department-based authorization. Automatically manage permissions across the system with user roles. All modules work integrated with the organization structure.\n\nReduce new employee onboarding time by 70%, eliminate permission confusion, and increase organization transparency with centralized management.'
      },
      benefits: [],
      capabilities: {},
      useCases: [],
      technicalSpecs: {},
      screenshots: { enabled: false, placeholderText: 'Coming soon' }
    }
  },

  'training-development': {
    tr: {
      hero: {
        icon: 'GraduationCap',
        title: 'Eğitim & Gelişim',
        tagline: 'Video bazlı eğitim içerikleri ile çalışanlarınızı geliştirin',
        primaryCTA: 'Ücretsiz Demo İsteyin'
      },
      overview: {
        description: 'Şirketlerde çalışan eğitimleri dağınıktır, kimler hangi eğitimi aldı takip edilemez, eğitim materyalleri güncel değildir. Oryantasyon süreçleri manuel olarak yürütülür, eğitim etkinliği ölçülemez.\n\nConnectAlign Eğitim & Gelişim platformu ile video bazlı eğitim içeriklerini merkezi sistemde yönetin. Çalışanlara otomatik eğitim atamaları yapın, izleme durumlarını gerçek zamanlı takip edin. Sınav ve quiz modülleri ile öğrenmeyi pekiştirin. Sertifika yönetimi ile başarıları belgeleyin. Mobil uygulama (iOS/Android) ile her yerden erişim sağlayın.\n\nYeni çalışan oryantasyon süresini %60 azaltın, eğitim tamamlama oranını %80\'e çıkarın ve çalışan gelişimini ölçülebilir hale getirin.'
      },
      benefits: [],
      capabilities: {},
      useCases: [],
      technicalSpecs: {},
      screenshots: { enabled: false, placeholderText: 'Yakında eklenecek' }
    },
    en: {
      hero: {
        icon: 'GraduationCap',
        title: 'Training & Development',
        tagline: 'Develop your employees with video-based training content',
        primaryCTA: 'Request Free Demo'
      },
      overview: {
        description: 'In companies, employee training is scattered, who took which training cannot be tracked, and training materials are not up-to-date. Orientation processes are conducted manually, and training effectiveness cannot be measured.\n\nWith ConnectAlign Training & Development platform, manage video-based training content in a centralized system. Automatically assign training to employees and track viewing status in real-time. Reinforce learning with exam and quiz modules. Document achievements with certificate management. Access from anywhere with mobile app (iOS/Android).\n\nReduce new employee orientation time by 60%, increase training completion rate to 80%, and make employee development measurable.'
      },
      benefits: [],
      capabilities: {},
      useCases: [],
      technicalSpecs: {},
      screenshots: { enabled: false, placeholderText: 'Coming soon' }
    }
  },

  'dashboard-reporting': {
    tr: {
      hero: {
        icon: 'BarChart3',
        title: 'Dashboard & Raporlama',
        tagline: 'Gerçek zamanlı grafiksel raporlar ile işletmenizi izleyin',
        primaryCTA: 'Ücretsiz Demo İsteyin'
      },
      overview: {
        description: 'Şirketlerde iş metrikleri farklı sistemlerde dağınıktır, rapor almak için her sistemden ayrı ayrı veri çekilir. Manuel raporlama zaman alır, veriler güncel değildir. Analiz yapmak zordur, karar vermek için yeterli görünürlük yoktur.\n\nConnectAlign Dashboard & Raporlama ile tüm iş metriklerini tek bir ekranda gerçek zamanlı izleyin. Grafiksel dashboard\'larla çalışan sayısı, doküman kullanımı, anket katılımı, duyuru okunma oranları gibi kritik metrikleri görselleştirin. Özelleştirilebilir raporlar oluşturun, otomatik periyodik raporlar alın. Excel\'e aktarma ile detaylı analiz yapın.\n\nRapor hazırlama süresini %90 azaltın, gerçek zamanlı veri ile anlık karar verin ve veri odaklı yönetim ile işletme performansını artırın.'
      },
      benefits: [],
      capabilities: {},
      useCases: [],
      technicalSpecs: {},
      screenshots: { enabled: false, placeholderText: 'Yakında eklenecek' }
    },
    en: {
      hero: {
        icon: 'BarChart3',
        title: 'Dashboard & Reporting',
        tagline: 'Monitor your business with real-time graphical reports',
        primaryCTA: 'Request Free Demo'
      },
      overview: {
        description: 'In companies, business metrics are scattered across different systems, and to get reports, data must be pulled from each system separately. Manual reporting is time-consuming, data is not up-to-date. Analysis is difficult, and there is not enough visibility for decision-making.\n\nWith ConnectAlign Dashboard & Reporting, monitor all business metrics in real-time on a single screen. Visualize critical metrics such as employee count, document usage, survey participation, and announcement read rates with graphical dashboards. Create customizable reports, receive automatic periodic reports. Perform detailed analysis with Excel export.\n\nReduce report preparation time by 90%, make instant decisions with real-time data, and increase business performance with data-driven management.'
      },
      benefits: [],
      capabilities: {},
      useCases: [],
      technicalSpecs: {},
      screenshots: { enabled: false, placeholderText: 'Coming soon' }
    }
  },

  'event-management': {
    tr: {
      hero: {
        icon: 'Calendar',
        title: 'Etkinlik Yönetimi',
        tagline: 'Şirket etkinliklerini planlayın, duyurun ve katılım takibi yapın',
        primaryCTA: 'Ücretsiz Demo İsteyin'
      },
      overview: {
        description: 'Şirket etkinlikleri (toplantılar, eğitimler, sosyal aktiviteler) manuel olarak planlanır, katılımcı listesi Excel\'de tutulur, katılım bilgisi kaybolur. Etkinlik duyuruları e-posta ile yapılır, kimler katılacak bilinmez. Etkinlik sonrası geri bildirim toplanamaz.\n\nConnectAlign Etkinlik Yönetimi ile şirket etkinliklerini dijital platformda planlayın ve yönetin. Etkinlik oluşturun, tarih ve konum belirleyin, katılımcıları otomatik davet edin. Anlık bildirim ile tüm çalışanlara duyuru gönderin. QR kod ile katılım kontrolü yapın, etkinlik sonrası anket ile geri bildirim toplayın. Katılım istatistikleri ile etkinlik başarısını ölçün.\n\nEtkinlik organizasyon süresini %70 azaltın, katılım oranını %50 artırın ve etkinlik ROI\'sini ölçülebilir hale getirin.'
      },
      benefits: [],
      capabilities: {},
      useCases: [],
      technicalSpecs: {},
      screenshots: { enabled: false, placeholderText: 'Yakında eklenecek' }
    },
    en: {
      hero: {
        icon: 'Calendar',
        title: 'Event Management',
        tagline: 'Plan, announce and track attendance for company events',
        primaryCTA: 'Request Free Demo'
      },
      overview: {
        description: 'Company events (meetings, trainings, social activities) are planned manually, participant lists are kept in Excel, and attendance data is lost. Event announcements are made via email, and who will attend is unknown. Post-event feedback cannot be collected.\n\nWith ConnectAlign Event Management, plan and manage company events on a digital platform. Create events, set date and location, automatically invite participants. Send announcements to all employees with instant notifications. Control attendance with QR code, collect feedback with post-event surveys. Measure event success with attendance statistics.\n\nReduce event organization time by 70%, increase participation rate by 50%, and make event ROI measurable.'
      },
      benefits: [],
      capabilities: {},
      useCases: [],
      technicalSpecs: {},
      screenshots: { enabled: false, placeholderText: 'Coming soon' }
    }
  },

  'digital-business-cards': {
    tr: {
      hero: {
        icon: 'CreditCard',
        title: 'Dijital Kartvizitler',
        tagline: 'QR kodlu dijital kartvizitler oluşturun ve paylaşın',
        primaryCTA: 'Ücretsiz Demo İsteyin'
      },
      overview: {
        description: 'Kağıt kartvizitler maliyetlidir, kaybolur, bilgiler güncel değildir. Telefon değiştiğinde veya departman değişiminde yeni kartvizit bastırılması gerekir. Networking etkinliklerinde kartvizit stoku biter, kartvizit bilgileri manuel olarak telefona eklenir.\n\nConnectAlign Dijital Kartvizit sistemi ile QR kodlu dijital kartvizitler oluşturun ve anında paylaşın. Tüm iletişim bilgileriniz (telefon, e-posta, sosyal medya) tek bir QR kod\'da. Bilgiler değiştiğinde merkezi sistemden güncelleyin, tüm paylaşılan kartlar otomatik güncellenir. Mobil uygulamadan QR kodu okut, kişi bilgilerini otomatik kaydet. Şirket logosu ve marka renkleri ile profesyonel tasarım.\n\nKartvizit maliyetlerinden %100 tasarruf edin, çevre dostu çözümle kağıt israfını önleyin ve her zaman güncel kalın.'
      },
      benefits: [],
      capabilities: {},
      useCases: [],
      technicalSpecs: {},
      screenshots: { enabled: false, placeholderText: 'Yakında eklenecek' }
    },
    en: {
      hero: {
        icon: 'CreditCard',
        title: 'Digital Business Cards',
        tagline: 'Create and share QR code digital business cards',
        primaryCTA: 'Request Free Demo'
      },
      overview: {
        description: 'Paper business cards are costly, get lost, and information is not up-to-date. When phone changes or department changes, new business cards must be printed. At networking events, business card stock runs out, and business card information must be added to phone manually.\n\nWith ConnectAlign Digital Business Card system, create QR code digital business cards and share instantly. All your contact information (phone, email, social media) in one QR code. When information changes, update from central system, and all shared cards are automatically updated. Scan QR code from mobile app, automatically save contact information. Professional design with company logo and brand colors.\n\nSave 100% on business card costs, prevent paper waste with eco-friendly solution, and stay always up-to-date.'
      },
      benefits: [],
      capabilities: {},
      useCases: [],
      technicalSpecs: {},
      screenshots: { enabled: false, placeholderText: 'Coming soon' }
    }
  },

  'mobile-support': {
    tr: {
      hero: {
        icon: 'Smartphone',
        title: 'Mobil Destek',
        tagline: 'Web ve mobil uygulama ile her yerden erişim',
        primaryCTA: 'Ücretsiz Demo İsteyin'
      },
      overview: {
        description: 'Geleneksel sistemler sadece masaüstü bilgisayardan erişilebilir, saha çalışanları veya uzaktan çalışanlar sistem kullanamaz. İş süreçleri ofise bağımlıdır, acil işlemler için ofise gelmek gerekir. Mobil erişim yoktur veya kullanışsızdır.\n\nConnectAlign tam özellikli mobil uygulama (iOS/Android) ve güçlü web arayüzü ile her yerden erişim sağlar. Tüm modüller mobil uyumlu tasarlanmıştır: doküman yönetimi, duyurular, anketler, etkinlikler, eğitimler. Anlık bildirimler ile önemli gelişmelerden haberdar olun. Çevrimdışı mod ile internet olmadan da çalışın. Güvenli bağlantı ile kurumsal verilere her yerden erişin.\n\nÇalışan verimliliğini %40 artırın, iş sürekliliğini sağlayın ve hibrit çalışma modellerine tam destek verin.'
      },
      benefits: [],
      capabilities: {},
      useCases: [],
      technicalSpecs: {},
      screenshots: { enabled: false, placeholderText: 'Yakında eklenecek' }
    },
    en: {
      hero: {
        icon: 'Smartphone',
        title: 'Mobile Support',
        tagline: 'Access from anywhere with web and mobile app',
        primaryCTA: 'Request Free Demo'
      },
      overview: {
        description: 'Traditional systems are only accessible from desktop computers, field workers or remote workers cannot use the system. Business processes are office-dependent, and coming to the office is required for urgent operations. Mobile access is non-existent or unusable.\n\nConnectAlign provides access from anywhere with full-featured mobile app (iOS/Android) and powerful web interface. All modules are designed mobile-friendly: document management, announcements, surveys, events, training. Stay informed about important developments with instant notifications. Work without internet with offline mode. Access corporate data from anywhere with secure connection.\n\nIncrease employee productivity by 40%, ensure business continuity, and provide full support for hybrid work models.'
      },
      benefits: [],
      capabilities: {},
      useCases: [],
      technicalSpecs: {},
      screenshots: { enabled: false, placeholderText: 'Coming soon' }
    }
  },

  'security-authorization': {
    tr: {
      hero: {
        icon: 'Shield',
        title: 'Güvenlik & Yetkilendirme',
        tagline: 'Kurumsal seviye güvenlik. Rol bazlı erişim kontrolü.',
        primaryCTA: 'Ücretsiz Demo İsteyin'
      },
      overview: {
        description: 'Kurumsal sistemlerde veri güvenliği kritiktir ancak yetkisiz erişimler, zayıf şifreler, yetki karmaşası sıklıkla görülür. Kim hangi veriye erişebilir kontrol edilemez, eski çalışanların erişimleri zamanında kapatılmaz. Güvenlik açıkları veri sızıntısına yol açar.\n\nConnectAlign kurumsal seviye güvenlik altyapısı ile verilerinizi korur. Güvenli kimlik doğrulama ile sadece yetkili kullanıcılar sisteme erişir. Rol bazlı yetkilendirme ile her kullanıcının ne yapabileceği detaylı kontrol edilir. Departman bazlı veri izolasyonu ile her departman sadece kendi verilerini görür. Tüm işlemler loglanır, detaylı erişim kayıtları tutulur. Güvenli bağlantı ve şifreli veri saklama ile veriler korunur.\n\nVeri güvenlik riskini %95 azaltın, uyumluluk gereksinimlerini karşılayın ve kurumsal güvenlik standartlarını sağlayın.'
      },
      benefits: [],
      capabilities: {},
      useCases: [],
      technicalSpecs: {},
      screenshots: { enabled: false, placeholderText: 'Yakında eklenecek' }
    },
    en: {
      hero: {
        icon: 'Shield',
        title: 'Security & Authorization',
        tagline: 'Enterprise-level security. Role-based access control.',
        primaryCTA: 'Request Free Demo'
      },
      overview: {
        description: 'In enterprise systems, data security is critical, but unauthorized access, weak passwords, and permission confusion are common. Who can access which data cannot be controlled, and former employees\' access is not closed on time. Security vulnerabilities lead to data breaches.\n\nConnectAlign protects your data with enterprise-level security infrastructure. Only authorized users access the system with secure authentication. Role-based authorization controls in detail what each user can do. Department-based data isolation ensures each department sees only their own data. All operations are logged, and detailed access records are kept. Data is protected with secure connection and encrypted data storage.\n\nReduce data security risk by 95%, meet compliance requirements, and ensure enterprise security standards.'
      },
      benefits: [],
      capabilities: {},
      useCases: [],
      technicalSpecs: {},
      screenshots: { enabled: false, placeholderText: 'Coming soon' }
    }
  }
};
