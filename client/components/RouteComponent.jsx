import React from 'react'
import { Link } from 'react-router-dom'
import { Routes } from '../constants/routes.js'
import { Route, Redirect } from 'react-router'
import { connect } from 'react-redux'
import { isUserLoggedIn, isAdminLoggedIn } from '../actions/Login/loginActions.jsx'

export default class RouteComponent extends React.Component {
  render() {
    const { history } = this.props
    let userToken = isUserLoggedIn()
    let adminToken = isAdminLoggedIn()

    let routesDom =
      Routes.map((r) => {
        let route = r.exact ? <Route exact path={r.path} component={r.component} />
          : <Route path={r.path} component={r.component} />
        return route
      })

    if(!userToken || !adminToken) {
      routesDom = routesDom.concat(<Redirect from="/" to="/login" />)
    }

    return (
     <div>
      {routesDom}
     </div>
    )
  }
}
