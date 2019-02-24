import React from "react";
import "./ToDoTask.css";

const ToDoTask = ({ task, priority, deadline, onclick, id }) => {
  return (
    <li>
      <span className={priority ? "priority listItem" : "listItem"}>
        {task}
      </span>
      - deadline {deadline}
      <button onClick={() => onclick(id)}>Finished</button>
      <button>X</button>
    </li>
  );
};

export default ToDoTask;
