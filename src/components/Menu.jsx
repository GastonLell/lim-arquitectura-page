import ImagenLogo from "../assets/images/logo-loremipsum.jpg";
const Menu = () => {
  return (
    <nav>

      <div className="logo-marca">
        <a href="#inicio">
          <img src={ImagenLogo} alt="lim-arquitectura" />
        </a>
      </div>
      
      <div className="navegacion">
        <ul>
          <li>
            <a href="#nosotros">Nosotros</a>
          </li>
          <li>
            <a href="#servicios">Servicios</a>
          </li>
          <li>
            <a href="proyectos">Proyectos</a>
          </li>
          <li>
            <a href="contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
