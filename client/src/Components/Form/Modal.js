import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Modal.css';
import { Modal } from "react-bootstrap";
import ReactDOM from "react-dom";
import { CSSTranstion } from 'react-transition-group'
import Backdrop from "../../shared/components/Backdrop";
import CreateTask from "./Form";
import * as uuid from 'uuid';


const UserModal = props => {
  const [title, setTitle] = useState("");
  const handleChange = (e) => setTitle(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:4002/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title: title}) 
    });

    let responseData = await response.json();

    console.log(responseData.message._id);
    window.location.reload(false);

  }

    return (
      <Modal show={props.show}>
        
  <Modal.Header>
    <Modal.Title>Create Inventory</Modal.Title>
  </Modal.Header>
        
  <Modal.Body>
    <CreateTask name="title" onChange={handleChange} value={title} />
  </Modal.Body>
  

  <Modal.Footer>
    <Button onClick={props.onCancel}  type="button" variant="secondary" >Close</Button>
    <Button onClick={handleSubmit} type="submit" variant="primary">Save changes</Button>
  </Modal.Footer>
  </Modal>
    );
}

export default UserModal;

