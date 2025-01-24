import React from 'react';

// Importa los estilos para el contenedor del video y el iframe responsivo
import { ContenedorVideo, IframeResponsivo } from './styles';

// Componente funcional que muestra un iframe de YouTube responsivo
function IframeResponsivoYouTube({ idYouTube }) {
  return (
    <ContenedorVideo>
      <IframeResponsivo
        title="Título del Iframe"
        src={`https://www.youtube.com/embed/${idYouTube}?autoplay=0&mute=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </ContenedorVideo>
  );
}

export default IframeResponsivoYouTube;
