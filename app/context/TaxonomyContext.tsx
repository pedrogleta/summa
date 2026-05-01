'use client';

import { createContext, useContext, useState } from 'react';

interface TaxonomyContextType {
  selectedTerm: string | null;
  setSelectedTerm: (term: string | null) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const TaxonomyContext = createContext<TaxonomyContextType | undefined>(undefined);

export function TaxonomyProvider({ children }: { children: React.ReactNode }) {
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <TaxonomyContext.Provider value={{ selectedTerm, setSelectedTerm, isLoading, setIsLoading }}>
      {children}
    </TaxonomyContext.Provider>
  );
}

export function useTaxonomy() {
  const context = useContext(TaxonomyContext);
  if (context === undefined) {
    throw new Error('useTaxonomy must be used within a TaxonomyProvider');
  }
  return context;
}