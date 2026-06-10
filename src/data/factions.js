export const FACTIONS = [
  {
    id: "rebel-alliance",
    name: "Alianza Rebelde",
    subtitle: "Por la Restauración de la República",
    description: "Una resistencia armada que se opone a la tiranía del Imperio Galáctico. Formada por senadores disidentes y guerreros de la libertad.",
    color: "#c62828",
    symbol: "rebel",
    era: ["Guerra Civil Galáctica"],
    alignment: "light",
    memberIds: [1, 3, 4, 5, 10, 13, 14], // Luke, R2, Vader(ex), Leia, Obi-Wan, Han, Chewie
    notablePlanets: [1, 2, 3, 4, 7], // Tatooine, Alderaan, Yavin IV, Hoth, Endor
    notableShips: [12, 13, 22] // X-wing, Millennium Falcon, Imperial Shuttle(stolen)
  },
  {
    id: "galactic-empire",
    name: "Imperio Galáctico",
    subtitle: "Orden, Paz y Seguridad",
    description: "El régimen autoritario que reemplazó a la República Galáctica, gobernado con puño de hierro por el Emperador Palpatine.",
    color: "#4a5568",
    symbol: "empire",
    era: ["Era del Imperio"],
    alignment: "dark",
    memberIds: [4, 14, 21], // Vader, Tarkin, Palpatine
    notablePlanets: [9, 18], // Coruscant, Death Star (as planet)
    notableShips: [13, 3] // Star Destroyer, Death Star
  },
  {
    id: "jedi-order",
    name: "Orden Jedi",
    subtitle: "Guardianes de la Paz y la Justicia",
    description: "Una orden monástica antigua, noble y académica unificada por su creencia y observancia de la Fuerza.",
    color: "#4fc3f7",
    symbol: "jedi",
    era: ["Alta República", "Era de las Precuelas"],
    alignment: "light",
    memberIds: [1, 10, 20, 32], // Luke, Obi-Wan, Yoda, Qui-Gon
    notablePlanets: [9, 28, 38], // Coruscant, Tython, Ahch-To
    notableShips: [12, 28] // X-wing, Jedi Starfighter
  },
  {
    id: "sith-order",
    name: "Orden Sith",
    subtitle: "El Lado Oscuro de la Fuerza",
    description: "Antiguos enemigos de los Jedi que utilizan el lado oscuro de la Fuerza para obtener poder absoluto.",
    color: "#c62828",
    symbol: "sith",
    era: ["Todas"],
    alignment: "dark",
    memberIds: [4, 21, 44], // Vader, Palpatine, Maul
    notablePlanets: [9, 56], // Coruscant, Exegol
    notableShips: [3, 13] // Death Star, Star Destroyer
  },
  {
    id: "mandalorians",
    name: "Mandalorianos",
    subtitle: "Este es el Camino",
    description: "Una cultura guerrera legendaria conocida por sus armaduras de beskar y sus estrictos códigos de honor.",
    color: "#c9a84c",
    symbol: "mando",
    era: ["Guerra de los Clones", "Nueva República"],
    alignment: "neutral",
    memberIds: [24, 68], // Boba Fett, Jango Fett
    notablePlanets: [40], // Mandalore
    notableShips: [21, 15] // Slave I, Razor Crest
  }
];
