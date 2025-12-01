'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function usePerformanceMonitoring() {
  useEffect(() => {
    // Monitor Web Vitals for performance tracking
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Track page load time
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navigationEntry = entry as PerformanceNavigationTiming;
            console.log('Page Load Time:', navigationEntry.loadEventEnd - navigationEntry.fetchStart);
          }
        });
      });

      observer.observe({ entryTypes: ['navigation'] });

      // Cleanup
      return () => observer.disconnect();
    }
  }, []);
}

// Component to add to layout for monitoring
export default function PerformanceMonitor() {
  usePerformanceMonitoring();
  return null;
}