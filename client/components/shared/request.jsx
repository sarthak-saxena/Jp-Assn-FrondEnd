import axios from 'axios'
let request = axios.create({
  baseURL: 'http://localhost:3000'
})
request.defaults.headers.common['APP-ID'] = '426147723619'
request.defaults.headers.common['APP-SECRET'] = 'LBYAFESEUNJC'

export default request
