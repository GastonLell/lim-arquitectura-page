import Modal from "react-bootstrap/Modal";
import Carousel from "./Carousel";

const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      contentClassName="modal-content"
      
      >

      {/*
        para cerrar modal con cruz
      <Modal.Header closeButton className="modal-header" /> */}
      <Modal.Body>
        <Carousel items={props.items} itemId={props.itemId} tamaño="w-75" />
      </Modal.Body>
    </Modal>
  );
};
export default MyVerticallyCenteredModal;