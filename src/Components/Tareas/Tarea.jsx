import React from 'react';
import '../../css/Tarea.css'
import { RiDeleteBinLine } from "react-icons/ri";

const Tarea = ({id, texto, completada, completarTarea, eliminarTarea}) => {
    return (
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor' }>
            <div 
            className='tarea-texto'
            onClick={() => completarTarea(id)}>
                {texto}
            </div>
            <div className='tarea-contenedor-icono'
            onClick={()=> eliminarTarea(id)}
            >
                <RiDeleteBinLine className='tarea-icono'/>
            </div>
        </div>
    );
}

export default Tarea;
