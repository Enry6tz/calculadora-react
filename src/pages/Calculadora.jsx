import React, { useState } from 'react';
import '../css/Calculadora.css'
import Boton from '../Components/Calculadora/Boton';
import BotonClear from '../Components/Calculadora/BotonClear';
import Pantalla from '../Components/Calculadora/Pantalla';
import { evaluate } from 'mathjs';

function Calculadora() {
  const [input, setInput] = useState('');

  const calcularResultado = () => {
    try {
      if (input && typeof input === 'string') {
        setInput(evaluate(input));
      } else {
        setInput('');
      }
    } catch (error) {
      console.error('Error al evaluar la expresión:', error.message);
    }
  };

  const agregarInput = (val) => {
    setInput((prevInput) => prevInput + val);
  };

  const manejarClear = () => {
    setInput('');
  };

  return (
    <div className="App">
      <div className='contenedor-calculadora'>
        <div className='fila'>
          <Pantalla input={input} />
        </div>
        <div className='fila'>
          <Boton manejarClic={() => agregarInput('1')}>1</Boton>
          <Boton manejarClic={() => agregarInput('2')}>2</Boton>
          <Boton manejarClic={() => agregarInput('3')}>3</Boton>
          <Boton manejarClic={() => agregarInput('+')}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={() => agregarInput('4')}>4</Boton>
          <Boton manejarClic={() => agregarInput('5')}>5</Boton>
          <Boton manejarClic={() => agregarInput('6')}>6</Boton>
          <Boton manejarClic={() => agregarInput('-')}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={() => agregarInput('7')}>7</Boton>
          <Boton manejarClic={() => agregarInput('8')}>8</Boton>
          <Boton manejarClic={() => agregarInput('9')}>9</Boton>
          <Boton manejarClic={() => agregarInput('*')}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={() => agregarInput('0')}>0</Boton>
          <Boton manejarClic={() => agregarInput('.')}>.</Boton>
          <Boton manejarClic={() => agregarInput('/')}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={manejarClear} />
        </div>
      </div>
    </div>
  );
}

export default Calculadora;