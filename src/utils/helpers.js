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
  return `/assets/imagenes/personajes/${id}.jpg`;
};

/**
 * Returns the planet image URL
 */
export const getPlanetImage = (id) => {
  // Planet 46 is JPG, others are WEBP
  if (id === 46) {
    return `/assets/imagenes/planetas/${id}.jpg`;
  }
  return `/assets/imagenes/planetas/${id}.webp`;
};

/**
 * Returns the starship image URL
 */
export const getStarshipImage = (id) => {
  return `/assets/imagenes/naves/${id}.jpg`;
};

/**
 * Returns the vehicle image URL
 */
export const getVehicleImage = (id) => {
  return `/assets/imagenes/vehiculos/${id}.jpg`;
};

/**
 * Returns the film image URL
 */
export const getFilmImage = (id) => {
  return `/assets/imagenes/peliculas/${id}.jpg`;
};

/**
 * Returns the species image URL
 */
export const getSpeciesImage = (id) => {
  return `/assets/imagenes/especies/${id}.jpg`;
};

