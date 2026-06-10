# 🌌 Star Wars Wiki — Plan de Proyecto

---

## ÍNDICE

1. [Prompt para Stitch — Diseño UI/UX](#1-prompt-para-stitch)
2. [Plan de Iteraciones (Scrum)](#2-plan-de-iteraciones-scrum)
3. [Prompts por Iteración](#3-prompts-por-iteración)

---

---

# 1. PROMPT PARA STITCH

> Copia y pega este prompt directamente en Stitch.

---

```
Design a Star Wars Encyclopedia (Wiki) web application with a dark, immersive aesthetic faithful to the Star Wars universe. This is a fan-facing reference app — think the in-universe "HoloNet" or the Jedi Archives brought to life on screen.

---

## BRAND & AESTHETIC

The visual identity must feel like an official Star Wars databank terminal — a cross between the Imperial HoloNet, the Jedi Archives, and modern dark-mode UI design. NOT generic sci-fi. NOT neon cyberpunk. Star Wars specifically.

**Mood references:**
- The opening crawl: deep space black, gold typography, cinematic weight
- The Death Star briefing room: cool grays, glowing data readouts
- Jedi Holocrons: amber/gold warm glows against deep shadow
- Imperial/Republic terminals: structured, data-dense, authoritative

---

## COLOR PALETTE

- **Background primary:** #0a0a0f (near-void black with a cold blue undertone)
- **Background surface:** #0f1117 (card/panel backgrounds)
- **Background elevated:** #161b27 (sidebars, modals)
- **Accent gold:** #c9a84c (Star Wars gold — crawl title, highlights, active states)
- **Accent blue:** #4fc3f7 (lightsaber blue — links, interactive elements, glows)
- **Accent red:** #c62828 (Sith red — danger states, Empire faction tags)
- **Text primary:** #e8e8e8
- **Text secondary:** #8a95a3
- **Text muted:** #4a5568
- **Border subtle:** #1e2535

---

## TYPOGRAPHY

- **Display / Hero headlines:** "Orbitron" (Google Fonts) — used sparingly for section titles, the app logo, and major headings. All caps, wide tracking. This is the Star Wars feel without using the actual logo font.
- **Body / UI:** "Inter" or "DM Sans" — clean, readable, slightly condensed for data-dense panels
- **Data labels / Tags:** "Space Mono" or "JetBrains Mono" — for stats, IDs, coordinates, faction codes. Monospaced gives the "terminal readout" feel.
- **Type scale:** Display 48px / H1 32px / H2 24px / H3 18px / Body 15px / Label 12px / Micro 11px

---

## LAYOUT STRUCTURE

### Global Shell
- Full-width dark layout, no white space leaking
- **Top Navigation Bar:** Fixed, ~64px height. Left: App logo ("HOLONET ARCHIVES" or "SW WIKI" in Orbitron with a subtle gold underline). Center: main nav links (Characters, Planets, Species, Factions, Vehicles, Weapons, Events). Right: search icon + search bar that expands inline.
- **Sidebar (optional/collapsible):** Category filters, faction filters, era filters — styled as a databank terminal panel with thin gold left-border accent on active items.

### Home / Landing Page
- **Hero section:** Full-viewport. Background is animated deep space (CSS particle stars or subtle star field animation). Centered: the app logo large in Orbitron gold, a one-line tagline ("The Galaxy's Most Complete Database"), and a CTA button "Explore the Galaxy".
- Below hero: 3–4 featured entity cards in a horizontal scroll or grid ("Featured Characters", "Featured Planets", etc.)
- A "Browse by Category" section: large icon tiles (8 tiles) each with a faction/category icon, name, and entity count.

### Entity List Pages (e.g., /characters, /planets)
- **Filter bar at top:** Horizontal row of filter pills/chips (e.g., for characters: Affiliation, Species, Gender, Era). Styled as dark pill buttons with gold active state.
- **Search bar** embedded in the filter row.
- **Grid layout:** Responsive card grid (3 cols desktop, 2 tablet, 1 mobile). Cards have a subtle dark border, a faint inner glow on hover.
- Each card: entity image/avatar (top, slight vignette overlay), entity name in display font, 2–3 key stats or tags below, a faction badge (color-coded).

### Entity Detail Page (e.g., /characters/luke-skywalker)
- **Hero panel:** Wide banner with entity image on the right (subtle parallax or fade), entity name large on the left, subtitle (species, homeworld, affiliation), faction badge.
- **Stats panel:** A styled data table/grid — think Imperial dossier. Two columns of key-value pairs with monospace labels. Example: `HOMEWORLD ........ Tatooine`, `SPECIES .......... Human`, `HEIGHT ........... 1.72m`
- **Description/lore section:** Full-width text block with a subtle left border in gold.
- **Related entities:** Horizontal scroll of related cards at the bottom.

---

## COMPONENTS

### Cards
- Background: #0f1117
- Border: 1px solid #1e2535
- Border-radius: 4px (subtle, not bubbly — this is Star Wars, not iOS)
- On hover: border color shifts to gold (#c9a84c at 60% opacity), box-shadow: 0 0 20px rgba(201, 168, 76, 0.15)
- Top image area: 16:9 or square crop, with a bottom-to-top dark gradient overlay
- Faction badge: top-right corner, color-coded pill

### Buttons
- **Primary:** Background #c9a84c, text #0a0a0f, font Orbitron semi-bold, no border-radius (sharp corners), uppercase, letter-spacing: 0.1em. Hover: brightness +10%, subtle outward glow.
- **Secondary:** Transparent background, border 1px solid #c9a84c, text #c9a84c. Hover: fill gold.
- **Ghost/Tertiary:** Text only in #4fc3f7 with underline on hover.
- **Destructive/Sith:** Border and text in #c62828.

### Tags / Badges
- Faction tags: color-coded backgrounds — Rebel Alliance (muted red), Galactic Empire (gray-blue), Jedi Order (amber), Sith (dark red), Mandalorian (steel), Republic (blue), etc.
- Font: Space Mono, 11px, uppercase
- Shape: 2px border-radius (nearly square)

### Search Bar
- Dark background (#161b27), 1px border subtle, white text
- Left icon: a targeting reticle or magnifier in gold
- Placeholder: "Search the HoloNet..."
- On focus: border glows gold

### Loading States
- Use a lightsaber-style horizontal progress bar (thin line, color transitions from blue to gold to red based on progress %)
- Skeleton cards: dark shimmer animation on card placeholders
- Spinner alternative: a slow-rotating Galactic Empire or Rebel Alliance symbol in muted gold

### Error States
- Full-page error: dark panel, bold "TRANSMISSION FAILED" in Orbitron, a red horizontal line, and subtext in body font explaining the error. Include a "Retry" button.
- Empty state: "No records found in the HoloNet Archives" with a muted holocron icon.

---

## BACKGROUND & ATMOSPHERE

- The page background should feel like deep space. Use a CSS-generated star field (small white dots at varying opacity and size, subtle parallax on scroll).
- Section dividers: thin horizontal lines with a faint glow, or a diagonal slash motif (referencing the Star Wars title crawl angle).
- Subtle scan-line texture overlay on hero panels (low opacity, ~5%) to evoke CRT/holoprojector displays.
- The app should feel alive but never overwhelming — the atmosphere serves the content, not the other way around.

---

## ICONOGRAPHY

- Use Lucide icons or a custom SVG set styled to match (no rounded, colorful icons — keep them thin-stroke, monochrome, adapted to the palette)
- Custom faction symbols where possible (can be simple SVG paths): Rebel Alliance starburst, Imperial cog, Jedi Order symbol, Sith Eye, Mandalorian skull
- Navigation icons: thin line, 20px, color #8a95a3, active state: gold

---

## RESPONSIVE BEHAVIOR

- Desktop (1280px+): full sidebar + main grid, 3-column cards
- Tablet (768–1279px): collapsed sidebar (hamburger), 2-column cards
- Mobile (<768px): bottom navigation bar replacing top nav, 1-column cards, full-screen detail pages

---

## MICRO-INTERACTIONS

- Card hover: border glow + slight scale(1.02) transform + transition 200ms ease
- Navigation active link: gold underline that animates in from left on mount
- Page transitions: fade-in 300ms (not a slide — this is not a mobile app pattern)
- Button press: slight inset shadow on active state
- Filter chips: satisfying click with a quick scale pulse

---

## WHAT TO AVOID

- No white or light backgrounds anywhere in the main app
- No rounded pill shapes on buttons (keep corners sharp or very subtly rounded ≤4px)
- No generic "dashboard" blue (#1976D2) or Material Design palette
- No emoji in the UI
- No sans-serif-only headers — Orbitron must appear at least on the logo and primary section titles
- No generic loading spinners — use the lightsaber bar or the faction symbol

---

## DELIVERABLES REQUESTED FROM STITCH

Please generate:
1. The full color token system and component library (as Figma variables or CSS custom properties)
2. Desktop and mobile layouts for: Home, Entity List (Characters as example), Entity Detail (Character detail as example)
3. Component states for: Card (default, hover, loading skeleton), Button (all variants), Search bar (default, focused, with results), Error and Empty states
4. The navigation bar (desktop expanded + mobile collapsed)
5. Export all as reusable React-ready components or Figma frames with proper naming conventions

```

---

---

# 2. PLAN DE ITERACIONES SCRUM

## Resumen de Sprints

| Sprint | Nombre | Duración | Enfoque |
|--------|--------|----------|---------|
| Sprint 0 | Setup & Arquitectura | 3 días | Proyecto base, estructura, routing |
| Sprint 1 | Personajes | 5 días | Primera entidad completa: lista + detalle |
| Sprint 2 | Planetas & Naves | 5 días | Segunda y tercera entidades |
| Sprint 3 | Especies & Facciones | 5 días | Entidades relacionales |
| Sprint 4 | Vehículos, Armas & Eventos | 5 días | Entidades restantes |
| Sprint 5 | Filtros & Búsqueda Global | 4 días | Sistema de filtros cross-entidad |
| Sprint 6 | UX, Loading & Errores | 3 días | Polish, skeletons, error boundaries |
| Sprint 7 | Performance & Deploy | 3 días | Optimización, accesibilidad, deploy |

**Total estimado:** ~33 días de desarrollo

---

## APIs Públicas a Utilizar

| API | URL | Entidades |
|-----|-----|-----------|
| SWAPI (principal) | `https://swapi.dev/api/` | Personajes, Planetas, Naves, Vehículos, Especies, Películas |
| SWAPI GraphQL | `https://swapi-graphql.netlify.app/` | Alternativa GraphQL |
| Star Wars Visual Guide API | `https://starwars-visualguide.com/assets/img/` | Imágenes de personajes, planetas, naves |
| SWAPIDB (extensión) | `https://www.swapi.tech/api/` | Versión extendida con más datos |

---

## Estructura de Carpetas Objetivo

```
src/
├── api/              # Servicios de API, fetchers, endpoints
├── components/
│   ├── ui/           # Componentes base (Button, Card, Badge, Input)
│   ├── layout/       # Navbar, Sidebar, PageShell
│   ├── entities/     # EntityCard, EntityDetail, EntityGrid
│   └── feedback/     # LoadingSkeleton, ErrorBoundary, EmptyState
├── pages/            # Home, Characters, Planets, etc.
├── hooks/            # useFetch, useFilter, usePagination
├── context/          # SearchContext, ThemeContext
├── utils/            # formatters, constants, helpers
├── styles/           # global.css, tokens.css, variables
└── assets/           # icons, images, fonts
```

---

## Definition of Done (DoD) — Global

- [ ] Componente renderiza sin errores en consola
- [ ] Estado de carga implementado (skeleton o spinner)
- [ ] Estado de error manejado (mensaje + opción de retry)
- [ ] Estado vacío implementado
- [ ] Responsive: desktop + tablet + mobile
- [ ] PropTypes o TypeScript types definidos
- [ ] Código comentado en partes no obvias

---

---

# 3. PROMPTS POR ITERACIÓN

---

## 🛠️ SPRINT 0 — Setup & Arquitectura Base

**Objetivo:** Tener el proyecto corriendo con estructura limpia, routing, tokens de diseño y shell de la app.

---

### Prompt Sprint 0

```
Voy a construir una Star Wars Wiki en React + JavaScript (Vite). Necesito que me ayudes a configurar la arquitectura base del proyecto.

## CONTEXTO
- Framework: React 18 + Vite
- Styling: CSS Modules o Tailwind CSS (elige el más adecuado para una app visualmente rica con tokens de diseño custom)
- Router: React Router v6
- Estado global: React Context + useReducer (sin Redux por ahora)
- Fetching: fetch nativo con hooks custom (sin React Query todavía)
- Linting: ESLint + Prettier

## TAREA
1. Crea la estructura de carpetas completa del proyecto (src/api, src/components/ui, src/components/layout, src/components/entities, src/components/feedback, src/pages, src/hooks, src/context, src/utils, src/styles, src/assets)

2. Configura los tokens de diseño como CSS custom properties en un archivo `src/styles/tokens.css`:
   - Colores: --color-bg-primary: #0a0a0f, --color-bg-surface: #0f1117, --color-bg-elevated: #161b27, --color-accent-gold: #c9a84c, --color-accent-blue: #4fc3f7, --color-accent-red: #c62828, --color-text-primary: #e8e8e8, --color-text-secondary: #8a95a3, --color-border: #1e2535
   - Tipografía: Orbitron (display), Inter (body), Space Mono (data/labels)
   - Espaciado, radios, sombras

3. Crea el componente `PageShell` (layout wrapper con Navbar + main content area + footer mínimo)

4. Crea el componente `Navbar` con:
   - Logo "HOLONET ARCHIVES" en fuente Orbitron con color gold
   - Links de navegación: Home, Personajes, Planetas, Naves, Especies, Vehículos, Facciones
   - Barra de búsqueda expandible a la derecha (solo visual por ahora)
   - Fondo #0a0a0f con border-bottom sutil

5. Configura React Router v6 con rutas para:
   - / → HomePage
   - /personajes → CharactersPage
   - /personajes/:id → CharacterDetailPage
   - /planetas → PlanetsPage
   - /planetas/:id → PlanetDetailPage
   - /naves → StarshipsPage
   - /naves/:id → StarshipDetailPage
   - /especies → SpeciesPage
   - /vehiculos → VehiclesPage
   - /facciones → FactionsPage
   - * → NotFoundPage

6. Crea placeholders para cada página (solo el título centrado por ahora)

7. Crea el hook `useFetch(url)` que retorne { data, loading, error } y maneje limpieza con AbortController

8. Crea el archivo `src/api/swapi.js` con las constantes de endpoints de SWAPI (https://swapi.dev/api/) y funciones base para cada entidad

## OUTPUT ESPERADO
- Código completo y funcional para cada archivo mencionado
- Comentarios explicando decisiones de arquitectura
- El proyecto debe correr con `npm run dev` sin errores
- La Navbar debe ser visible y los links deben navegar entre páginas placeholder
```

---

## 👤 SPRINT 1 — Módulo de Personajes (Feature Completa)

**Objetivo:** Primera entidad completamente funcional: lista con filtros, paginación y página de detalle.

---

### Prompt Sprint 1 — Parte A: Componentes Base y Lista

```
Continuamos con la Star Wars Wiki. El setup del Sprint 0 ya está hecho. Ahora vamos a construir el módulo de Personajes completo.

## CONTEXTO TÉCNICO
- SWAPI endpoint: GET https://swapi.dev/api/people/ (paginado, 10 por página)
- Imágenes de personajes: https://starwars-visualguide.com/assets/img/characters/{id}.jpg
- El ID numérico se extrae del campo `url` del resultado de SWAPI: el último segmento de la URL

## TAREA — COMPONENTES UI BASE

### 1. Componente `EntityCard` (genérico, reutilizable)
Props: { id, name, image, category, tags[], badge }
- Diseño: fondo #0f1117, borde 1px #1e2535, border-radius 4px
- Imagen superior con gradient overlay (bottom dark fade)
- Nombre en Inter bold 16px
- Tags como badges pequeños (Space Mono, 11px, uppercase)
- Badge de facción en esquina superior derecha
- Hover: border glow gold (box-shadow: 0 0 20px rgba(201, 168, 76, 0.15)), scale(1.02), transition 200ms
- Click navega a la ruta de detalle

### 2. Componente `LoadingSkeleton` 
- Versión card: mismas dimensiones que EntityCard pero con shimmer animation (fondo que hace wave de #1e2535 a #2a3040)
- Prop: `variant` = "card" | "detail" | "text"
- Para detalle: skeleton de hero banner + stats grid + párrafos

### 3. Componente `ErrorState`
- Prop: { message, onRetry }
- Diseño: panel centrado, texto "TRANSMISSION FAILED" en Orbitron rojo, descripción del error, botón "REINTENTAR" en estilo primary button

### 4. Componente `EmptyState`
- Prop: { message }
- Diseño: ícono de holocron (SVG simple), texto "Sin registros en los Archivos HoloNet", texto secundario con el message prop

### 5. Componente `Button`
Variantes via prop `variant`: "primary" | "secondary" | "ghost" | "danger"
- Primary: bg #c9a84c, texto negro, Orbitron, uppercase, sharp corners (border-radius 2px)
- Secondary: border gold, texto gold, fondo transparente
- Ghost: texto #4fc3f7, sin borde
- Danger: border y texto #c62828
- Props: { children, variant, onClick, disabled, loading }
- Loading state: muestra un pequeño spinner inline

## TAREA — PÁGINA DE LISTA DE PERSONAJES

### Componente `CharactersPage`
1. Header de sección: título "PERSONAJES" en Orbitron gold, subtítulo "Base de datos de individuos conocidos en la galaxia"

2. Barra de filtros horizontal:
   - Input de búsqueda por nombre (filtra localmente los resultados cargados)
   - Filter chips para: Género (male, female, n/a), Film (las películas disponibles)
   - Botón "Limpiar filtros" (solo visible cuando hay filtros activos)

3. Grid de personajes:
   - 3 columnas desktop, 2 tablet, 1 mobile
   - Renderiza `EntityCard` por cada personaje
   - Muestra `LoadingSkeleton` (6 cards) mientras carga
   - Muestra `ErrorState` si hay error
   - Muestra `EmptyState` si no hay resultados tras filtrar

4. Paginación:
   - SWAPI devuelve `count`, `next`, `previous`
   - Componente `Pagination` con botones Anterior / Siguiente y texto "Página X de Y"
   - Estilo: botones secundarios, número de página en gold

5. Lógica de datos:
   - Usar hook `useFetch` creado en Sprint 0
   - La búsqueda por nombre usa el parámetro `?search=` de SWAPI
   - Manejar el caso en que la imagen del personaje no existe (fallback a un placeholder con el logo de SW)

## OUTPUT ESPERADO
- Código completo de todos los componentes mencionados
- La página /personajes debe mostrar personajes reales de SWAPI con imágenes
- Los filtros deben funcionar
- La paginación debe funcionar
- Los 3 estados (loading, error, empty) deben ser visibles y funcionales
```

---

### Prompt Sprint 1 — Parte B: Página de Detalle de Personaje

```
Continuamos con el módulo de Personajes. El listado ya funciona. Ahora necesito la página de detalle.

## ENDPOINT
GET https://swapi.dev/api/people/{id}/
Retorna: name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld (URL), films (array de URLs), species (array), vehicles (array), starships (array), url

## TAREA — CharacterDetailPage

### Layout
1. **Hero Banner**
   - Background: imagen del personaje a la derecha con un fuerte gradient desde la izquierda (de #0a0a0f sólido a transparente)
   - A la izquierda: badge de categoría ("PERSONAJE"), nombre en Orbitron 40px gold, subtítulo con especie y planeta natal
   - Altura: 400px desktop, 300px mobile

2. **Dossier Panel** (stats)
   - Título "DATOS DEL ARCHIVO" en Space Mono, 12px, muted, uppercase, con línea decorativa gold
   - Grid de 2 columnas con key-value pairs estilo terminal:
     ```
     ALTURA ............... 172 cm
     PESO ................. 77 kg
     COLOR DE CABELLO ..... Rubio
     COLOR DE OJOS ........ Azul
     AÑO DE NACIMIENTO ... 19BBY
     GÉNERO ............... Masculino
     ```
   - Fuente: Space Mono para labels, Inter para valores
   - Separador punteado entre label y valor (como en un dossier)

3. **Sección "PLANETA NATAL"**
   - Fetch del URL del homeworld para mostrar nombre del planeta
   - Mini card del planeta con link a /planetas/{id}

4. **Sección "FILMOGRAFÍA"**
   - Fetch de cada película para mostrar: título, episodio, director
   - Cards horizontales en scroll o grid 2 columnas
   - Badge de número de episodio en gold

5. **Sección "VEHÍCULOS & NAVES"**
   - Listas horizontales con mini cards de vehículos y naves asociadas
   - Solo si existen, si no, no mostrar la sección

6. **Botón de retorno**
   - "← VOLVER A PERSONAJES" en ghost button, fixed o sticky en mobile

### Estados
- Loading: skeleton del hero + skeleton del dossier + skeletons de secciones
- Error: ErrorState centrado con opción de retry
- 404 (personaje no existe): mensaje especial "Registro no encontrado en los Archivos HoloNet"

### Fetching
- Hacer fetch del personaje principal
- Hacer fetch del homeworld en paralelo (Promise.all o useEffect separado)
- Hacer fetch de películas (pueden ser múltiples, usar Promise.all)
- Mostrar loading states individuales por sección (no bloquear todo por un fetch secundario)

## OUTPUT ESPERADO
- Código completo de CharacterDetailPage
- La navegación desde la lista debe funcionar
- El diseño debe ser visualmente impresionante, fiel al estilo definido
- Los fetches secundarios (planeta, películas) deben cargarse sin bloquear el render principal
```

---

## 🪐 SPRINT 2 — Planetas & Naves Estelares

**Objetivo:** Replicar el patrón de personajes para Planetas y Naves, introduciendo componentes específicos.

---

### Prompt Sprint 2

```
Continuamos con la Star Wars Wiki. Los módulos de Personajes (lista + detalle) ya están completos. Ahora vamos a implementar Planetas y Naves Estelares reutilizando la arquitectura existente.

## REFACTOR PREVIO NECESARIO
Antes de agregar entidades, refactoriza `CharactersPage` y `CharacterDetailPage` para que sean instancias de componentes genéricos:

1. Crea `EntityListPage` — componente genérico que recibe:
   - `config`: { title, subtitle, endpoint, imageBaseUrl, getImageId, fields, filters }
   - Maneja toda la lógica de fetch, filtros, paginación, y renderiza `EntityCard` + estados

2. Crea `EntityDetailPage` — componente genérico que recibe:
   - `config`: { title, endpoint, getImageId, statFields, relatedSections }
   - Maneja el layout hero + dossier + secciones relacionadas

Esto hace que agregar nuevas entidades sea solo definir un `config` object, no reescribir páginas.

## PLANETAS

**Endpoint:** GET https://swapi.dev/api/planets/
**Imagen:** https://starwars-visualguide.com/assets/img/planets/{id}.jpg
**Campos:** name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population, residents (URLs), films (URLs)

Config específico:
- Filtros: terrain (arid, temperate, frozen, etc.), climate
- Stats del dossier: Diámetro, Clima, Gravedad, Terreno, Agua superficial, Población, Período de rotación
- Secciones relacionadas: Residentes conocidos (mini cards de personajes), Películas

## NAVES ESTELARES

**Endpoint:** GET https://swapi.dev/api/starships/
**Imagen:** https://starwars-visualguide.com/assets/img/starships/{id}.jpg
**Campos:** name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, consumables, hyperdrive_rating, MGLT, starship_class, pilots (URLs), films (URLs)

Config específico:
- Filtros: starship_class (Star Destroyer, Freighter, etc.)
- Stats del dossier: Modelo, Fabricante, Clase, Tripulación, Pasajeros, Longitud, Velocidad, Rating Hiperimpulsor, Costo
- Secciones relacionadas: Pilotos conocidos, Películas
- Badge especial: starship_class en lugar de facción

## TAREAS
1. Implementar el refactor a `EntityListPage` y `EntityDetailPage` genéricos
2. Crear `src/api/planets.js` y `src/api/starships.js`
3. Crear los config objects para Planetas y Naves
4. Instanciar PlanetsPage, PlanetDetailPage, StarshipsPage, StarshipDetailPage usando los genéricos
5. Actualizar la Navbar para que los links funcionen
6. Crear un componente `StatGrid` reutilizable para el panel de dossier (acepta array de { label, value })

## OUTPUT ESPERADO
- Refactor completo sin romper Personajes
- Planetas y Naves funcionando igual que Personajes (lista + detalle + estados)
- Código DRY: agregar una nueva entidad debería requerir solo un config object
```

---

## 👽 SPRINT 3 — Especies & Facciones

**Objetivo:** Agregar entidades relacionales que enriquecen el contexto del lore.

---

### Prompt Sprint 3

```
Continuamos con la Star Wars Wiki. La arquitectura genérica de EntityListPage/EntityDetailPage ya está implementada. Ahora agregamos Especies y Facciones.

## ESPECIES

**Endpoint:** GET https://swapi.dev/api/species/
**Imagen:** https://starwars-visualguide.com/assets/img/species/{id}.jpg
**Campos:** name, classification, designation, average_height, skin_colors, hair_colors, eye_colors, average_lifespan, homeworld (URL), language, people (URLs), films (URLs)

Config:
- Filtros: classification (mammal, reptile, insect, artificial, unknown, etc.), designation (sentient, reptilian, etc.)
- Stats: Clasificación, Designación, Altura promedio, Esperanza de vida promedio, Idioma, Planeta natal
- Secciones: Miembros conocidos (mini cards de personajes), Películas

## FACCIONES

SWAPI no tiene un endpoint de facciones directamente. Implementa facciones como datos curados localmente:

1. Crea `src/data/factions.js` con un array de facciones hardcodeadas:
```javascript
export const FACTIONS = [
  {
    id: "rebel-alliance",
    name: "Alianza Rebelde",
    subtitle: "Por la Restauración de la República",
    description: "...",
    color: "#c62828",
    symbol: "rebel", // para el ícono SVG
    era: ["Guerra de las Galaxias"],
    alignment: "light",
    memberIds: [1, 3, 12, 14], // IDs de SWAPI people
    notablePlanets: [2, 3],
    notableShips: [10, 13]
  },
  // Galactic Empire, Jedi Order, Sith, Mandalorians, Bounty Hunters Guild, etc.
]
```

2. Crea `FactionsPage` con:
   - Grid de cards de facciones con el color/símbolo de cada una
   - Card especial: más grande, con fondo teñido del color de la facción (muy sutil)

3. Crea `FactionDetailPage` con:
   - Hero con nombre de facción, símbolo grande en el fondo (muy opaco, decorativo)
   - Descripción lore
   - Secciones: Miembros notables (fetch de SWAPI con los IDs), Planetas asociados, Naves insignia

4. Crea los SVG símbolos de facciones: Alianza Rebelde (estrella de puntas curvas), Imperio (engranaje de 8 puntas), Orden Jedi (ala), Sith (ojo). Pueden ser SVG paths simples.

## NAVEGACIÓN CONTEXTUAL
Agrega a las cards de Personajes un badge de facción visible. Para asignar facciones a personajes sin datos de SWAPI, usa un mapping local `src/data/characterFactions.js`.

## OUTPUT ESPERADO
- SpeciesPage y SpeciesDetailPage funcionando
- FactionsPage con datos locales curados
- FactionDetailPage con fetch de miembros desde SWAPI
- Símbolos SVG de al menos 5 facciones
- Badges de facción visibles en las cards de Personajes
```

---

## 🚗 SPRINT 4 — Vehículos, Armas & Eventos

**Objetivo:** Completar todas las entidades disponibles y agregar secciones de contenido curado.

---

### Prompt Sprint 4

```
Continuamos con la Star Wars Wiki. Vamos a agregar las entidades restantes: Vehículos, Armas, y Eventos/Películas.

## VEHÍCULOS

**Endpoint:** GET https://swapi.dev/api/vehicles/
**Imagen:** https://starwars-visualguide.com/assets/img/vehicles/{id}.jpg
**Campos:** name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, vehicle_class, pilots (URLs), films (URLs)

Config: idéntico al de Naves pero con vehicle_class como filtro principal.

## ARMAS

SWAPI no tiene endpoint de armas. Implementar como datos curados:

1. Crea `src/data/weapons.js` con al menos 20 armas icónicas:
```javascript
export const WEAPONS = [
  {
    id: "lightsaber-blue",
    name: "Sable de Luz Azul",
    type: "Sable de Luz",
    affiliation: "Jedi",
    description: "...",
    image: "/assets/weapons/lightsaber-blue.jpg", // o URL externa
    stats: { damage: "Extremo", range: "Cuerpo a cuerpo", weight: "~1 kg" },
    knownUsers: [1, 11] // IDs de personajes SWAPI
  },
  // Más armas...
]
```

2. `WeaponsPage`: grid de cards con filtros por type (Sable de Luz, Blaster, Explosivo, etc.) y affiliation
3. `WeaponDetailPage`: layout con imagen, stats, descripción, usuarios conocidos

## EVENTOS / PELÍCULAS (como "Eventos Galácticos")

**Endpoint:** GET https://swapi.dev/api/films/
**Campos:** title, episode_id, opening_crawl, director, producer, release_date, characters (URLs), planets (URLs), starships (URLs), vehicles (URLs), species (URLs)

Presenta las películas como "Eventos Históricos Galácticos" con:
1. `EventsPage`: 
   - Layout especial: lista vertical tipo timeline en lugar de grid
   - Ordenadas por episode_id
   - Cada item: número de episodio (grande, en gold), título, director, fecha, count de personajes/planetas involucrados
   - Fondo de cada item: la crawl text en muy baja opacidad como watermark decorativo

2. `EventDetailPage`:
   - Hero con título del episodio y número grande
   - "Opening Crawl" mostrado en el estilo icónico: texto dorado, perspectiva inclinada hacia el espacio (CSS 3D transform perspective)
   - Director, Productor, Fecha
   - Grid de entidades: Personajes, Planetas, Naves, Vehículos, Especies (con tabs)

## OPENING CRAWL ANIMATION
Crea un componente `OpeningCrawl` que:
- Muestra el texto en amarillo dorado sobre fondo negro estrellado
- Aplica `transform: perspective(300px) rotateX(25deg)` para el efecto inclinado
- Tiene animación de scroll hacia arriba (keyframe animation, 60 segundos)
- Botón para pausar/reanudar la animación
- Respeta `prefers-reduced-motion`

## OUTPUT ESPERADO
- VehiclesPage y VehicleDetailPage funcionando con SWAPI
- WeaponsPage y WeaponDetailPage con datos curados
- EventsPage con layout timeline
- EventDetailPage con el Opening Crawl animado
- Navegación actualizada con todos los módulos
```

---

## 🔍 SPRINT 5 — Búsqueda Global & Sistema de Filtros

**Objetivo:** Sistema de búsqueda cross-entidad y filtros avanzados persistentes.

---

### Prompt Sprint 5

```
Continuamos con la Star Wars Wiki. Todas las entidades están implementadas. Ahora vamos a construir el sistema de búsqueda global y los filtros avanzados.

## BÚSQUEDA GLOBAL

### SearchContext
Crea `src/context/SearchContext.jsx`:
- Estado: { query, results, loading, error, isOpen }
- Acciones: setQuery, clearSearch, closeSearch
- Efecto: cuando `query` cambia (debounce 300ms), hace búsqueda simultánea en:
  - /people/?search=query
  - /planets/?search=query
  - /starships/?search=query
  - /vehicles/?search=query
  - /species/?search=query
- Agrupa resultados por categoría

### Componente `GlobalSearch`
- Se activa al hacer click en el ícono de búsqueda en la Navbar
- Muestra un overlay/modal de búsqueda (fullscreen o 600px centered)
- Input grande centrado con placeholder "Buscar en la galaxia..."
- Resultados agrupados por categoría (sección "Personajes", sección "Planetas", etc.)
- Cada resultado: imagen thumbnail + nombre + tipo badge
- Click en resultado navega a la página de detalle y cierra el search
- Sin resultados: EmptyState
- Loading: skeletons de resultados
- Atajo de teclado: CMD+K o CTRL+K para abrir, ESC para cerrar

## SISTEMA DE FILTROS AVANZADOS

### FilterContext
Crea `src/context/FilterContext.jsx`:
- Estado por entidad: { characters: { gender, films }, planets: { terrain, climate }, etc. }
- Acciones: setFilter(entity, key, value), clearFilters(entity), clearAllFilters
- Persistencia: guardar filtros en sessionStorage para mantenerlos al volver

### Componente `FilterPanel` (sidebar o drawer)
- En desktop: sidebar colapsable en páginas de lista
- En mobile: drawer que se abre desde abajo
- Para cada entidad, muestra los filtros relevantes como:
  - Checkboxes para filtros multi-select (ej: género)
  - Range slider para valores numéricos (ej: diámetro del planeta)
  - Chips seleccionables para categorías
- Contador de filtros activos en el botón de apertura
- Botón "Limpiar todos" cuando hay filtros activos

### Filtros por entidad:
- **Personajes:** Género, Especie (fetch de species), Film
- **Planetas:** Clima, Terreno, Población (range: deshabitado → trillones)
- **Naves:** Clase, Fabricante, Rating hiperimpulsor (range)
- **Vehículos:** Clase, Fabricante
- **Especies:** Clasificación, Designación

## MEJORA: PÁGINA DE INICIO

Actualiza `HomePage` con:
1. Hero section con estrellado animado (CSS stars) y el nombre de la app en Orbitron
2. Sección "Explorar la Galaxia": 8 tiles de categorías con ícono + nombre + count de entidades
3. Sección "Registros Recientes": 4 cards random de personajes/planetas
4. Sección "Eventos Galácticos": mini timeline de las 6 películas

## OUTPUT ESPERADO
- SearchContext implementado y conectado al Navbar
- GlobalSearch modal funcionando con resultados reales de SWAPI
- FilterContext con persistencia en sessionStorage
- FilterPanel visual completo y funcional para todas las entidades
- HomePage completamente rediseñada y funcional
```

---

## ✨ SPRINT 6 — UX Polish, Loading States & Error Handling

**Objetivo:** Pulir toda la experiencia: transiciones, skeletons, error boundaries, accesibilidad.

---

### Prompt Sprint 6

```
Continuamos con la Star Wars Wiki. Toda la funcionalidad principal está implementada. Este sprint es de polish y robustez UX.

## 1. ERROR BOUNDARIES

Implementa un `ErrorBoundary` de clase en React que:
- Captura errores de render en cualquier subtree
- Muestra un fallback con el diseño de ErrorState (TRANSMISSION FAILED)
- Logea el error (console.error para ahora)
- Prop `fallback` customizable
- Envuelve cada Page-level component en un ErrorBoundary

## 2. LOADING STATES MEJORADOS

### Lightsaber Progress Bar
- Barra de progreso fina (3px alto) en la parte superior de la pantalla
- Aparece en cualquier navegación entre rutas
- Animación: color que va de #4fc3f7 (azul) a #c9a84c (gold), longitud animada
- Implementar con un contexto de navegación o con React Router's useNavigation

### Skeleton Improvements
- Agregar variante "list-item" al LoadingSkeleton
- En páginas de detalle, el skeleton debe tener la misma estructura exacta que el contenido real (evitar el "layout shift")
- Usar `aria-busy="true"` en contenedores mientras cargan

## 3. TRANSICIONES DE PÁGINA

Implementa transiciones entre rutas:
- Fade-in de 300ms al entrar a una nueva ruta
- Usa CSS transitions con un wrapper que cambia opacity
- No usar librerías externas — implementar con hooks de React Router (useLocation)

## 4. SCROLL RESTORATION

- Al navegar de vuelta a una lista, restaurar la posición de scroll
- Al navegar a una nueva página, hacer scroll to top
- Implementar con el componente `ScrollToTop` usando `useLocation`

## 5. INFINITE SCROLL (OPCIONAL, como mejora de UX)

Reemplaza la paginación de botones por infinite scroll en las listas:
- Usar Intersection Observer API para detectar cuándo el último card está visible
- Cargar la siguiente página y appendear al array existente
- Mostrar un skeleton de 3 cards al cargar más
- Si no hay más páginas: mensaje "Has explorado toda la galaxia" con un ícono
- Mantener la URL con ?page=N para que sea sharable

## 6. EMPTY STATES CONTEXTUALES

Cada entidad debe tener un empty state personalizado:
- Personajes: "No se encontraron individuos en los archivos del HoloNet"
- Planetas: "Sector galáctico sin registros"
- Naves: "No hay naves en este cuadrante"
- Búsqueda global: "La galaxia no encontró resultados para '{query}'"

## 7. ACCESIBILIDAD BÁSICA

- Todo elemento interactivo debe tener `aria-label` descriptivo
- Foco visible: outline en gold (#c9a84c) en lugar del default del browser
- Skip to main content link (visible al tabular)
- Roles semánticos: nav, main, aside, section con aria-label
- Las imágenes deben tener alt text descriptivo
- Los estados de loading deben anunciarse con aria-live="polite"

## OUTPUT ESPERADO
- ErrorBoundary envolviendo todas las páginas
- Progress bar de lightsaber en navegación
- Transiciones fade entre rutas
- Scroll restoration funcionando
- Opcionalmente: infinite scroll implementado
- Empty states contextuales para cada entidad
- Mejoras de accesibilidad aplicadas
```

---

## 🚀 SPRINT 7 — Performance, SEO & Deploy

**Objetivo:** Optimización final, meta tags, y deploy a producción.

---

### Prompt Sprint 7

```
Último sprint de la Star Wars Wiki. Todo el contenido y UX está implementado. Vamos a optimizar para producción.

## 1. PERFORMANCE

### Code Splitting
- Implementa lazy loading para cada Page component con React.lazy y Suspense
- Cada ruta debe ser un chunk separado
- El Suspense fallback debe ser el LoadingSkeleton apropiado (no un spinner genérico)

### Memoización
- Audita componentes que se re-renderizan innecesariamente
- Aplica React.memo a: EntityCard, StatGrid, FilterPanel, Navbar
- Aplica useMemo para: listas filtradas, agrupamiento de resultados de búsqueda
- Aplica useCallback para: handlers de filtros, callbacks de paginación

### Image Optimization
- Implementa lazy loading de imágenes con loading="lazy"
- Agrega un placeholder blur mientras la imagen carga (puedes usar un tiny base64 placeholder)
- Si la imagen falla, mostrar un fallback SVG con el símbolo de SW

### API Caching
- Implementa un cache simple en memoria con un Map:
  `const cache = new Map()` en el módulo de API
- Las peticiones al mismo URL en la misma sesión usan el cache
- TTL de 5 minutos (guardar timestamp junto al data)

## 2. META TAGS & SEO BÁSICO

- Instala `react-helmet-async` o usa directamente el <head> con un hook
- Cada página debe tener:
  - `<title>`: "{Nombre de entidad} | HoloNet Archives"
  - `<meta name="description">`: descripción contextual
  - `<meta property="og:title">`, `og:description`, `og:image`
- En páginas de detalle, usar el nombre y descripción de la entidad

## 3. VARIABLES DE ENTORNO

- Crea `.env.example` con las variables necesarias
- Crea `.env.local` para desarrollo
- Todas las URLs de API deben venir de variables de entorno:
  - `VITE_SWAPI_URL=https://swapi.dev/api`
  - `VITE_IMAGES_URL=https://starwars-visualguide.com/assets/img`

## 4. TESTING BÁSICO

Escribe tests para las funciones más críticas:
- `useFetch` hook: test que verifica los 3 estados (loading, data, error)
- `EntityCard`: test de render y de navegación al hacer click
- Funciones de utils: extractIdFromUrl, formatHeight, formatPopulation
- Usa Vitest + React Testing Library (ya incluido en Vite)

## 5. BUILD & DEPLOY

- Verifica que `npm run build` pasa sin warnings críticos
- Analiza el bundle con `vite-bundle-visualizer` e identifica chunks grandes
- Configura el router para funcionar en hosting estático (añadir `_redirects` para Netlify o `vercel.json` para Vercel)
- README.md completo con: descripción del proyecto, APIs usadas, instrucciones de instalación, capturas de pantalla, decisiones de arquitectura

## 6. PULIDO FINAL

- Revisa todos los `console.log` de debug y elimínalos
- Verifica que todos los PropTypes están definidos (o convierte a TypeScript si el tiempo lo permite)
- Revisa la consistencia visual: todas las páginas deben sentirse parte del mismo sistema de diseño
- Mobile testing: verifica la experiencia en viewport 375px

## OUTPUT ESPERADO
- Lazy loading implementado en todas las rutas
- Cache de API funcionando
- Meta tags en todas las páginas
- Al menos 5 tests pasando
- Build de producción sin errores
- README completo
- App deployada en Vercel o Netlify (instrucciones incluidas)
```

---

---

## 📋 APÉNDICE — Checklists Rápidos por Sprint

### Sprint 0 ✓
- [ ] Vite + React corriendo
- [ ] Tokens CSS configurados
- [ ] Navbar con diseño Star Wars
- [ ] Routing con placeholders
- [ ] useFetch hook funcional

### Sprint 1 ✓
- [ ] EntityCard componente
- [ ] LoadingSkeleton (card + detail)
- [ ] ErrorState + EmptyState
- [ ] Button (4 variantes)
- [ ] CharactersPage con grid + filtros + paginación
- [ ] CharacterDetailPage con dossier + secciones relacionadas

### Sprint 2 ✓
- [ ] Refactor a EntityListPage/EntityDetailPage genérico
- [ ] PlanetsPage + PlanetDetailPage
- [ ] StarshipsPage + StarshipDetailPage
- [ ] StatGrid reutilizable

### Sprint 3 ✓
- [ ] SpeciesPage + SpeciesDetailPage
- [ ] FACTIONS data local
- [ ] FactionsPage + FactionDetailPage
- [ ] SVG símbolos de 5 facciones
- [ ] Badges de facción en PersonajeCard

### Sprint 4 ✓
- [ ] VehiclesPage + VehicleDetailPage
- [ ] WEAPONS data local
- [ ] WeaponsPage + WeaponDetailPage
- [ ] EventsPage con timeline
- [ ] EventDetailPage con Opening Crawl animado

### Sprint 5 ✓
- [ ] SearchContext + GlobalSearch modal
- [ ] Atajo CMD+K funcional
- [ ] FilterContext con persistencia
- [ ] FilterPanel (desktop sidebar + mobile drawer)
- [ ] HomePage rediseñada

### Sprint 6 ✓
- [ ] ErrorBoundary en todas las páginas
- [ ] Lightsaber progress bar
- [ ] Page transitions fade
- [ ] Scroll restoration
- [ ] Empty states contextuales
- [ ] Accesibilidad básica

### Sprint 7 ✓
- [ ] Code splitting con lazy
- [ ] API cache en memoria
- [ ] Meta tags en todas las páginas
- [ ] Tests básicos pasando
- [ ] Build sin errores
- [ ] README completo
- [ ] Deploy exitoso

---

*"Do. Or do not. There is no try." — Yoda*
