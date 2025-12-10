import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import LoadingSpinner from './LoadingSpinner';
import PerformanceMonitor from './PerformanceMonitor';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <PerformanceMonitor />
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Helmet>
      <Suspense fallback={<LoadingSpinner />}>
        {children}
      </Suspense>
    </>
  );
};

export default Layout; 