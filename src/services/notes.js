import axios from 'axios'
const baseUrl = '/api/notes'

export const notesGetAll = () => {
  const request = axios.get(baseUrl)

  return request.then(response => response.data)
}

export const notesCreate = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

export const notesUpdate = (id, newObject) => {
  console.log(`${baseUrl}/${id}`, newObject)
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}
