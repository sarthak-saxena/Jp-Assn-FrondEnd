export function isUserLoggedIn() {
  console.log('1234', window.localStorage['userToken'])
  return window.localStorage['userToken'] ? true : false
}

export function isAdminLoggedIn() {
  return window.localStorage['adminToken'] ? true : false
}
