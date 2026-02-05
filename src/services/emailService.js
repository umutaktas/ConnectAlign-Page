/**
 * Email Service using Web3Forms API
 * Documentation: https://docs.web3forms.com
 */

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

/**
 * Send email via Web3Forms API
 * @param {Object} formData - Form data to send
 * @param {string} formData.name - Sender name
 * @param {string} formData.email - Sender email
 * @param {string} formData.formType - Type of form (demo/contact)
 * @param {Object} additionalFields - Additional form fields
 * @returns {Promise<{success: boolean, message: string}>}
 */
export async function sendEmail(formData) {
  try {
    // Validate required environment variables
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    const recipientEmail = import.meta.env.VITE_CONTACT_EMAIL;

    if (!accessKey || accessKey === 'your-web3forms-access-key-here') {
      throw new Error('Web3Forms access key not configured. Please set VITE_WEB3FORMS_ACCESS_KEY in .env file.');
    }

    if (!recipientEmail) {
      throw new Error('Contact email not configured. Please set VITE_CONTACT_EMAIL in .env file.');
    }

    // Check honeypot (spam protection)
    if (formData.honeypot) {
      console.warn('Spam detected (honeypot filled)');
      // Return success to prevent spam bots from knowing they were caught
      return { success: true, message: 'Email sent successfully' };
    }

    // Prepare submission data
    const submissionData = {
      access_key: accessKey,
      from_name: formData.name,
      email: formData.email,
      subject: getEmailSubject(formData),
      message: formatEmailMessage(formData),
      // Web3Forms metadata
      replyto: formData.email,
      from_email: recipientEmail,
      to_email: recipientEmail,
    };

    // Make API request
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(submissionData),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      return {
        success: true,
        message: 'Email sent successfully',
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
 * Generate email subject based on form type
 */
function getEmailSubject(formData) {
  const formTypeLabels = {
    demo: 'Demo Request',
    contact: 'Contact Form Submission',
  };

  const baseSubject = formTypeLabels[formData.formType] || 'Form Submission';

  // Add company name for demo forms
  if (formData.formType === 'demo' && formData.company) {
    return `${baseSubject} - ${formData.company}`;
  }

  // Add subject for contact forms
  if (formData.formType === 'contact' && formData.subject) {
    return `${baseSubject} - ${formData.subject}`;
  }

  return baseSubject;
}

/**
 * Format email message body based on form type
 */
function formatEmailMessage(formData) {
  const { formType } = formData;

  if (formType === 'demo') {
    return formatDemoMessage(formData);
  } else if (formType === 'contact') {
    return formatContactMessage(formData);
  }

  return JSON.stringify(formData, null, 2);
}

/**
 * Format demo form message
 */
function formatDemoMessage(formData) {
  const lines = [
    '=== DEMO REQUEST ===',
    '',
    `Name: ${formData.name}`,
    `Email: ${formData.email}`,
  ];

  if (formData.phone) {
    lines.push(`Phone: ${formData.phone}`);
  }

  if (formData.company) {
    lines.push(`Company: ${formData.company}`);
  }

  if (formData.position) {
    lines.push(`Position: ${formData.position}`);
  }

  if (formData.employeeCount) {
    lines.push(`Employee Count: ${formData.employeeCount}`);
  }

  if (formData.message) {
    lines.push('', '--- Message ---', formData.message);
  }

  lines.push('', `Submitted at: ${new Date().toLocaleString()}`);

  return lines.join('\n');
}

/**
 * Format contact form message
 */
function formatContactMessage(formData) {
  const lines = [
    '=== CONTACT FORM ===',
    '',
    `Name: ${formData.name}`,
    `Email: ${formData.email}`,
  ];

  if (formData.phone) {
    lines.push(`Phone: ${formData.phone}`);
  }

  if (formData.subject) {
    lines.push(`Subject: ${formData.subject}`);
  }

  if (formData.message) {
    lines.push('', '--- Message ---', formData.message);
  }

  lines.push('', `Submitted at: ${new Date().toLocaleString()}`);

  return lines.join('\n');
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
