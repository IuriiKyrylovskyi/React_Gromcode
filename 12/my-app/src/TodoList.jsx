import React, { Component } from 'react';
import CreateTask from './CreateTask';
import TasksList from './TasksList';

const baseUrl = 'https://607884cee7f4f50017184723.mockapi.io/tasks';
// const baseUrl = 'https://www.mockapi.io/projects/607884cee7f4f50017184724/tasks';

class TodoList extends Component {
  state = {
    value: '',
    tasks: [],
    // { text: 'Buy milk', done: false, id: 1 },
    // { text: 'Go for a walk', done: false, id: 2 },
    // { text: 'Charge phone', done: true, id: 3 },
    // { text: 'Plant flowers', done: true, id: 4 },
    // { text: 'Make todoList', done: false, id: 5 },
    // { text: 'Watch movie', done: false, id: 6 },
  }

  componentDidMount() {
    this.fetchTasksList();
  }

  // componentDidUpdate() {
  //   this.handleChange();
  // }

  fetchTasksList = () => {
    fetch(baseUrl)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(tasksList => {
        console.log(tasksList);
        this.setState({
          tasks: tasksList,
          value: '',
        })
      })
  }

  handleChange = e => {
    this.setState({
      value: e.target.value,
    })
  }

  handleTaskCreate = () => {
    // const { tasks } = this.state;

    const newTask = {
      text: this.state.value,
      done: false,
    }

    fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(newTask),
    }).then(response => {
      if (response.ok) {
        this.fetchTasksList();
      } else {
        throw new Error('Failed to create task')
      }
    })

    // const updatedTasks = tasks.concat(newTask);
    // console.log(updatedTasks);

    // this.setState({
    //   tasks: updatedTasks,
    //   value: ''
    // })
  }

  handleStatusChange = id => {
    const {text, done} = this.state.tasks.find(task => task.id === id);

    const updatedTask = {
      text,
      done: !done,
    };

    fetch(`${baseUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(updatedTask),
    }).then(response => {
      if (response.ok) {
        this.fetchTasksList();
      } else {
        throw new Error('Failed to update task')
      }
    })

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
  }

  handleTaskDelete = id => {
    fetch(`${baseUrl}/${id}`, {
      method: 'DELETE',
    }).then(response => {
      if (response.ok) {
        this.fetchTasksList();
      } else {
        throw new Error('Failed to delete task')
      }
    })

    // const updatedTasks = this.state.tasks
    //   .filter(task => task.id !== id)

    // this.setState({
    //   tasks: updatedTasks
    // })
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
          handleTaskDelete={this.handleTaskDelete}
        />
      </main>
    )
  }
}

export default TodoList;