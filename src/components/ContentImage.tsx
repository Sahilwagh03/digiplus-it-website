'use client';

import Image from 'next/image';
import PlaceholderImage from './PlaceholderImage';

interface ContentImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  placeholderText?: string;
}

export default function ContentImage({ 
  src, 
  alt, 
  width, 
  height, 
  fill = false, 
  priority = false, 
  className = "",
  placeholderText = "Image"
}: ContentImageProps) {
  if (!src || !src.startsWith('/')) {
    return (
      <PlaceholderImage
        className={className}
      />
    );
  }

  return (
    <div className="relative">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        priority={priority}
        className={className}
        onError={(e) => {
          // Fallback to placeholder if image fails to load
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const placeholder = target.parentElement?.querySelector('.placeholder-fallback');
          if (placeholder) {
            (placeholder as HTMLElement).style.display = 'flex';
          }
        }}
      />
      <div className="placeholder-fallback hidden absolute inset-0">
        <PlaceholderImage
          className="w-full min-h-60"
        />
      </div>
    </div>
  );
} 