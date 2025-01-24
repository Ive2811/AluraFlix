import config from '../config';

const URL_CATEGORIAS = `${config.URL_BACKEND}/categorias`;

// Función para obtener todas las categorías
function obtenerTodas() {
  return fetch(`${URL_CATEGORIAS}`)
    .then(async (respuestaDelServidor) => {
      if (respuestaDelServidor.ok) {
        const respuesta = await respuestaDelServidor.json();
        return respuesta;
      }

      throw new Error('No fue posible obtener los datos :(');
    });
}

// Función para obtener todas las categorías con videos
function obtenerTodasConVideos() {
  return fetch(`${URL_CATEGORIAS}?_embed=videos`)
    .then(async (respuestaDelServidor) => {
      if (respuestaDelServidor.ok) {
        const respuesta = await respuestaDelServidor.json();
        return respuesta;
      }
      throw new Error('No fue posible obtener los datos');
    });
}

export default { obtenerTodas, obtenerTodasConVideos };
