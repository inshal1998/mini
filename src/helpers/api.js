export async function api() {
    const data = fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(res => console.log(res))
    return data
  }