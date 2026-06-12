# HoloNet Archives | Star Wars Wiki

Una enciclopedia inmersiva y performante del universo Star Wars construida con React 18 y Vite.

## 🚀 Características

- **Exploración Total:** Personajes, Planetas, Naves, Vehículos, Especies, Armas, Facciones y Eventos Galácticos.
- **Búsqueda Global (Ctrl+K):** Escaneo simultáneo de todas las categorías en tiempo real.
- **Filtros Avanzados:** Sistema de filtrado persistente (sessionStorage) con multi-selección.
- **Experiencia Cinemática:**
  - Opening Crawl en 3D para cada película.
  - Barra de progreso estilo Lightsaber.
  - Transiciones fluidas entre archivos.
- **Optimización de Grado Militar:**
  - Code Splitting (Lazy Loading) por ruta.
  - Caché de API en memoria con TTL.
  - Memoización de componentes críticos.
  - Infinite Scroll con Intersection Observer.
- **Robustez:** Error Boundaries con fallbacks contextuales y manejo de transmisiones fallidas.

## 🛠️ Tecnologías

- **Core:** React 18, Vite, React Router v7.
- **Styling:** CSS Modules (Diseño basado en Tokens).
- **Estado:** React Context + useReducer / Hooks personalizados.
- **API:** SWAPI (Star Wars API) con soporte de mirrors estables.
- **SEO:** React Helmet Async.

## 📦 Instalación

1. Clona el repositorio.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Crea un archivo `.env` basado en `.env.example`.
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## 🏗️ Build

Para generar la versión de producción:
```bash
npm run build
```

---
*Propiedad de los Archivos del HoloNet - Sistema de Datos V1.0.42*
