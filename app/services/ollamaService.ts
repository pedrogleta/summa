// Service for handling Ollama API calls
export class OllamaService {
  private readonly baseUrl: string;
  private modelCache: string | null = null;
  private explanationCache: Map<string, string> = new Map();
  private isGenerating: Set<string> = new Set();

  constructor() {
    this.baseUrl = 'http://localhost:11434';
  }

  /**
   * Lists available models from Ollama
   */
  async listModels(): Promise<string[]> {
    try {
      const response = await fetch(`${this.baseUrl}/api/ps`);
      if (!response.ok) {
        throw new Error(`Failed to fetch models: ${response.status}`);
      }

      const data = await response.json();
      return data.models?.map((model: any) => model.name) || [];
    } catch (error) {
      console.error('Error fetching models:', error);
      return [];
    }
  }

  /**
   * Gets the first available model from Ollama
   */
  async getFirstAvailableModel(): Promise<string | null> {
    if (this.modelCache) {
      return this.modelCache;
    }

    const models = await this.listModels();
    if (models.length > 0) {
      this.modelCache = models[0];
      return models[0];
    }

    return null;
  }

  /**
   * Generates a concept explanation using Ollama
   */
  async generateConceptExplanation(term: string): Promise<string> {
    // Check if we're already generating for this term
    if (this.isGenerating.has(term)) {
      // Return a promise that resolves when generation is complete
      return new Promise((resolve) => {
        const check = () => {
          if (!this.isGenerating.has(term)) {
            resolve(this.explanationCache.get(term) || '');
          } else {
            setTimeout(check, 100);
          }
        };
        check();
      });
    }

    // Check cache first
    if (this.explanationCache.has(term)) {
      return this.explanationCache.get(term)!;
    }

    // Mark as generating
    this.isGenerating.add(term);

    try {
      const model = await this.getFirstAvailableModel();
      if (!model) {
        throw new Error('No available model found. Please check if Ollama is running and has models available.');
      }

      const prompt = `Explain the concept of "${term}" in a clear, concise manner suitable for a knowledge base. Include key points and practical applications.`;

      const response = await fetch(`${this.baseUrl}/api/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: model,
          prompt: prompt,
          stream: false,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to generate explanation: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      const explanation = data.response || '';

      // Cache the explanation
      this.explanationCache.set(term, explanation);

      return explanation;
    } catch (error) {
      console.error('Error generating concept explanation:', error);
      throw new Error(`Failed to generate explanation for "${term}": ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      // Remove from generating set
      this.isGenerating.delete(term);
    }
  }

  /**
   * Gets cached explanation or generates new one
   */
  async getExplanation(term: string): Promise<string> {
    if (this.explanationCache.has(term)) {
      return this.explanationCache.get(term)!;
    }

    return await this.generateConceptExplanation(term);
  }

  /**
   * Clears the cache
   */
  clearCache(): void {
    this.explanationCache.clear();
  }

  /**
   * Checks if a term has been cached
   */
  isCached(term: string): boolean {
    return this.explanationCache.has(term);
  }
}