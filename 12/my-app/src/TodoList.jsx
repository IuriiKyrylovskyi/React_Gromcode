import React, { Component } from "react";
import CreateTask from "./CreateTask";
import TasksList from "./TasksList";
import { fetchTasksList, createTask, updateTask, deleteTask } from "./tasksGateway";

class TodoList extends Component {
  state = {
    value: "",
    tasks: [],
    // { text: 'Buy milk', done: false, id: 1 },
    // { text: 'Go for a walk', done: false, id: 2 },
    // { text: 'Charge phone', done: true, id: 3 },
    // { text: 'Plant flowers', done: true, id: 4 },
    // { text: 'Make todoList', done: false, id: 5 },
    // { text: 'Watch movie', done: false, id: 6 },
  };

  componentDidMount() {
    this.fetchTasks();
  }

  componentDidUpdate() {
    // this.handleChange();
    this.handleTaskCreate();
    this.handleStatusChange();
    this.handleTaskDelete();
  }

  fetchTasks = () => {
    fetchTasksList().then((tasksList) => {
      console.log(tasksList);
      this.setState({
        tasks: tasksList,
        value: "",
      });
    });
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleTaskCreate = () => {
    // const { tasks } = this.state;

    const newTask = {
      text: this.state.value,
      done: false,
    };

    createTask(newTask).then(() => this.fetchTasks());

    // const updatedTasks = tasks.concat(newTask);
    // console.log(updatedTasks);

    // this.setState({
    //   tasks: updatedTasks,
    //   value: ''
    // })
  };

  handleStatusChange = (id) => {
    const { text, done } = this.state.tasks.find((task) => task.id === id);

    const updatedTask = {
      text,
      done: !done,
    };

    updateTask(id, updatedTask).then(() => this.fetchTasks());

    // const updatedTasks = this.state.tasks.map(task => {
    //   if (task.id === id) {
    //     return {
    //       ...task,
    //       done: !task.done
    //     };
    //   }
    //   return task;
    // })

    // this.setState({
    //   tasks: updatedTasks
    // })
  };

  handleTaskDelete = (id) => {
    deleteTask(id).then(() => this.fetchTasks());

    // const updatedTasks = this.state.tasks
    //   .filter(task => task.id !== id)

    // this.setState({
    //   tasks: updatedTasks
    // })
  };

  render() {
    const { value, tasks } = this.state;

    return (
      <main className="todo-list">
        <CreateTask value={value} handleChange={this.handleChange} onCreate={this.handleTaskCreate} />
        {tasks.length > 0 && <TasksList tasks={tasks} handleStatusChange={this.handleStatusChange} handleTaskDelete={this.handleTaskDelete} />}
      </main>
    );
  }
}

export default TodoList;
