import React from 'react';

const Task = ({id, text, done, handleStatusChange, handleTaskDelete }) => {
  const listItemClasses = `list-item ${done ? 'list-item_done' : ''}`
  
  return (
    <li className={listItemClasses}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        onChange={()=>handleStatusChange(id)}
      />
        <span className='list-item__text'>{text}</span>
      <button
        className="list-item__delete-btn"
        onClick={()=>handleTaskDelete(id)}
      >
      </button>
    </li>
  )
}

export default Task;