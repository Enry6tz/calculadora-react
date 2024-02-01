import { useState , useEffect} from 'react';
import './App.css';
import Boton from './Components/Boton';
import BotonClear from './Components/BotonClear';
import Pantalla from './Components/Pantalla';
import logo from './img/react-logo.png'
import {evaluate} from 'mathjs'
function App() {
  const [rotarLogo, setRotarLogo] = useState(false);
  const [input, setInput] = useState('')
  useEffect(() => {
    const timeout = setTimeout(() => {
      setRotarLogo(false);
    }, 1000); // Después de 1 segundo, detener la rotación

    return () => clearTimeout(timeout);
  }, [rotarLogo]);
  const calcularResultado = () => {
    try {
    if (input && typeof input === 'string') {
        setInput(evaluate(input));
        setRotarLogo(true);
      }else{
        setInput('')
      }
    } catch (error) {
      console.error('Error al evaluar la expresión:', error.message);
    }
    }
  const agregarInput = val =>{
    setInput(input+val)
  }
  
  return (
    <div className="App">
      <div className='logo-contenedor '>
      <img className={`logo ${rotarLogo ? 'rotar' : ''}`}
          src={logo}
          alt='logo de react'
        />
      </div>

      <div className='contenedor-calculadora'>
        <div className='fila'>
          <Pantalla input={input} />
        </div>

        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() =>{setInput(''); setRotarLogo(true)}}/>
        </div>
      </div>
    </div>
  );
}

export default App;
