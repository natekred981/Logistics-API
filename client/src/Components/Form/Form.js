import React, { useState } from "react";
import Title from "./Components/Title";
import "./Form.css";

const CreateTask = props => {
  return (
    <div className='form-box'>
          <Title name={props.name} onChange={props.onChange} value={props.value}/>
    </div>
  );
};

export default CreateTask;
