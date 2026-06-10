import { getSpeciesImage, getCharacterImage, getFilmImage, getPlanetImage } from '../utils/helpers';

export const speciesConfig = {
  list: {
    title: 'ESPECIES',
    subtitle: 'La diversidad biológica de la galaxia',
    category: 'species',
    getImage: (id) => getSpeciesImage(id),
    getTags: (s) => [s.classification, s.designation],
    getBadge: (s) => s.language,
    filters: [
      { key: 'classification', options: ['all', 'mammal', 'reptile', 'amphibian', 'insectoid', 'gastropod', 'artificial'] },
      { key: 'designation', options: ['all', 'sentient', 'reptilian'] }
    ]
  },
  detail: {
    category: 'species',
    getTitle: (s) => s.name,
    getSubtitle: (s) => `${s.classification} | ${s.designation} | ${s.language}`,
    getImage: (id) => getSpeciesImage(id),
    getStats: (s) => [
      { label: 'CLASIFICACIÓN', value: s.classification },
      { label: 'DESIGNACIÓN', value: s.designation },
      { label: 'ALTURA PROMEDIO', value: `${s.average_height} cm` },
      { label: 'ESPERANZA DE VIDA', value: `${s.average_lifespan} años` },
      { label: 'IDIOMA', value: s.language },
      { label: 'COLORES DE PIEL', value: s.skin_colors },
      { label: 'COLORES DE OJOS', value: s.eye_colors },
      { label: 'COLORES DE CABELLO', value: s.hair_colors },
    ],
    relatedSections: [
      {
        title: 'PLANETA NATAL',
        key: 'homeworld',
        getEntityImage: (id) => getPlanetImage(id),
        getEntityPath: (id) => `/planetas/${id}`,
        getEntityTitle: (p) => p.name,
        getEntitySubtitle: (p) => 'Planeta'
      },
      {
        title: 'MIEMBROS CONOCIDOS',
        key: 'people',
        getEntityImage: (id) => getCharacterImage(id),
        getEntityPath: (id) => `/personajes/${id}`,
        getEntityTitle: (char) => char.name,
        getEntitySubtitle: (char) => char.gender
      },
      {
        title: 'FILMOGRAFÍA',
        key: 'films',
        getEntityImage: (id) => getFilmImage(id),
        getEntityTitle: (f) => f.title,
        getEntitySubtitle: (f) => `Episodio ${f.episode_id}`
      }
    ]
  }
};
