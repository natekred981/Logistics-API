import React from "react";
import Task from "./Task.js";

import './Tasks.css'
const TaskList = props => {
    return (
      <>
      <ul className="tasks-list">
        {props.items.map((task,key) => (
          <div className={`inventory`}>
          <Task
          key={key}
          title={task.title}
          {...props}
          />
          </div>
        ))}
      
      </ul>
      </>
      
    );
}

export default TaskList;