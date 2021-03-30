import "./estilos.css";
import Menu from "../components/Menu";
import Nosotros from "../components/Nosotros";
import Servicios from "../components/Servicios";

const Inicio = () => {
    return( 
        <>
            <Menu/>
            <div className="imagen-inicio" />
            <Nosotros/>
            <Servicios/>
        </>
    )
}
export default Inicio;