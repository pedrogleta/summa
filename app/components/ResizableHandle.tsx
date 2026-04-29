'use client';

import { useCallback, useRef } from 'react';

interface ResizableHandleProps {
  width: number;
  onWidthChange: (width: number) => void;
  /** Which edge stays locked during drag */
  lockEdge?: 'ltr' | 'rtl';
  minWidth?: number;
  maxWidth?: number;
  /** How far beyond the visible strip the active zone extends (from the locked side) */
  activeZoneOffset?: number;
  /** Size of the active zone */
  activeZoneSize?: number;
}

export default function ResizableHandle({
  width,
  onWidthChange,
  lockEdge,
  minWidth = 150,
  maxWidth = 1200,
  activeZoneOffset = 8,
  activeZoneSize = 12,
}: ResizableHandleProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      const startX = e.clientX;
      const startWidth = width;

      const handleMouseMove = (moveEvent: MouseEvent) => {
        const delta = moveEvent.clientX - startX;
        const newWidth = lockEdge === 'rtl'
          ? Math.max(minWidth, Math.min(maxWidth, startWidth - delta))
          : Math.max(minWidth, Math.min(maxWidth, startWidth + delta));
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
    [width, onWidthChange, lockEdge, minWidth, maxWidth]
  );

  const zoneStyle =
    lockEdge === 'rtl'
      ? { right: `-${activeZoneOffset}px`, width: `${activeZoneSize}px` }
      : { left: `-${activeZoneOffset}px`, width: `${activeZoneSize}px` };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      className="w-1 cursor-col-resize hover:bg-white/20 active:bg-white/30 transition-colors relative group"
    >
      <div className="absolute inset-y-0 bg-transparent" style={zoneStyle} />
    </div>
  );
}
