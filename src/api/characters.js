import { getCharacterImage, getFilmImage } from '../utils/helpers';
import { CHARACTER_FACTIONS } from '../data/characterFactions';
import { FACTIONS } from '../data/factions';

export const charactersConfig = {
  list: {
    title: 'PERSONAJES',
    subtitle: 'Base de datos de individuos conocidos en la galaxia',
    category: 'people',
    getImage: (id) => getCharacterImage(id),
    getTags: (char) => [char.gender, `Nacido: ${char.birth_year}`],
    getBadge: (char) => {
      const id = char.url.split('/').filter(Boolean).pop();
      const factionId = CHARACTER_FACTIONS[id];
      if (factionId) {
        return FACTIONS.find(f => f.id === factionId)?.name;
      }
      return char.gender === 'male' ? 'Rebel' : char.gender === 'female' ? 'Senate' : 'Droid';
    },
    filters: [
      { key: 'gender', options: ['all', 'male', 'female', 'n/a'] }
    ],
    filterConfig: [
      {
        key: 'gender',
        label: 'Género',
        multi: true,
        options: [
          { label: 'Masculino', value: 'male' },
          { label: 'Femenino', value: 'female' },
          { label: 'N/A / Droide', value: 'n/a' }
        ]
      }
    ],
    emptyMessage: "No se encontraron individuos en los archivos del HoloNet"
  },
  detail: {
    category: 'people',
    getTitle: (char) => char.name,
    getSubtitle: (char, related) => {
      const homeworld = related.homeworld?.[0];
      return homeworld ? `Nativo de ${homeworld.name}` : 'Origen desconocido';
    },
    getImage: (id) => getCharacterImage(id),
    getStats: (char) => [
      { label: 'ALTURA', value: `${char.height} cm` },
      { label: 'PESO', value: `${char.mass} kg` },
      { label: 'COLOR DE CABELLO', value: char.hair_color },
      { label: 'COLOR DE OJOS', value: char.eye_color },
      { label: 'AÑO DE NACIMIENTO', value: char.birth_year },
      { label: 'GÉNERO', value: char.gender },
      { label: 'COLOR DE PIEL', value: char.skin_color },
    ],
    relatedSections: [
      {
        title: 'PLANETA NATAL',
        key: 'homeworld',
        getEntityImage: (id) => `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`,
        getEntityPath: (id) => `/planetas/${id}`,
        getEntityTitle: (p) => p.name,
        getEntitySubtitle: (p) => 'Planeta'
      },
      {
        title: 'FILMOGRAFÍA',
        key: 'films',
        getEntityImage: (id) => getFilmImage(id),
        getEntityTitle: (f) => f.title,
        getEntitySubtitle: (f) => `Episodio ${f.episode_id}`
      },
      {
        title: 'NAVES ESTELARES',
        key: 'starships',
        getEntityImage: (id) => `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`,
        getEntityPath: (id) => `/naves/${id}`,
        getEntityTitle: (s) => s.name,
        getEntitySubtitle: (s) => s.model
      }
    ]
  }
};
