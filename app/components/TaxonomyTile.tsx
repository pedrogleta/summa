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
        className="pr-2 py-1.5 cursor-pointer rounded flex items-center gap-2"
        style={{
          paddingLeft: `${getPaddingLeft()}px`,
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
            className="text-[10px] leading-none text-white"
          >
            ▶
          </motion.div>
        )}
        <div
          className="text-white transition-opacity duration-150"
          style={{
            fontSize: getFontSize(),
            fontWeight: getFontWeight(),
            opacity: getOpacity(),
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
            className="overflow-hidden"
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
