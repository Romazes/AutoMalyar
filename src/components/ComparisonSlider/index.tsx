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
    // take half width of interactive line to calculate start of comparison in a right way
    const handleWidth = lineCompareRef.current.offsetWidth / 2;

    if (
      clientXPosition >= left + handleWidth &&
      clientXPosition <= width + left - handleWidth
    ) {
      lineCompareRef.current.style.left = `${
        ((clientXPosition - left - handleWidth) / width) * 100
      }%`;
      topImageRef.current.style.clipPath = `inset(0 ${
        100 - ((clientXPosition - left) / width) * 100
      }% 0 0)`;
    }
  }, []);

  const handleResize = useCallback(
    (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      if (e instanceof MouseEvent) {
        setPositioning(e.clientX);
      } else if (e instanceof TouchEvent) {
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
      window.addEventListener('mousemove', handleResize, { passive: false });
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
    <div className="relative ml-auto box-border h-[520px] w-[340px] overflow-hidden lg:h-[722px] lg:w-[470px]">
      <Image
        src={topImg}
        alt={bottomImgAlt}
        className="pointer-events-none absolute block h-full w-full object-cover"
        draggable="false"
        placeholder="blur"
      />
      <Image
        src={bottomImg}
        alt={topImgAlt}
        className="pointer-events-none absolute block h-full w-full object-cover"
        draggable="false"
        ref={topImageRef}
        placeholder="blur"
      />
      <div
        ref={lineCompareRef}
        className="absolute h-full cursor-col-resize"
        onMouseDown={() => setIsResizing(true)}
        onTouchStart={() => setIsResizing(true)}
      >
        <LineDottedFigure className="h-[520px] lg:h-[722px]" />
      </div>
    </div>
  );
};

export default ComparisonSlider;
