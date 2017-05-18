import { instanceOf } from 'prop-types'
export function isUserLoggedIn() {
  console.log(window)
  if (window.localStorage['userToken']) {
    return false
  } else {
    return window.localStorage['userToken']
  }
}

export function isAdminLoggedIn() {
  if (window.localStorage['adminToken']) {
    return false
  } else {
    return window.localStorage['adminToken']
  }
}
