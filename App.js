import React from "react";
import Tasks from "./Tasks";

class App extends React.Component {
  state = {
    task: "",
    priority: false,
    deadline: "",
    idVal: 3,
    tasks: [
      {
        id: 1,
        task: "fix my computer",
        priority: true,
        deadline: "2020-01-01",
        whenFinished: null,
        pending: true
      },
      {
        id: 2,
        task: "clean the fridge",
        priority: false,
        deadline: "2019-10-10",
        whenFinished: "2019-02-02",
        pending: false
      }
    ]
  };

  handleInputChange = e => {
    if (e.target.type === "checkbox") {
      this.setState({
        [e.target.name]: !this.state.priority
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };

  handleSubmitForm = e => {
    e.preventDefault();
    const newTasksArray = [...this.state.tasks];
    const newTask = {
      id: this.state.idVal,
      task: this.state.task,
      priority: this.state.priority,
      deadline: this.state.deadline,
      whenFinished: null,
      pending: true
    };

    this.setState(prevState => ({
      task: "",
      priority: false,
      deadline: "",
      idVal: prevState.idVal + 1,
      tasks: [...newTasksArray, newTask]
    }));
  };

  getDate = () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }
    return `${year}-${month}-${day}`;
  };

  handlePendingChange = id => {
    const newTaskArray = [...this.state.tasks];

    newTaskArray.map(task => {
      if (id === task.id) {
        task.pending = false;
        task.whenFinished = this.getDate();
      }
      console.log(newTaskArray);
    });
    this.setState({
      tasks: newTaskArray
    });
  };
  render() {
    const date = this.getDate();
    return (
      <div>
        <form onSubmit={this.handleSubmitForm}>
          <input
            value={this.state.task}
            onChange={this.handleInputChange}
            placeholder="Dodaj zadanie"
            type="text"
            name="task"
            id="task"
          />
          <label htmlFor="checkbox">
            <input
              type="checkbox"
              checked={this.state.priority}
              name="priority"
              onChange={this.handleInputChange}
            />
            Priority
          </label>
          <br />
          <label htmlFor="calendar">
            Deadline
            <input
              type="date"
              min={date}
              defaultValue={date}
              value={this.state.date}
              name="deadline"
              onChange={this.handleInputChange}
            />
          </label>{" "}
          <br />
          <button>Submit</button>
        </form>
        <Tasks tasks={this.state.tasks} onclick={this.handlePendingChange} />
      </div>
    );
  }
}
export default App;
