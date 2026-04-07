import React from 'react';

/**
 * Reusable form input component with validation
 */
export default function FormInput({
  label,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  required = false,
  placeholder,
  disabled = false,
  className = '',
  ...props
}) {
  const inputId = `input-${name}`;

  return (
    <div className={`form-group ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-on-surface-variant mb-2"
        >
          {label}
          {required && <span className="text-[#ff6f00] ml-1" aria-label="required">*</span>}
        </label>
      )}

      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        placeholder={placeholder}
        aria-label={label || name}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={`
          w-full px-4 py-3 rounded-lg
          bg-surface-container-high
          text-on-surface placeholder-on-surface-variant/60
          focus:outline-none
          ${error ? 'shadow-[inset_0_-2px_0_0_#dc2626]' : 'focus:shadow-[inset_0_-2px_0_0_#ff6f00]'}
          transition-all duration-200
          disabled:opacity-50 disabled:cursor-not-allowed
        `}
        {...props}
      />

      {error && (
        <p
          id={`${inputId}-error`}
          className="mt-1 text-sm text-red-600"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
