import styled from 'styled-components';

// Estilo base del pie de página
export const BasePieDePagina = styled.footer`
  background: var(--negro);
  border-top: 2px solid var(--primario);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--blanco);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
