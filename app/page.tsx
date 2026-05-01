'use client';

import { useState } from 'react';
import TaxonomySidebar from './components/TaxonomySidebar';
import DependenciesSidebar from './components/DependenciesSidebar';
import ResizableHandle from './components/ResizableHandle';
import ConceptExplanation from './components/ConceptExplanation';
import { TaxonomyProvider } from './context/TaxonomyContext';

const MIN_TAXONOMY_WIDTH = 150;
const DEFAULT_TAXONOMY_WIDTH = 300;
const MIN_WIDTH = 250;
const MAX_WIDTH = 800;
const DEFAULT_WIDTH = 400;

export default function Home() {
  const [taxonomyWidth, setTaxonomyWidth] = useState(DEFAULT_TAXONOMY_WIDTH);
  const [width, setWidth] = useState(DEFAULT_WIDTH);
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);

  return (
    <TaxonomyProvider>
      <div className="flex h-screen overflow-hidden">
        <div className="flex h-screen overflow-hidden" style={{ width: `${taxonomyWidth}px` }}>
          <div className="flex h-screen w-full">
            <TaxonomySidebar onSelect={setSelectedTerm} />
          </div>
        </div>
        <ResizableHandle
          width={taxonomyWidth}
          onWidthChange={setTaxonomyWidth}
          lockEdge="ltr"
          minWidth={MIN_TAXONOMY_WIDTH}
          maxWidth={Infinity}
          activeZoneOffset={4}
          activeZoneSize={8}
        />
        <div className="w-2 flex-shrink-0" />
        <div className="flex h-screen">
          <div style={{ width: `${width}px`, flexShrink: 0 }}>
            <DependenciesSidebar />
          </div>
          <ResizableHandle
            width={width}
            onWidthChange={setWidth}
            lockEdge="ltr"
            minWidth={MIN_WIDTH}
            maxWidth={MAX_WIDTH}
            activeZoneOffset={4}
            activeZoneSize={8}
          />
        </div>
        <div className="flex-1 flex flex-col overflow-hidden">
          <ConceptExplanation selectedTerm={selectedTerm} />
        </div>
      </div>
    </TaxonomyProvider>
  );
}
