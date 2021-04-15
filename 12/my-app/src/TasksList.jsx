import React from 'react';
import Task from './Task';

const TasksList = ({ tasks, handleStatusChange, id }) => {
  const sortedList = tasks
    .slice()
    .sort((a, b) => (a.done - b.done));

  return (
    <ul className="list">
      {sortedList.map(task => (<Task key={task.id} {...task} handleStatusChange={()=>handleStatusChange(id)} />))}
    </ul>
  )
}

export default TasksList;