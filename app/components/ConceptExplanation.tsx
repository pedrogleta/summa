'use client';

import { useState, useEffect } from 'react';
import { OllamaService } from '../services/ollamaService';
import { useTaxonomy } from '../context/TaxonomyContext';

interface ConceptExplanationProps {
  selectedTerm: string | null;
}

export default function ConceptExplanation({ selectedTerm }: ConceptExplanationProps) {
  const { setIsLoading } = useTaxonomy();
  const [explanation, setExplanation] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isCached, setIsCached] = useState<boolean>(false);

  useEffect(() => {
    const fetchExplanation = async () => {
      if (!selectedTerm) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setIsLoading(true);

        const ollamaService = new OllamaService();
        const cached = ollamaService.isCached(selectedTerm);
        setIsCached(cached);

        const explanation = await ollamaService.getExplanation(selectedTerm);
        setExplanation(explanation);
      } catch (err) {
        console.error('Error fetching explanation:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch explanation. Please try again.');
      } finally {
        setLoading(false);
        setIsLoading(false);
      }
    };

    if (selectedTerm) {
      fetchExplanation();
    } else {
      setLoading(false);
    }
  }, [selectedTerm, setIsLoading]);

  if (loading) {
    return (
      <div className="p-4">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-white/10 rounded w-3/4"></div>
          <div className="h-4 bg-white/10 rounded w-full"></div>
          <div className="h-4 bg-white/10 rounded w-5/6"></div>
          <div className="h-4 bg-white/10 rounded w-2/3"></div>
        </div>
        <div className="mt-4 text-sm text-white/70">
          Generating explanation for "{selectedTerm}"...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <div className="text-red-400">{error}</div>
      </div>
    );
  }

  if (!selectedTerm) {
    return (
      <div className="p-4 flex items-center justify-center text-white/50">
        Select a concept from the taxonomy to view its explanation
      </div>
    );
  }

  if (!explanation) {
    return (
      <div className="p-4">
        <div className="text-white/70">No explanation available for "{selectedTerm}"</div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="mb-4">
        <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-500/20 text-blue-300 rounded-full">
          {isCached ? 'Cached' : 'Generated'}
        </span>
      </div>
      <div className="prose prose-invert max-w-none text-white">
        {explanation.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-3 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}