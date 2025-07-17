import React, { useState } from 'react';

interface OptimizedProfileImageProps {
  src: string;
  alt: string;
  className?: string;
  size?: 'small' | 'medium' | 'large' | 'xl';
  lazy?: boolean;
}

/**
 * Componente optimizado para imágenes de perfil
 * Maneja automáticamente diferentes tamaños y formatos
 */
const OptimizedProfileImage: React.FC<OptimizedProfileImageProps> = ({
  src,
  alt,
  className = '',
  size = 'medium',
  lazy = true
}) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Mapeo de tamaños
  const sizeMap = {
    small: 'w-24 h-24 lg:w-32 lg:h-32',
    medium: 'w-40 h-40 lg:w-48 lg:h-48',
    large: 'w-48 h-48 lg:w-56 lg:h-56',
    xl: 'w-56 h-56 lg:w-64 lg:h-64'
  };

  // Generar srcset para diferentes densidades
  const generateSrcSet = (baseSrc: string) => {
    // Si es una imagen optimizada (webp), usar las versiones generadas
    if (baseSrc.includes('profile-photo') && !baseSrc.includes('optimized')) {
      const baseName = baseSrc.split('.')[0];
      const sizes = {
        small: `${baseName}-small.webp`,
        medium: `${baseName}-medium.webp`,
        large: `${baseName}-large.webp`,
        xl: `${baseName}-xl.webp`
      };
      
      return {
        webp: sizes[size],
        fallback: `${baseName}-optimized.jpg`
      };
    }
    
    return {
      webp: baseSrc,
      fallback: baseSrc
    };
  };

  const { webp, fallback } = generateSrcSet(src);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Loading skeleton */}
      {isLoading && (
        <div className={`${sizeMap[size]} bg-gradient-to-br from-gray-200 to-gray-300 rounded-full animate-pulse`}>
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        </div>
      )}

      {/* Picture element para mejor compatibilidad */}
      <picture className={isLoading ? 'invisible' : 'visible'}>
        {/* WebP para navegadores modernos */}
        <source srcSet={webp} type="image/webp" />
        
        {/* JPG como fallback */}
        <img
          src={imageError ? '/images/default-avatar.svg' : fallback}
          alt={alt}
          className={`
            ${sizeMap[size]} 
            object-cover 
            rounded-full 
            border-4 
            border-white 
            shadow-2xl 
            transition-all 
            duration-500 
            hover:scale-105 
            hover:shadow-3xl
            ${isLoading ? 'invisible' : 'visible'}
          `}
          loading={lazy ? 'lazy' : 'eager'}
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{
            aspectRatio: '1/1',
            objectPosition: 'center center'
          }}
        />
      </picture>

      {/* Error fallback */}
      {imageError && !isLoading && (
        <div className={`${sizeMap[size]} bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center border-4 border-white shadow-2xl`}>
          <svg className="w-1/2 h-1/2 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
      )}
    </div>
  );
};

export default OptimizedProfileImage;
