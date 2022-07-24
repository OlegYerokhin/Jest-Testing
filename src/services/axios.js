import axios from './axios.js'

export function getMessage() {
  return axios.get('http://localhost:3000/message').then(response => {
    return response.data
  })
}