import React, { createContext, useContext, useState, useEffect } from 'react';

const FilterContext = createContext();

const STORAGE_KEY = 'starwiki_filters';

const initialState = {
  people: { gender: 'all' },
  planets: { climate: 'all' },
  starships: { starship_class: 'all' },
  vehicles: { vehicle_class: 'all' },
  species: { classification: 'all' }
};

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : initialState;
  });

  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(filters));
  }, [filters]);

  const setFilter = (category, key, value, multi = false) => {
    setFilters(prev => {
      const currentCategory = prev[category] || {};
      const currentValues = currentCategory[key] || (multi ? [] : 'all');

      let newValues;
      if (multi) {
        // Toggle value in array
        const values = Array.isArray(currentValues) ? currentValues : [];
        newValues = values.includes(value) 
          ? values.filter(v => v !== value)
          : [...values, value];
      } else {
        newValues = value;
      }

      return {
        ...prev,
        [category]: {
          ...currentCategory,
          [key]: newValues
        }
      };
    });
  };

  const clearFilters = (category) => {
    setFilters(prev => ({
      ...prev,
      [category]: initialState[category]
    }));
  };

  const clearAllFilters = () => {
    setFilters(initialState);
  };

  return (
    <FilterContext.Provider value={{
      filters,
      setFilter,
      clearFilters,
      clearAllFilters
    }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => useContext(FilterContext);
