import { ReactNode } from 'react';

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  fallbackImage?: string;
  children: ReactNode;
  className?: string;
  overlayClassName?: string;
}

export function VideoBackground({ 
  src, 
  poster, 
  fallbackImage, 
  children, 
  className = '', 
  overlayClassName = 'bg-gradient-radial from-black/30 via-black/80 to-black' 
}: VideoBackgroundProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
          src={src}
          poster={poster}
          onError={(e) => {
            // Fallback to background image if video fails to load
            const target = e.target as HTMLVideoElement;
            const container = target.parentElement;
            if (container && fallbackImage) {
              target.style.display = 'none';
              container.style.backgroundImage = `url('${fallbackImage}')`;
              container.style.backgroundSize = 'cover';
              container.style.backgroundPosition = 'center';
              container.style.backgroundRepeat = 'no-repeat';
            }
          }}
        />
        <div className={`absolute inset-0 ${overlayClassName}`}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}