import initialState from './initialState'
import * as types from '../constants/actionTypes'

export default function (state = initialState.login, action) {
  switch (action.type) {
    case types.LOGIN_USER:
      return {...state, credentials : action.payload}
    default:
      return state
  }
}
