'use client';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { useEffect, type FC, useState, useRef, useCallback } from 'react';

import { LineDottedFigure } from '../figures/LineDotted';

interface IComparisonSliderProps {
  topImg: StaticImageData;
  topImgAlt?: string;
  bottomImg: StaticImageData;
  bottomImgAlt?: string;
}

const ComparisonSlider: FC<IComparisonSliderProps> = ({
  topImg,
  bottomImg,
  topImgAlt = '',
  bottomImgAlt = '',
}) => {
  const [isResizing, setIsResizing] = useState(false);

  const topImageRef = useRef<HTMLImageElement>(null);
  const lineCompareRef = useRef<HTMLDivElement>(null);

  const setPositioning = useCallback((clientXPosition: number) => {
    if (!lineCompareRef.current || !topImageRef.current) return;

    const { left, width } =
      topImageRef.current.getBoundingClientRect() as DOMRect;
    const handleWidth = lineCompareRef.current.offsetWidth as number;

    if (clientXPosition >= left && clientXPosition <= width + left - handleWidth) {
      lineCompareRef.current.style.left = `${((clientXPosition - left) / width) * 100}%`;
      topImageRef.current.style.clipPath = `inset(0 ${
        100 - ((clientXPosition - left) / width) * 100
      }% 0 0)`;
    }
  }, []);

  const handleResize = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (e instanceof MouseEvent) {
        setPositioning(e.clientX);
      } else if (e instanceof TouchEvent) {
        e.preventDefault();
        setPositioning(e.touches[0].clientX);
      }
    },
    [setPositioning],
  );

  const handleResizeEnd = useCallback(() => {
    setIsResizing(false);
    window.removeEventListener('mousemove', handleResize);
    window.removeEventListener('touchmove', handleResize);
    window.removeEventListener('mouseup', handleResizeEnd);
    window.removeEventListener('touchend', handleResizeEnd);
  }, [handleResize]);

  useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', handleResize);
      window.addEventListener('touchmove', handleResize, { passive: false });
      window.addEventListener('mouseup', handleResizeEnd);
      window.addEventListener('touchend', handleResizeEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleResize);
      window.removeEventListener('touchmove', handleResize);
      window.removeEventListener('mouseup', handleResizeEnd);
      window.removeEventListener('touchend', handleResizeEnd);
    };
  }, [isResizing, handleResize, handleResizeEnd]);

  // Set initial positioning on component mount
  useEffect(() => {
    if (!lineCompareRef.current || !topImageRef.current) return;

    const { left, width } = topImageRef.current.getBoundingClientRect();
    const handleWidth = lineCompareRef.current.offsetWidth;

    setPositioning(width / 2 + left - handleWidth / 2);
  }, [setPositioning]);

  return (
    <div className="relative box-border h-[722px] w-full">
      <Image
        src={topImg}
        alt={bottomImgAlt}
        className="pointer-events-none absolute block h-full w-full select-none object-cover"
        draggable="false"
      />
      <Image
        src={bottomImg}
        alt={topImgAlt}
        className="pointer-events-none absolute block h-full w-full select-none object-cover"
        draggable="false"
        ref={topImageRef}
      />
      <div
        ref={lineCompareRef}
        className="absolute h-full w-[50px] cursor-col-resize"
        onMouseDown={() => setIsResizing(true)}
        onTouchStart={() => setIsResizing(true)}
      >
        <LineDottedFigure />
      </div>
    </div>
  );
};

export default ComparisonSlider;
