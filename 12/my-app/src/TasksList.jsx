import React from 'react';
import Task from './Task';

const TasksList = ({ tasks }) => {
  const sortedList = tasks
    .slice()
    .sort((a, b) => (a.done - b.done));

  return (
    <ul className="list">
      {sortedList.map(task => (<Task key={task.id} {...task} />))}
    </ul>
  )
}

export default TasksList;