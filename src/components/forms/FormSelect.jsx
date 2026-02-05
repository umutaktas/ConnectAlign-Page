import React from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * Reusable form select component with validation
 */
export default function FormSelect({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  required = false,
  options = [],
  placeholder,
  disabled = false,
  className = '',
  ...props
}) {
  const selectId = `select-${name}`;

  return (
    <div className={`form-group ${className}`}>
      {label && (
        <label
          htmlFor={selectId}
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          {label}
          {required && <span className="text-red-400 ml-1" aria-label="required">*</span>}
        </label>
      )}

      <div className="relative">
        <select
          id={selectId}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          aria-label={label || name}
          aria-required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${selectId}-error` : undefined}
          className={`
            w-full px-4 py-3 rounded-lg
            bg-[#16213e] border
            ${error ? 'border-red-400' : 'border-gray-600'}
            text-gray-200
            focus:outline-none focus:ring-2
            ${error ? 'focus:ring-red-400' : 'focus:ring-purple-500'}
            transition-all duration-200
            disabled:opacity-50 disabled:cursor-not-allowed
            appearance-none cursor-pointer
            pr-10
          `}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {error && (
        <p
          id={`${selectId}-error`}
          className="mt-1 text-sm text-red-400"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
