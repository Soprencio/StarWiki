const BASE_URL = import.meta.env.VITE_SWAPI_URL || 'https://swapi.py4e.com/api';

export const ENDPOINTS = {
  PEOPLE: `${BASE_URL}/people/`,
  PLANETS: `${BASE_URL}/planets/`,
  STARSHIPS: `${BASE_URL}/starships/`,
  VEHICLES: `${BASE_URL}/vehicles/`,
  SPECIES: `${BASE_URL}/species/`,
  FILMS: `${BASE_URL}/films/`,
};

// Simple memory cache with 5 minute TTL
const cache = new Map();
const TTL = 5 * 60 * 1000; // 5 minutes in ms

/**
 * Base fetcher for SWAPI with caching
 */
async function fetchFromSwapi(endpoint, options = {}) {
  const cacheKey = endpoint;
  const now = Date.now();

  // Check cache
  if (cache.has(cacheKey)) {
    const cached = cache.get(cacheKey);
    if (now - cached.timestamp < TTL) {
      return cached.data;
    }
    cache.delete(cacheKey);
  }

  // Ensure the endpoint has a trailing slash before the query string if missing
  let url = endpoint;
  if (!url.includes('?') && !url.endsWith('/')) {
    url += '/';
  }

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`SWAPI request failed: ${response.statusText}`);
  }
  
  const data = await response.json();

  // Save to cache (only if it's a GET request and not a search or something dynamic we don't want to cache long)
  // Actually, we cache everything but we can be selective. Here we cache all successful GETs.
  cache.set(cacheKey, { data, timestamp: now });

  return data;
}

export const swapi = {
  getPeople: (page = 1, signal) => fetchFromSwapi(`${ENDPOINTS.PEOPLE}?page=${page}`, { signal }),
  getPerson: (id, signal) => fetchFromSwapi(`${ENDPOINTS.PEOPLE}${id}/`, { signal }),
  
  getPlanets: (page = 1, signal) => fetchFromSwapi(`${ENDPOINTS.PLANETS}?page=${page}`, { signal }),
  getPlanet: (id, signal) => fetchFromSwapi(`${ENDPOINTS.PLANETS}${id}/`, { signal }),
  
  getStarships: (page = 1, signal) => fetchFromSwapi(`${ENDPOINTS.STARSHIPS}?page=${page}`, { signal }),
  getStarship: (id, signal) => fetchFromSwapi(`${ENDPOINTS.STARSHIPS}${id}/`, { signal }),
  
  getVehicles: (page = 1, signal) => fetchFromSwapi(`${ENDPOINTS.VEHICLES}?page=${page}`, { signal }),
  getVehicle: (id, signal) => fetchFromSwapi(`${ENDPOINTS.VEHICLES}${id}/`, { signal }),
  
  getSpecies: (page = 1, signal) => fetchFromSwapi(`${ENDPOINTS.SPECIES}?page=${page}`, { signal }),
  getSpecie: (id, signal) => fetchFromSwapi(`${ENDPOINTS.SPECIES}${id}/`, { signal }),
  
  getFilms: (signal) => fetchFromSwapi(ENDPOINTS.FILMS, { signal }),
  getFilm: (id, signal) => fetchFromSwapi(`${ENDPOINTS.FILMS}${id}/`, { signal }),

  search: (category, query, signal) => 
    fetchFromSwapi(`${BASE_URL}/${category}/?search=${encodeURIComponent(query)}`, { signal }),
};
