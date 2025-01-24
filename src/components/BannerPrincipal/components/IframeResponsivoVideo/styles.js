import styled from 'styled-components';

// Contenedor del video que establece el aspecto y la posición del iframe
export const ContenedorVideo = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* Mantiene una proporción de 16:9 para el video */
  @media (max-width: 800px) {
    display: none; /* Oculta el video en pantallas pequeñas */
  }
`;

// Iframe responsivo que se ajusta al contenedor del video
export const IframeResponsivo = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%; /* Asegura que el iframe llene todo el contenedor */
`;