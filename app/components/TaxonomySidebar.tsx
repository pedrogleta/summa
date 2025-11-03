'use client';

import { taxonomyData } from '../data/taxonomyData';
import TaxonomyTile from './TaxonomyTile';

export default function TaxonomySidebar() {
  return (
    <div className="w-[300px] border-r border-white/10 h-screen overflow-y-auto p-4">
      <h2 className="text-lg font-bold text-white mb-4">
        Knowledge Taxonomy
      </h2>
      <div>
        {taxonomyData.map((node, index) => (
          <TaxonomyTile key={index} node={node} level={0} />
        ))}
      </div>
    </div>
  );
}
