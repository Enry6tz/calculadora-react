import React from 'react';
import '../css/botonClear.css'

const BotonClear = (props) => {
    return (
        <div className='boton-clear' onClick={props.manejarClear}>
            Clear
        </div>
    );
}

export default BotonClear;
