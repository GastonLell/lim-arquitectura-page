import "aframe";


const RealidadVirtual = (srcImagen) => {
  return (
    <>
      <a-scene >
        <a-sky  src={srcImagen} />
      </a-scene>
    </>
  );
};

export default RealidadVirtual;