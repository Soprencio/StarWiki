import { getStarshipImage, getCharacterImage, getFilmImage, extractIdFromUrl } from '../utils/helpers';

export const starshipsConfig = {
  list: {
    title: 'NAVES ESTELARES',
    subtitle: 'Vehículos de transporte y combate espacial',
    category: 'starships',
    getImage: (id) => getStarshipImage(id),
    getTags: (s) => [s.starship_class, s.manufacturer],
    getBadge: (s) => s.starship_class,
    filters: [
      { key: 'starship_class', options: ['all', 'Starfighter', 'Deep Space Mobile Station', 'Light freighter'] }
    ],
    filterConfig: [
      {
        key: 'starship_class',
        label: 'Clase de Nave',
        multi: true,
        options: [
          { label: 'Caza Estelar', value: 'Starfighter' },
          { label: 'Carguero Ligero', value: 'Light freighter' },
          { label: 'Estación Espacial', value: 'Deep Space Mobile Station' }
        ]
      }
    ],
    emptyMessage: "No hay naves en este cuadrante"
  },
  detail: {
    category: 'starships',
    getTitle: (s) => s.name,
    getSubtitle: (s) => `${s.model} | ${s.manufacturer}`,
    getImage: (id) => getStarshipImage(id),
    getStats: (s) => [
      { label: 'MODELO', value: s.model },
      { label: 'FABRICANTE', value: s.manufacturer },
      { label: 'CLASE', value: s.starship_class },
      { label: 'TRIPULACIÓN', value: s.crew },
      { label: 'PASAJEROS', value: s.passengers },
      { label: 'LONGITUD', value: `${s.length} m` },
      { label: 'VELOCIDAD MÁX.', value: s.max_atmosphering_speed },
      { label: 'RATING HIPERIMPULSOR', value: s.hyperdrive_rating },
      { label: 'COSTO', value: `${s.cost_in_credits} créditos` },
    ],
    relatedSections: [
      {
        title: 'PILOTOS CONOCIDOS',
        key: 'pilots',
        getEntityImage: (pilot) => getCharacterImage(extractIdFromUrl(pilot.url)),
        getEntityPath: (pilot) => `/personajes/${extractIdFromUrl(pilot.url)}`,
        getEntityTitle: (char) => char.name,
        getEntitySubtitle: (char) => char.gender
      },
      {
        title: 'APARICIONES EN FILMS',
        key: 'films',
        getEntityImage: (film) => getFilmImage(extractIdFromUrl(film.url)),
        getEntityPath: (film) => `/eventos/${extractIdFromUrl(film.url)}`,
        getEntityTitle: (f) => f.title,
        getEntitySubtitle: (f) => `Episodio ${f.episode_id}`
      }
    ]
  }
};
