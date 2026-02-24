/**
 * Email Service using backend API
 * Backend server: backend/server.js (Express + Nodemailer)
 */

const API_URL = import.meta.env.DEV
  ? 'http://localhost:3001'
  : 'https://connectalign.com';

/**
 * Send email via backend API
 * @param {Object} formData - Form data to send
 * @param {string} formData.name - Sender name
 * @param {string} formData.email - Sender email
 * @param {string} formData.formType - Type of form (demo/contact)
 * @returns {Promise<{success: boolean, message: string}>}
 */
export async function sendEmail(formData) {
  try {
    // Check honeypot (spam protection)
    if (formData.honeypot) {
      console.warn('Spam detected (honeypot filled)');
      // Return success to prevent spam bots from knowing they were caught
      return { success: true, message: 'Email sent successfully' };
    }

    const endpoint = '/api/connectalign/send';

    // Prepare request data
    const requestData = {
      formType: formData.formType,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    // Add form-specific fields
    if (formData.formType === 'demo') {
      requestData.company = formData.company;
      requestData.employees = formData.employeeCount;
    } else if (formData.formType === 'contact') {
      requestData.subject = formData.subject;
    }

    // Make API request
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    const result = text ? JSON.parse(text) : {};

    if (result.success) {
      return {
        success: true,
        message: 'Email sent successfully',
        messageId: result.messageId,
      };
    } else {
      throw new Error(result.message || 'Failed to send email');
    }
  } catch (error) {
    console.error('Email service error:', error);
    return {
      success: false,
      message: error.message || 'An error occurred while sending the email',
    };
  }
}

/**
 * Validate email format
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number (international format)
 */
export function isValidPhone(phone) {
  // Remove spaces, dashes, parentheses
  const cleaned = phone.replace(/[\s\-()]/g, '');
  // Check if it's a valid international number (10-15 digits, optionally starting with +)
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  return phoneRegex.test(cleaned);
}
