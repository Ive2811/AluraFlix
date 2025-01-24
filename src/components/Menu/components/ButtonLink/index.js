import React from 'react';

// Componente del enlace con estilo de botón
function EnlaceBoton(props) {
  // props => {}

  return (
    <a href={props.href} className={props.className}>
      {props.children}
    </a>
  );
}

export default EnlaceBoton;
