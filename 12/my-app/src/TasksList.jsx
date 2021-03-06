import React from 'react';
import Task from './Task';

const TasksList = ({ tasks, handleStatusChange, handleTaskDelete}) => {
  const sortedList = tasks
    .slice()
    .sort((a, b) => (a.done - b.done));

  return (
    <ul className="list">
      {sortedList.map(task =>
      (<Task
        key={task.id}
        {...task}
        handleStatusChange={handleStatusChange}
        handleTaskDelete={handleTaskDelete}
      />))}
    </ul>
  )
}

export default TasksList;