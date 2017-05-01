import React from 'react'
import { Link } from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1><Link to="/foo"> Click Here </Link></h1>
     </div>
    )
  }
}