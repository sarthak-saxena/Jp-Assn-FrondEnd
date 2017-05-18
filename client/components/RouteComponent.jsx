import React from 'react'
import { Link } from 'react-router-dom'
import { Routes } from '../constants/routes.js'
import { Route, Redirect } from 'react-router'
import { connect } from 'react-redux'
import { isUserLoggedIn, isAdminLoggedIn } from '../actions/Login/loginActions.jsx'
import _ from 'lodash'

export default class RouteComponent extends React.Component {
  render() {
    const { history } = this.props
    let userToken = isUserLoggedIn()
    let adminToken = isAdminLoggedIn()
    console.log(userToken)

    let routesDom =
      Routes.map((r, i) => {
        let route = r.exact ? <Route key={i} exact path={r.path} component={r.component} />
          : <Route key={i} path={r.path} component={r.component} />
        return route
      })

    if(!_.isEmpty(userToken) || !!_.isEmpty(adminToken)) {
      routesDom = routesDom.concat(<Redirect from="/" to="/login" />)
    } else {
      routesDom.concat(<Redirect from="/login" to="/foo" />)
    }

    return (
     <div>
      {routesDom}
     </div>
    )
  }
}
