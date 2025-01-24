import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

// Contenedor principal del slider
const Contenedor = styled.ul`
  padding: 0;
  margin: 0;

  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }

  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 16px;
  }
`;

// Elemento del slider que contiene las imágenes
export const ElementoSlider = styled.li`
  margin-right: 16px;
  
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

// Componente principal del slider
const Slider = ({ children }) => (
  <Contenedor>
    <SlickSlider
      dots={false}
      infinite={false}
      speed={300}
      centerMode={false}
      variableWidth={true}
      adaptiveHeight={true}
    >
      {children}
    </SlickSlider>
  </Contenedor>
);

export default Slider;
