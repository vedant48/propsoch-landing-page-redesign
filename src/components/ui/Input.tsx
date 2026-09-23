'use client';

import React from 'react';
import { cn } from './utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  inputSize?: 'sm' | 'md' | 'lg';
}

export default function Input({
  label,
  error,
  icon,
  inputSize = 'md',
  id,
  className = '',
  disabled,
  ...props
}: InputProps) {
  const generatedId = React.useId();
  const inputId = id || generatedId;

  const sizeStyles = {
    sm: 'h-9 px-3 text-caption rounded-md',
    md: 'h-10 px-3.5 text-body rounded-md',
    lg: 'h-12 px-4 text-body rounded-lg',
  };

  return (
    <div className="w-full flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-label text-text-main font-medium">
          {label}
        </label>
      )}
      <div className="relative flex items-center w-full">
        {icon && (
          <span className="absolute left-3.5 text-text-subtle pointer-events-none shrink-0 flex items-center justify-center">
            {icon}
          </span>
        )}
        <input
          id={inputId}
          disabled={disabled}
          className={cn(
            'w-full bg-surface-bg border border-border-main text-text-main placeholder:text-text-subtle transition-all duration-150 outline-hidden focus:border-primary focus:ring-2 focus:ring-focus-ring disabled:opacity-50 disabled:bg-surface-white disabled:pointer-events-none',
            icon ? 'pl-10' : '',
            sizeStyles[inputSize],
            error ? 'border-error focus:border-error focus:ring-error/20' : '',
            className
          )}
          {...props}
        />
      </div>
      {error && <span className="text-micro text-error font-medium">{error}</span>}
    </div>
  );
}
