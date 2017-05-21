import React from 'react'
import _ from 'lodash'

export default class Sidebar extends React.Component {
  render() {
    let data = this.props.userData
    return (
     <ul className="list-group">
      {
        data.map((user, index) => {
          return <li key={index} className="list-group-item"
           onClick={() => this.props.selectUser(user)}>
            {user.name}
            {
              window.localStorage.username === user.name ?
              <span> - Admin</span> : ''
            }
           </li>
        })
      }
    </ul>
    )
  }
}
