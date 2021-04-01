import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import ImagenLogo from "../assets/images/logo-loremipsum.jpg";

const Menu = () => {
  const [openClose, setOpenClose] = useState(false);

  const handleClickOpen = () => {
    setOpenClose(!openClose);
  };

  return (
    <nav>
      <div className="logo-marca">
        <a href="#inicio">
          <img src={ImagenLogo} alt="lim-arquitectura" />
        </a>
      </div>

      <div className="btn-hamburguer">
        <button onClick={handleClickOpen}>
          {openClose ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      <div className="navegacion">
        <ul className={openClose ? "nav-open" : "nav-close"}>
          <li>
            <a href="#nosotros">Nosotros</a>
          </li>
          <span>|</span>
          <li>
            <a href="#servicios">Servicios</a>
          </li>
          <span>|</span>
          <li>
            <a href="proyectos">Proyectos</a>
          </li>
          <span>|</span>
          <li>
            <a href="contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
