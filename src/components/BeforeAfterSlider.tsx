'use client';

import { useState, useRef, useCallback, useEffect, ReactNode } from 'react';

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  before?: ReactNode;
  after?: ReactNode;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  before,
  after,
  beforeLabel = 'قبل',
  afterLabel = 'بعد',
  className = '',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setIsDragging(true);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      setIsDragging(true);
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      updatePosition(e.touches[0].clientX);
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, updatePosition]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-2xl cursor-col-resize select-none group border border-white/10 shadow-xl ${className}`}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      role="slider"
      aria-label="مقارنة قبل وبعد"
      aria-valuenow={Math.round(sliderPosition)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') setSliderPosition((p) => Math.max(p - 2, 0));
        if (e.key === 'ArrowRight') setSliderPosition((p) => Math.min(p + 2, 100));
      }}
    >
      {/* After Layer (Full base) */}
      <div className="absolute inset-0 w-full h-full">
        {after ? (
          after
        ) : afterImage ? (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${afterImage})` }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-emerald-800 to-teal-900 flex items-center justify-center text-white font-bold">
            بعد
          </div>
        )}
      </div>

      {/* After Label */}
      <span className="absolute top-4 left-4 bg-[#D4A843] text-[#0a1628] text-xs font-black px-3.5 py-1.5 rounded-full z-10 pointer-events-none shadow-md">
        {afterLabel}
      </span>

      {/* Before Layer (Clipped to sliderPosition from left) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{
          clipPath: `polygon(0% 0%, ${sliderPosition}% 0%, ${sliderPosition}% 100%, 0% 100%)`,
        }}
      >
        {before ? (
          before
        ) : beforeImage ? (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${beforeImage})` }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-white font-bold">
            قبل
          </div>
        )}
      </div>

      {/* Before Label */}
      <span className="absolute top-4 right-4 bg-[#0a1628]/90 text-white text-xs font-bold px-3.5 py-1.5 rounded-full z-10 pointer-events-none border border-white/20 shadow-md">
        {beforeLabel}
      </span>

      {/* Divider Bar & Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white z-20 pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#D4A843] text-[#0a1628] shadow-2xl flex items-center justify-center border-2 border-white pointer-events-none">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z M15.41 7.41L10.83 12l4.58 4.59L14 18l-6-6 6-6 1.41 1.41z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
