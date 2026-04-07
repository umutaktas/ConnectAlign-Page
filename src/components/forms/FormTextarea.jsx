import React from 'react';

/**
 * Reusable form textarea component with validation
 */
export default function FormTextarea({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  required = false,
  placeholder,
  disabled = false,
  rows = 4,
  maxLength,
  className = '',
  ...props
}) {
  const textareaId = `textarea-${name}`;
  const showCharCount = maxLength && value;

  return (
    <div className={`form-group ${className}`}>
      {label && (
        <label
          htmlFor={textareaId}
          className="block text-sm font-medium text-on-surface-variant mb-2"
        >
          {label}
          {required && <span className="text-[#ff6f00] ml-1" aria-label="required">*</span>}
        </label>
      )}

      <textarea
        id={textareaId}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        placeholder={placeholder}
        rows={rows}
        maxLength={maxLength}
        aria-label={label || name}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${textareaId}-error` : undefined}
        className={`
          w-full px-4 py-3 rounded-lg
          bg-surface-container-high
          text-on-surface placeholder-on-surface-variant/60
          focus:outline-none
          ${error ? 'shadow-[inset_0_-2px_0_0_#dc2626]' : 'focus:shadow-[inset_0_-2px_0_0_#ff6f00]'}
          transition-all duration-200
          disabled:opacity-50 disabled:cursor-not-allowed
          resize-vertical
        `}
        {...props}
      />

      <div className="flex justify-between items-center mt-1">
        {error && (
          <p
            id={`${textareaId}-error`}
            className="text-sm text-red-600"
            role="alert"
          >
            {error}
          </p>
        )}

        {showCharCount && (
          <p
            className={`text-sm ml-auto ${
              value.length > maxLength * 0.9 ? 'text-[#ff6f00]' : 'text-on-surface-variant'
            }`}
            aria-live="polite"
          >
            {value.length} / {maxLength}
          </p>
        )}
      </div>
    </div>
  );
}
