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
      <Modal.Header closeButton className="modal-header" />
      <Modal.Body>
        <Carousel />
      </Modal.Body>
    </Modal>
  );
};
export default MyVerticallyCenteredModal;
//use state para abrir y cerrar modal
// const [modalShow, setModalShow] = React.useState(false);

// boton para abrir modal

//   <Button variant="primary" onClick={() => setModalShow(true)}>
//   Launch vertically centered modal
// </Button>
