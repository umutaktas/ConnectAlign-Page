const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// SMTP Configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.hostinger.com',
  port: process.env.SMTP_PORT || 465,
  secure: true, // SSL
  auth: {
    user: process.env.SMTP_USER || 'info@utilwork.com',
    pass: process.env.SMTP_PASS
  }
});

// Verify SMTP connection on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ SMTP connection error:', error);
  } else {
    console.log('✅ SMTP server is ready to send emails');
  }
});

// Phone number formatter
const formatPhoneNumber = (phone) => {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '');

  // Format as 0XXX XXX XX XX
  if (cleaned.length === 10) {
    return `0${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6, 8)} ${cleaned.slice(8, 10)}`;
  } else if (cleaned.length === 11 && cleaned.startsWith('0')) {
    return `0${cleaned.slice(1, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7, 9)} ${cleaned.slice(9, 11)}`;
  }
  return phone; // Return original if format doesn't match
};

// Demo request endpoint
app.post('/api/send-demo-request', async (req, res) => {
  console.log('📧 Demo request received:', req.body);
  const { name, company, email, phone, employees, message } = req.body;

  // Validate required fields
  if (!name || !email || !phone) {
    return res.status(400).json({
      success: false,
      message: 'Missing required fields (name, email, phone)'
    });
  }

  // Format phone number
  const formattedPhone = formatPhoneNumber(phone);

  const htmlContent = `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            border-radius: 10px 10px 0 0;
            text-align: center;
          }
          .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
          .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
          .field { margin-bottom: 20px; padding: 15px; background: white; border-radius: 8px; }
          .label {
            font-weight: bold;
            color: #667eea;
            display: block;
            margin-bottom: 5px;
            font-size: 12px;
            text-transform: uppercase;
          }
          .value {
            font-size: 16px;
            color: #333;
          }
          .highlight {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
          }
          .footer {
            background: #333;
            color: #fff;
            padding: 15px;
            text-align: center;
            font-size: 12px;
            border-radius: 0 0 10px 10px;
          }
        </style>
      </head>
      <body>
        <div class='container'>
          <div class='header'>
            <div class='logo'>🚀 ConnectAlign</div>
            <h2 style='margin: 0;'>Yeni Demo Talebi</h2>
          </div>
          <div class='content'>
            <div class='field'>
              <span class='label'>👤 Ad Soyad</span>
              <span class='value'>${name}</span>
            </div>
            ${company ? `
            <div class='field'>
              <span class='label'>🏢 Firma</span>
              <span class='value'>${company}</span>
            </div>
            ` : ''}
            <div class='field'>
              <span class='label'>📧 Email</span>
              <span class='value'><a href='mailto:${email}'>${email}</a></span>
            </div>
            <div class='field'>
              <span class='label'>📞 Telefon</span>
              <span class='value'><a href='tel:${formattedPhone}'>${formattedPhone}</a></span>
            </div>
            ${employees ? `
            <div class='field'>
              <span class='label'>👥 Çalışan Sayısı</span>
              <span class='value'>${employees}</span>
            </div>
            ` : ''}
            ${message ? `
            <div class='highlight'>
              <span class='label' style='color: white;'>💬 Mesaj</span>
              <div style='margin-top: 10px; color: white;'>
                ${message}
              </div>
            </div>
            ` : ''}
          </div>
          <div class='footer'>
            <strong>ConnectAlign</strong> - Utilwork Bilgi Teknolojileri<br>
            ${new Date().toLocaleString('tr-TR', {
              dateStyle: 'full',
              timeStyle: 'short'
            })}
          </div>
        </div>
      </body>
    </html>
  `;

  const mailOptions = {
    from: `"${process.env.DISPLAY_NAME || 'ConnectAlign Demo Request'}" <${process.env.SMTP_USER || 'info@utilwork.com'}>`,
    to: process.env.TO_EMAIL || 'info@utilwork.com',
    replyTo: email,
    subject: `🎯 Yeni Demo Talebi - ${name} ${company ? `(${company})` : ''}`,
    html: htmlContent
  };

  try {
    console.log('📤 Sending email to:', process.env.TO_EMAIL || 'info@utilwork.com');
    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', result.messageId);
    res.json({
      success: true,
      message: 'Demo request sent successfully',
      messageId: result.messageId
    });
  } catch (error) {
    console.error('❌ Email error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send demo request',
      error: error.message
    });
  }
});

// Contact form endpoint
app.post('/api/send-contact', async (req, res) => {
  console.log('📧 Contact form received:', req.body);
  const { name, email, subject, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Missing required fields (name, email, message)'
    });
  }

  const htmlContent = `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            border-radius: 10px 10px 0 0;
            text-align: center;
          }
          .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
          .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
          .field { margin-bottom: 20px; padding: 15px; background: white; border-radius: 8px; }
          .label {
            font-weight: bold;
            color: #667eea;
            display: block;
            margin-bottom: 5px;
            font-size: 12px;
            text-transform: uppercase;
          }
          .value {
            font-size: 16px;
            color: #333;
          }
          .message-box {
            background: white;
            padding: 20px;
            border-left: 4px solid #667eea;
            border-radius: 4px;
            margin: 20px 0;
          }
          .footer {
            background: #333;
            color: #fff;
            padding: 15px;
            text-align: center;
            font-size: 12px;
            border-radius: 0 0 10px 10px;
          }
        </style>
      </head>
      <body>
        <div class='container'>
          <div class='header'>
            <div class='logo'>✉️ ConnectAlign</div>
            <h2 style='margin: 0;'>Yeni İletişim Mesajı</h2>
          </div>
          <div class='content'>
            <div class='field'>
              <span class='label'>👤 Gönderen</span>
              <span class='value'>${name}</span>
            </div>
            <div class='field'>
              <span class='label'>📧 Email</span>
              <span class='value'><a href='mailto:${email}'>${email}</a></span>
            </div>
            ${subject ? `
            <div class='field'>
              <span class='label'>📋 Konu</span>
              <span class='value'>${subject}</span>
            </div>
            ` : ''}
            <div class='message-box'>
              <span class='label'>💬 Mesaj</span>
              <div class='value' style='margin-top: 10px; white-space: pre-wrap;'>
                ${message}
              </div>
            </div>
          </div>
          <div class='footer'>
            <strong>ConnectAlign</strong> - Utilwork Bilgi Teknolojileri<br>
            ${new Date().toLocaleString('tr-TR', {
              dateStyle: 'full',
              timeStyle: 'short'
            })}
          </div>
        </div>
      </body>
    </html>
  `;

  const mailOptions = {
    from: `"${process.env.DISPLAY_NAME || 'ConnectAlign Contact Form'}" <${process.env.SMTP_USER || 'info@utilwork.com'}>`,
    to: process.env.TO_EMAIL || 'info@utilwork.com',
    replyTo: email,
    subject: `✉️ İletişim Formu - ${subject || name}`,
    html: htmlContent
  };

  try {
    console.log('📤 Sending contact email to:', process.env.TO_EMAIL || 'info@utilwork.com');
    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Contact email sent successfully:', result.messageId);
    res.json({
      success: true,
      message: 'Contact message sent successfully',
      messageId: result.messageId
    });
  } catch (error) {
    console.error('❌ Contact email error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send contact message',
      error: error.message
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'ConnectAlign Email Service'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 ConnectAlign Email Service running on port ${PORT}`);
  console.log(`📧 SMTP User: ${process.env.SMTP_USER || 'info@utilwork.com'}`);
  console.log(`📬 Sending emails to: ${process.env.TO_EMAIL || 'info@utilwork.com'}`);
});
