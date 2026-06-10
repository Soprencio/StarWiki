export const WEAPONS = [
  {
    id: "lightsaber-blue",
    name: "Sable de Luz Azul",
    type: "Sable de Luz",
    affiliation: "Jedi",
    description: "El arma elegante de un Caballero Jedi para tiempos más civilizados. Su color azul simboliza la rectitud y la valentía.",
    image: "https://starwars-visualguide.com/assets/img/placeholder.jpg",
    stats: { damage: "Extremo", range: "Cuerpo a cuerpo", weight: "~1 kg" },
    knownUsers: [1, 10, 32] // Luke, Obi-Wan, Qui-Gon
  },
  {
    id: "lightsaber-red",
    name: "Sable de Luz Rojo",
    type: "Sable de Luz",
    affiliation: "Sith",
    description: "Imbuido con el dolor y la ira de un practicante del lado oscuro, el cristal kyber 'sangra' para producir este tono carmesí.",
    image: "https://starwars-visualguide.com/assets/img/placeholder.jpg",
    stats: { damage: "Extremo", range: "Cuerpo a cuerpo", weight: "~1 kg" },
    knownUsers: [4, 21, 44] // Vader, Palpatine, Maul
  },
  {
    id: "dl-44-blaster",
    name: "Bláster DL-44",
    type: "Bláster",
    affiliation: "Contrabandistas / Rebeldes",
    description: "Pesado bláster de mano conocido por su gran potencia. Favorito de Han Solo por su fiabilidad en situaciones tensas.",
    image: "https://starwars-visualguide.com/assets/img/placeholder.jpg",
    stats: { damage: "Alto", range: "Medio", weight: "1.3 kg" },
    knownUsers: [13] // Han Solo
  },
  {
    id: "e-11-blaster",
    name: "Rifle Bláster E-11",
    type: "Rifle",
    affiliation: "Imperio Galáctico",
    description: "Arma estándar de los Stormtroopers imperiales. Versátil y letal, aunque su precisión depende del usuario.",
    image: "https://starwars-visualguide.com/assets/img/placeholder.jpg",
    stats: { damage: "Medio", range: "Largo", weight: "2.6 kg" },
    knownUsers: [4] // Empire
  },
  {
    id: "bowcaster",
    name: "Ballesta Wookiee",
    type: "Energía cinética",
    affiliation: "Wookiees",
    description: "Arma tradicional que dispara pernos recubiertos de plasma. Requiere la fuerza de un Wookiee para ser recargada.",
    image: "https://starwars-visualguide.com/assets/img/placeholder.jpg",
    stats: { damage: "Muy Alto", range: "Medio", weight: "8 kg" },
    knownUsers: [14] // Chewie
  },
  {
    id: "thermal-detonator",
    name: "Detonador Térmico",
    type: "Explosivo",
    affiliation: "Varios",
    description: "Un explosivo devastador que crea una esfera de calor extremo, desintegrando todo a su paso.",
    image: "https://starwars-visualguide.com/assets/img/placeholder.jpg",
    stats: { damage: "Masivo", range: "Área", weight: "0.5 kg" },
    knownUsers: []
  },
  {
    id: "lightsaber-green",
    name: "Sable de Luz Verde",
    type: "Sable de Luz",
    affiliation: "Jedi",
    description: "Asociado con los Jedi que prefieren la mediación y el estudio de la Fuerza, como el Gran Maestro Yoda.",
    image: "https://starwars-visualguide.com/assets/img/placeholder.jpg",
    stats: { damage: "Extremo", range: "Cuerpo a cuerpo", weight: "~1 kg" },
    knownUsers: [20, 32] // Yoda, Qui-Gon
  },
  {
    id: "lightsaber-purple",
    name: "Sable de Luz Púrpura",
    type: "Sable de Luz",
    affiliation: "Jedi",
    description: "Un color extremadamente raro, utilizado por Mace Windu. Simboliza el equilibrio entre la luz y la oscuridad.",
    image: "https://starwars-visualguide.com/assets/img/placeholder.jpg",
    stats: { damage: "Extremo", range: "Cuerpo a cuerpo", weight: "~1 kg" },
    knownUsers: [13] // Placeholder
  },
  {
    id: "gauntlet-blades",
    name: "Cuchillas de Guantelete",
    type: "Cuerpo a cuerpo",
    affiliation: "Mandalorianos",
    description: "Armas ocultas en los guanteletes mandalorianos, ideales para combates cercanos inesperados.",
    image: "https://starwars-visualguide.com/assets/img/placeholder.jpg",
    stats: { damage: "Medio", range: "Muy corto", weight: "0.2 kg" },
    knownUsers: [24, 68] // Boba, Jango
  },
  {
    id: "pulse-rifle",
    name: "Rifle de Pulso Amban",
    type: "Rifle",
    affiliation: "Mandalorianos",
    description: "Rifle de francotirador de largo alcance que desintegra objetivos. Utilizado por Din Djarin.",
    image: "https://starwars-visualguide.com/assets/img/placeholder.jpg",
    stats: { damage: "Masivo", range: "Extremo", weight: "5 kg" },
    knownUsers: [24] // Mando
  }
];
