import React from 'react'
import '../assets/css/header.scss'
export default class Header extends React.Component {
  render() {
    return (
     <nav className="navbar navbar-default header">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            <img alt="assignment" src="images/logo_nav.png" width="40"/>
          </a>
        </div>
      </div>
    </nav>
    )
  }
}
