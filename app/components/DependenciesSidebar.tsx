'use client';

import { useCallback } from 'react';
import {
  ReactFlow,
  Node,
  Edge,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Parse the DAG from docs/dag-example.md
// Algebra -> Functions
// Functions -> Limits
// Limits -> Derivatives
// Limits -> L'Hôpital's Rule
// Derivatives -> L'Hôpital's Rule

const initialNodes: Node[] = [
  {
    id: 'algebra',
    type: 'default',
    position: { x: 100, y: 0 },
    data: { label: 'Algebra' },
    style: {
      background: '#1a1a1a',
      color: '#ffffff',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '8px',
      padding: '10px',
      fontSize: '14px',
    },
  },
  {
    id: 'functions',
    type: 'default',
    position: { x: 100, y: 100 },
    data: { label: 'Functions' },
    style: {
      background: '#1a1a1a',
      color: '#ffffff',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '8px',
      padding: '10px',
      fontSize: '14px',
    },
  },
  {
    id: 'limits',
    type: 'default',
    position: { x: 100, y: 200 },
    data: { label: 'Limits' },
    style: {
      background: '#1a1a1a',
      color: '#ffffff',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '8px',
      padding: '10px',
      fontSize: '14px',
    },
  },
  {
    id: 'derivatives',
    type: 'default',
    position: { x: 50, y: 300 },
    data: { label: 'Derivatives' },
    style: {
      background: '#1a1a1a',
      color: '#ffffff',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '8px',
      padding: '10px',
      fontSize: '14px',
    },
  },
  {
    id: 'lhopitals-rule',
    type: 'default',
    position: { x: 150, y: 300 },
    data: { label: "L'Hôpital's Rule" },
    style: {
      background: '#1a1a1a',
      color: '#ffffff',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '8px',
      padding: '10px',
      fontSize: '14px',
    },
  },
];

const initialEdges: Edge[] = [
  {
    id: 'algebra-functions',
    source: 'algebra',
    target: 'functions',
    style: { stroke: 'rgba(255, 255, 255, 0.3)', strokeWidth: 2 },
    animated: false,
  },
  {
    id: 'functions-limits',
    source: 'functions',
    target: 'limits',
    style: { stroke: 'rgba(255, 255, 255, 0.3)', strokeWidth: 2 },
    animated: false,
  },
  {
    id: 'limits-derivatives',
    source: 'limits',
    target: 'derivatives',
    style: { stroke: 'rgba(255, 255, 255, 0.3)', strokeWidth: 2 },
    animated: false,
  },
  {
    id: 'limits-lhopitals',
    source: 'limits',
    target: 'lhopitals-rule',
    style: { stroke: 'rgba(255, 255, 255, 0.3)', strokeWidth: 2 },
    animated: false,
  },
  {
    id: 'derivatives-lhopitals',
    source: 'derivatives',
    target: 'lhopitals-rule',
    style: { stroke: 'rgba(255, 255, 255, 0.3)', strokeWidth: 2 },
    animated: false,
  },
];

export default function DependenciesSidebar() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="w-[300px] border-r border-white/10 h-screen overflow-hidden">
      <div className="p-4 border-b border-white/10">
        <h2 className="text-lg font-bold text-white">
          Learning Dependencies
        </h2>
        <p className="text-xs text-white/60 mt-1">
          L&apos;Hôpital&apos;s Rule
        </p>
      </div>
      <div className="h-[calc(100vh-80px)]">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          fitView
          attributionPosition="bottom-left"
          proOptions={{ hideAttribution: true }}
        >
          <Background color="#ffffff" gap={16} size={1} style={{ opacity: 0.1 }} />
        </ReactFlow>
      </div>
    </div>
  );
}
