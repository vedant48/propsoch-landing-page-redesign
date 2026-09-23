import React from 'react';
import { cn } from './utils';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'main' | 'wide' | 'narrow' | 'compact' | 'full';
}

export default function Container({
  children,
  className = '',
  size = 'default',
  ...props
}: ContainerProps) {
  const sizeStyles = {
    default: 'max-w-[1200px]',
    main: 'max-w-[1200px]',
    wide: 'max-w-[1280px]',
    narrow: 'max-w-[680px]',
    compact: 'max-w-[560px]',
    full: 'max-w-full',
  };

  return (
    <div
      className={cn('mx-auto px-4 sm:px-6 lg:px-0 w-full', sizeStyles[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}
