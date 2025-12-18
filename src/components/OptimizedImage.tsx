import React from 'react';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

interface OptimizedImageProps {
  image: any;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  image, 
  alt, 
  className = '', 
  loading = 'lazy' 
}) => {
  const gatsbyImage = getImage(image);
  
  if (!gatsbyImage) {
    return null;
  }

  return (
    <GatsbyImage
      image={gatsbyImage}
      alt={alt}
      className={className}
      loading={loading}
      formats={['auto', 'webp', 'avif']}
      quality={90}
    />
  );
};

export default OptimizedImage; 