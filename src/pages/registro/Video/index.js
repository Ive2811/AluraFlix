import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PaginaPredeterminada from '../../../components/PaginaPredeterminada';
import usarFormulario from '../../../hooks/usarFormulario';
import CampoFormulario from '../../../components/Carrusel/components/CampoFormulario';
import Boton from '../../../components/Boton';
import repositorioVideos from '../../../repositories/videos';
import repositorioCategorias from '../../../repositories/categorias';

// Componente de registro de video
function RegistroVideo() {
  const historial = useHistory();
  const [categorias, setCategorias] = useState([]);
  const titulosCategorias = categorias.map(({ titulo }) => titulo);
  const { manejarCambio, valores } = usarFormulario({
    titulo: 'Video estándar',
    url: 'https://www.youtube.com/watch?v=jOAU81jdi-c',
    categoria: 'Front End',
  });

  useEffect(() => {
    repositorioCategorias
      .getAll()
      .then((categoriasDelServidor) => {
        setCategorias(categoriasDelServidor);
      });
  }, []);

  return (
    <PaginaPredeterminada>
      <h1>Registro de Video</h1>

      <form onSubmit={(evento) => {
        evento.preventDefault();
        // alert('Video Registrado con éxito!!!1!');

        const categoriaElegida = categorias.find((categoria) => {
          return categoria.titulo === valores.categoria;
        });

        repositorioVideos.create({
          titulo: valores.titulo,
          url: valores.url,
          categoriaId: categoriaElegida.id,
        })
        .then(() => {
          console.log('Registrado con éxito!');
          historial.push('/');
        });
      }}>

        <CampoFormulario
          etiqueta="Título del Video"
          nombre="titulo"
          valor={valores.titulo}
          onChange={manejarCambio}
        />

        <CampoFormulario
          etiqueta="URL"
          nombre="url"
          valor={valores.url}
          onChange={manejarCambio}
        />

        <CampoFormulario
          etiqueta="Categoría"
          nombre="categoria"
          valor={valores.categoria}
          onChange={manejarCambio}
          sugerencias={titulosCategorias}
        />

        <Boton type="submit">
          Registrar
        </Boton>
      </form>

      <br />
      <br />

      <Link to="/registro/categoria">
        Registrar Categoría
      </Link>
    </PaginaPredeterminada>
  );
}

export default RegistroVideo;
