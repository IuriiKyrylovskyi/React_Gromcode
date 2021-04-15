import React from 'react';

const CreateTask = ({ value, handleChange, onCreate }) => {
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
        onClick={onCreate}
      >Create</button>
    </div>
  )
}


export default CreateTask;