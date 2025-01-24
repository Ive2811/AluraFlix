import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// Contenedor principal del campo del formulario
const ContenedorCampoFormulario = styled.div`
  position: relative; 
  textarea {
    min-height: 150px;
  }

  input[type="color"] {
    padding-left: 56px;
  }
`;

// Estilo del label del campo del formulario
const Etiqueta = styled.label``;
Etiqueta.Texto = styled.span`
  color: #E5E5E5;
  height: 57px;
  position: absolute; 
  top: 0;
  left: 16px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  
  transition: .1s ease-in-out;
`;

// Estilo del input del campo del formulario
const Entrada = styled.input`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  
  padding: 16px 16px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
  &:focus {
    border-bottom-color: var(--primary);
  }

  &:focus:not([type="color"]) + span {
    transform: scale(.6) translateY(-10px);
  }

  ${({ tieneValor }) => tieneValor && css`
    &:not([type="color"]) + span {
      transform: scale(.6) translateY(-10px);
    }
  `}
`;

// Componente del campo del formulario
function CampoFormulario({
  etiqueta, tipo, nombre, valor, onChange, sugerencias,
}) {
  const idCampo = `id_${nombre}`;
  const esTextarea = tipo === 'textarea';
  const tag = esTextarea ? 'textarea' : 'input';

  const tieneValor = Boolean(valor.length);
  const tieneSugerencias = Boolean(sugerencias.length);

  return (
    <ContenedorCampoFormulario>
      <Etiqueta htmlFor={idCampo}>
        <Entrada
          as={tag}
          id={idCampo}
          type={tipo}
          value={valor}
          name={nombre}
          tieneValor={tieneValor}
          onChange={onChange}
          autoComplete={tieneSugerencias ? 'off' : 'on'}
          list={tieneSugerencias ? `sugerenciaPara_${idCampo}` : undefined}
        />
        <Etiqueta.Texto>
          {etiqueta}:
        </Etiqueta.Texto>
        {
          tieneSugerencias && (
            <datalist id={`sugerenciaPara_${idCampo}`}>
              {sugerencias.map((sugerencia) => (
                <option value={sugerencia} key={`sugerenciaPara_${idCampo}_opcion${sugerencia}`}>
                  {sugerencia}
                </option>
              ))}
            </datalist>
          )
        }
      </Etiqueta>
    </ContenedorCampoFormulario>
  );
}

CampoFormulario.defaultProps = {
  tipo: 'text',
  valor: '',
  onChange: () => {},
  sugerencias: [],
};

CampoFormulario.propTypes = {
  etiqueta: PropTypes.string.isRequired,
  tipo: PropTypes.string,
  nombre: PropTypes.string.isRequired,
  valor: PropTypes.string,
  onChange: PropTypes.func,
  sugerencias: PropTypes.arrayOf(PropTypes.string),
};

export default CampoFormulario;
