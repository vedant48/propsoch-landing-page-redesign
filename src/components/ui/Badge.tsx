import React from 'react';
import { cn } from './utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'muted' | 'neutral' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export default function Badge({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  ...props
}: BadgeProps) {
  const variantStyles = {
    primary: 'bg-primary/10 text-primary border-primary/25',
    muted: 'bg-surface-white text-text-muted border-border-main',
    neutral: 'bg-surface-bg text-text-main border-border-main shadow-2xs',
    success: 'bg-success/10 text-success border-success/25',
    warning: 'bg-warning/10 text-warning border-warning/25',
    error: 'bg-error/10 text-error border-error/25',
  };

  const sizeStyles = {
    sm: 'text-micro px-2 py-0.5 gap-1',
    md: 'text-badge px-2.5 py-1 gap-1.5',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border font-semibold tracking-normal select-none',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
}
