const baseUrl = "https://608294355dbd2c0017579ede.mockapi.io/events";

export const fetchEvents = () => {
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


const events = [
  {
    id: 1,
    title: "Go to the gym",
    description: "some text here",
    dateFrom: new Date(2021, 3, 20, 10, 15),
    dateTo: new Date(2021, 3, 20, 15, 0),
  },
  {
    id: 2,
    title: "Go to the school",
    description: "hello, 2 am",
    dateFrom: new Date(2021, 3, 22, 10, 15),
    dateTo: new Date(2021, 3, 22, 11, 0),
  },
  {
    id: 3,
    title: "Lunch",
    description: "",
    dateFrom: new Date(2021, 3, 23, 10, 30),
    dateTo: new Date(2021, 3, 23, 11, 30),
  },
  {
    id: 3,
    title: "Meet friend",
    description: "at the cafe",
    dateFrom: new Date(2021, 3, 25, 10, 30),
    dateTo: new Date(2021, 3, 25, 11, 0),
  },
];

export default events;
