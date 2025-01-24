import React from 'react';
import { BasePieDePagina } from './styles';

// Componente del pie de página
function PieDePagina() {
  return (
    <BasePieDePagina>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgullosamente creado durante la
        {' '}
        <a href="https://www.alura.com.br/">
          Inmersión React de Alura
        </a>
      </p>
    </BasePieDePagina>
  );
}

export default PieDePagina;
