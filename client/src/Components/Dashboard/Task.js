import React, { useState } from "react";
import Card from "../../shared/components/Card";
import { Modal } from "react-bootstrap";
import './Task.css';

const Task = (props) => {
  return (
    <li className="task-item">
      <Card>
        <div className="task-item_info">
          <h2>{props.title}</h2>
          <button className="update" onClick={props.onUpdate}>update</button>
        </div>
        </Card>
    </li>
  );
};

export default Task;
