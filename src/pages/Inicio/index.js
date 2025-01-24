import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import datosIniciales from '../../data/datos_iniciales.json';
import BannerPrincipal from '../../components/BannerPrincipal';
import Carrusel from '../../components/Carrusel';
import PaginaPredeterminada from '../../components/PaginaPredeterminada';
import repositorioCategorias from '../../repositories/categorias';

// Componente principal de la página de inicio
function Inicio() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    repositorioCategorias.obtenerTodasConVideos()
      .then((categoriasConVideos) => {
        setDatos(categoriasConVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PaginaPredeterminada paddingTotal={0}>
      {datos.length === 0 && (<div>Cargando...</div>)}

      {datos.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerPrincipal
                tituloVideo={datos[0].videos[0].titulo}
                url={datos[0].videos[0].url}
                descripcionVideo={"¡Descubre el camino hacia el éxito como desarrollador Java! 💻🚀 En esta entrevista, exploramos los secretos del mundo Java y respondemos a tus preguntas clave."}
              />

              <Carrusel
                ignorarPrimerVideo
                categoria={datos[0]}
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
