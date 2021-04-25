const baseUrl = "https://6085838bd14a870017577e5b.mockapi.io/events/";
// const baseUrl = "https://crudcrud.com/api/4acf51b0e63b4a9ba1420bbdfe5b745f/events";

export const fetchEventsList = () => {
  return fetch(baseUrl).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });
}

export const createEvent = eventData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8;'
    },
    body: JSON.stringify(eventData),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to create event');
    }
  })
}

export const deleteEvent = eventId => {
  return fetch(`${baseUrl}/:${eventId}`, {
    method: 'DELETE',
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to delete event");
    }
  })
}