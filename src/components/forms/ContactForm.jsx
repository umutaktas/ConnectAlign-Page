import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import FormSelect from './FormSelect';
import { validateForm, demoFormFields, contactFormFields } from './formValidation';
import { sendEmail } from '@/services/emailService';
import { useToast } from '@/components/ui/use-toast';

/**
 * Reusable contact/demo form component
 * @param {string} formType - 'demo' or 'contact'
 * @param {string} language - 'tr' or 'en'
 * @param {Function} onSuccess - Callback on successful submission
 */
export default function ContactForm({ formType = 'demo', language = 'tr', onSuccess }) {
  const { toast } = useToast();
  const [formData, setFormData] = useState(getInitialFormData(formType));
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState({});
  const [gdprConsent, setGdprConsent] = useState(false);

  const translations = getTranslations(language);
  const employeeCountOptions = getEmployeeCountOptions(language);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  // Handle blur (for validation)
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));

    // Validate single field
    const fieldConfigs = formType === 'demo'
      ? demoFormFields(language)
      : contactFormFields(language);

    const config = fieldConfigs[name];
    if (config) {
      const { isValid, errors: fieldErrors } = validateForm(
        { [name]: formData[name] },
        { [name]: config },
        language
      );

      if (!isValid) {
        setErrors(prev => ({ ...prev, [name]: fieldErrors[name] }));
      }
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const fieldConfigs = formType === 'demo'
      ? demoFormFields(language)
      : contactFormFields(language);

    const { isValid, errors: validationErrors } = validateForm(
      formData,
      fieldConfigs,
      language
    );

    if (!isValid) {
      setErrors(validationErrors);
      // Mark all fields as touched
      const allTouched = Object.keys(fieldConfigs).reduce((acc, key) => {
        acc[key] = true;
        return acc;
      }, {});
      setTouched(allTouched);

      toast({
        title: translations.errorTitle,
        description: translations.validationError,
        variant: 'destructive',
      });
      return;
    }

    // Submit form
    setIsSubmitting(true);

    try {
      const result = await sendEmail({ ...formData, formType });

      if (result.success) {
        toast({
          title: translations.successTitle,
          description: translations.successMessage,
        });

        // Reset form
        setFormData(getInitialFormData(formType));
        setErrors({});
        setTouched({});
        setGdprConsent(false);

        // Call success callback
        if (onSuccess) {
          onSuccess();
        }
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: translations.errorTitle,
        description: error.message || translations.errorMessage,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Honeypot field (hidden spam protection) */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        style={{ display: 'none' }}
        tabIndex="-1"
        autoComplete="off"
        aria-hidden="true"
      />

      {/* Name */}
      <FormInput
        label={translations.name}
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.name ? errors.name : null}
        required
        placeholder={translations.namePlaceholder}
        disabled={isSubmitting}
        autoComplete="name"
      />

      {/* Email */}
      <FormInput
        label={translations.email}
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email ? errors.email : null}
        required
        placeholder={translations.emailPlaceholder}
        disabled={isSubmitting}
        autoComplete="email"
      />

      {/* Phone */}
      <FormInput
        label={translations.phone}
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.phone ? errors.phone : null}
        placeholder={translations.phonePlaceholder}
        disabled={isSubmitting}
        autoComplete="tel"
      />

      {/* Demo Form Fields */}
      {formType === 'demo' && (
        <>
          {/* Company */}
          <FormInput
            label={translations.company}
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.company ? errors.company : null}
            required
            placeholder={translations.companyPlaceholder}
            disabled={isSubmitting}
            autoComplete="organization"
          />

          {/* Position */}
          <FormInput
            label={translations.position}
            name="position"
            type="text"
            value={formData.position}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.position ? errors.position : null}
            placeholder={translations.positionPlaceholder}
            disabled={isSubmitting}
            autoComplete="organization-title"
          />

          {/* Employee Count */}
          <FormSelect
            label={translations.employeeCount}
            name="employeeCount"
            value={formData.employeeCount}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.employeeCount ? errors.employeeCount : null}
            options={employeeCountOptions}
            placeholder={translations.employeeCountPlaceholder}
            disabled={isSubmitting}
          />
        </>
      )}

      {/* Contact Form Fields */}
      {formType === 'contact' && (
        <FormInput
          label={translations.subject}
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.subject ? errors.subject : null}
          required
          placeholder={translations.subjectPlaceholder}
          disabled={isSubmitting}
        />
      )}

      {/* Message */}
      <FormTextarea
        label={translations.message}
        name="message"
        value={formData.message}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.message ? errors.message : null}
        required={formType === 'contact'}
        placeholder={translations.messagePlaceholder}
        disabled={isSubmitting}
        rows={6}
        maxLength={5000}
      />

      {/* GDPR Consent */}
      <div className="flex items-start gap-3 p-4 bg-[#16213e] rounded-lg border border-gray-700">
        <input
          type="checkbox"
          id="gdpr-consent"
          checked={gdprConsent}
          onChange={(e) => setGdprConsent(e.target.checked)}
          required
          disabled={isSubmitting}
          className="mt-1 w-4 h-4 rounded border-gray-600 bg-[#0f1729] text-blue-600 focus:ring-2 focus:ring-blue-500"
        />
        <label htmlFor="gdpr-consent" className="text-sm text-gray-400">
          {translations.gdprConsent}{' '}
          <a href="/kvkk" target="_blank" className="text-indigo-400 hover:text-indigo-300 underline">
            {translations.gdprLink}
          </a>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting || !gdprConsent}
        className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            {translations.submitting}
          </>
        ) : (
          <>
            {translations.submit}
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
}

// Helper functions

function getInitialFormData(formType) {
  const baseData = {
    name: '',
    email: '',
    phone: '',
    message: '',
    honeypot: '', // Spam protection
  };

  if (formType === 'demo') {
    return {
      ...baseData,
      company: '',
      position: '',
      employeeCount: '',
    };
  }

  if (formType === 'contact') {
    return {
      ...baseData,
      subject: '',
    };
  }

  return baseData;
}

function getTranslations(language) {
  const translations = {
    tr: {
      // Form fields
      name: 'İsim Soyisim',
      namePlaceholder: 'Adınız Soyadınız',
      email: 'E-posta',
      emailPlaceholder: 'ornek@sirket.com',
      phone: 'Telefon',
      phonePlaceholder: '+90 555 123 45 67',
      company: 'Şirket Adı',
      companyPlaceholder: 'Şirket adınız',
      position: 'Pozisyon',
      positionPlaceholder: 'Ör: İK Müdürü',
      employeeCount: 'Çalışan Sayısı',
      employeeCountPlaceholder: 'Seçiniz',
      subject: 'Konu',
      subjectPlaceholder: 'Mesajınızın konusu',
      message: 'Mesaj',
      messagePlaceholder: 'Mesajınızı buraya yazın...',
      // Actions
      submit: 'Gönder',
      submitting: 'Gönderiliyor...',
      // GDPR
      gdprConsent: 'Kişisel verilerimin işlenmesini kabul ediyorum.',
      gdprLink: 'KVKK Politikası',
      // Notifications
      successTitle: 'Başarılı!',
      successMessage: 'Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.',
      errorTitle: 'Hata!',
      errorMessage: 'Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.',
      validationError: 'Lütfen tüm zorunlu alanları doldurun.',
    },
    en: {
      // Form fields
      name: 'Full Name',
      namePlaceholder: 'Your full name',
      email: 'Email',
      emailPlaceholder: 'example@company.com',
      phone: 'Phone',
      phonePlaceholder: '+1 555 123 4567',
      company: 'Company Name',
      companyPlaceholder: 'Your company name',
      position: 'Position',
      positionPlaceholder: 'e.g., HR Manager',
      employeeCount: 'Employee Count',
      employeeCountPlaceholder: 'Select',
      subject: 'Subject',
      subjectPlaceholder: 'Subject of your message',
      message: 'Message',
      messagePlaceholder: 'Write your message here...',
      // Actions
      submit: 'Send',
      submitting: 'Sending...',
      // GDPR
      gdprConsent: 'I agree to the processing of my personal data.',
      gdprLink: 'Privacy Policy',
      // Notifications
      successTitle: 'Success!',
      successMessage: 'Your message has been sent successfully. We will contact you soon.',
      errorTitle: 'Error!',
      errorMessage: 'Failed to send message. Please try again later.',
      validationError: 'Please fill in all required fields.',
    },
  };

  return translations[language] || translations.tr;
}

function getEmployeeCountOptions(language) {
  const options = {
    tr: [
      { value: '1-10', label: '1-10 çalışan' },
      { value: '11-50', label: '11-50 çalışan' },
      { value: '51-200', label: '51-200 çalışan' },
      { value: '201-500', label: '201-500 çalışan' },
      { value: '501-1000', label: '501-1000 çalışan' },
      { value: '1000+', label: '1000+ çalışan' },
    ],
    en: [
      { value: '1-10', label: '1-10 employees' },
      { value: '11-50', label: '11-50 employees' },
      { value: '51-200', label: '51-200 employees' },
      { value: '201-500', label: '201-500 employees' },
      { value: '501-1000', label: '501-1000 employees' },
      { value: '1000+', label: '1000+ employees' },
    ],
  };

  return options[language] || options.tr;
}
