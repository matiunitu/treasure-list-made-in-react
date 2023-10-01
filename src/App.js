import './App.css';
import freecodecampLogo from "./imagen/freecodecamp-logo.png";
import TareaFormulario from './componentes/TareaFormulario';
import ListaDeTarea from './componentes/ListaDeTarea';

function App() {
  return (
    <div className="App">
      <div className='app-2'>
        <div className='contenido'>
          <img src={freecodecampLogo}  className='freecodecamp-logo' />
        </div>       
        <div className='lista-de-treas'>
          <h1>MIS TAREAS</h1>
          <ListaDeTarea/>
        </div>
        
      </div> 
      
    </div>
  );
}

export default App;
