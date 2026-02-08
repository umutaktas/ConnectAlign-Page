# ConnectAlign Email Service Backend

Backend API for ConnectAlign landing page email functionality using Express.js and Nodemailer.

## 🚀 Features

- **Demo Request Emails**: `/api/send-demo-request`
- **Contact Form Emails**: `/api/send-contact`
- **SMTP Integration**: Uses Nodemailer with custom SMTP server
- **HTML Templates**: Beautiful, branded email templates
- **CORS Enabled**: Supports cross-origin requests from frontend
- **Health Check**: `/api/health` endpoint

## 📋 Prerequisites

- Node.js 18+ installed
- SMTP credentials (Hostinger, Gmail, SendGrid, etc.)
- npm or yarn

## ⚙️ Installation

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   ```bash
   # Copy example file
   cp .env.example .env

   # Edit .env and add your SMTP credentials
   nano .env
   ```

## 🔐 Environment Variables

Create a `.env` file with the following:

```env
# SMTP Configuration
SMTP_HOST=smtp.hostinger.com    # Your SMTP server
SMTP_PORT=465                   # Port (465 for SSL, 587 for TLS)
SMTP_USER=info@utilwork.com     # SMTP username (usually your email)
SMTP_PASS=your_password_here    # SMTP password

# Email Recipients
TO_EMAIL=info@utilwork.com      # Where to send emails

# Server Configuration
PORT=3001                       # Backend server port
DISPLAY_NAME=ConnectAlign Demo Request  # Sender display name
```

### Getting SMTP Credentials

**Hostinger:**
1. Log in to Hostinger Control Panel
2. Go to Email → Email Accounts
3. Use your email credentials

**Gmail:**
1. Enable 2-Factor Authentication
2. Generate App Password: [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Use:
   - Host: `smtp.gmail.com`
   - Port: `587`
   - User: Your Gmail address
   - Pass: Generated app password

**SendGrid:**
1. Create API key in SendGrid dashboard
2. Use:
   - Host: `smtp.sendgrid.net`
   - Port: `587`
   - User: `apikey`
   - Pass: Your SendGrid API key

## 🏃 Running the Server

### Development Mode
```bash
npm run dev
```
Runs with nodemon for auto-reload on file changes.

### Production Mode
```bash
npm start
```
Standard node server (recommended for production).

### Test Health Check
```bash
curl http://localhost:3001/api/health
```

Expected response:
```json
{
  "status": "ok",
  "timestamp": "2026-02-07T...",
  "service": "ConnectAlign Email Service"
}
```

## 📡 API Endpoints

### 1. Demo Request
**Endpoint:** `POST /api/send-demo-request`

**Request Body:**
```json
{
  "name": "John Doe",
  "company": "ABC Corp",
  "email": "john@abc.com",
  "phone": "5551234567",
  "employees": "50-200",
  "message": "Optional message"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Demo request sent successfully",
  "messageId": "..."
}
```

### 2. Contact Form
**Endpoint:** `POST /api/send-contact`

**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "subject": "Question about pricing",
  "message": "Your message here"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contact message sent successfully",
  "messageId": "..."
}
```

### 3. Health Check
**Endpoint:** `GET /api/health`

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2026-02-07T12:00:00.000Z",
  "service": "ConnectAlign Email Service"
}
```

## 🧪 Testing

### Using curl
```bash
# Test demo request
curl -X POST http://localhost:3001/api/send-demo-request \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "5551234567",
    "company": "Test Company",
    "employees": "50-200",
    "message": "This is a test"
  }'

# Test contact form
curl -X POST http://localhost:3001/api/send-contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "This is a test message"
  }'
```

### Using Postman
1. Import the endpoint URLs
2. Set method to POST
3. Add JSON body
4. Send request

## 📝 Email Templates

The server sends HTML-formatted emails with:
- Gradient header with ConnectAlign branding
- Organized field display
- Professional footer with timestamp
- Utilwork company info
- Reply-to functionality (emails replied to sender)

## 🔧 Troubleshooting

### SMTP Connection Errors
```
❌ SMTP connection error: ...
```
**Solutions:**
- Check SMTP credentials in `.env`
- Verify SMTP port (465 for SSL, 587 for TLS)
- Check firewall settings
- Test credentials in email client first

### Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::3001
```
**Solution:**
```bash
# Find and kill process on port 3001
npx kill-port 3001

# Or change PORT in .env file
PORT=3002
```

### CORS Errors
If frontend shows CORS errors, verify:
- Backend is running on correct port
- Frontend `emailService.js` has correct API_URL
- CORS is enabled in `server.js`

## 🚀 Production Deployment

### Option 1: Same Server as Frontend
If frontend is served from same domain:

1. Build frontend: `npm run build`
2. Deploy backend to `/api/*` route
3. Update frontend API_URL to use relative path

### Option 2: Separate API Server
1. Deploy backend to separate server (e.g., api.connectalign.com)
2. Update frontend `.env`:
   ```env
   VITE_API_URL=https://api.connectalign.com
   ```
3. Ensure CORS allows frontend domain

### Using PM2 (Recommended)
```bash
# Install PM2
npm install -g pm2

# Start server
pm2 start server.js --name connectalign-email

# Save PM2 configuration
pm2 save

# Setup auto-restart on system reboot
pm2 startup
```

## 📦 Project Structure
```
backend/
├── server.js           # Main Express server
├── package.json        # Dependencies
├── .env               # Environment variables (DO NOT COMMIT)
├── .env.example       # Environment template
└── README.md          # This file
```

## 🔒 Security Best Practices

1. **Never commit `.env` file** (already in .gitignore)
2. **Use environment variables** for all sensitive data
3. **Limit rate of API requests** (add rate limiting middleware)
4. **Validate all inputs** (server validates required fields)
5. **Use HTTPS** in production
6. **Keep dependencies updated**: `npm audit fix`

## 📞 Support

For issues or questions:
- Email: info@utilwork.com
- Phone: +90 216 706 30 01

---

**Built with ❤️ by Utilwork**
