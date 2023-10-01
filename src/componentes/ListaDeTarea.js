import React, {useState} from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import "../HOJAdeestilo/TareaFormulario.css";

function ListaDeTarea (){

    const [tareas, setTareas] = useState([]);
    const agregarTarea = tarea =>{
        if(tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();
            const tareaActulizada=[tarea,...tareas]
            setTareas(tareaActulizada);
        }
    }

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
      }
      const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
          if (tarea.id === id) {
            tarea.completada = !tarea.completada;
          }
          return tarea;
        });
        setTareas(tareasActualizadas);
      }

    return(
        <>
        <TareaFormulario onSubmit={agregarTarea}/>
        <div className="app">
           <div className="tareas-lista-contenedor">
               {
                tareas.map((tarea) =>
                <Tarea
                key={tarea.id}
                id={tarea.id}
                texto={tarea.texto}
                completado={tarea.completada}
                eliminarTarea={eliminarTarea}
                completarTarea={completarTarea}
                />
                )
               }

            </div>
        </div>
        </>
    )
}



export default ListaDeTarea