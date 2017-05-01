import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger'

import thunkMiddleware from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux'
import reducers from './reducers/index.jsx';
import { initialStates } from './reducers/index.jsx';

export default props => {
  const {
    reportsInitialState, sheetsInitialState, widgetsInitialState, commonInitialState,
    metricsInitialState
  } = initialStates
  // Redux expects to initialize the store using an Object, not an Immutable.Map
  const initialState = {
    reportsStore: reportsInitialState,
    sheetsStore: sheetsInitialState,
    widgetsStore: widgetsInitialState,
    metricsStore: metricsInitialState,
    commonStore: Object.assign({}, commonInitialState, {
      adChannel: window.gon ? window.gon.adChannel : undefined
    })
  };

  const reducer = combineReducers({
    ...reducers,
    router: routerReducer
  })
  const middleware = routerMiddleware(history)
  const composedStore = compose(
    applyMiddleware(thunkMiddleware, middleware)
  );
  const storeCreator = composedStore(createStore);
  const store = storeCreator(reducer, initialState);

  return store;
};
