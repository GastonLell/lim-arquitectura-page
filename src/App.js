// dependencias
import {BrowserRouter, Switch, Route} from "react-router-dom";

import './scss/app.css';

// vistas secciones
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Proyectos from "./pages/Proyectos";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Inicio/>
        <Nosotros/>
        {/* <Servicios/> */}
        <Proyectos/>        
      </BrowserRouter>

    </div>
  );
}

export default App;