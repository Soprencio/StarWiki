/**
 * Extracts the ID from a SWAPI URL (e.g., "https://swapi.dev/api/people/1/" -> "1")
 */
export const extractIdFromUrl = (url) => {
  if (!url) return null;
  const segments = url.split('/').filter(Boolean);
  return segments[segments.length - 1];
};

/**
 * Returns the character image URL from starwars-visualguide
 */
export const getCharacterImage = (id) => {
  return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
};

/**
 * Returns the planet image URL
 */
export const getPlanetImage = (id) => {
  return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
};

/**
 * Returns the starship image URL
 */
export const getStarshipImage = (id) => {
  return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
};

/**
 * Returns the vehicle image URL
 */
export const getVehicleImage = (id) => {
  return `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`;
};

/**
 * Returns the film image URL
 */
export const getFilmImage = (id) => {
  return `https://starwars-visualguide.com/assets/img/films/${id}.jpg`;
};

/**
 * Returns the species image URL
 */
export const getSpeciesImage = (id) => {
  return `https://starwars-visualguide.com/assets/img/species/${id}.jpg`;
};

/**
 * Placeholder image for missing assets
 */
export const PLACEHOLDER_IMAGE = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg';
