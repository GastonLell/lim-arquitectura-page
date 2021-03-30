import "./estilos.css";
import Menu from "../components/Menu";
import Nosotros from "../components/Nosotros";

const Inicio = () => {
    return( 
        <>
            <Menu/>
            <div className="imagen-inicio" />
            <Nosotros/>
        </>
    )
}
export default Inicio;