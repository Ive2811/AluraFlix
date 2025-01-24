import React from 'react';
import { ContenedorGrupoTarjetasVideo, Titulo, EnlaceExtra } from './styles';
import TarjetaVideo from './components/TarjetaVideo';
import Deslizador, { ElementoDeslizador } from './components/Deslizador';

// Componente del carrusel
function Carrusel({ ignorarPrimerVideo, categoria }) {
  const tituloCategoria = categoria.titulo;
  const colorCategoria = categoria.cor;
  const enlaceExtraCategoria = categoria.link_extra;
  const videos = categoria.videos;

  return (
    <ContenedorGrupoTarjetasVideo>
      {tituloCategoria && (
        <>
          <Titulo style={{ backgroundColor: colorCategoria || 'red' }}>
            {tituloCategoria}
          </Titulo>
          {enlaceExtraCategoria && 
            <EnlaceExtra href={enlaceExtraCategoria.url} target="_blank">
              {enlaceExtraCategoria.text}  
            </EnlaceExtra>
          }
        </>
      )}
      <Deslizador>
        {videos.map((video, indice) => {
          if (ignorarPrimerVideo && indice === 0) {
            return null;
          }

          return (
            <ElementoDeslizador key={video.titulo}>
              <TarjetaVideo
                tituloVideo={video.titulo}
                urlVideo={video.url}
                colorCategoria={colorCategoria}
              />
            </ElementoDeslizador>
          );
        })}
      </Deslizador>
    </ContenedorGrupoTarjetasVideo>
  );
}

export default Carrusel;
