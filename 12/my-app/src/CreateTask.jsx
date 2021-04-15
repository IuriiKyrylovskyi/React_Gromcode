import React from 'react';

const CreateTask = ({ value, handleChange, handleTaskCreate }) => {
  return (
    <div className="create-task">
      <input
        className="create-task__input"
        type="text"
        value={value}
        onChange={handleChange}
      />
      <button
        className="btn create-task__btn"
        onClick={handleTaskCreate}
      >Create</button>
    </div>
  )
}


export default CreateTask;