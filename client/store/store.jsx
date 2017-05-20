import { compose, createStore, applyMiddleware, combineReducers } from 'redux'
import createLogger from 'redux-logger'

import thunkMiddleware from 'redux-thunk'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import reducers from '../reducers/index.jsx'

export default props => {
  const reducer = combineReducers({
    ...reducers,
    router: routerReducer
  })
  const middleware = routerMiddleware(history)
  const composedStore = compose(
    applyMiddleware(thunkMiddleware, middleware)
  )
  const storeCreator = composedStore(createStore)
  const store = storeCreator(reducer)

  return store
}
