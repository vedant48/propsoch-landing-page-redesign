import React from 'react';
import { cn } from './utils';

export interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col mb-6 sm:mb-8',
        align === 'center' ? 'items-center text-center mx-auto max-w-[680px]' : 'items-start text-left max-w-[680px]',
        className
      )}
    >
      {eyebrow && (
        <span className="text-eyebrow uppercase text-primary font-bold tracking-[0.12em] block">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 text-h2 text-text-main font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-2.5 text-body-lg text-text-muted font-normal leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
