const BASE_URL = 'https://swapi.py4e.com/api';

export const ENDPOINTS = {
  PEOPLE: `${BASE_URL}/people/`,
  PLANETS: `${BASE_URL}/planets/`,
  STARSHIPS: `${BASE_URL}/starships/`,
  VEHICLES: `${BASE_URL}/vehicles/`,
  SPECIES: `${BASE_URL}/species/`,
  FILMS: `${BASE_URL}/films/`,
};

/**
 * Base fetcher for SWAPI
 */
async function fetchFromSwapi(endpoint, options = {}) {
  // Ensure the endpoint has a trailing slash before the query string if missing
  // SWAPI mirrors are very sensitive to redirects caused by missing slashes
  let url = endpoint;
  if (!url.includes('?') && !url.endsWith('/')) {
    url += '/';
  }

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`SWAPI request failed: ${response.statusText}`);
  }
  return response.json();
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

  // Note: SWAPI does not have a native /factions endpoint. 
  // This may need to be handled by a different API or custom data in the future.
  
  search: (category, query, signal) => 
    fetchFromSwapi(`${BASE_URL}/${category}/?search=${encodeURIComponent(query)}`, { signal }),
};
