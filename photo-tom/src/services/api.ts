import axios from "axios"

const api = axios.create({
    baseURL: "'http://192.168.63.240:8000/api/auth/",
});
export default api;