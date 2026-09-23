import React from 'react';
import { cn } from './utils';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  spacing?: 'default' | 'compact' | 'sm' | 'none';
  background?: 'default' | 'white' | 'muted' | 'subtle' | 'dark' | 'darker' | 'transparent';
  border?: 'none' | 'top' | 'bottom' | 'both';
  overflow?: 'visible' | 'hidden' | 'clip';
  ariaLabel?: string;
}

export default function Section({
  children,
  className = '',
  spacing = 'default',
  background = 'default',
  border = 'none',
  overflow = 'visible',
  ariaLabel,
  ...props
}: SectionProps) {
  const spacingStyles = {
    default: 'py-8 sm:py-10 lg:py-12',
    compact: 'py-5 sm:py-6',
    sm: 'py-5 sm:py-6',
    none: 'py-0',
  };

  const bgStyles = {
    default: 'bg-surface-bg',
    white: 'bg-surface-bg',
    muted: 'bg-surface-muted',
    subtle: 'bg-surface-white',
    dark: 'bg-surface-dark text-white',
    darker: 'bg-surface-darker text-white',
    transparent: 'bg-transparent',
  };

  const borderStyles = {
    none: '',
    top: 'border-t border-border-main',
    bottom: 'border-b border-border-main',
    both: 'border-y border-border-main',
  };

  const overflowStyles = {
    visible: '',
    hidden: 'overflow-hidden',
    clip: 'overflow-clip',
  };

  return (
    <section
      aria-label={ariaLabel || props['aria-label']}
      className={cn(
        'w-full relative',
        spacingStyles[spacing],
        bgStyles[background],
        borderStyles[border],
        overflowStyles[overflow],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
