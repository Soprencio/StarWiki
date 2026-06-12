import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { swapi } from '../api/swapi';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const closeSearch = useCallback(() => {
    setIsOpen(false);
    setQuery('');
    setResults({});
  }, []);

  const openSearch = useCallback(() => setIsOpen(true), []);

  useEffect(() => {
    if (!query || query.length < 2) {
      setResults({});
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      setError(null);
      
      const controller = new AbortController();
      const signal = controller.signal;

      try {
        const categories = [
          { key: 'people', label: 'Personajes' },
          { key: 'planets', label: 'Planetas' },
          { key: 'starships', label: 'Naves' },
          { key: 'vehicles', label: 'Vehículos' },
          { key: 'species', label: 'Especies' }
        ];

        const searchPromises = categories.map(cat => 
          swapi.search(cat.key, query, signal).then(res => ({
            category: cat.label,
            categoryKey: cat.key,
            items: res.results.slice(0, 5) // Limit to 5 results per category
          }))
        );

        const allResults = await Promise.all(searchPromises);
        const resultsMap = allResults.reduce((acc, curr) => {
          if (curr.items.length > 0) {
            acc[curr.category] = curr;
          }
          return acc;
        }, {});

        setResults(resultsMap);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError('Error en la búsqueda galáctica');
        }
      } finally {
        setLoading(false);
      }

      return () => controller.abort();
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <SearchContext.Provider value={{
      query,
      setQuery,
      results,
      loading,
      error,
      isOpen,
      openSearch,
      closeSearch
    }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
