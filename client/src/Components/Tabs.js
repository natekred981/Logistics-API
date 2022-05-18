import {Tab, Tabs } from "react-bootstrap";
import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTask from "./Form/Form.js";
import TaskList from "./Dashboard/Tasks.js";
import SubmitButton from "../shared/components/SubmitButton.js";
import CreateButton from "../shared/components/CreateButton.js";
import Modal from "./Form/Modal.js";
import * as uuid from 'uuid';
import './Tabs.css';


const ControlledTabs = () => {
    const [loadedTasks, setLoadedTasks] = useState();
    useEffect(() => {
      const sendRequest = async () => { 
        const response = await fetch('http://localhost:4002/api/tasks');
        const responseData  = await response.json();
        setLoadedTasks(responseData.inventory);
      }
      sendRequest();
    }, [])
    const [key, setKey] = useState('dashboard');
    const [showForm, setShowForm] = useState(false);
    console.log(loadedTasks);


    const [title, setTitle] = useState("");
    const id = uuid.v4();
  const handleChange = (e) => setTitle(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:4002/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        id: id
      }) 
    });

    let responseData = await response.json();

    console.log(responseData);
    window.location.reload(false);

  }

  const handleUpdate = async () => {

    setShowForm(true);

  };
    
    return (
      <>
      <div className="space">
      <header>
        <CreateButton onClick={() => setShowForm(true)}/>
        <Modal onCancel={e => setShowForm(false)}  show={showForm} onChange={handleChange} value={title} onSubmit={handleSubmit} />
      </header>
          <div>
          {loadedTasks && <TaskList items={loadedTasks} onUpdate={handleUpdate}/>}
          {!loadedTasks && <h1>No ongoing tasks</h1>}
          </div>
      </div>
      </>
    );
  }
export default ControlledTabs;