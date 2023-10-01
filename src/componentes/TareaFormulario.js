import React, {useState} from "react";
import "../HOJAdeestilo/TareaFormulario.css";
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {

    const [input, setInput] = useState(" ")

    const manejarCambios = e =>{
        //actualiizar el texto de input (dond euno escribe)
        setInput(e.target.value)

    }
    
    const manejarEnvio = e => {
        e.preventDefault();
        const tareaNueva ={
            id : uuidv4(),
            texto : input,
            completado: false
        }
        props.onSubmit(tareaNueva)
    }

    return(
        <form className="tarea-formulario" onSubmit={manejarEnvio}>
            <input className="tarea-input" 
               type="texto"
               placeholder="escribe una tarea"
               name="texto"
               onChange={manejarCambios}
            />
            <button className="tarea-boton">Agrega una tarea</button>
        </form>

    )
}


export default TareaFormulario;