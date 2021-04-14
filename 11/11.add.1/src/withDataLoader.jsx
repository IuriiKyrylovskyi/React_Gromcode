export const withDataLoader = data => {
  fetch(data)
  .then(response => response.json())
}

