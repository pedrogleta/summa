'use client';

import { taxonomyData } from '../data/taxonomyData';
import TaxonomyTile from './TaxonomyTile';

export default function TaxonomySidebar() {
  return (
    <div
      style={{
        width: '300px',
        borderRight: '1px solid rgba(255, 255, 255, 0.1)',
        height: '100vh',
        overflowY: 'auto',
        padding: '16px',
      }}
    >
      <h2
        style={{
          fontSize: '18px',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '16px',
        }}
      >
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
