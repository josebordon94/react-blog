import axios from 'axios'

const apiServer = axios.create({
  baseURL: 'http://localhost:4000/api',
})

export default apiServer
