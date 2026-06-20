import { useState, useEffect } from 'react';

/**
 * Custom hook for data fetching with AbortController support
 * @param {Function} fetchFn - Function that returns a promise (e.g., from swapi.js)
 * @param {Array} dependencies - useEffect dependencies
 */
export const useFetch = (fetchFn, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await fetchFn(signal);
        setData(result);
      } catch (err) {
        console.error('useFetch error:', err);
        if (err.name !== 'AbortError') {
          setError(err.message || 'Something went wrong');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return { data, loading, error };
};
