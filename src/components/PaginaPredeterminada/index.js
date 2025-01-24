import React from 'react';
import Menu from '../Menu';
import PieDePagina from '../PieDePagina';
import styled, { css } from 'styled-components';

// Estilo principal de la página
const Principal = styled.main`
  background-color: var(--negro);
  color: var(--blanco);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
  ${({ paddingTotal }) => css`
    padding: ${paddingTotal}
  `}
`;

// Componente de la página por defecto
function PaginaPredeterminada({ children, paddingTotal }) {
  return (
    <>
      <Menu />
      <Principal paddingTotal={paddingTotal}>
        {children}
      </Principal>
      <PieDePagina />
    </>
  );
}

export default PaginaPredeterminada;
