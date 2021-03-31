import test from "../assets/images/p360.jpg";

const RealidadVirtual = () => {
  return (
    <>
      <a-scene >
        <a-sky id="test-realidad" src={test}/ >
      </a-scene>
    </>
  );
};

export default RealidadVirtual;