import { useState } from 'react';

// Hook personalizado para manejar formularios
function useFormulario(valoresIniciales) {
  // Asegúrate de que el nombre del hook comience con "use"
  const [valores, setValores] = useState(valoresIniciales);

  // Función para actualizar un valor específico en el formulario
  function establecerValor(clave, valor) {
    setValores({
      ...valores,
      [clave]: valor,
    });
  }

  // Manejador de cambios en los campos del formulario
  function manejarCambio(infoDelEvento) {
    establecerValor(
      infoDelEvento.target.getAttribute('name'),
      infoDelEvento.target.value
    );
  }

  // Función para limpiar el formulario y establecer los valores iniciales
  function limpiarFormulario() {
    setValores(valoresIniciales);
  }

  return { manejarCambio, valores, limpiarFormulario };
}

export default useFormulario; 
