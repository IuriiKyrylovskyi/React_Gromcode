const baseUrl = "https://608294355dbd2c0017579ede.mockapi.io/events";

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
  return fetch(`${baseUrl}/${eventId}`, {
    method: 'DELETE',
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to delete event");
    }
  })
}