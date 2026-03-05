/**
 * Legal content for Terms of Service and KVKK (Privacy Policy)
 * Supports TR and EN languages
 */

// Company info for placeholder replacement
const companyInfo = {
  name: "Utilwork Bilgi Teknolojileri Limited Şirketi",
  address: "Küçükbakkalköy, Dereboyu Cd Brandium Residence D:3A R5 Blok K:7 D:48, 34758 Ataşehir/İstanbul",
  email: "info@utilwork.com",
  phone: "+90 216 706 30 01",
  web: "www.utilwork.com",
  kvkkEmail: "kvkk@utilwork.com",
  kep: "info@utilwork.hs03.kep.tr",
  lastUpdated: "Şubat 2026"
};

export const privacyPolicy = {
  tr: {
    title: 'Gizlilik Politikası',
    lastUpdated: 'Son Güncelleme: 2 Şubat 2026',
    sections: [
      {
        id: 'giris',
        title: '1. Giriş',
        content: [
          'ConnectAlign, kurumsal iletişim ve iş süreçlerini dijitalleştiren bir mobil ve web uygulamasıdır. Bu gizlilik politikası, uygulamamızı kullanırken toplanan, işlenen ve saklanan kişisel verileriniz hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.',
          'ConnectAlign\'ı kullanarak, bu gizlilik politikasını kabul etmiş olursunuz.'
        ]
      },
      {
        id: 'toplanan-veriler',
        title: '2. Toplanan Veriler',
        content: [
          'ConnectAlign\'ı kullanırken aşağıdaki kategorilerdeki verileriniz toplanabilir:',
          '• Hesap Bilgileri: Ad, soyad, e-posta, telefon, şirket, departman, pozisyon, profil fotoğrafı',
          '• Dijital İş Kartı: QR kod tarama, kişiler listesi erişimi, iş kartı bilgileri',
          '• Etkinlik Yönetimi: Konum bilgisi, katılım durumu, QR check-in verileri',
          '• Anketler: Anket cevapları, geri bildirimler, push notification tercihleri',
          '• Duyurular: Cihaz token\'ları (Firebase FCM), bildirim tercihleri',
          '• Doküman Yönetimi: Yüklenen dosyalar, depolama erişimi',
          '• SMS Bildirimleri: Telefon numarası',
          '• Teknik Veriler: Cihaz modeli, işletim sistemi, IP adresi, uygulama logları'
        ]
      },
      {
        id: 'kullanim-amaclari',
        title: '3. Verilerin Kullanım Amaçları',
        content: [
          'Toplanan verileriniz aşağıdaki amaçlarla kullanılır:',
          '• Hesap oluşturma ve kimlik doğrulama (JWT authentication)',
          '• Dijital iş kartı oluşturma, QR kod ile paylaşma',
          '• Kurumsal etkinlik yönetimi, QR check-in, katılımcı takibi',
          '• Anket oluşturma, atama, cevap toplama ve raporlama',
          '• Push notification ile duyuru ve bildirim gönderme',
          '• Dosya yükleme, indirme, paylaşma ve erişim kontrolü',
          '• SMS ve e-posta bildirimleri',
          '• Uygulama performansı izleme ve güvenlik'
        ]
      },
      {
        id: 'ucuncu-taraf',
        title: '4. Üçüncü Parti Servisler',
        content: [
          'Verileriniz aşağıdaki üçüncü parti servislerle paylaşılabilir:',
          '• Firebase (Google): Push notifications, Analytics, Crashlytics',
          '• Backend API: PostgreSQL veritabanı (şifreli)',
          '• SMS Provider: Sadece telefon numarası',
          'Verileriniz SADECE hizmet sağlamak için gerekli servislerle paylaşılır. Pazarlama amaçlı veri paylaşımı YAPILMAZ.'
        ]
      },
      {
        id: 'veri-saklama',
        title: '5. Veri Saklama',
        content: [
          '• Aktif hesaplar: Hesabınız aktif olduğu sürece verileriniz saklanır',
          '• Pasif hesaplar: 2 yıl giriş yapılmayan hesaplar otomatik silinir',
          '• Yasal saklama: Faturalar ve sözleşmeler 5 yıl saklanır'
        ]
      },
      {
        id: 'kullanici-haklari',
        title: '6. Kullanıcı Hakları (GDPR & KVKK)',
        content: [
          'Aşağıdaki haklara sahipsiniz:',
          '• Bilgi Edinme: Hangi verilerinizin toplandığını öğrenebilirsiniz',
          '• Düzeltme: Yanlış bilgilerinizi düzeltebilirsiniz',
          '• Silme: Hesabınızı ve verilerinizi silebilirsiniz (30 gün içinde kalıcı silme)',
          '• Veri Taşınabilirliği: Verilerinizi JSON/CSV formatında indirebilirsiniz',
          '• İtiraz: Push notification, SMS ve email\'leri kapatabilirsiniz'
        ]
      },
      {
        id: 'guvenlik',
        title: '7. Güvenlik',
        content: [
          'Verilerinizin güvenliği için:',
          '• SSL/TLS şifreleme ile veri aktarımı',
          '• JWT token authentication',
          '• Veritabanı şifreleme (PostgreSQL)',
          '• Düzenli güvenlik denetimleri',
          '• Erişim kontrolü ve audit logları'
        ]
      },
      {
        id: 'push-notifications',
        title: '8. Push Notifications',
        content: [
          '• Firebase Cloud Messaging (FCM) kullanılır',
          '• Cihaz token\'ları saklanır ve bildirim gönderimi için kullanılır',
          '• Bildirim kategorileri: Anketler, duyurular, etkinlikler',
          '• Bildirimleri uygulama ayarlarından kapatabilirsiniz'
        ]
      },
      {
        id: 'cerezler',
        title: '9. Çerezler ve İzleme',
        content: [
          '• Firebase Analytics ile kullanım verileri toplanabilir',
          '• LocalStorage ile kullanıcı tercihleri saklanır',
          '• Performans izleme için teknik veriler toplanabilir'
        ]
      },
      {
        id: 'cocuklarin-gizliligi',
        title: '10. Çocukların Gizliliği',
        content: [
          '• ConnectAlign 13 yaş altı kullanıcılara yönelik değildir',
          '• 13 yaş altı çocukların verilerini bilerek toplamıyoruz',
          '• COPPA uyumludur'
        ]
      },
      {
        id: 'politika-degisiklikleri',
        title: '11. Politika Değişiklikleri',
        content: [
          '• Bu gizlilik politikasını zaman zaman güncelleyebiliriz',
          '• Önemli değişiklikler durumunda bilgilendirileceksiniz',
          '• Güncel politika: https://connectalign.com/privacy'
        ]
      },
      {
        id: 'iletisim',
        title: 'İletişim',
        content: [
          'Gizlilik politikamızla ilgili sorularınız için:',
          `E-posta: ${companyInfo.email}`,
          `Web: ${companyInfo.web}`,
          `Adres: ${companyInfo.address}`
        ]
      }
    ]
  },
  en: {
    title: 'Privacy Policy',
    lastUpdated: 'Last Updated: February 2, 2026',
    sections: [
      {
        id: 'introduction',
        title: '1. Introduction',
        content: [
          'ConnectAlign is a mobile and web application that digitalizes corporate communication and business processes. This privacy policy informs you about the personal data collected, processed, and stored while using our application.',
          'By using ConnectAlign, you agree to this privacy policy. This policy applies to both the mobile application and the web dashboard.'
        ]
      },
      {
        id: 'data-collected',
        title: '2. Data We Collect',
        content: [
          'While using ConnectAlign, the following data may be collected:',
          '• Account Information: Name, email, phone, company, department, position, profile photo',
          '• Digital Business Card: QR code scanning, contacts access, business card information',
          '• Event Management: Location data, attendance status, QR check-in data',
          '• Surveys: Survey responses, feedback, push notification preferences',
          '• Announcements: Device tokens (Firebase FCM), notification preferences',
          '• Document Management: Uploaded files, storage access',
          '• SMS Notifications: Phone number',
          '• Technical Data: Device model, operating system, IP address, app logs'
        ]
      },
      {
        id: 'usage-purposes',
        title: '3. How We Use Your Data',
        content: [
          'Collected data is used for:',
          '• Account creation and authentication (JWT authentication)',
          '• Creating digital business cards, QR code sharing',
          '• Corporate event management, QR check-in, participant tracking',
          '• Survey creation, assignment, response collection and reporting',
          '• Sending announcements and notifications via push notifications',
          '• File upload, download, sharing and access control',
          '• SMS and email notifications',
          '• Application performance monitoring and security'
        ]
      },
      {
        id: 'third-party',
        title: '4. Third-Party Services',
        content: [
          'Your data may be shared with the following third-party services:',
          '• Firebase (Google): Push notifications, Analytics, Crashlytics',
          '• Backend API: PostgreSQL database (encrypted)',
          '• SMS Provider: Phone number only',
          'Your data is ONLY shared with services necessary for providing the service. NO data sharing for marketing purposes.'
        ]
      },
      {
        id: 'data-retention',
        title: '5. Data Retention',
        content: [
          '• Active accounts: Data is stored while your account is active',
          '• Inactive accounts: Accounts with no login for 2 years are automatically deleted',
          '• Legal retention: Invoices and contracts are retained for 5 years'
        ]
      },
      {
        id: 'user-rights',
        title: '6. Your Rights (GDPR & KVKK)',
        content: [
          'You have the following rights:',
          '• Right to Access: Learn what data is collected about you',
          '• Right to Rectification: Correct your incorrect information',
          '• Right to Erasure: Delete your account and data (permanent deletion within 30 days)',
          '• Data Portability: Download your data in JSON/CSV format',
          '• Right to Object: Disable push notifications, SMS and emails'
        ]
      },
      {
        id: 'security',
        title: '7. Security',
        content: [
          'To ensure your data security:',
          '• SSL/TLS encryption for data transmission',
          '• JWT token authentication',
          '• Database encryption (PostgreSQL)',
          '• Regular security audits',
          '• Access control and audit logs'
        ]
      },
      {
        id: 'push-notifications',
        title: '8. Push Notifications',
        content: [
          '• Firebase Cloud Messaging (FCM) is used',
          '• Device tokens are stored for notification delivery',
          '• Notification categories: Surveys, announcements, events',
          '• You can disable notifications in app settings'
        ]
      },
      {
        id: 'cookies',
        title: '9. Cookies and Tracking',
        content: [
          '• Usage data collected with Firebase Analytics',
          '• User preferences stored in LocalStorage',
          '• Technical data collected for performance monitoring'
        ]
      },
      {
        id: 'childrens-privacy',
        title: '10. Children\'s Privacy',
        content: [
          '• ConnectAlign is not intended for users under 13 years of age',
          '• We do not knowingly collect data from children under 13',
          '• COPPA compliant'
        ]
      },
      {
        id: 'policy-changes',
        title: '11. Policy Changes',
        content: [
          '• We may update this privacy policy from time to time',
          '• You will be notified of significant changes',
          '• Current policy: https://connectalign.com/privacy'
        ]
      },
      {
        id: 'contact',
        title: 'Contact',
        content: [
          'For questions about our privacy policy:',
          `Email: ${companyInfo.email}`,
          `Web: ${companyInfo.web}`,
          `Address: ${companyInfo.address}`
        ]
      }
    ]
  }
};

export const termsOfService = {
  tr: {
    title: 'Kullanım Koşulları',
    lastUpdated: 'Son Güncelleme: 05 Şubat 2026',
    sections: [
      {
        id: 'giris',
        title: '1. Giriş',
        content: [
          'Bu Kullanım Koşulları ("Sözleşme"), Utilwork A.Ş. ("Utilwork", "Biz", "Bizim") tarafından sunulan ConnectAlign yazılım hizmeti ("Hizmet", "Platform") ile ilgili olarak sizin ("Kullanıcı", "Siz", "Müşteri") hak ve yükümlülüklerinizi düzenler.',
          'ConnectAlign\'ı kullanarak bu Sözleşme\'yi kabul etmiş sayılırsınız. Bu koşulları kabul etmiyorsanız, lütfen Hizmeti kullanmayınız.',
          'Utilwork, bu Sözleşme\'yi herhangi bir zamanda değiştirme hakkını saklı tutar. Değişiklikler yürürlüğe girdikten sonra Hizmeti kullanmaya devam etmeniz, değişiklikleri kabul ettiğiniz anlamına gelir.',
        ],
      },
      {
        id: 'hizmet-tanimi',
        title: '2. Hizmet Tanımı',
        content: [
          'ConnectAlign, işletmelerin iç iletişim, belge yönetimi, anket ve duyuru gibi süreçlerini dijitalleştiren bulut tabanlı bir SaaS (Software as a Service) platformudur.',
          'Hizmet kapsamında sunulan özellikler:',
          '• İç İletişim ve Duyuru Yönetimi\n• Belge Yönetimi Sistemi (DMS)\n• Anket ve Geri Bildirim Yönetimi\n• Görev ve Proje Yönetimi\n• Katalog ve Ürün Yönetimi\n• SMS Entegrasyonu\n• Öneri Yönetimi\n• Raporlama ve Analitik',
          'Utilwork, Hizmetin kapsamını ve özelliklerini önceden bildirmeksizin değiştirme, güncelleme veya sonlandırma hakkını saklı tutar.',
        ],
      },
      {
        id: 'hesap-guvenlik',
        title: '3. Hesap ve Güvenlik',
        content: [
          'Hizmeti kullanabilmek için geçerli bir hesap oluşturmanız gerekmektedir. Hesap oluştururken doğru, güncel ve eksiksiz bilgi sağlamakla yükümlüsünüz.',
          'Hesap güvenliğinden siz sorumlusunuz. Kullanıcı adı ve şifrenizin gizliliğini korumalı, yetkisiz erişimi önlemek için gerekli önlemleri almalısınız.',
          'Hesabınızda gerçekleşen tüm faaliyetlerden siz sorumlusunuz. Yetkisiz kullanım veya güvenlik ihlali tespit ettiğinizde derhal Utilwork\'ü bilgilendirmelisiniz.',
          'Utilwork, şüpheli aktivite tespit etmesi durumunda hesabınızı geçici veya kalıcı olarak askıya alma hakkına sahiptir.',
        ],
      },
      {
        id: 'kullanici-sorumluluklari',
        title: '4. Kullanıcı Sorumlulukları',
        content: [
          'Hizmeti yasalara, düzenlemelere ve bu Sözleşme\'ye uygun olarak kullanmayı kabul edersiniz. Aşağıdaki faaliyetler kesinlikle yasaktır:',
          '• Hizmeti yasadışı amaçlarla kullanmak\n• Zararlı yazılım (virüs, trojan, malware) yüklemek veya yaymak\n• Diğer kullanıcıların hesaplarına yetkisiz erişim sağlamak\n• Platform altyapısını aşırı yükleyecek veya zarara uğratacak faaliyetler\n• Hizmet üzerinden spam, kimlik avı veya dolandırıcılık yapmak\n• Fikri mülkiyet haklarını ihlal etmek\n• Ters mühendislik, kaynak kodu çıkarma veya kopyalama girişimleri',
          'Bu kurallara uymayan kullanıcıların hesapları derhal sonlandırılabilir ve yasal işlem başlatılabilir.',
        ],
      },
      {
        id: 'fikri-mulkiyet',
        title: '5. Fikri Mülkiyet Hakları',
        content: [
          'ConnectAlign platformu, yazılım kodu, tasarım, logo, içerik ve tüm materyaller Utilwork A.Ş.\'nin veya lisans sahiplerinin fikri mülkiyetidir.',
          'Bu Sözleşme, size Hizmeti kullanma hakkı verir ancak Hizmete ilişkin hiçbir fikri mülkiyet hakkı devretmez.',
          'Hizmeti kullanarak oluşturduğunuz içeriklerin (belgeler, duyurular, anketler vb.) mülkiyeti size aittir. Ancak, bu içerikleri Hizmet üzerinden sunabilmemiz için bize sınırlı bir lisans vermiş olursunuz.',
          'Utilwork, Hizmetin geliştirilmesi amacıyla toplanan anonim kullanım verilerini ve istatistiklerini kullanma hakkına sahiptir.',
        ],
      },
      {
        id: 'ucretlendirme',
        title: '6. Ücretlendirme ve Ödeme',
        content: [
          'ConnectAlign farklı abonelik paketleri sunmaktadır. Fiyatlandırma ve paket detayları web sitesinde (connectalign.com) belirtilmiştir.',
          'Ödeme koşulları:',
          '• Aylık veya yıllık abonelik seçenekleri mevcuttur\n• Ödemeler kredi kartı veya banka havalesi ile yapılabilir\n• Faturalar elektronik ortamda (e-fatura) düzenlenir\n• Otomatik yenileme aktiftir (iptal talebiniz olmadıkça)\n• KDV ve diğer yasal vergiler fiyata dahildir',
          'Utilwork, abonelik ücretlerini önceden bildirerek değiştirme hakkını saklı tutar. Fiyat değişiklikleri mevcut dönem için geçerli olmaz, yenileme döneminde uygulanır.',
          'Ödeme yapılmaması durumunda Hizmet askıya alınabilir. 30 gün içinde ödeme yapılmazsa hesap kalıcı olarak silinebilir.',
        ],
      },
      {
        id: 'hizmet-suresi-fesih',
        title: '7. Hizmet Süresi ve Fesih',
        content: [
          'Bu Sözleşme, hesap oluşturma tarihinizde yürürlüğe girer ve hesap silinene kadar devam eder.',
          'Müşteri fesih hakkı:',
          '• Hesabınızı istediğiniz zaman silebilirsiniz\n• Ücretli aboneliği iptal edebilirsiniz (dönem sonunda geçerli olur)\n• İptal talebi platform üzerinden veya info@utilwork.com\'a e-posta ile yapılabilir\n• İptal sonrası kalan süre için ücret iadesi yapılmaz (kullanmaya devam edebilirsiniz)',
          'Utilwork fesih hakkı:',
          '• Kullanım Koşulları ihlalinde hesap derhal sonlandırılabilir\n• Yasal yükümlülükler veya mahkeme kararı durumunda\n• 90 gün önce bildirerek herhangi bir sebep göstermeksizin\n• Ödeme yapılmaması durumunda',
          'Hesap silindiğinde verileriniz 30 gün içinde kalıcı olarak silinir (yasal saklama gereklilikleri hariç).',
        ],
      },
      {
        id: 'garanti-reddi',
        title: '8. Garanti Reddi',
        content: [
          'Hizmet "olduğu gibi" ve "mevcut olduğu şekilde" sunulmaktadır. Utilwork, Hizmetin kesintisiz, hatasız veya güvenli olacağına dair garanti vermez.',
          'Utilwork, aşağıdakilerle sınırlı olmamak üzere hiçbir garanti vermez:',
          '• Hizmetin ihtiyaçlarınızı karşılayacağı\n• Hizmetin kesintisiz veya hatasız çalışacağı\n• Hizmet sonuçlarının doğru veya güvenilir olacağı\n• Hizmet üzerinden elde edilen materyallerin hatasız olacağı',
          'Utilwork, teknik arızalar, bakım çalışmaları, güvenlik güncellemeleri veya üçüncü taraf hizmet sağlayıcı sorunları nedeniyle oluşabilecek kesintilerden sorumlu değildir.',
          'Veri yedekleme sizin sorumluluğunuzdadır. Utilwork düzenli yedekleme yapar ancak veri kaybı riskine karşı siz de önlem almalısınız.',
        ],
      },
      {
        id: 'sorumluluk-sinirlamasi',
        title: '9. Sorumluluk Sınırlaması',
        content: [
          'Yasaların izin verdiği ölçüde, Utilwork A.Ş. hiçbir durumda aşağıdakilerden sorumlu tutulamaz:',
          '• Dolaylı, arızi, cezai veya özel zararlar\n• Gelir, kâr, itibar veya veri kaybı\n• İşin durması veya bilgisayar arızası\n• Üçüncü taraf hizmet sağlayıcı hataları\n• Hizmet kesintisi veya veri kaybı',
          'Utilwork\'ün toplam sorumluluğu, sorumluluğa neden olan olaydan önceki 12 ay içinde tarafınızca ödenen toplam ücretle sınırlıdır.',
          'Bu sınırlamalar, yasaların izin verdiği maksimum ölçüde geçerlidir. Bazı yargı bölgeleri belirli garantilerin reddi veya sorumluluk sınırlamalarını yasakladığından, bu sınırlamalar sizin için geçerli olmayabilir.',
        ],
      },
      {
        id: 'uygulanacak-hukuk',
        title: '10. Uygulanacak Hukuk ve Uyuşmazlık Çözümü',
        content: [
          'Bu Sözleşme, Türkiye Cumhuriyeti yasalarına tabidir ve bu yasalara göre yorumlanır.',
          'Bu Sözleşme\'den kaynaklanan veya bu Sözleşme ile ilgili tüm uyuşmazlıklar, öncelikle dostane görüşmelerle çözülmeye çalışılacaktır.',
          'Dostane çözüm sağlanamazsa, uyuşmazlıklar İstanbul Merkez (Çağlayan) Mahkemeleri ve İcra Daireleri\'nin münhasır yargı yetkisine tabi olacaktır.',
          'Utilwork iletişim bilgileri:\nUtilwork A.Ş.\nKüçükbakkalköy, Dereboyu Cd Brandium Residence D:3A R5 Blok K:7 D:48, 34758 Ataşehir/İstanbul\nE-posta: info@utilwork.com\nTelefon: +90 216 706 30 01',
        ],
      },
    ],
  },
  en: {
    title: 'Terms of Service',
    lastUpdated: 'Last Updated: February 5, 2026',
    sections: [
      {
        id: 'introduction',
        title: '1. Introduction',
        content: [
          'These Terms of Service ("Agreement") govern your rights and obligations regarding the ConnectAlign software service ("Service", "Platform") provided by Utilwork A.Ş. ("Utilwork", "We", "Us").',
          'By using ConnectAlign, you agree to be bound by this Agreement. If you do not agree to these terms, please do not use the Service.',
          'Utilwork reserves the right to modify this Agreement at any time. Your continued use of the Service after changes become effective constitutes acceptance of the modified terms.',
        ],
      },
      {
        id: 'service-description',
        title: '2. Service Description',
        content: [
          'ConnectAlign is a cloud-based SaaS (Software as a Service) platform that digitizes internal communication, document management, surveys, and announcements for businesses.',
          'Features included in the Service:',
          '• Internal Communication and Announcement Management\n• Document Management System (DMS)\n• Survey and Feedback Management\n• Task and Project Management\n• Catalog and Product Management\n• SMS Integration\n• Suggestion Management\n• Reporting and Analytics',
          'Utilwork reserves the right to modify, update, or discontinue features of the Service without prior notice.',
        ],
      },
      {
        id: 'account-security',
        title: '3. Account and Security',
        content: [
          'You must create a valid account to use the Service. You are required to provide accurate, current, and complete information when creating an account.',
          'You are responsible for account security. You must maintain the confidentiality of your username and password and take necessary measures to prevent unauthorized access.',
          'You are responsible for all activities that occur under your account. You must immediately notify Utilwork if you detect unauthorized use or security breach.',
          'Utilwork reserves the right to temporarily or permanently suspend your account if suspicious activity is detected.',
        ],
      },
      {
        id: 'user-responsibilities',
        title: '4. User Responsibilities',
        content: [
          'You agree to use the Service in compliance with laws, regulations, and this Agreement. The following activities are strictly prohibited:',
          '• Using the Service for illegal purposes\n• Uploading or distributing malware (viruses, trojans, malware)\n• Unauthorized access to other users\' accounts\n• Activities that overload or harm platform infrastructure\n• Spam, phishing, or fraud through the Service\n• Violating intellectual property rights\n• Reverse engineering, extracting source code, or copying',
          'Users who violate these rules may have their accounts immediately terminated and may face legal action.',
        ],
      },
      {
        id: 'intellectual-property',
        title: '5. Intellectual Property Rights',
        content: [
          'The ConnectAlign platform, software code, design, logo, content, and all materials are the intellectual property of Utilwork A.Ş. or its licensors.',
          'This Agreement grants you the right to use the Service but does not transfer any intellectual property rights to you.',
          'You own the content you create using the Service (documents, announcements, surveys, etc.). However, you grant us a limited license to provide that content through the Service.',
          'Utilwork has the right to use anonymous usage data and statistics collected for Service improvement.',
        ],
      },
      {
        id: 'pricing',
        title: '6. Pricing and Payment',
        content: [
          'ConnectAlign offers different subscription packages. Pricing and package details are specified on the website (connectalign.com).',
          'Payment terms:',
          '• Monthly or annual subscription options available\n• Payments can be made by credit card or bank transfer\n• Invoices are issued electronically (e-invoice)\n• Auto-renewal is active (unless you cancel)\n• VAT and other legal taxes are included',
          'Utilwork reserves the right to change subscription fees with prior notice. Price changes do not apply to the current period but take effect upon renewal.',
          'Failure to pay may result in Service suspension. If payment is not made within 30 days, the account may be permanently deleted.',
        ],
      },
      {
        id: 'term-termination',
        title: '7. Term and Termination',
        content: [
          'This Agreement becomes effective on your account creation date and continues until the account is deleted.',
          'Customer termination rights:',
          '• You can delete your account at any time\n• You can cancel paid subscription (effective at period end)\n• Cancellation can be made through the platform or by emailing info@utilwork.com\n• No refund for remaining period after cancellation (you can continue using)',
          'Utilwork termination rights:',
          '• Account may be immediately terminated for Terms of Service violation\n• Legal obligations or court order\n• With 90 days\' notice for any reason\n• Failure to pay',
          'When account is deleted, your data is permanently deleted within 30 days (except legal retention requirements).',
        ],
      },
      {
        id: 'warranty-disclaimer',
        title: '8. Warranty Disclaimer',
        content: [
          'The Service is provided "as is" and "as available". Utilwork does not warrant that the Service will be uninterrupted, error-free, or secure.',
          'Utilwork makes no warranties, including but not limited to:',
          '• The Service will meet your needs\n• The Service will operate uninterrupted or error-free\n• Service results will be accurate or reliable\n• Materials obtained through the Service will be error-free',
          'Utilwork is not responsible for interruptions due to technical failures, maintenance, security updates, or third-party service provider issues.',
          'Data backup is your responsibility. While Utilwork performs regular backups, you should also take precautions against data loss risk.',
        ],
      },
      {
        id: 'limitation-liability',
        title: '9. Limitation of Liability',
        content: [
          'To the extent permitted by law, Utilwork A.Ş. shall not be liable under any circumstances for:',
          '• Indirect, incidental, punitive, or special damages\n• Loss of revenue, profit, reputation, or data\n• Business interruption or computer failure\n• Third-party service provider errors\n• Service interruption or data loss',
          'Utilwork\'s total liability is limited to the total fees paid by you in the 12 months preceding the event causing liability.',
          'These limitations apply to the maximum extent permitted by law. Some jurisdictions prohibit exclusion of certain warranties or limitation of liability, so these limitations may not apply to you.',
        ],
      },
      {
        id: 'governing-law',
        title: '10. Governing Law and Dispute Resolution',
        content: [
          'This Agreement is governed by and construed in accordance with the laws of the Republic of Turkey.',
          'All disputes arising from or related to this Agreement shall first be attempted to be resolved through amicable negotiations.',
          'If amicable resolution is not achieved, disputes shall be subject to the exclusive jurisdiction of Istanbul Central (Çağlayan) Courts and Enforcement Offices.',
          'Utilwork contact information:\nUtilwork A.Ş.\nBrandium Residence D:3A R5 Block Floor:7 No:48, Dereboyu Cd, Küçükbakkalköy, 34758 Ataşehir/Istanbul\nEmail: info@utilwork.com\nPhone: +90 216 706 30 01',
        ],
      },
    ],
  },
};

export const kvkkPolicy = {
  tr: {
    title: 'KVKK Aydınlatma Metni',
    lastUpdated: 'Son Güncelleme: 05 Şubat 2026',
    sections: [
      {
        id: 'veri-sorumlusu',
        title: '1. Veri Sorumlusu',
        content: [
          'Kişisel verilerinizin işlenmesi sürecinde veri sorumlusu Utilwork A.Ş.\'dir ("Şirket", "Utilwork").',
          'Şirket iletişim bilgileri:\nUnvan: Utilwork Anonim Şirketi\nAdres: Küçükbakkalköy, Dereboyu Cd Brandium Residence D:3A R5 Blok K:7 D:48, 34758 Ataşehir/İstanbul\nE-posta: kvkk@utilwork.com\nTelefon: +90 216 706 30 01\nKEP Adresi: info@utilwork.hs03.kep.tr',
          'Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında hazırlanmıştır ve kişisel verilerinizin nasıl toplandığı, işlendiği, korunduğu ve haklarınız hakkında bilgi vermektedir.',
        ],
      },
      {
        id: 'islenen-veriler',
        title: '2. İşlenen Kişisel Veriler',
        content: [
          'ConnectAlign platformunu kullanırken aşağıdaki kişisel verileriniz işlenmektedir:',
          'Kimlik Bilgileri:\n• Ad, soyad\n• T.C. kimlik numarası (isteğe bağlı)\n• Doğum tarihi',
          'İletişim Bilgileri:\n• E-posta adresi\n• Telefon numarası\n• İş adresi',
          'Kurumsal Bilgiler:\n• Şirket adı\n• Departman\n• Pozisyon/ünvan\n• Sicil numarası',
          'Hesap ve İşlem Bilgileri:\n• Kullanıcı adı ve şifre (şifreli)\n• IP adresi\n• Oturum bilgileri\n• Platform kullanım logları',
          'İçerik Verileri:\n• Oluşturduğunuz belgeler\n• Yüklediğiniz dosyalar\n• Anket yanıtları\n• Duyuru ve mesajlar\n• Öneriler ve geri bildirimler',
          'Cihaz ve Teknik Bilgiler:\n• Cihaz modeli ve işletim sistemi\n• Tarayıcı türü ve versiyonu\n• FCM device token (push notification için)\n• Konum bilgisi (sadece izin verildiyse)',
        ],
      },
      {
        id: 'isleme-amaclari',
        title: '3. Kişisel Verilerin İşlenme Amaçları',
        content: [
          'Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:',
          '• ConnectAlign platformunun sunulması ve çalıştırılması\n• Kullanıcı hesabı oluşturma ve yönetimi\n• Kimlik doğrulama ve güvenlik kontrolü\n• İletişim ve bildirim gönderme (e-posta, SMS, push notification)\n• Kullanıcı destek hizmetlerinin sağlanması\n• Fatura ve ödeme işlemlerinin gerçekleştirilmesi\n• İç iletişim ve duyuru süreçlerinin yönetilmesi\n• Anket ve geri bildirim toplama\n• Belge ve dosya yönetimi\n• Platform kullanım istatistikleri ve analitik\n• Hizmet kalitesinin iyileştirilmesi\n• Yasal yükümlülüklerin yerine getirilmesi\n• Yetkili kurum ve kuruluşlara bilgi verilmesi (yasal zorunluluk)',
        ],
      },
      {
        id: 'hukuki-sebepler',
        title: '4. Kişisel Verilerin İşlenmesinin Hukuki Sebepleri',
        content: [
          'Kişisel verileriniz, KVKK\'nın 5. maddesinin 2. fıkrasında belirtilen aşağıdaki hukuki sebeplere dayanılarak işlenmektedir:',
          'a) Açık Rızanız: Platform kullanımı için hesap oluştururken açık rızanızı almaktayız.',
          'b) Sözleşmenin İfası: ConnectAlign kullanım sözleşmesinin gereği olarak kişisel verilerinizin işlenmesi zorunludur.',
          'c) Hukuki Yükümlülük: Vergi mevzuatı, e-fatura düzenleme gibi yasal yükümlülüklerimizi yerine getirmek için.',
          'd) İlgili Kişinin Temel Hak ve Özgürlüklerine Zarar Vermemek Kaydıyla, Veri Sorumlusunun Meşru Menfaatleri: Platform güvenliği, hizmet kalitesinin artırılması, dolandırıcılık önleme.',
          'e) Veri Sahibinin Açık Rızası: İsteğe bağlı özellikler (örn. konum bilgisi paylaşımı, pazarlama iletişimi) için ayrıca açık rızanız alınır.',
        ],
      },
      {
        id: 'veri-paylasimi',
        title: '5. Kişisel Verilerin Paylaşımı',
        content: [
          'Kişisel verileriniz, KVKK\'nın 8. ve 9. maddelerine uygun olarak aşağıdaki kişi ve kurumlarla paylaşılabilir:',
          'Üçüncü Taraf Hizmet Sağlayıcılar:',
          '• Firebase (Google): Push notification, kimlik doğrulama, veri depolama\n• PostgreSQL Hosting: Veritabanı barındırma\n• SMS Gateway: SMS gönderim hizmeti\n• E-posta Servisi: E-posta gönderim altyapısı\n• Ödeme Altyapısı: Kredi kartı işlemleri\n• Bulut Depolama: Dosya yedekleme',
          'İş Ortakları:\n• Müşteri organizasyonunuz dahilindeki yetkili kullanıcılar\n• Entegrasyon sağladığınız üçüncü parti uygulamalar (izniniz dahilinde)',
          'Yasal Yükümlülükler:\n• Mahkeme kararı veya resmi makam taleplerinde\n• Yasal düzenlemelerin gerektirdiği durumlarda (vergi dairesi, MASAK vb.)',
          'Veri aktarımı yapılan tüm taraflarla KVKK uyumlu sözleşmeler imzalanmıştır ve verilerinizin güvenliği sağlanmaktadır.',
        ],
      },
      {
        id: 'saklama-sureleri',
        title: '6. Kişisel Verilerin Saklanma Süreleri',
        content: [
          'Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca ve yasal saklama yükümlülüklerine uygun olarak saklanır:',
          'Hesap Aktifken:\n• Tüm kullanıcı verileri aktif olarak saklanır\n• Kullanım logları ve işlem geçmişi tutulur',
          'Hesap Silindiğinde:\n• Kişisel veriler 30 gün içinde silinir\n• Yasal saklama gerekliliği olan veriler (faturalar vb.) 10 yıl saklanır',
          'Yasal Saklama Süreleri:\n• Ticari belgeler: 10 yıl (Türk Ticaret Kanunu)\n• İşlem kayıtları: 10 yıl (Vergi Usul Kanunu)\n• İletişim kayıtları: 5 yıl (Tüketici Kanunu)',
          'Saklama süresi sona eren veriler, güvenli yöntemlerle silinir, yok edilir veya anonim hale getirilir.',
        ],
      },
      {
        id: 'kvkk-haklariniz',
        title: '7. KVKK Kapsamındaki Haklarınız',
        content: [
          'KVKK\'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:',
          'a) Kişisel verilerinizin işlenip işlenmediğini öğrenme\nb) İşlenmişse buna ilişkin bilgi talep etme\nc) İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme\nd) Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme\ne) Eksik veya yanlış işlenmişse düzeltilmesini isteme\nf) KVKK\'nın 7. maddesinde öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme\ng) Düzeltme, silme ve yok edilme işlemlerinin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme\nh) İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme\ni) Kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme',
        ],
      },
      {
        id: 'basvuru-yontemi',
        title: '8. Haklarınızı Kullanma ve Başvuru Yöntemi',
        content: [
          'KVKK haklarınızı kullanmak için aşağıdaki yöntemlerle başvurabilirsiniz:',
          '1. Yazılı Başvuru:\nUtilwork A.Ş.\nKüçükbakkalköy, Dereboyu Cd Brandium Residence D:3A R5 Blok K:7 D:48, 34758 Ataşehir/İstanbul\n(Zarfın üzerine "Kişisel Verilerin Korunması Kanunu Bilgi Talebi" yazılmalıdır)',
          '2. Kayıtlı Elektronik Posta (KEP):\nutilwork@hs03.kep.tr',
          '3. E-posta (Güvenli Elektronik İmza ile):\nkvkk@utilwork.com',
          '4. Platform Üzerinden:\nConnectAlign > Ayarlar > KVKK Başvurusu',
          'Başvurunuzda belirtmeniz gerekenler:\n• Adınız, soyadınız\n• T.C. kimlik numarası veya pasaport numarası\n• İletişim bilgileriniz (e-posta, telefon)\n• Talebin konusu\n• Kimlik tespitine yarayacak bilgi ve belgeler',
          'Başvurunuz en geç 30 gün içinde yanıtlanacaktır. İşlemin maliyet gerektirmesi halinde Kişisel Verileri Koruma Kurulu tarafından belirlenen tarifedeki ücret alınabilir.',
        ],
      },
      {
        id: 'veri-guvenligi',
        title: '9. Veri Güvenliği',
        content: [
          'Utilwork, kişisel verilerinizin güvenliğini sağlamak için teknik ve idari tedbirler almaktadır:',
          'Teknik Güvenlik:\n• SSL/TLS şifreleme (HTTPS)\n• Veritabanı şifreleme\n• Güvenli kimlik doğrulama (JWT token)\n• Düzenli güvenlik güncellemeleri\n• Güvenlik duvarı (firewall) ve DDoS koruması\n• Düzenli veri yedekleme\n• Erişim logları ve izleme',
          'İdari Güvenlik:\n• Yetkili personel sınırlaması\n• Gizlilik sözleşmeleri\n• Personel eğitimleri\n• Güvenlik politika ve prosedürleri\n• Periyodik güvenlik denetimleri',
          'Veri İhlali Durumunda:\n• Olay derhal araştırılır\n• Etkilenen kullanıcılar bilgilendirilir\n• Kişisel Verileri Koruma Kurumu\'na bildirim yapılır\n• Önleyici tedbirler alınır',
        ],
      },
      {
        id: 'cerezler',
        title: '10. Çerezler (Cookies) ve Takip Teknolojileri',
        content: [
          'ConnectAlign platformu, kullanıcı deneyimini iyileştirmek ve hizmet sağlamak amacıyla çerezler kullanmaktadır.',
          'Kullanılan Çerez Türleri:',
          'Zorunlu Çerezler:\n• Oturum çerezleri (session cookies)\n• Kimlik doğrulama token\'ları\n• Güvenlik çerezleri',
          'Fonksiyonel Çerezler:\n• Dil tercihi\n• Tema ayarları (karanlık mod vb.)\n• Kullanıcı tercih ayarları',
          'Analitik Çerezler:\n• Sayfa görüntüleme istatistikleri\n• Kullanım süreleri\n• Hata raporlama',
          'Çerez Yönetimi:\nTarayıcı ayarlarınızdan çerezleri silebilir veya engelleyebilirsiniz. Ancak, zorunlu çerezlerin engellenmesi platform işlevselliğini etkileyebilir.',
          'Üçüncü Taraf Çerezleri:\nGoogle Analytics, Firebase gibi hizmetler kendi çerezlerini kullanabilir. Bu çerezler hakkında detaylı bilgi ilgili hizmet sağlayıcıların gizlilik politikalarında bulunabilir.',
        ],
      },
      {
        id: 'iletisim',
        title: '11. İletişim',
        content: [
          'KVKK ile ilgili sorularınız veya talepleriniz için bizimle iletişime geçebilirsiniz:',
          'Utilwork A.Ş.\nKüçükbakkalköy, Dereboyu Cd Brandium Residence D:3A R5 Blok K:7 D:48, 34758 Ataşehir/İstanbul',
          'E-posta: kvkk@utilwork.com\nTelefon: +90 216 706 30 01\nKEP: utilwork@hs03.kep.tr',
          'Web: connectalign.com\nDestek: info@utilwork.com',
          'Kişisel Verileri Koruma Kurumu:\nWeb: kvkk.gov.tr\nE-posta: kvkk@kvkk.gov.tr\nAdres: Nasuh Akar Mah. Ziya Gökalp Cad. No:27-29 Çankaya/Ankara',
        ],
      },
    ],
  },
  en: {
    title: 'Privacy Policy (GDPR)',
    lastUpdated: 'Last Updated: February 5, 2026',
    sections: [
      {
        id: 'data-controller',
        title: '1. Data Controller',
        content: [
          'The data controller responsible for processing your personal data is Utilwork A.Ş. ("Company", "Utilwork").',
          'Company contact information:\nCompany Name: Utilwork Anonim Şirketi\nAddress: Brandium Residence D:3A R5 Block Floor:7 No:48, Dereboyu Cd, Küçükbakkalköy, 34758 Ataşehir/Istanbul\nEmail: kvkk@utilwork.com\nPhone: +90 216 706 30 01',
          'This privacy notice is prepared under the Law No. 6698 on Protection of Personal Data ("KVKK") and informs you about how your personal data is collected, processed, protected, and your rights.',
        ],
      },
      {
        id: 'data-processed',
        title: '2. Personal Data Processed',
        content: [
          'When using the ConnectAlign platform, the following personal data is processed:',
          'Identity Information:\n• Name, surname\n• National ID number (optional)\n• Date of birth',
          'Contact Information:\n• Email address\n• Phone number\n• Business address',
          'Corporate Information:\n• Company name\n• Department\n• Position/title\n• Employee number',
          'Account and Transaction Information:\n• Username and password (encrypted)\n• IP address\n• Session information\n• Platform usage logs',
          'Content Data:\n• Documents you create\n• Files you upload\n• Survey responses\n• Announcements and messages\n• Suggestions and feedback',
          'Device and Technical Information:\n• Device model and operating system\n• Browser type and version\n• FCM device token (for push notifications)\n• Location information (only if permitted)',
        ],
      },
      {
        id: 'processing-purposes',
        title: '3. Purposes of Processing Personal Data',
        content: [
          'Your personal data is processed for the following purposes:',
          '• Providing and operating the ConnectAlign platform\n• Creating and managing user accounts\n• Authentication and security control\n• Sending communications and notifications (email, SMS, push notification)\n• Providing user support services\n• Processing invoices and payments\n• Managing internal communication and announcements\n• Collecting surveys and feedback\n• Document and file management\n• Platform usage statistics and analytics\n• Improving service quality\n• Fulfilling legal obligations\n• Providing information to authorized institutions (legal requirement)',
        ],
      },
      {
        id: 'legal-basis',
        title: '4. Legal Basis for Processing Personal Data',
        content: [
          'Your personal data is processed based on the following legal grounds specified in Article 5(2) of KVKK:',
          'a) Your Explicit Consent: We obtain your explicit consent when creating an account for platform use.',
          'b) Performance of Contract: Processing your personal data is necessary for the performance of the ConnectAlign usage agreement.',
          'c) Legal Obligation: To fulfill our legal obligations such as tax regulations, e-invoice issuance.',
          'd) Legitimate Interests of Data Controller: Platform security, improving service quality, fraud prevention, provided that it does not harm your fundamental rights and freedoms.',
          'e) Explicit Consent of Data Subject: For optional features (e.g., location sharing, marketing communications), your explicit consent is obtained separately.',
        ],
      },
      {
        id: 'data-sharing',
        title: '5. Sharing Personal Data',
        content: [
          'Your personal data may be shared with the following persons and organizations in accordance with Articles 8 and 9 of KVKK:',
          'Third-Party Service Providers:',
          '• Firebase (Google): Push notifications, authentication, data storage\n• PostgreSQL Hosting: Database hosting\n• SMS Gateway: SMS sending service\n• Email Service: Email delivery infrastructure\n• Payment Infrastructure: Credit card transactions\n• Cloud Storage: File backup',
          'Business Partners:\n• Authorized users within your customer organization\n• Third-party applications you integrate (with your permission)',
          'Legal Obligations:\n• In case of court order or official authority requests\n• As required by legal regulations (tax office, MASAK, etc.)',
          'KVKK-compliant contracts have been signed with all parties to whom data is transferred, and the security of your data is ensured.',
        ],
      },
      {
        id: 'retention-periods',
        title: '6. Retention Periods of Personal Data',
        content: [
          'Your personal data is retained for the period required by the processing purpose and in accordance with legal retention obligations:',
          'While Account is Active:\n• All user data is actively stored\n• Usage logs and transaction history are maintained',
          'When Account is Deleted:\n• Personal data is deleted within 30 days\n• Data subject to legal retention requirements (invoices, etc.) is kept for 10 years',
          'Legal Retention Periods:\n• Commercial documents: 10 years (Turkish Commercial Code)\n• Transaction records: 10 years (Tax Procedure Law)\n• Communication records: 5 years (Consumer Law)',
          'Data whose retention period has expired is deleted, destroyed, or anonymized using secure methods.',
        ],
      },
      {
        id: 'your-rights',
        title: '7. Your Rights Under KVKK',
        content: [
          'Under Article 11 of KVKK, you have the following rights:',
          'a) Learn whether your personal data is being processed\nb) Request information about it if processed\nc) Learn the purpose of processing and whether it is used for its purpose\nd) Know third parties to whom it is transferred domestically or abroad\ne) Request correction if processed incompletely or incorrectly\nf) Request deletion or destruction under the conditions stipulated in Article 7 of KVKK\ng) Request notification of correction, deletion, and destruction to third parties to whom personal data has been transferred\nh) Object to the occurrence of a result against you solely through automatic processing of data\ni) Request compensation for damages if you suffer harm due to unlawful processing',
        ],
      },
      {
        id: 'application-method',
        title: '8. Exercising Your Rights and Application Method',
        content: [
          'You can apply to exercise your KVKK rights through the following methods:',
          '1. Written Application:\nUtilwork A.Ş.\nBrandium Residence D:3A R5 Block Floor:7 No:48, Dereboyu Cd, Küçükbakkalköy, 34758 Ataşehir/Istanbul\n(Write "Personal Data Protection Law Information Request" on the envelope)',
          '2. Registered Electronic Mail (KEP):\nutilwork@hs03.kep.tr',
          '3. Email (with Secure Electronic Signature):\nkvkk@utilwork.com',
          '4. Through Platform:\nConnectAlign > Settings > KVKK Application',
          'Required information in your application:\n• Your name, surname\n• National ID number or passport number\n• Your contact information (email, phone)\n• Subject of request\n• Information and documents for identity verification',
          'Your application will be answered within 30 days at the latest. If the process requires cost, a fee according to the tariff determined by the Personal Data Protection Board may be charged.',
        ],
      },
      {
        id: 'data-security',
        title: '9. Data Security',
        content: [
          'Utilwork takes technical and administrative measures to ensure the security of your personal data:',
          'Technical Security:\n• SSL/TLS encryption (HTTPS)\n• Database encryption\n• Secure authentication (JWT token)\n• Regular security updates\n• Firewall and DDoS protection\n• Regular data backup\n• Access logs and monitoring',
          'Administrative Security:\n• Authorized personnel limitation\n• Confidentiality agreements\n• Personnel training\n• Security policies and procedures\n• Periodic security audits',
          'In Case of Data Breach:\n• Incident is immediately investigated\n• Affected users are informed\n• Personal Data Protection Board is notified\n• Preventive measures are taken',
        ],
      },
      {
        id: 'cookies',
        title: '10. Cookies and Tracking Technologies',
        content: [
          'The ConnectAlign platform uses cookies to improve user experience and provide services.',
          'Types of Cookies Used:',
          'Essential Cookies:\n• Session cookies\n• Authentication tokens\n• Security cookies',
          'Functional Cookies:\n• Language preference\n• Theme settings (dark mode, etc.)\n• User preference settings',
          'Analytics Cookies:\n• Page view statistics\n• Usage durations\n• Error reporting',
          'Cookie Management:\nYou can delete or block cookies from your browser settings. However, blocking essential cookies may affect platform functionality.',
          'Third-Party Cookies:\nServices such as Google Analytics and Firebase may use their own cookies. Detailed information about these cookies can be found in the privacy policies of the respective service providers.',
        ],
      },
      {
        id: 'contact',
        title: '11. Contact',
        content: [
          'For questions or requests regarding GDPR and data protection, you can contact us:',
          `${companyInfo.name}\n${companyInfo.address}`,
          `Email: ${companyInfo.kvkkEmail}\nPhone: ${companyInfo.phone}`,
          `Web: ${companyInfo.web}\nSupport: ${companyInfo.email}`,
          'Personal Data Protection Board (KVKK):\nWeb: kvkk.gov.tr\nEmail: kvkk@kvkk.gov.tr\nAddress: Nasuh Akar Mah. Ziya Gökalp Cad. No:27-29 Çankaya/Ankara',
        ],
      },
    ],
  },
};

/**
 * Privacy Contract (Gizlilik Sözleşmesi)
 */
export const privacyContract = {
  tr: {
    title: 'Kullanım Koşulları, Gizlilik ve Güvenlik Politikası',
    lastUpdated: `Son Güncelleme: ${companyInfo.lastUpdated}`,
    sections: [
      {
        id: 'taraflar',
        title: '1. Taraflar',
        content: [`${companyInfo.name} ile KULLANICI arasındaki sözleşme.`]
      },
      {
        id: 'iletisim',
        title: 'İletişim',
        content: [`${companyInfo.name}`, `Web: ${companyInfo.web}`, `E-posta: ${companyInfo.email}`, `Adres: ${companyInfo.address}`]
      }
    ]
  },
  en: {
    title: 'Terms of Use, Privacy and Security Policy',
    lastUpdated: 'Last Updated: February 2026',
    sections: [{id: 'contact', title: 'Contact', content: [`${companyInfo.web}`]}]
  }
};

/**
 * Utilwork Data Processor Disclosure Text
 */
export const aydinlatmaMetniUtilwork = {
  tr: {
    title: 'Utilwork Veri İşleyici Aydınlatma Metni',
    lastUpdated: `Son Güncelleme: ${companyInfo.lastUpdated}`,
    sections: [{id: 'iletisim', title: 'İletişim', content: [`${companyInfo.name}`, `E-posta: ${companyInfo.kvkkEmail}`, `Web: ${companyInfo.web}`]}]
  },
  en: {
    title: 'Utilwork Data Processor Disclosure',
    lastUpdated: 'Last Updated: February 2026',
    sections: [{id: 'contact', title: 'Contact', content: [`Email: ${companyInfo.kvkkEmail}`]}]
  }
};

/**
 * Combined Disclosure Text (Both Utilwork and Company)
 * Shows both disclosure notices on a single page
 */
export const aydinlatmaMetniCombined = {
  tr: {
    title: 'Kişisel Verilerin Korunması - Aydınlatma Metinleri',
    lastUpdated: `Son Güncelleme: ${companyInfo.lastUpdated}`,
    sections: [
      {
        id: 'doküman-1-baslik',
        title: 'DOKÜMAN 1: UTILWORK VERİ İŞLEYİCİ AYDINLATMA METNİ',
        content: [
          'ConnectAlign Uygulaması - Kişisel Verilerin Korunmasına İlişkin Aydınlatma Metni (Veri İşleyici Sıfatıyla)'
        ]
      },
      {
        id: 'giris-1',
        title: 'Giriş',
        content: [
          `6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, ${companyInfo.name}, veri işleyici sıfatıyla ConnectAlign uygulaması kapsamında işlenen kişisel verileriniz hakkında sizleri bilgilendirmektedir.`,
          'ÖNEMLİ BİLDİRİM: VERİ SORUMLUSU VE VERİ İŞLEYİCİ İLİŞKİSİ',
          `${companyInfo.name}, ConnectAlign uygulaması kapsamında VERİ İŞLEYİCİ konumundadır.`,
          'VERİ SORUMLUSU: İşvereniniz veya üyesi olduğunuz kuruluş (ConnectAlign lisansını satın alan şirket)',
          'KVKK kapsamındaki haklarınızı kullanmak için öncelikle işvereninize başvurmanız gerekmektedir.'
        ]
      },
      {
        id: 'veri-isleyici-bilgileri',
        title: '1. Veri İşleyici Bilgileri',
        content: [
          `Ticaret Unvanı: ${companyInfo.name}`,
          `Adres: ${companyInfo.address}`,
          `E-posta: ${companyInfo.kvkkEmail}`,
          `Telefon: ${companyInfo.phone}`,
          `Web: ${companyInfo.web}`,
          `KEP: ${companyInfo.kep}`
        ]
      },
      {
        id: 'islenen-veriler',
        title: '2. İşlenen Kişisel Veriler',
        content: [
          'Utilwork, veri işleyici sıfatıyla aşağıdaki kişisel veri kategorilerini işlemektedir:',
          '• Kimlik Bilgileri: Ad, soyad, cinsiyet, doğum tarihi, profil fotoğrafı',
          '• İletişim Bilgileri: E-posta, telefon, konum',
          '• Çalışan Bilgileri: Departman, pozisyon, sicil numarası',
          '• Kullanım Bilgileri: Uygulama logları, okunan duyurular, cihaz bilgileri',
          '• Görsel Kayıtlar: Profil fotoğrafı, kartvizit görüntüleri',
          '• Uygunluk Durumu: Çalışma durumu, uygunluk tarih aralığı',
          '• QR Kod ve Kartvizit Verileri',
          '• Pazarlama ve Analitik Bilgileri'
        ]
      },
      {
        id: 'isleme-amaclari',
        title: '3. İşlenme Amaçları',
        content: [
          'Kişisel verileriniz veri sorumlusunun talimatları doğrultusunda işlenmektedir:',
          '• Teknik altyapı sağlama ve veri saklama',
          '• Push notification ve SMS gönderimi',
          '• Sistem bakımı, destek ve güvenlik',
          '• Yedekleme ve hukuki yükümlülükler'
        ]
      },
      {
        id: 'veri-aktarimi',
        title: '6. Veri Aktarımı',
        content: [
          'Yurt İçi: Veri Sorumlusu, Microsoft Azure (Türkiye), Firebase Analytics',
          'Yurt Dışı: Firebase (Google LLC - ABD) - GDPR uyumlu'
        ]
      },
      {
        id: 'guvenlik',
        title: '8. Güvenlik Tedbirleri',
        content: [
          'Teknik: SSL/TLS şifreleme, AES-256, JWT token, firewall, DDoS koruması',
          'İdari: Gizlilik sözleşmeleri, KVKK eğitimleri, güvenlik denetimleri'
        ]
      },
      {
        id: 'haklariniz',
        title: '9. Kişisel Veri Sahibinin Hakları',
        content: [
          'KVKK\'nın 11. maddesi uyarınca haklarınız:',
          '• Verilerinizin işlenip işlenmediğini öğrenme',
          '• İşlenme amacını ve üçüncü kişileri öğrenme',
          '• Düzeltme, silme veya yok edilmesini isteme',
          '• İtiraz etme ve tazminat talep etme'
        ]
      },
      {
        id: 'basvuru',
        title: '10. Başvuru Yöntemi',
        content: [
          'ÖNCE İŞVERENİNİZE BAŞVURUN',
          'Gerekirse Utilwork\'e başvuru yöntemleri:',
          `• Yazılı: ${companyInfo.address}`,
          `• KEP: ${companyInfo.kep}`,
          `• E-posta: ${companyInfo.kvkkEmail}`,
          'Başvurunuz 30 gün içinde yanıtlanacaktır.'
        ]
      },
      {
        id: 'ayrac',
        title: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        content: ['']
      },
      {
        id: 'doküman-2-baslik',
        title: 'DOKÜMAN 2: MÜŞTERİ ŞİRKET AYDINLATMA METNİ (TEMPLATE)',
        content: [
          'ConnectAlign Uygulaması - Kişisel Verilerin Korunmasına İlişkin Aydınlatma Metni (Veri Sorumlusu Sıfatıyla)',
          'Bu template, ConnectAlign kullanan kuruluşların çalışanlarına yönelik KVKK uyumlu aydınlatma metnidir.'
        ]
      },
      {
        id: 'giris-2',
        title: 'Giriş',
        content: [
          'KVKK uyarınca, [ŞİRKET UNVANI] ("Şirket"), veri sorumlusu sıfatıyla çalışanlarının ConnectAlign uygulaması kapsamında işlenen kişisel verileri hakkında aydınlatma yapmaktadır.'
        ]
      },
      {
        id: 'veri-sorumlusu-bilgileri',
        title: 'Veri Sorumlusu Bilgileri',
        content: [
          'Ticaret Unvanı: [ŞİRKET UNVANI]',
          'Adres: [Şirket Adresi]',
          'Telefon: [Telefon]',
          'E-posta: [E-posta]',
          'KEP Adresi: [KEP Adresi]'
        ]
      },
      {
        id: 'veri-kategorileri-2',
        title: '2. İşlenen Kişisel Veri Kategorileri',
        content: [
          'ConnectAlign kapsamında işlenen veriler:',
          '• Kimlik, iletişim ve çalışan bilgileri',
          '• Kullanım ve işlem bilgileri',
          '• Görsel kayıtlar ve eğitim bilgileri',
          '• Uygunluk durumu, QR kod bilgileri',
          '• Pazarlama ve analitik verileri'
        ]
      },
      {
        id: 'isleme-amaclari-2',
        title: '3. İşlenme Amaçları',
        content: [
          '• İnsan kaynakları yönetimi',
          '• İç iletişim ve bilgilendirme',
          '• Doküman ve bilgi yönetimi',
          '• Eğitim ve gelişim',
          '• Anket ve geri bildirim',
          '• Sistem güvenliği ve denetim',
          '• Hukuki yükümlülükler'
        ]
      },
      {
        id: 'hukuki-sebepler',
        title: '5. Hukuki İşleme Şartları',
        content: [
          '• İş sözleşmesinin kurulması ve ifası',
          '• Kanuni yükümlülükler (İş Kanunu, TBK, TTK)',
          '• Meşru menfaat (verimli iletişim, güvenlik)',
          '• Açık rıza (özel nitelikli veriler için)'
        ]
      },
      {
        id: 'veri-aktarimi-2',
        title: '6. Veri Aktarımı',
        content: [
          'Veriler şu taraflara aktarılabilir:',
          `• Veri İşleyici: ${companyInfo.name}`,
          '• Bulut Altyapı: Microsoft Azure, Firebase',
          '• Yetkili kamu kurum ve kuruluşları',
          '• Hizmet sağlayıcılar (hukuk, denetim)'
        ]
      },
      {
        id: 'saklama-2',
        title: '8. Saklanma Süresi',
        content: [
          'Genel Kural: Aktif çalışma süresi + 10 yıl',
          'Özel Durumlar:',
          '• Eğitim kayıtları: 10 yıl',
          '• Elektronik evrak: 10 yıl',
          '• Anket ve değerlendirmeler: 5 yıl',
          '• Kullanım logları: 2 yıl'
        ]
      },
      {
        id: 'haklariniz-2',
        title: '10. Haklarınız',
        content: [
          'KVKK kapsamındaki haklarınız:',
          '• Bilgi talep etme, düzeltme, silme/yok etme',
          '• İtiraz etme, tazminat talep etme',
          'Başvuru için: [KURUM İnsan Kaynakları Departmanı]'
        ]
      },
      {
        id: 'iletisim-2',
        title: '16. İletişim',
        content: [
          '[ŞİRKET UNVANI]',
          'Adres: [Tam Adres]',
          'Telefon: [Telefon]',
          'E-posta: [E-posta]'
        ]
      }
    ]
  },
  en: {
    title: 'Personal Data Protection - Disclosure Notices',
    lastUpdated: 'Last Updated: February 2026',
    sections: [
      {
        id: 'doc1-title',
        title: 'DOCUMENT 1: UTILWORK DATA PROCESSOR DISCLOSURE',
        content: ['ConnectAlign Application - Personal Data Processing Disclosure (Data Processor)']
      },
      {
        id: 'intro',
        title: 'Introduction',
        content: [
          `${companyInfo.name} acts as Data Processor for ConnectAlign application.`,
          'DATA CONTROLLER: Your employer (company that purchased ConnectAlign license)',
          'To exercise your GDPR/KVKK rights, please first contact your employer.'
        ]
      },
      {
        id: 'contact1',
        title: 'Contact Information',
        content: [
          `${companyInfo.name}`,
          `Email: ${companyInfo.kvkkEmail}`,
          `Web: ${companyInfo.web}`
        ]
      },
      {
        id: 'separator',
        title: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        content: ['']
      },
      {
        id: 'doc2-title',
        title: 'DOCUMENT 2: CUSTOMER COMPANY DISCLOSURE (TEMPLATE)',
        content: ['ConnectAlign Application - Personal Data Processing Disclosure (Data Controller)', 'This is a template for organizations using ConnectAlign.']
      },
      {
        id: 'template-info',
        title: 'Template Information',
        content: [
          'Company Name: [COMPANY NAME]',
          'Your organization should update this with its own information.'
        ]
      }
    ]
  }
};

/**
 * Customer Company Disclosure Text (Template)
 */
export const aydinlatmaMetniKurum = {
  tr: {
    title: 'Müşteri Şirket Aydınlatma Metni (Template)',
    lastUpdated: `Son Güncelleme: ${companyInfo.lastUpdated}`,
    sections: [{id: 'giris', title: 'Giriş', content: ['Template metindir.']}]
  },
  en: {
    title: 'Customer Company Disclosure Template',
    lastUpdated: 'Last Updated: February 2026',
    sections: [{id: 'intro', title: 'Introduction', content: ['Template for organizations.']}]
  }
};

/**
 * EULA (End User License Agreement)
 */
export const eulaTerms = {
  tr: {
    title: 'Son Kullanıcı Lisans Sözleşmesi (EULA)',
    lastUpdated: `Son Güncelleme: ${companyInfo.lastUpdated}`,
    sections: [{id: 'iletisim', title: 'İletişim', content: [`${companyInfo.name}`, `Web: ${companyInfo.web}`, `E-posta: ${companyInfo.email}`, `Adres: ${companyInfo.address}`]}]
  },
  en: {
    title: 'End User License Agreement (EULA)',
    lastUpdated: 'Last Updated: February 2026',
    sections: [{id: 'contact', title: 'Contact', content: [`${companyInfo.web}`]}]
  }
};
