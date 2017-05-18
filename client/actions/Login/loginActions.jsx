export function isUserLoggedIn() {
  return window.localStorage['userToken'] ? true : false
}

export function isAdminLoggedIn() {
  return window.localStorage['adminToken'] ? true : false
}
