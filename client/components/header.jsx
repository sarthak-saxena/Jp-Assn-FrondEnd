import React from 'react'
import '../assets/css/header.scss'
import Button from 'antd/lib/button'
import { logoutUser } from '../actions/login/loginActions'

export default class Header extends React.Component {
  logout = () => {
    logoutUser()
  }

  render() {
    return (
     <nav className="navbar navbar-default header">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand">
            <img alt="assignment" src="images/logo_nav.png" width="40"/>
          </a>
        </div>
        <div className="userInfo">
          { window.localStorage.username }
          <Button onClick={this.logout}>Logout</Button>
        </div>
      </div>
    </nav>
    )
  }
}
