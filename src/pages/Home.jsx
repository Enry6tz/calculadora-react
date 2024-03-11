import React from 'react';
import '../css/home.css'

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="titulo-home">Bienvenido a mi Aplicación React</h1>
            <h2>esto es el h2 del pull request</h2>
            <p className="descripcion-home">
                Esta aplicación ha sido desarrollada con React, una biblioteca de JavaScript para construir interfaces de usuario interactivas.<br/>
                Explora las diferentes secciones, como la Calculadora y las Tareas, para experimentar con las funcionalidades implementadas.<br/>
                Esta aplicación es un proyecto de demostración que destaca las capacidades de React y cómo se pueden implementar diversas características.
            </p>
            <p className="descripcion-home">
                ¡Espero que disfrutes del trabajo realizado por Enrique Seitz!
            </p>

        </div>
    );
}

export default Home;
