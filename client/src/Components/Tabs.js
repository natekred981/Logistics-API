import {Tab, Tabs } from "react-bootstrap";
import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTask from "./Form/Form.js";
import TaskList from "./Dashboard/Tasks.js";
import SubmitButton from "../shared/components/SubmitButton.js";
import CreateButton from "../shared/components/CreateButton.js";
import Modal from "./Form/Modal.js";
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


    return (
      <>
      <div className="space">
      <header>
        <CreateButton onClick={() => setShowForm(true)}/>
        <Modal onCancel={e => setShowForm(false)} show={showForm}/>
      </header>
          <div>
          {loadedTasks && <TaskList items={loadedTasks} />}
          {!loadedTasks && <h1>No ongoing tasks</h1>}
          </div>
      </div>
      </>
    );
  }
export default ControlledTabs;