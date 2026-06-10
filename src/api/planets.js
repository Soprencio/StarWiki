import { getPlanetImage, getCharacterImage, getFilmImage } from '../utils/helpers';

export const planetsConfig = {
  list: {
    title: 'PLANETAS',
    subtitle: 'Explora los mundos de la galaxia',
    category: 'planets',
    getImage: (id) => getPlanetImage(id),
    getTags: (p) => [p.climate, p.terrain],
    getBadge: (p) => p.population !== 'unknown' ? 'Habitado' : 'Deshabitado',
    filters: [
      { key: 'climate', options: ['all', 'temperate', 'arid', 'frozen', 'murky'] }
    ]
  },
  detail: {
    category: 'planets',
    getTitle: (p) => p.name,
    getSubtitle: (p) => `Clima: ${p.climate} | Terreno: ${p.terrain}`,
    getImage: (id) => getPlanetImage(id),
    getStats: (p) => [
      { label: 'DIÁMETRO', value: `${p.diameter} km` },
      { label: 'CLIMA', value: p.climate },
      { label: 'GRAVEDAD', value: p.gravity },
      { label: 'TERRENO', value: p.terrain },
      { label: 'AGUA SUPERFICIAL', value: `${p.surface_water}%` },
      { label: 'POBLACIÓN', value: p.population },
      { label: 'PERÍODO ROTACIÓN', value: `${p.rotation_period} h` },
      { label: 'PERÍODO ORBITAL', value: `${p.orbital_period} días` },
    ],
    relatedSections: [
      {
        title: 'RESIDENTES CONOCIDOS',
        key: 'residents',
        getEntityImage: (id) => getCharacterImage(id),
        getEntityPath: (id) => `/personajes/${id}`,
        getEntityTitle: (char) => char.name,
        getEntitySubtitle: (char) => char.gender
      },
      {
        title: 'APARICIONES EN FILMS',
        key: 'films',
        getEntityImage: (id) => getFilmImage(id),
        getEntityTitle: (f) => f.title,
        getEntitySubtitle: (f) => `Episodio ${f.episode_id}`
      }
    ]
  }
};
