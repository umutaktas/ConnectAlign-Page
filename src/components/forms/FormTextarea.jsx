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
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          {label}
          {required && <span className="text-red-400 ml-1" aria-label="required">*</span>}
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
          bg-[#16213e] border
          ${error ? 'border-red-400' : 'border-gray-600'}
          text-gray-200 placeholder-gray-500
          focus:outline-none focus:ring-2
          ${error ? 'focus:ring-red-400' : 'focus:ring-purple-500'}
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
            className="text-sm text-red-400"
            role="alert"
          >
            {error}
          </p>
        )}

        {showCharCount && (
          <p
            className={`text-sm ml-auto ${
              value.length > maxLength * 0.9 ? 'text-yellow-400' : 'text-gray-500'
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
