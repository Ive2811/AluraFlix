import React from 'react';
import { ContenedorTarjetaVideo } from './styles';

// Función para obtener el ID de YouTube a partir de la URL
function obtenerIdYouTube(urlYouTube) {
  return urlYouTube
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

// Componente de la tarjeta de video
function TarjetaVideo({ tituloVideo, urlVideo, colorCategoria }) {
  const imagen = `https://img.youtube.com/vi/${obtenerIdYouTube(urlVideo)}/hqdefault.jpg`;
  return (
    <ContenedorTarjetaVideo
      url={imagen}
      href={urlVideo}
      target="_blank"
      style={{ borderColor: colorCategoria || 'red' }}
      title={tituloVideo}
    />
  );
}

export default TarjetaVideo;
