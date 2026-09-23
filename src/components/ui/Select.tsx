'use client';

import React from 'react';
import { cn } from './utils';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  selectSize?: 'sm' | 'md' | 'lg';
}

export default function Select({
  label,
  error,
  selectSize = 'md',
  id,
  className = '',
  disabled,
  children,
  ...props
}: SelectProps) {
  const generatedId = React.useId();
  const selectId = id || generatedId;

  const sizeStyles = {
    sm: 'h-9 px-3 text-caption rounded-md',
    md: 'h-10 px-3.5 text-body rounded-md',
    lg: 'h-12 px-4 text-body rounded-lg',
  };

  return (
    <div className="w-full flex flex-col gap-1.5">
      {label && (
        <label htmlFor={selectId} className="text-label text-text-main font-medium">
          {label}
        </label>
      )}
      <div className="relative w-full">
        <select
          id={selectId}
          disabled={disabled}
          className={cn(
            'w-full bg-surface-bg border border-border-main text-text-main transition-all duration-150 outline-hidden focus:border-primary focus:ring-2 focus:ring-focus-ring disabled:opacity-50 disabled:bg-surface-white disabled:pointer-events-none appearance-none cursor-pointer pr-10',
            sizeStyles[selectSize],
            error ? 'border-error focus:border-error focus:ring-error/20' : '',
            className
          )}
          {...props}
        >
          {children}
        </select>
        <span className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-text-subtle">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </div>
      {error && <span className="text-micro text-error font-medium">{error}</span>}
    </div>
  );
}
