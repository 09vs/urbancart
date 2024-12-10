import React, { useState, useCallback, useEffect } from 'react';
import { SlideControls } from './SlideControls';
import { SlideContent } from './SlideContent';
import { SlideIndicators } from './SlideIndicators';
import { sliderData } from './SliderData';

export const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((current) => (current + 1) % sliderData.length);
  }, []);

  const previousSlide = useCallback(() => {
    setCurrentIndex((current) => 
      current === 0 ? sliderData.length - 1 : current - 1
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      <div
        className="h-full transition-transform duration-500 ease-out flex"
        style={{
          width: `${sliderData.length * 100}%`,
          transform: `translateX(-${(currentIndex * 100) / sliderData.length}%)`,
        }}
      >
        {sliderData.map((slide) => (
          <div
            key={slide.id}
            className="h-full"
            style={{ width: `${100 / sliderData.length}%` }}
          >
            <SlideContent slide={slide} />
          </div>
        ))}
      </div>

      <SlideControls
        onPrevious={previousSlide}
        onNext={nextSlide}
      />

      <SlideIndicators
        total={sliderData.length}
        current={currentIndex}
        onSelect={setCurrentIndex}
      />
    </div>
  );
};