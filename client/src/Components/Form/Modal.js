import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Modal.css';
import { Modal } from "react-bootstrap";
import ReactDOM from "react-dom";
import Backdrop from "../../shared/components/Backdrop";
import CreateTask from "./Form";
import * as uuid from "uuid";

const UserModal = props => {
  
    return (
      <Modal show={props.show}>
        
  <Modal.Header>
    <Modal.Title>Create Inventory</Modal.Title>
  </Modal.Header>
        
  <Modal.Body>
    <CreateTask name="title" {...props} />
  </Modal.Body>
  

  <Modal.Footer>
    <Button onClick={props.onCancel}  type="button" variant="secondary" >Close</Button>
    <Button onClick={props.onSubmit} type="submit" variant="primary">Save changes</Button>
  </Modal.Footer>
  </Modal>
    );
}

export default UserModal;

