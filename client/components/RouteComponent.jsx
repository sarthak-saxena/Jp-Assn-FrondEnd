import React from 'react'
import { Link } from 'react-router-dom'
import { Routes } from '../constants/routes.js'
import { Route, Redirect } from 'react-router'
import { connect } from 'react-redux'
import { isUserLoggedIn, isAdminLoggedIn } from '../actions/Login/loginActions.jsx'

@connect((store) => {
  return {
    dispatch: store.dispatch
  }
})

export default class RouteComponent extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { dispatch } = this.props
    let userToken = isUserLoggedIn()
    let adminToken = isAdminLoggedIn()
    let routes = []
    let routesDom = []
    if (userToken) {
      routes = Routes
      dispatch({type: "SET_TOKEN", payload: userToken})
      routesDom =     routes.map((route) => {
      if (route.exact) {
        return <Route exact path={route.path} component={route.component} />
      } else {
        return <Route path={route.path} component={route.component} />
      }
    })
    } else if (adminToken) {
      routes = Routes
      dispatch({type: "SET_TOKEN", payload: userToken})
      routesDom =     routes.map((route) => {
      if (route.exact) {
        return <Route exact path={route.path} component={route.component} />
      } else {
        return <Route path={route.path} component={route.component} />
      }
    })
    } else {
      console.log('hihihihihi');
      routesDom = <Redirect to='/login'></Redirect>
      routes = Routes.filter((r) => { !r.login })
      dispatch({type: "SET_TOKEN", payload: undefined})
    }
    
    return (
     <div>
      {routesDom}
    </div>
    )
  }
}