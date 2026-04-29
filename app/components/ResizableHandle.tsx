'use client';

import { useCallback, useRef } from 'react';

interface ResizableHandleProps {
  width: number;
  onWidthChange: (width: number) => void;
  minWidth?: number;
  maxWidth?: number;
}

export default function ResizableHandle({
  width,
  onWidthChange,
  minWidth = 250,
  maxWidth = 800,
}: ResizableHandleProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      const startX = e.clientX;
      const startWidth = width;

      const handleMouseMove = (moveEvent: MouseEvent) => {
        const newWidth = Math.max(
          minWidth,
          Math.min(maxWidth, startWidth + (moveEvent.clientX - startX))
        );
        onWidthChange(newWidth);
      };

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
    },
    [width, onWidthChange, minWidth, maxWidth]
  );

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      className="w-1 cursor-col-resize hover:bg-white/20 active:bg-white/30 transition-colors relative group"
    >
      <div className="absolute inset-y-0 -right-1 w-2" />
    </div>
  );
}
