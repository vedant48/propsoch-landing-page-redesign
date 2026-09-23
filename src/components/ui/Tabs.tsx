'use client';

import React from 'react';
import { cn } from './utils';

export interface TabItem<T extends string = string> {
  id: T;
  label: React.ReactNode;
  count?: number | string;
}

export interface TabsProps<T extends string = string> {
  tabs: TabItem<T>[];
  activeTab: T;
  onChange: (id: T) => void;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  tabClassName?: string;
  ariaLabel?: string;
}

export default function Tabs<T extends string = string>({
  tabs,
  activeTab,
  onChange,
  size = 'md',
  fullWidth = false,
  className = '',
  tabClassName = '',
  ariaLabel,
}: TabsProps<T>) {
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-label rounded-md gap-1.5',
    md: 'px-4 sm:px-5 py-2 text-button rounded-lg gap-2',
    lg: 'px-6 sm:px-7 py-2.5 text-button rounded-lg gap-2.5',
  };

  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className={cn(
        'bg-[#f4f4f6] p-1 rounded-xl border border-border-main inline-flex items-center gap-1',
        fullWidth ? 'w-full flex' : 'w-fit',
        className
      )}
    >
      {tabs.map((tab) => {
        const isSelected = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isSelected}
            onClick={() => onChange(tab.id)}
            className={cn(
              'transition-all duration-200 cursor-pointer select-none inline-flex items-center justify-center whitespace-nowrap',
              sizeStyles[size],
              isSelected
                ? 'bg-surface-white text-primary shadow-xs font-semibold'
                : 'text-text-muted hover:text-text-main font-medium',
              fullWidth ? 'flex-1' : '',
              tabClassName
            )}
          >
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span
                className={cn(
                  'text-caption px-1.5 py-0.5 rounded-full font-medium transition-colors',
                  isSelected
                    ? 'bg-primary-light text-primary font-bold'
                    : 'bg-white/80 text-text-muted border border-border-main/50'
                )}
              >
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
