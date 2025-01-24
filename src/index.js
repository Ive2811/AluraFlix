import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import datosIniciales from 'src/data/datos_iniciales.json';
import BannerPrincipal from '../../components/BannerPrincipal';
import Carrusel from '../../components/Carrusel';
import PaginaPredeterminada from '../../components/PaginaPredeterminada';

// Componente principal de la página de inicio
function Inicio() {
  const [datosIniciales, setDatosIniciales] = useState([]);

  useEffect(() => {
    repositorioCategorias.getAllWithVideos()
      .then((categoriasConVideos) => {
        setDatosIniciales(categoriasConVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PaginaPredeterminada paddingTotal={0}>
      {datosIniciales.length === 0 && (<div>Cargando...</div>)}

      {datosIniciales.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerPrincipal
                tituloVideo={datosIniciales[0].videos[0].titulo}
                url={datosIniciales[0].videos[0].url}
                descripcionVideo={"¿Qué es Front-end? Trabajando en el área, los términos HTML, CSS y JavaScript forman parte de la rutina de las desarrolladoras y desarrolladores. Pero, ¿qué hacen en realidad? ¡Descúbrelo con Vanessa!"}
              />

              <Carrusel
                ignorarPrimerVideo
                categoria={datosIniciales[0]}
              />
            </div>
          );
        }

        return (
          <Carrusel
            key={categoria.id}
            categoria={categoria}
          />
        );
      })}
    </PaginaPredeterminada>
  );
}

export default Inicio;
