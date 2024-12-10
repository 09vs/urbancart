import React from 'react';

interface SlideIndicatorsProps {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}

export const SlideIndicators: React.FC<SlideIndicatorsProps> = ({
  total,
  current,
  onSelect,
}) => {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            current === index ? 'bg-white w-4' : 'bg-white/50'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};