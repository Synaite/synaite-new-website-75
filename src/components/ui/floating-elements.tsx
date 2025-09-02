import React from 'react';
import { cn } from '@/lib/utils';

interface FloatingElementsProps {
  count?: number;
  className?: string;
}

const FloatingElements = ({ count = 5, className }: FloatingElementsProps) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "absolute rounded-full bg-gradient-to-r from-pulse-500/20 to-pulse-300/20 blur-xl",
            i % 3 === 0 && "animate-float",
            i % 3 === 1 && "animate-float-gentle",
            i % 3 === 2 && "animate-pulse-slow"
          )}
          style={{
            width: `${Math.random() * 200 + 50}px`,
            height: `${Math.random() * 200 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 10 + 5}s`,
          }}
        />
      ))}
    </div>
  );
};

export { FloatingElements };