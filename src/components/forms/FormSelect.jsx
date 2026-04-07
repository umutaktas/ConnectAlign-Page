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
          className="block text-sm font-medium text-on-surface-variant mb-2"
        >
          {label}
          {required && <span className="text-[#ff6f00] ml-1" aria-label="required">*</span>}
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
            bg-surface-container-high
            text-on-surface
            focus:outline-none
            ${error ? 'shadow-[inset_0_-2px_0_0_#dc2626]' : 'focus:shadow-[inset_0_-2px_0_0_#ff6f00]'}
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
          className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {error && (
        <p
          id={`${selectId}-error`}
          className="mt-1 text-sm text-red-600"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
