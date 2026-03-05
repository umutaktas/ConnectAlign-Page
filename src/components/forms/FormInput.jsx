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
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          {label}
          {required && <span className="text-red-400 ml-1" aria-label="required">*</span>}
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
          bg-[#16213e] border
          ${error ? 'border-red-400' : 'border-gray-600'}
          text-gray-200 placeholder-gray-500
          focus:outline-none focus:ring-2
          ${error ? 'focus:ring-red-400' : 'focus:ring-blue-500'}
          transition-all duration-200
          disabled:opacity-50 disabled:cursor-not-allowed
        `}
        {...props}
      />

      {error && (
        <p
          id={`${inputId}-error`}
          className="mt-1 text-sm text-red-400"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
