import React from 'react';
import { cn } from './utils';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  variant?: 'hero' | 'page-title' | 'header' | 'subheader' | 'card-title';
  className?: string;
  children: React.ReactNode;
}

export default function Heading({
  as: Component = 'h2',
  variant = 'header',
  className = '',
  children,
  ...props
}: HeadingProps) {
  const variantStyles = {
    hero: 'text-hero font-normal text-text-main leading-tight tracking-tight',
    'page-title': 'text-page-title font-semibold text-text-main leading-tight tracking-tight',
    header: 'text-header font-normal text-text-main leading-tight tracking-tight',
    subheader: 'text-subheader font-light text-text-muted leading-relaxed',
    'card-title': 'text-card-title font-semibold text-text-main leading-snug',
  };

  return (
    <Component className={cn(variantStyles[variant], className)} {...props}>
      {children}
    </Component>
  );
}
