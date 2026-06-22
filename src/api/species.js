import { getSpeciesImage, getCharacterImage, getFilmImage, getPlanetImage, extractIdFromUrl } from '../utils/helpers';

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
    ],
    filterConfig: [
      {
        key: 'classification',
        label: 'Clasificación',
        options: [
          { label: 'Todas', value: 'all' },
          { label: 'Mamíferos', value: 'mammal' },
          { label: 'Reptiles', value: 'reptile' },
          { label: 'Anfibios', value: 'amphibian' },
          { label: 'Artificial', value: 'artificial' }
        ]
      }
    ],
    emptyMessage: "No hay registros biológicos de esta categoría"
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
        getEntityImage: (planet) => getPlanetImage(extractIdFromUrl(planet.url)),
        getEntityPath: (planet) => `/planetas/${extractIdFromUrl(planet.url)}`,
        getEntityTitle: (p) => p.name,
        getEntitySubtitle: (p) => 'Planeta'
      },
      {
        title: 'MIEMBROS CONOCIDOS',
        key: 'people',
        getEntityImage: (person) => getCharacterImage(extractIdFromUrl(person.url)),
        getEntityPath: (person) => `/personajes/${extractIdFromUrl(person.url)}`,
        getEntityTitle: (char) => char.name,
        getEntitySubtitle: (char) => char.gender
      },
      {
        title: 'FILMOGRAFÍA',
        key: 'films',
        getEntityImage: (film) => getFilmImage(extractIdFromUrl(film.url)),
        getEntityPath: (film) => `/eventos/${extractIdFromUrl(film.url)}`,
        getEntityTitle: (f) => f.title,
        getEntitySubtitle: (f) => `Episodio ${f.episode_id}`
      }
    ]
  }
};
