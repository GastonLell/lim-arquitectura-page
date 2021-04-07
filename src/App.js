// dependencias

import './scss/app.css';
// vistas secciones
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Proyectos from "./pages/Proyectos";

function App() {
  return (
    <div className="App">
        <Inicio/>
        <Nosotros/>
        <Proyectos/>        
        <Servicios/>

    </div>
  );
}

export default App;