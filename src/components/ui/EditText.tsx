'use client';
import React, { useState } from 'react';

interface EditTextProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'email' | 'number' | 'tel' | 'url';
  disabled?: boolean;
  required?: boolean;
  className?: string;
  error?: string;
  label?: string;
  maxLength?: number;
  minLength?: number;
  autoComplete?: string;
  name?: string;
  id?: string;
}

const EditText: React.FC<EditTextProps & React.InputHTMLAttributes<HTMLInputElement>> = ({
  placeholder = '',
  value,
  onChange,
  type = 'text',
  disabled = false,
  required = false,
  className = '',
  error,
  label,
  maxLength,
  minLength,
  autoComplete,
  name,
  id,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const baseClasses = `
    w-full
    px-[14px] py-[14px]
    text-[11px] sm:text-xs md:text-sm
    leading-[15px] sm:leading-4 md:leading-5
    font-normal
    font-montserrat
    text-edittext-1
    bg-global-14
    border-2 border-global-14
    rounded-[6px] sm:rounded-md
    transition-all
    duration-200
    ease-in-out
    focus:outline-none
    focus:ring-2
    focus:ring-button-1
    focus:ring-opacity-50
    focus:border-button-1
    placeholder:text-edittext-1
    placeholder:opacity-75
    min-h-[44px] sm:min-h-[48px]
    touch-manipulation
  `;

  const stateClasses = `
    ${disabled ? 'opacity-50 cursor-not-allowed bg-global-13' : 'hover:border-global-13'}
    ${error ? 'border-global-9 focus:border-global-9 focus:ring-global-9' : ''}
    ${isFocused ? 'border-button-1' : ''}
  `;

  return (
    <div className="w-full">
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-medium text-global-8 mb-2"
        >
          {label}
          {required && <span className="text-global-9 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        maxLength={maxLength}
        minLength={minLength}
        autoComplete={autoComplete}
        className={`${baseClasses} ${stateClasses} ${className}`.trim().replace(/\s+/g, ' ')}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && (
        <p 
          id={`${id}-error`} 
          className="mt-1 text-xs text-global-9"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default EditText;