import axios from 'axios'

const api = axios.create({
  baseURL: 'http://ncanit.unievangelica.edu.br/api/',
})

export default api
