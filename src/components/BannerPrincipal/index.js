import React from 'react';
// Importa el componente responsivo del iframe de video y los estilos necesarios
import IframeResponsivoVideo from './components/IframeResponsivoVideo';
import { ContenedorPrincipalBanner, ContenedorAreaContenido, BotonVer } from './styles';

// Función para obtener el ID de YouTube a partir de la URL
function obtenerIdYouTube(urlYouTube) {
  return urlYouTube
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

// Componente principal del banner
export default function BannerPrincipal({
  tituloVideo,
  descripcionVideo,
  url,
}) {
  const idYouTube = obtenerIdYouTube(url);
  const urlImagenFondo = `https://img.youtube.com/vi/${idYouTube}/maxresdefault.jpg`;

  return (
    <ContenedorPrincipalBanner backgroundImage={urlImagenFondo}>
      <ContenedorAreaContenido>
        <ContenedorAreaContenido.Item>
          <ContenedorAreaContenido.Titulo>
            {tituloVideo}
          </ContenedorAreaContenido.Titulo>

          <ContenedorAreaContenido.Descripcion>
            {descripcionVideo}
          </ContenedorAreaContenido.Descripcion>
        </ContenedorAreaContenido.Item>

        <ContenedorAreaContenido.Item>
          <IframeResponsivoVideo
            idYouTube={idYouTube}
          />
          <BotonVer>
            Ver
          </BotonVer>
        </ContenedorAreaContenido.Item>
      </ContenedorAreaContenido>
    </ContenedorPrincipalBanner>
  );
}
