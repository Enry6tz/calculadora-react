import '../css/Tareas.css'
import ListaDeTareas from '../Components/Tareas/ListaDeTareas'

function Tareas() {
 
  return (
    <div className='aplicacion-tareas '>
      <div className='tareas-lista-principal glass-effect'>
        <h1 className='titulo-tareas'>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  )
}

export default Tareas;
