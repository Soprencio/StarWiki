import { getVehicleImage, getCharacterImage, getFilmImage } from '../utils/helpers';

export const vehiclesConfig = {
  list: {
    title: 'VEHÍCULOS',
    subtitle: 'Transportes terrestres y naves atmosféricas de la galaxia',
    category: 'vehicles',
    getImage: (id) => getVehicleImage(id),
    getTags: (v) => [v.vehicle_class, v.manufacturer],
    getBadge: (v) => v.vehicle_class,
    filters: [
      { key: 'vehicle_class', options: ['all', 'wheeled', 'repulsorcraft', 'walker', 'starfighter'] }
    ],
    filterConfig: [
      {
        key: 'vehicle_class',
        label: 'Clase de Vehículo',
        options: [
          { label: 'Todos', value: 'all' },
          { label: 'Repulsor', value: 'repulsorcraft' },
          { label: 'Caminante', value: 'walker' },
          { label: 'Con Ruedas', value: 'wheeled' }
        ]
      }
    ],
    emptyMessage: "No hay vehículos registrados en este sector"
  },
  detail: {
    category: 'vehicles',
    getTitle: (v) => v.name,
    getSubtitle: (v) => `${v.model} | ${v.manufacturer}`,
    getImage: (id) => getVehicleImage(id),
    getStats: (v) => [
      { label: 'MODELO', value: v.model },
      { label: 'FABRICANTE', value: v.manufacturer },
      { label: 'CLASE', value: v.vehicle_class },
      { label: 'TRIPULACIÓN', value: v.crew },
      { label: 'PASAJEROS', value: v.passengers },
      { label: 'LONGITUD', value: `${v.length} m` },
      { label: 'VELOCIDAD MÁX.', value: v.max_atmosphering_speed },
      { label: 'CAPACIDAD CARGA', value: `${v.cargo_capacity} kg` },
      { label: 'COSTO', value: `${v.cost_in_credits} créditos` },
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
