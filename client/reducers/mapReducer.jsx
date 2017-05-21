import * as types from '../constants/actionTypes'

export const initialState = {
  data: []
}

export default function mapReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_USER_DATA:
      return {...state, data : action.payload}
    default:
      return state
  }
}
