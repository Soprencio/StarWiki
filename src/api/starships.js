import { getStarshipImage, getCharacterImage, getFilmImage } from '../utils/helpers';

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
    ]
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
