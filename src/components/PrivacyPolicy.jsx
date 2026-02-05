import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = ({ language }) => {
  const content = {
    tr: {
      title: "Gizlilik Politikası",
      lastUpdated: "Son Güncelleme: 2 Şubat 2026",
      backToHome: "Ana Sayfaya Dön",
      contactTitle: "İletişim",
      contactText: "Gizlilik politikamızla ilgili sorularınız veya talepleriniz için bizimle iletişime geçebilirsiniz:",
      sections: [
        {
          title: "1. Giriş",
          content: [
            "ConnectAlign, kurumsal iletişim ve iş süreçlerini dijitalleştiren bir mobil ve web uygulamasıdır. Bu gizlilik politikası, uygulamamızı kullanırken toplanan, işlenen ve saklanan kişisel verileriniz hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.",
            "ConnectAlign'ı kullanarak, bu gizlilik politikasını kabul etmiş olursunuz. Bu politika hem mobil uygulama hem de web dashboard (dashboard.connectalign.com) için geçerlidir."
          ]
        },
        {
          title: "2. Toplanan Veriler",
          content: [
            "ConnectAlign'ı kullanırken aşağıdaki kategorilerdeki verileriniz toplanabilir:"
          ],
          list: [
            "Hesap Bilgileri: Ad, soyad, e-posta adresi, telefon numarası, şirket, departman, pozisyon, profil fotoğrafı",
            "Dijital İş Kartı: QR kod tarama için kamera erişimi, kişiler listesine kaydetme için kişiler erişimi, iş kartı bilgileri",
            "Etkinlik Yönetimi: Konum bilgisi, etkinlik katılım durumu, QR kod ile check-in verileri",
            "Anketler: Anket cevapları, geri bildirimler, push notification tercihleri",
            "Duyurular: Cihaz token'ları (Firebase FCM), bildirim tercihleri, okunma durumu",
            "Doküman Yönetimi: Yüklenen dosyalar, depolama alanı erişimi",
            "SMS Bildirimleri: Telefon numarası",
            "Öneri ve Şikayetler: Geri bildirim metinleri, ekran görüntüleri",
            "Teknik Veriler: Cihaz modeli, işletim sistemi, IP adresi, uygulama logları"
          ]
        },
        {
          title: "3. Verilerin Kullanım Amaçları",
          content: [
            "Toplanan verileriniz aşağıdaki amaçlarla kullanılır:"
          ],
          list: [
            "Hesap oluşturma ve kimlik doğrulama (JWT authentication)",
            "Dijital iş kartı oluşturma, QR kod ile paylaşma",
            "Kurumsal etkinlik yönetimi, QR check-in, katılımcı takibi",
            "Anket oluşturma, atama, cevap toplama ve raporlama",
            "Push notification ile duyuru ve bildirim gönderme",
            "Dosya yükleme, indirme, paylaşma ve erişim kontrolü",
            "SMS ve e-posta bildirimleri",
            "Öneri ve şikayet toplama",
            "Uygulama performansı izleme ve güvenlik"
          ]
        },
        {
          title: "4. Üçüncü Parti Servisler",
          content: [
            "Verileriniz aşağıdaki üçüncü parti servislerle paylaşılabilir:"
          ],
          list: [
            "Firebase (Google): Push notifications, Analytics, Crashlytics",
            "Backend API: PostgreSQL veritabanı (şifreli)",
            "SMS Provider: Sadece telefon numarası",
            "Verileriniz SADECE hizmet sağlamak için gerekli servislerle paylaşılır",
            "Pazarlama amaçlı veri paylaşımı YAPILMAZ",
            "Yasal zorunluluklar haricinde veri satışı YAPILMAZ"
          ]
        },
        {
          title: "5. Veri Saklama",
          content: [
            "Aktif hesaplar: Hesabınız aktif olduğu sürece verileriniz saklanır",
            "Pasif hesaplar: 2 yıl giriş yapılmayan hesaplar otomatik silinir",
            "Yasal saklama: Faturalar ve sözleşmeler 5 yıl saklanır"
          ]
        },
        {
          title: "6. Kullanıcı Hakları (GDPR & KVKK)",
          content: [
            "Aşağıdaki haklara sahipsiniz:"
          ],
          list: [
            "Bilgi Edinme: Hangi verilerinizin toplandığını öğrenebilirsiniz",
            "Düzeltme: Yanlış bilgilerinizi düzeltebilirsiniz",
            "Silme: Hesabınızı ve verilerinizi silebilirsiniz (30 gün içinde kalıcı silme)",
            "Veri Taşınabilirliği: Verilerinizi JSON/CSV formatında indirebilirsiniz",
            "İtiraz: Push notification, SMS ve email'leri kapatabilirsiniz",
            "İzin Geri Çekme: Kamera, konum, kişiler izinlerini iptal edebilirsiniz"
          ]
        },
        {
          title: "7. Güvenlik",
          content: [
            "Verilerinizin güvenliği için:"
          ],
          list: [
            "SSL/TLS şifreleme ile veri aktarımı",
            "JWT token authentication",
            "Veritabanı şifreleme (PostgreSQL)",
            "Düzenli güvenlik denetimleri",
            "Erişim kontrolü ve audit logları"
          ]
        },
        {
          title: "8. Push Notifications",
          content: [
            "Firebase Cloud Messaging (FCM) kullanılır",
            "Cihaz token'ları saklanır ve bildirim gönderimi için kullanılır",
            "Bildirim kategorileri: Anketler, duyurular, etkinlikler",
            "Bildirimleri uygulama ayarlarından kapatabilirsiniz"
          ]
        },
        {
          title: "9. Çerezler ve İzleme",
          content: [
            "Firebase Analytics ile kullanım verileri toplanabilir",
            "LocalStorage ile kullanıcı tercihleri saklanır",
            "Performans izleme için teknik veriler toplanabilir"
          ]
        },
        {
          title: "10. Çocukların Gizliliği",
          content: [
            "ConnectAlign 13 yaş altı kullanıcılara yönelik değildir",
            "13 yaş altı çocukların verilerini bilerek toplamıyoruz",
            "COPPA uyumludur"
          ]
        },
        {
          title: "11. Politika Değişiklikleri",
          content: [
            "Bu gizlilik politikasını zaman zaman güncelleyebiliriz",
            "Önemli değişiklikler durumunda bilgilendirileceksiniz",
            "Güncel politika: https://connectalign.com/privacy"
          ]
        }
      ]
    },
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: February 2, 2026",
      backToHome: "Back to Home",
      contactTitle: "Contact Us",
      contactText: "If you have any questions or requests regarding our privacy policy, please contact us:",
      sections: [
        {
          title: "1. Introduction",
          content: [
            "ConnectAlign is a mobile and web application that digitalizes corporate communication and business processes. This privacy policy informs you about the personal data collected, processed, and stored while using our application.",
            "By using ConnectAlign, you agree to this privacy policy. This policy applies to both the mobile application and the web dashboard (dashboard.connectalign.com)."
          ]
        },
        {
          title: "2. Data We Collect",
          content: [
            "While using ConnectAlign, the following data may be collected:"
          ],
          list: [
            "Account Information: Name, email, phone, company, department, position, photo",
            "Digital Business Card: Camera access for QR, contacts access, business card info",
            "Event Management: Location data, attendance status, QR check-in data",
            "Surveys: Survey responses, feedback, push notification preferences",
            "Announcements: Device tokens (Firebase FCM), notification preferences, read status",
            "Document Management: Uploaded files, storage access",
            "SMS Notifications: Phone number",
            "Suggestions & Complaints: Feedback texts, screenshots",
            "Technical Data: Device model, OS, IP address, app logs"
          ]
        },
        {
          title: "3. How We Use Your Data",
          content: [
            "Collected data is used for:"
          ],
          list: [
            "Account creation and authentication (JWT)",
            "Creating digital business cards, QR sharing",
            "Managing corporate events, QR check-in, participant tracking",
            "Creating surveys, collecting responses, reporting",
            "Sending announcements via push notifications",
            "File upload, download, sharing, access control",
            "Sending SMS and email notifications",
            "Collecting suggestions and complaints",
            "Monitoring app performance and security"
          ]
        },
        {
          title: "4. Third-Party Services",
          content: [
            "Your data may be shared with:"
          ],
          list: [
            "Firebase (Google): Push notifications, Analytics, Crashlytics",
            "Backend API: PostgreSQL database (encrypted)",
            "SMS Provider: Phone number only",
            "Data is ONLY shared with services necessary for the service",
            "NO data sharing for marketing purposes",
            "NO data sales except for legal obligations"
          ]
        },
        {
          title: "5. Data Retention",
          content: [
            "Active accounts: Data stored while account is active",
            "Inactive accounts: Accounts with no login for 2 years are deleted",
            "Legal retention: Invoices and contracts retained for 5 years"
          ]
        },
        {
          title: "6. Your Rights (GDPR & KVKK)",
          content: [
            "You have the following rights:"
          ],
          list: [
            "Right to Access: Learn what data is collected",
            "Right to Rectification: Correct incorrect information",
            "Right to Erasure: Delete your account and data (permanent deletion within 30 days)",
            "Data Portability: Download your data in JSON/CSV format",
            "Right to Object: Disable push notifications, SMS, and emails",
            "Withdraw Consent: Revoke camera, location, contacts permissions"
          ]
        },
        {
          title: "7. Security",
          content: [
            "To ensure data security:"
          ],
          list: [
            "SSL/TLS encryption for data transmission",
            "JWT token authentication",
            "Database encryption (PostgreSQL)",
            "Regular security audits",
            "Access control and audit logs"
          ]
        },
        {
          title: "8. Push Notifications",
          content: [
            "Firebase Cloud Messaging (FCM) is used",
            "Device tokens are stored for notification delivery",
            "Notification categories: Surveys, announcements, events",
            "You can disable notifications in app settings"
          ]
        },
        {
          title: "9. Cookies and Tracking",
          content: [
            "Usage data collected with Firebase Analytics",
            "User preferences stored in LocalStorage",
            "Technical data collected for performance monitoring"
          ]
        },
        {
          title: "10. Children's Privacy",
          content: [
            "ConnectAlign is not for users under 13",
            "We do not knowingly collect data from children under 13",
            "COPPA compliant"
          ]
        },
        {
          title: "11. Policy Changes",
          content: [
            "We may update this privacy policy from time to time",
            "You will be notified of significant changes",
            "Current policy: https://connectalign.com/privacy"
          ]
        }
      ]
    }
  };

  const text = content[language];

  return (
    <div
      className="min-h-screen py-20"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          {text.backToHome}
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
          {text.title}
        </h1>
        <p className="text-gray-400 mb-8">
          {text.lastUpdated}
        </p>

        <div className="space-y-8 text-gray-300">
          {text.sections.map((section, index) => (
            <section key={index} className="feature-card p-6 hover:scale-[1.01] transition-transform">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="leading-relaxed text-gray-300">
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.list && (
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
                  {section.list.map((item, iIndex) => (
                    <li key={iIndex} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="mt-12 feature-card p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">
            {text.contactTitle}
          </h2>
          <p className="text-gray-300 mb-4">
            {text.contactText}
          </p>
          <div className="space-y-2 text-gray-400">
            <p className="flex items-center gap-2">
              <span className="font-semibold text-white">Email:</span>
              <a href="mailto:info@utilwork.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                info@utilwork.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold text-white">Telefon:</span>
              <a href="tel:+902167063001" className="text-blue-400 hover:text-blue-300 transition-colors">
                +90 216 706 30 01
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold text-white">Website:</span>
              <a href="https://connectalign.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                https://connectalign.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
