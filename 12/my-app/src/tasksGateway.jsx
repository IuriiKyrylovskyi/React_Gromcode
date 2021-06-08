// const baseUrl = 'https://607884cee7f4f50017184723.mockapi.io/tasks';
const baseUrl = "https://60b9f20280400f00177b7459.mockapi.io/api/v1/tasks";

export const fetchTasksList = () => {
  return fetch(baseUrl)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
}

export const createTask = taskData => {
  return fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(taskData),
    }).then(response => {
      if (!response.ok) {
        throw new Error('Failed to create task')
      }
    })
}

export const updateTask = (taskId, taskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(taskData),
    }).then(response => {
      if (!response.ok) {
        throw new Error('Failed to update task')
      }
    })
}

export const deleteTask = taskId => {
  return fetch(`${baseUrl}/${taskId}`, {
      method: 'DELETE',
    }).then(response => {
      if (!response.ok) {
        throw new Error('Failed to delete task')
      }
    })
}