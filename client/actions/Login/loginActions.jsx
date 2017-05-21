import _ from 'lodash'
import axios from 'axios'

export function isUserLoggedIn() {
  return window.localStorage['login']
}

function setUserData(data) {
  window.localStorage.setItem('login', data.success)
  window.localStorage.setItem('username', data.user.name)
  window.localStorage.setItem('email', data.user.email)
  let type = !_.isEmpty(data.user.teach) ? 'teacher' :
   !_.isEmpty(data.user.learn) ? 'learner' : 'user'
   type = !_.isEmpty(data.user.teach) && !_.isEmpty(data.user.learn) ? 'alrounder' : type
  window.localStorage.setItem('userType', type)
}

export function loginUser(values) {
  axios.post('/login/loginUser', {
    email: values.userName,
    password: values.password
  }).then((response) => {
    if(response.data.success) {
      setUserData(response.data)
      window.location.href = '/main'
    } else {
      message.error('Invalid username or password')
    }
  }).catch(() => {
    message.error('Error logging in')
  })
}

export function logoutUser() {
  window.localStorage.removeItem('login')
  window.localStorage.removeItem('username')
  window.localStorage.removeItem('email')
  window.localStorage.removeItem('userType')
  window.location.href = '/login'
}

export function signUpUser(values) {
  axios.post('/login/signUp', values).then((response) => {
    if(response.data.success) {
      setUserData(response.data)
      window.location.href = '/main'
    } else {
      message.error('Invalid username or password')
    }
  }).catch(() => {
    message.error('Error logging in')
  })
}
