import React from 'react';
import Task from './Task';

const TasksList =({ tasks }) => {
  return (
    <ul className="list">
      {tasks.map(task => (<Task key={task.id} {...task} />))}
    </ul>
  )
}

export default TasksList;