import React, { useState, useEffect } from 'react';
import PaginaPredeterminada from '../../../components/PaginaPredeterminada';
import { Link } from 'react-router-dom';
import CampoFormulario from '../../../components/Carrusel/components/CampoFormulario';
import Boton from '../../../components/Boton';
import usarFormulario from '../../../hooks/usarFormulario';

// Componente de registro de categoría
function RegistroCategoria() {
  const valoresIniciales = {
    nombre: '',
    descripcion: '',
    color: ''
  };

  const { manejarCambio, valores, limpiarFormulario } = usarFormulario(valoresIniciales);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias';
      fetch(URL)
        .then(async (respuestaDelServidor) => {
          if (respuestaDelServidor.ok) {
            const respuesta = await respuestaDelServidor.json();
            setCategorias(respuesta);
            return;
          }
          throw new Error('No fue posible obtener los datos');
        });
    }
  }, []);

  return (
    <PaginaPredeterminada>
      <h1>Registro de Categoría: {valores.nombre}</h1>

      <form onSubmit={function manejarEnvio(infoDelEvento) {
        infoDelEvento.preventDefault();
        setCategorias([...categorias, valores]);
        limpiarFormulario();
      }}>
        <CampoFormulario
          etiqueta="Nombre de la Categoría"
          tipo="text"
          nombre="nombre"
          valor={valores.nombre}
          onChange={manejarCambio}
        />

        <CampoFormulario
          etiqueta="Descripción"
          tipo="textarea"
          nombre="descripcion"
          valor={valores.descripcion}
          onChange={manejarCambio}
        />

        <CampoFormulario
          etiqueta="Color"
          tipo="color"
          nombre="color"
          valor={valores.color}
          onChange={manejarCambio}
        />

        <Boton>Registrar</Boton>
      </form>

      <ul>
        {categorias.map((categoria) => (
          <li key={categoria.titulo}>{categoria.titulo}</li>
        ))}
      </ul>

      <Link to="/">
        Ir a inicio
      </Link>
    </PaginaPredeterminada>
  );
}

export default RegistroCategoria;
