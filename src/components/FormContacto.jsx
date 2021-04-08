import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FormContacto = () => {
  return (
    <Form bsPrefix="form">
      <Form.Control className="mb-3" type="text" placeholder="nombre" />
      <Form.Control className="mb-3" type="email" placeholder="e-mail" />
      <Form.Control className="mb-3" type="text" placeholder="teléfono" />
      <Form.Control
        className="mb-3 textarea-form"
        as="textarea"
        rows={8}
        placeholder="mensaje"
      />
      <Button variant="dark float-right">Enviar</Button>
    </Form>
  );
};
export default FormContacto;
