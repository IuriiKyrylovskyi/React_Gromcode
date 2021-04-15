import React from 'react';

const Task = ({ text, done, handleStatusChange, handleDelete }) => {
  const listItemClasses = `list-item ${done ? 'list-item_done' : ''}`
  
  return (
    <li className={listItemClasses}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        // onChange={handleStatusChange}
      />
        <span className='list-item__text'>{text}</span>
      <button
        className="list-item__delete-btn"
        onClick={handleDelete}
      >
      </button>
    </li>
  )
}

export default Task;