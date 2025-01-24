import styled from 'styled-components';

// Estilo del título
export const Titulo = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  padding: 20px;
  background: red;
  border-radius: 4px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

// Estilo del enlace extra
export const EnlaceExtra = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

// Estilo de la lista de tarjetas de video
export const ListaTarjetasVideo = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  
  li {
    margin-right: 16px;
  }
`;

// Estilo del contenedor del grupo de tarjetas de video
export const ContenedorGrupoTarjetasVideo = styled.section`
  color: var(--blanco); // Asegúrate de definir la variable --blanco en tu CSS global
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px;
`;