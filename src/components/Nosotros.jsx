import LucilaImagen from "../assets/images/Lucila.jpg";
import MateoImagen from "../assets/images/Mateo.jpg";

const Nosotros = () => {

  return (

    <section id="nosotros">

      <h2 className="subtitulos">
        NOSOT<span>ROS</span>
      </h2>

      <div className="nosotros-contenedor">
        <div className="nosotros-texto">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            dolorem, dolor minima quam et, esse perspiciatis iure repellendus
            sit atque sunt, itaque eveniet nemo excepturi laudantium obcaecati
            explicabo! Nam, nesciunt? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Tempore dolorem, dolor minima quam et, esse
            perspiciatis iure repellendus sit atque sunt, itaque eveniet nemo
            excepturi laudantium obcaecati explicabo! Nam, nesciunt?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            dolorem, dolor minima quam et, esse perspiciatis iure repellendus
            sit atque sunt, itaque eveniet nemo excepturi laudantium obcaecati
            explicabo! Nam, nesciunt? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Tempore dolorem, dolor minima quam et, esse
            perspiciatis iure repellendus sit atque sunt, itaque eveniet nemo
            excepturi laudantium obcaecati explicabo! Nam, nesciunt?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            dolorem, dolor minima quam et, esse perspiciatis iure repellendus
            sit atque sunt, itaque eveniet nemo excepturi laudantium obcaecati
            explicabo! Nam, nesciunt? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Tempore dolorem, dolor minima quam et, esse
            perspiciatis iure repellendus sit atque sunt, itaque eveniet nemo
            excepturi laudantium obcaecati explicabo! Nam, nesciunt?
          </p>
        </div>
        <div className="nosotros-imgs">
          <img id="img-lucila" src={LucilaImagen} alt="Lucila lim arquitectura" />
          <img id="img-mateo" src={MateoImagen} alt="Mateo lim arquitectura" />
        </div>
      </div>
    </section>
  );
};
export default Nosotros;
