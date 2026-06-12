const IMAGES_URL = import.meta.env.VITE_IMAGES_URL || 'https://starwars-visualguide.com/assets/img';

/**
 * Extracts the ID from a SWAPI URL (e.g., "https://swapi.dev/api/people/1/" -> "1")
 */
export const extractIdFromUrl = (url) => {
  if (!url) return null;
  const segments = url.split('/').filter(Boolean);
  return segments[segments.length - 1];
};

/**
 * Returns the character image URL
 */
export const getCharacterImage = (id) => {
  return `${IMAGES_URL}/characters/${id}.jpg`;
};

/**
 * Returns the planet image URL
 */
export const getPlanetImage = (id) => {
  return `${IMAGES_URL}/planets/${id}.jpg`;
};

/**
 * Returns the starship image URL
 */
export const getStarshipImage = (id) => {
  return `${IMAGES_URL}/starships/${id}.jpg`;
};

/**
 * Returns the vehicle image URL
 */
export const getVehicleImage = (id) => {
  return `${IMAGES_URL}/vehicles/${id}.jpg`;
};

/**
 * Returns the film image URL
 */
export const getFilmImage = (id) => {
  return `${IMAGES_URL}/films/${id}.jpg`;
};

/**
 * Returns the species image URL
 */
export const getSpeciesImage = (id) => {
  return `${IMAGES_URL}/species/${id}.jpg`;
};

/**
 * Placeholder image for missing assets
 */
export const PLACEHOLDER_IMAGE = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg';
