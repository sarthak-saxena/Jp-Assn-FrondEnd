import React from 'react'
import Header from './header'
import DataContainer from './dataContainer'

export default class Main extends React.Component {
  render() {
    return (
     <div>
      <Header/>
      <DataContainer/>
     </div>
    )
  }
}
