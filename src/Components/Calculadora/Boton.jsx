import React from 'react';
import '../../css/boton.css'

const Boton = (props) => {
  const esOperador = (valor) => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  const esIgual = (valor) => {
    return valor === '=';
  };

  const esNumero = (valor) => {
    return !isNaN(valor);
  };

  const obtenerClase = () => {
    if (esOperador(props.children)) {
      return 'operador';
    } else if (esIgual(props.children)) {
      return 'boton-igual';
    } else if (esNumero(props.children)) {
      return 'numero';
    }
    return '';
  };

  return (
    <div
      className={`boton-contenedor ${obtenerClase()}`.trim()}
      onClick={() => props.manejarClic(props.children)}
    >
      {props.children}
    </div>
  );
};

export default Boton;
