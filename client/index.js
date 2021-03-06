import React from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import createStore from './store/store.jsx'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import RouteComponent from './components/RouteComponent.jsx'
import { Routes } from './constants/routes.js'
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.css'

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
// railsContext provides contextual information especially useful for server rendering, such as
// knowing the locale. See the React on Rails documentation for more info on the railsContext

axios.defaults.baseURL = process.env.API_HOST

const store = createStore()
const history = createHistory()
const reactComponent = (
<Provider store={store} >
  <ConnectedRouter history={history}>
    <RouteComponent history={history}/>
  </ConnectedRouter>
</Provider>)
ReactDOM.render(reactComponent, document.getElementById('root'))
