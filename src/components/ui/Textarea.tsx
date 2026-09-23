'use client';

import React from 'react';
import { cn } from './utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export default function Textarea({
  label,
  error,
  id,
  className = '',
  disabled,
  rows = 3,
  ...props
}: TextareaProps) {
  const generatedId = React.useId();
  const textareaId = id || generatedId;

  return (
    <div className="w-full flex flex-col gap-1.5">
      {label && (
        <label htmlFor={textareaId} className="text-label text-text-main font-medium">
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        rows={rows}
        disabled={disabled}
        className={cn(
          'w-full bg-surface-bg border border-border-main text-text-main placeholder:text-text-subtle p-3 text-body rounded-md transition-all duration-150 outline-hidden focus:border-primary focus:ring-2 focus:ring-focus-ring disabled:opacity-50 disabled:bg-surface-white disabled:pointer-events-none resize-y',
          error ? 'border-error focus:border-error focus:ring-error/20' : '',
          className
        )}
        {...props}
      />
      {error && <span className="text-micro text-error font-medium">{error}</span>}
    </div>
  );
}
