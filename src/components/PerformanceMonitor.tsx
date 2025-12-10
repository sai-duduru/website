import React, { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Report Web Vitals
      const reportWebVitals = (metric: any) => {
        console.log(metric);
        // You can send these metrics to your analytics service
      };

      // Monitor First Contentful Paint
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          reportWebVitals({
            name: 'FCP',
            value: entry.startTime,
          });
        }
      });

      observer.observe({ entryTypes: ['paint'] });

      // Monitor Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          reportWebVitals({
            name: 'LCP',
            value: entry.startTime,
          });
        }
      });

      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      return () => {
        observer.disconnect();
        lcpObserver.disconnect();
      };
    }
  }, []);

  return null;
};

export default PerformanceMonitor; 