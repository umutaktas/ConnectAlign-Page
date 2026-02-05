/**
 * Form validation utilities
 */

export const validationRules = {
  required: (value, fieldName, lang = 'tr') => {
    if (!value || value.trim() === '') {
      return lang === 'tr'
        ? `${fieldName} zorunludur`
        : `${fieldName} is required`;
    }
    return null;
  },

  email: (value, fieldName, lang = 'tr') => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return lang === 'tr'
        ? 'Geçerli bir e-posta adresi girin'
        : 'Enter a valid email address';
    }
    return null;
  },

  phone: (value, fieldName, lang = 'tr') => {
    // Allow empty (optional field in most cases)
    if (!value || value.trim() === '') {
      return null;
    }
    const cleaned = value.replace(/[\s\-()]/g, '');
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    if (!phoneRegex.test(cleaned)) {
      return lang === 'tr'
        ? 'Geçerli bir telefon numarası girin'
        : 'Enter a valid phone number';
    }
    return null;
  },

  minLength: (value, minLength, fieldName, lang = 'tr') => {
    if (value && value.length < minLength) {
      return lang === 'tr'
        ? `${fieldName} en az ${minLength} karakter olmalıdır`
        : `${fieldName} must be at least ${minLength} characters`;
    }
    return null;
  },

  maxLength: (value, maxLength, fieldName, lang = 'tr') => {
    if (value && value.length > maxLength) {
      return lang === 'tr'
        ? `${fieldName} en fazla ${maxLength} karakter olabilir`
        : `${fieldName} must be at most ${maxLength} characters`;
    }
    return null;
  },
};

/**
 * Validate a single field
 */
export function validateField(value, rules, fieldName, lang = 'tr') {
  for (const rule of rules) {
    let error = null;

    if (rule.type === 'required') {
      error = validationRules.required(value, fieldName, lang);
    } else if (rule.type === 'email') {
      error = validationRules.email(value, fieldName, lang);
    } else if (rule.type === 'phone') {
      error = validationRules.phone(value, fieldName, lang);
    } else if (rule.type === 'minLength') {
      error = validationRules.minLength(value, rule.value, fieldName, lang);
    } else if (rule.type === 'maxLength') {
      error = validationRules.maxLength(value, rule.value, fieldName, lang);
    }

    if (error) {
      return error;
    }
  }

  return null;
}

/**
 * Validate all form fields
 */
export function validateForm(formData, fieldConfigs, lang = 'tr') {
  const errors = {};
  let isValid = true;

  for (const [fieldName, config] of Object.entries(fieldConfigs)) {
    const value = formData[fieldName];
    const error = validateField(value, config.rules, config.label, lang);

    if (error) {
      errors[fieldName] = error;
      isValid = false;
    }
  }

  return { isValid, errors };
}

/**
 * Demo form field configurations
 */
export const demoFormFields = (lang = 'tr') => ({
  name: {
    label: lang === 'tr' ? 'İsim Soyisim' : 'Full Name',
    rules: [
      { type: 'required' },
      { type: 'minLength', value: 2 },
    ],
  },
  email: {
    label: lang === 'tr' ? 'E-posta' : 'Email',
    rules: [
      { type: 'required' },
      { type: 'email' },
    ],
  },
  phone: {
    label: lang === 'tr' ? 'Telefon' : 'Phone',
    rules: [
      { type: 'phone' },
    ],
  },
  company: {
    label: lang === 'tr' ? 'Şirket Adı' : 'Company Name',
    rules: [
      { type: 'required' },
      { type: 'minLength', value: 2 },
    ],
  },
  position: {
    label: lang === 'tr' ? 'Pozisyon' : 'Position',
    rules: [],
  },
  employeeCount: {
    label: lang === 'tr' ? 'Çalışan Sayısı' : 'Employee Count',
    rules: [],
  },
  message: {
    label: lang === 'tr' ? 'Mesaj' : 'Message',
    rules: [
      { type: 'maxLength', value: 5000 },
    ],
  },
});

/**
 * Contact form field configurations
 */
export const contactFormFields = (lang = 'tr') => ({
  name: {
    label: lang === 'tr' ? 'İsim Soyisim' : 'Full Name',
    rules: [
      { type: 'required' },
      { type: 'minLength', value: 2 },
    ],
  },
  email: {
    label: lang === 'tr' ? 'E-posta' : 'Email',
    rules: [
      { type: 'required' },
      { type: 'email' },
    ],
  },
  phone: {
    label: lang === 'tr' ? 'Telefon' : 'Phone',
    rules: [
      { type: 'phone' },
    ],
  },
  subject: {
    label: lang === 'tr' ? 'Konu' : 'Subject',
    rules: [
      { type: 'required' },
      { type: 'minLength', value: 5 },
    ],
  },
  message: {
    label: lang === 'tr' ? 'Mesaj' : 'Message',
    rules: [
      { type: 'required' },
      { type: 'minLength', value: 10 },
      { type: 'maxLength', value: 5000 },
    ],
  },
});
