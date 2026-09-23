'use client';

import React from 'react';
import { cn } from './utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'dark' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export default function Button({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  leftIcon,
  rightIcon,
  disabled,
  ...props
}: ButtonProps) {
  const variantStyles = {
    primary: 'bg-primary hover:bg-primary-hover text-white shadow-card focus-visible:ring-2 focus-visible:ring-primary/20 active:brightness-95',
    secondary: 'bg-surface-white hover:bg-border-main text-text-main focus-visible:ring-2 focus-visible:ring-primary/20 active:bg-border-main',
    outline: 'border border-border-main hover:border-primary text-text-main hover:text-primary bg-surface-white focus-visible:ring-2 focus-visible:ring-primary/20 active:bg-surface-white',
    dark: 'bg-surface-dark hover:bg-text-main text-white focus-visible:ring-2 focus-visible:ring-primary/20 active:bg-surface-darker',
    ghost: 'text-text-main hover:text-primary hover:bg-surface-white focus-visible:ring-2 focus-visible:ring-primary/20 active:bg-border-main/50',
    white: 'bg-surface-white hover:bg-surface-white text-text-main shadow-card focus-visible:ring-2 focus-visible:ring-primary/20 active:brightness-95',
  };

  const sizeStyles = {
    sm: 'h-8 px-3 text-label rounded-sm gap-1.5',
    md: 'h-10 px-4 text-btn rounded-md gap-2',
    lg: 'h-12 px-6 text-btn rounded-md gap-2.5',
  };

  return (
    <button
      disabled={disabled}
      className={cn(
        'inline-flex items-center justify-center font-medium transition-all duration-150 cursor-pointer disabled:opacity-50 disabled:pointer-events-none select-none outline-hidden focus-visible:outline-hidden',
        variantStyles[variant],
        sizeStyles[size],
        fullWidth ? 'w-full' : '',
        className
      )}
      {...props}
    >
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
}
