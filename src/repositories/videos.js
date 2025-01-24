import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

// Función para crear un nuevo video
function crear(objetoDelVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDelVideo),
  })
    .then(async (respuestaDelServidor) => {
      if (respuestaDelServidor.ok) {
        const respuesta = await respuestaDelServidor.json();
        return respuesta;
      }

      throw new Error('No fue posible registrar los datos :(');
    });
}

export default {
  crear,
};
