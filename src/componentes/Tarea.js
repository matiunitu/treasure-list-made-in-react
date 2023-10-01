import React from "react";
import "../HOJAdeestilo/tarea.css"
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({id, texto, completado, completarTarea,eliminarTarea}) {
  return(
    <div className={completado ? "tarea-contenido completado" : "tarea-contenido"}>
      <div className="tarea-texto" onClick={() => completarTarea(id)}>
        
        {texto}
      </div>
      <div className="tarea-contenedor-icono" onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle  className="tarea-icono"/>
      </div>

    </div>
  )   
}
export default Tarea;
