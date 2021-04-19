import Modal from "react-bootstrap/Modal";
import Carousel from "./Carousel";

const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      contentClassName="modal-content"
      backdrop="static"
      keyboard="true"
      centered
      >
      <Modal.Body>
        <Carousel  items={props.items} itemId={props.itemId} />
      </Modal.Body>
    </Modal>
  );
};
export default MyVerticallyCenteredModal;