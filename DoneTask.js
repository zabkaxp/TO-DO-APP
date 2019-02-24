import React from "react";

const DoneTask = ({ task, deadline, whenFinished }) => {
  return (
    <li>
      {task} (deadline {deadline})
      <br />
      It has been finished on {whenFinished}
      <button>X</button>
    </li>
  );
};

export default DoneTask;
