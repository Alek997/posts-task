import axios from 'axios'

export const apiUrl = process.env.REACT_APP_API_URL

const http = axios.create({
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
})
export default http
