import {useState} from "react"
import firebase from "firebase"

import {getFirestore} from "../firebase/client";
import {Button, Alert, Form} from "react-bootstrap";

const db = getFirestore();

const FormContacto = () => {
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState({
    mensaje: "",
    color: ""
  })
  const handleSubmit = (event) => {

    event.preventDefault();
    const {nombre, email, telefono, mensaje} = event.target.elements;
    
    db.collection('mensajes').add({
      nombre: nombre.value,
      email: email.value,
      telefono: telefono.value,
      mensaje: mensaje.value,
      leido: false,
      fecha: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
      setAlert({
        ...alert,
        mensaje: "Gracias por escribirnos! A la brevedad nos pondremos en contacto!",
        color: "dark"
      })

      setShow(true)

      nombre.value = "";
      email.value = "";
      telefono.value = "";
      mensaje.value = "";

      setTimeout(() => {
        setShow(false)
        setAlert({
          mensaje: "",
          color: ""
        })
      }, 10000)
    })
    .catch(() => {
      setAlert({
        ...alert,
        mensaje: "No pudimos recibir tu mensaje. Intente nuevamente. Gracias!",
        color: "danger"
      })
      setShow(true)
    })
  }
  return (
    <>
    <Form onSubmit={handleSubmit} bsPrefix="form">
      <Form.Control name="nombre" className="mb-3" type="text" placeholder="nombre" required />
      <Form.Control name="email" className="mb-3" type="email" placeholder="e-mail" required/>
      <Form.Control name="telefono" className="mb-3" type="text" placeholder="teléfono" />
      <Form.Control
        name="mensaje"
        className="mb-3 textarea-form"
        as="textarea"
        rows={8}
        placeholder="mensaje"
        required
      />
      <Button type="submit" variant="dark float-right">Enviar</Button>
    </Form>
    {
      show && (
        <Alert className="alert-form" variant={alert.color} onClose={() => setShow(false)} dismissible>
          {alert.mensaje}
        </Alert>
      )
    }
    
    </>
  );
};
export default FormContacto;
