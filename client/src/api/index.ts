import axios from 'axios'

const BASE_URL: string = 'http://localhost:3001/api'

const api = axios.create({
	baseURL: BASE_URL,
  withCredentials: true
})

api.interceptors.request.use(config => {
  return config
})

export default api