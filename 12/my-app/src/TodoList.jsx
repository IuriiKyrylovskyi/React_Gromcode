import React, { Component } from 'react';
import CreateTask from './CreateTask';
import TasksList from './TasksList';

class TodoList extends Component {
  state = {
    value: '',
    tasks: [
      { text: 'Buy milk', done: false, id: 1 },
      { text: 'Go for a walk', done: false, id: 2 },
      { text: 'Charhe phone', done: true, id: 3 },
      { text: 'Plant flowers', done: true, id: 4 },
      { text: 'Make todoList', done: false, id: 5 },
      { text: 'Watch movie', done: false, id: 6 },
    ],
  }

  handleChange = e => {
    this.setState({
      value: e.target.value,
    })
  }

  handleTaskCreate = () => {
    const { tasks } = this.state;

    const newTask = {
      text: this.state.value,
      done: false,
      id: Math.random(),
    }

    const updatedTasks = tasks.concat(newTask);
    console.log(updatedTasks);

    this.setState({
      tasks: updatedTasks,
      value: ''
    })
  }

  handleStatusChange = id => {
    const updatedTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done
        };
      }
      return task;
    })

    this.setState({
      tasks: updatedTasks
    })
  }


  render() {
    const { value, tasks } = this.state;

    return (
      <main className="todo-list">
        <CreateTask
          value={value}
          handleChange={this.handleChange}
          onCreate={this.handleTaskCreate}
        />
        <TasksList
          tasks={tasks}
          handleStatusChange={this.handleStatusChange}
        />
      </main>
    )
  }
}

export default TodoList;