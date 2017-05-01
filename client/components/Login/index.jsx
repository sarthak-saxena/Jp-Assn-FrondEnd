import React from 'react'
import { Link } from 'react-router-dom'

export default class Login extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1><Link to="/foo"> Login Here </Link></h1>
     </div>
    )
  }
}