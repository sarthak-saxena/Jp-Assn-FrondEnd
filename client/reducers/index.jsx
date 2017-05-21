import { combineReducers } from 'redux'

import mapReducer, { initialState as mapInitialState } from './mapReducer'

export default {
  mapStore: mapReducer
}

export const initialStates = {
  mapInitialState
}
