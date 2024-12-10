import React from 'react';
import { SlideImage } from './SliderData';

interface SlideContentProps {
  slide: SlideImage;
}

export const SlideContent: React.FC<SlideContentProps> = ({ slide }) => {
  return (
    <div className="relative h-full w-full">
      <img
        src={slide.url}
        alt={slide.title}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-4xl sm:text-5xl font-light text-white mb-4">
              {slide.title}
            </h2>
            <p className="text-lg sm:text-xl text-white/90 hidden sm:block">
              {slide.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};