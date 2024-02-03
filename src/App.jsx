
import React from 'react';
import MyRoutes from './routers/Routes.jsx'
import { BrowserRouter } from 'react-router-dom';
import './App.css'

function App() {
  return (
      <BrowserRouter>
        <div className='App'>
          <div className='contenedor-pages'>
            <MyRoutes />
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
