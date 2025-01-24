import React from 'react';
import { BasePieDePagina } from './styles';

// Componente del pie de página
function PieDePagina() {
  return (
    <BasePieDePagina>
      <a href="https://www.aluracursos.com/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgullosamente creado durante la
        {' '}
        <a href="https://www.aluracursos.com/">
          formación React de Alura Latam
        </a>
      </p>
    </BasePieDePagina>
  );
}

export default PieDePagina;
