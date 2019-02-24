import React from "react";
import ToDoTask from "./ToDoTask";
import DoneTask from "./DoneTask";

const Tasks = ({ tasks, onclick }) => {
  const toDoTasks = tasks.filter(task => task.pending);
  const tasksDone = tasks.filter(task => task.pending === false);

  return (
    <div>
      <div>
        <p>To do Tasks</p>
        <ul>
          {toDoTasks.map(task => (
            <ToDoTask
              key={task.id}
              id={task.id}
              task={task.task}
              priority={task.priority}
              deadline={task.deadline}
              onclick={onclick}
            />
          ))}
        </ul>
      </div>

      <div>
        <p>Done tasks {tasksDone.length}</p>
        {tasksDone.map(task => (
          <DoneTask
            key={task.id}
            task={task.task}
            deadline={task.deadline}
            whenFinished={task.whenFinished}
          />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
