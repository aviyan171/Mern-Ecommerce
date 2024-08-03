import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
})

//request interceptors
apiClient.interceptors.response.use(
  res => res,
  err => {
    if (err.response.status === 401) {
      console.log('UnAuthorized Access')
    } else {
      throw new Error(err.response.data.message)
    }
    return Promise.reject(err)
  }
)
export { apiClient as axios }
