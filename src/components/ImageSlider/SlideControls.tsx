import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideControlsProps {
  onPrevious: () => void;
  onNext: () => void;
}

export const SlideControls: React.FC<SlideControlsProps> = ({ onPrevious, onNext }) => {
  return (
    <>
      <button
        onClick={onPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
    </>
  );
};