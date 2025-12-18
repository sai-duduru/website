import React from 'react';
import { dotPulse } from 'ldrs';

const LoadingSpinner: React.FC = () => {
  React.useEffect(() => {
    dotPulse.register();
  }, []);

  return (
    <div className="loading-spinner">
      <l-dot-pulse
        size="43"
        speed="1.3"
        color="black"
      ></l-dot-pulse>
    </div>
  );
};

export default LoadingSpinner; 