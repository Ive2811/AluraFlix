import styled from 'styled-components';

// Botón estilizado con propiedades específicas
const Boton = styled.button`
  color: var(--blanco);
  border: 1px solid var(--blanco);
  background: var(--negro);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;

  // Estilos para el estado de hover y focus
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Boton;
