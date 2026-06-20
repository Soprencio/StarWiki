const fs = require('fs');
const path = require('path');
const https = require('https');

// URL base del espejo seguro (elige una de las tres)
// const BASE_URL = 'https://raw.githubusercontent.com/abelalejandre/swapi-images/master/';
// const BASE_URL = 'https://raw.githubusercontent.com/abrahamcalf/swapi-proxy/master/images/';
// const BASE_URL = 'https://web.archive.org/web/20220601000000/https://starwars-visualguide.com/assets/img/';
const BASE_URL = 'https://web.archive.org/web/20220601000000/https://starwars-visualguide.com/assets/img/'; // <-- ACTIVA ESTA LÍNEA y comenta las otras

// Categorías y rangos de ID máximos (basados en límites conocidos de SWAPI)
const CATEGORIAS = [
  { nombre: 'personajes', maxId: 90 },   // SWAPI people: 1-87
  { nombre: 'planetas', maxId: 65 },     // SWAPI planets: 1-61
  { nombre: 'naves', maxId: 45 },        // SWAPI starships: 1-39
  { nombre: 'vehiculos', maxId: 45 },    // SWAPI vehicles: 1-39
  { nombre: 'especies', maxId: 40 },     // SWAPI species: 1-37
  { nombre: 'peliculas', maxId: 10 }     // SWAPI films: 1-7
];

// Función para descargar una imagen específica
function descargarImagen(categoria, id) {
  const url = `${BASE_URL}${categoria}/${id}.jpg`;
  const dir = path.resolve(__dirname, 'src', 'assets', 'imagenes', categoria);
  const rutaArchivo = path.join(dir, `${id}.jpg`);

  // Crear directorio si no existe
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const archivo = fs.createWriteStream(rutaArchivo);
  https.get(url, (res) => {
    if (res.statusCode === 200) {
      res.pipe(archivo);
      archivo.on('finish', () => {
        archivo.close();
        console.log(`✅ Descargada: ${url}`);
      });
    } else {
      console.log(`⚠️ Falló (${res.statusCode}): ${url}`);
      archivo.close();
      fs.unlink(rutaArchivo, () => {}); // Eliminar archivo vacío
    }
  }).on('error', (err) => {
    console.log(`❌ Error: ${url} → ${err.message}`);
    archivo.close();
    fs.unlink(rutaArchivo, () => {});
  });
}

// Ejecutar descarga para todas las categorías e IDs
console.log('🚀 Iniciando descarga masiva de imágenes...');
CATEGORIAS.forEach(({ nombre, maxId }) => {
  for (let id = 1; id <= maxId; id++) {
    descargarImagen(nombre, id);
  }
});
console.log('🎉 ¡Descarga completada! Las imágenes están en src/assets/imagenes/');