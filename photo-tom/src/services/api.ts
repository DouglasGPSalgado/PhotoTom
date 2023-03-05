import axios from 'axios'

const api = axios.create({
  baseURL: 'https://phototom-test.loophole.site/api/',
})
export default api
