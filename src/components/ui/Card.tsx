import React from 'react';
import { cn } from './utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'feature' | 'compact' | 'highlight' | 'default' | 'subtle' | 'dark';
  padding?: 'sm' | 'md' | 'lg' | 'none';
  radius?: 'sm' | 'md' | 'lg' | 'xl';
  hoverEffect?: boolean;
  className?: string;
}

export default function Card({
  children,
  variant = 'feature',
  padding,
  radius,
  hoverEffect = false,
  className = '',
  ...props
}: CardProps) {
  const variantStyles = {
    feature: 'rounded-xl p-6 sm:p-8 bg-surface-white border border-border-main shadow-card',
    compact: 'rounded-lg p-5 bg-surface-white border border-border-main',
    highlight: 'rounded-xl p-6 sm:p-8 bg-primary-light border border-primary/20',
    default: 'rounded-xl p-6 sm:p-8 bg-surface-white border border-border-main shadow-card',
    subtle: 'rounded-lg p-5 bg-surface-white border border-border-main',
    dark: 'rounded-xl p-6 sm:p-8 bg-surface-dark border border-white/10 text-white shadow-card',
  };

  const paddingOverride = padding ? {
    none: 'p-0',
    sm: 'p-5',
    md: 'p-6 sm:p-8',
    lg: 'p-8 sm:p-10',
  }[padding] : '';

  const radiusOverride = radius ? {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
  }[radius] : '';

  return (
    <div
      className={cn(
        'overflow-hidden transition-all duration-200',
        variantStyles[variant],
        paddingOverride,
        radiusOverride,
        hoverEffect ? 'hover:shadow-card-hover hover:-translate-y-0.5' : '',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
