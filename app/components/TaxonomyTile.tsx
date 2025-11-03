'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TaxonomyNode } from '../types/taxonomy';

interface TaxonomyTileProps {
  node: TaxonomyNode;
  level: number;
}

export default function TaxonomyTile({ node, level }: TaxonomyTileProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const hasChildren = node.children && node.children.length > 0;

  const handleClick = () => {
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    } else {
      console.log(`Selected: ${node.title}`);
    }
  };

  // Calculate font size based on level
  const getFontSize = () => {
    if (level === 0) return '14px';
    if (hasChildren) return '13px';
    return '12px';
  };

  // Calculate font weight
  const getFontWeight = () => {
    return level === 0 ? 'bold' : 'normal';
  };

  // Calculate opacity for leaf nodes
  const getOpacity = () => {
    if (hasChildren) return 1;
    return isHovered ? 1 : 0.9;
  };

  // Calculate padding/indentation
  const getPaddingLeft = () => {
    const baseIndent = level * 12;
    const leafPadding = hasChildren ? 0 : 16;
    return baseIndent + leafPadding;
  };

  return (
    <div>
      <motion.div
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          paddingLeft: `${getPaddingLeft()}px`,
          paddingRight: '8px',
          paddingTop: '6px',
          paddingBottom: '6px',
          cursor: 'pointer',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
        animate={{
          backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
        }}
        transition={{ duration: 0.15 }}
      >
        {hasChildren && (
          <motion.div
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.2 }}
            style={{
              fontSize: '10px',
              lineHeight: 1,
              color: 'white',
            }}
          >
            ▶
          </motion.div>
        )}
        <div
          style={{
            fontSize: getFontSize(),
            fontWeight: getFontWeight(),
            opacity: getOpacity(),
            color: 'white',
            transition: 'opacity 0.15s',
          }}
        >
          {node.title}
        </div>
      </motion.div>

      <AnimatePresence>
        {hasChildren && isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            {node.children!.map((child, index) => (
              <TaxonomyTile key={index} node={child} level={level + 1} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
