// src/routers/Routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculadora from '../pages/Calculadora';
import Tareas from '../pages/Tareas';
import Home from '../pages/Home';


const MyRoutes = () => {
  return (
    <div>
      <Routes>
       <Route path="/Calculadora" element={<Calculadora />} />
        <Route path='/' element={<Home/>}/>
       <Route path="/Tareas" element={<Tareas />} />
      </Routes>
    </div>
  );
}

export default MyRoutes;
