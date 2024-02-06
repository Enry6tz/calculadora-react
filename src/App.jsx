
import React from 'react';
import MyRoutes from './routers/Routes.jsx';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Components/NavBar.jsx';
import PieDePagina from './Components/PieDePagina.jsx';
import './App.css';

function App() {
  return (
      <>
      <BrowserRouter>
        <NavBar/>
        <div className='App'>
          <div className='contenedor-pages'>
            <MyRoutes />
          </div>
        </div>
        <PieDePagina/>
      </BrowserRouter>
      </>
  );
}

export default App;
