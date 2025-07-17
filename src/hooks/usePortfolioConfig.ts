import { useState, useEffect, useMemo } from 'react';
import type { PortfolioConfig } from '../types/portfolio.types';
import { defaultPortfolioConfig } from '../config/portfolio.config';

// Hook for managing portfolio configuration
export const usePortfolioConfig = (customConfig?: Partial<PortfolioConfig>) => {
  const [config, setConfig] = useState<PortfolioConfig>(defaultPortfolioConfig);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Merge custom configuration with default configuration
  const mergedConfig = useMemo(() => {
    if (!customConfig) return defaultPortfolioConfig;
    
    return mergeDeep(defaultPortfolioConfig, customConfig);
  }, [customConfig]);

  useEffect(() => {
    setConfig(mergedConfig);
  }, [mergedConfig]);

  // Deep merge utility function
  function mergeDeep(target: any, source: any): any {
    const output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
      Object.keys(source).forEach(key => {
        if (isObject(source[key])) {
          if (!(key in target))
            Object.assign(output, { [key]: source[key] });
          else
            output[key] = mergeDeep(target[key], source[key]);
        } else {
          Object.assign(output, { [key]: source[key] });
        }
      });
    }
    return output;
  }

  function isObject(item: any): boolean {
    return item && typeof item === 'object' && !Array.isArray(item);
  }

  // Load external data sources
  const loadCertifications = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(config.education.certifications.dataSource);
      if (!response.ok) {
        throw new Error(`Failed to load certifications: ${response.statusText}`);
      }
      const data = await response.json();
      return data.elements || data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load certifications');
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  const loadSpecializations = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(config.education.specializations.dataSource);
      if (!response.ok) {
        throw new Error(`Failed to load specializations: ${response.statusText}`);
      }
      const data = await response.json();
      return data.elements || data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load specializations');
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  // Update configuration dynamically
  const updateConfig = (updates: Partial<PortfolioConfig>) => {
    setConfig(prev => mergeDeep(prev, updates));
  };

  return {
    config,
    isLoading,
    error,
    updateConfig,
    loadCertifications,
    loadSpecializations
  };
};
