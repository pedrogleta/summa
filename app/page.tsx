'use client';

import { useState, useCallback } from 'react';
import TaxonomySidebar from './components/TaxonomySidebar';
import DependenciesSidebar from './components/DependenciesSidebar';
import ResizableHandle from './components/ResizableHandle';

const MIN_WIDTH = 250;
const MAX_WIDTH = 800;
const DEFAULT_WIDTH = 400;

export default function Home() {
  const [width, setWidth] = useState(DEFAULT_WIDTH);

  return (
    <div className="flex h-screen overflow-hidden">
      <TaxonomySidebar />
      <div className="flex h-screen">
        <div style={{ width: `${width}px`, flexShrink: 0 }}>
          <DependenciesSidebar />
        </div>
        <ResizableHandle width={width} onWidthChange={setWidth} />
      </div>
      <div className="flex-1 flex items-center justify-center text-white">
        Content area
      </div>
    </div>
  );
}
