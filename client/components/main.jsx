import React from 'react'
import Header from './header'
import Map from './map'

export default class Main extends React.Component {
  render() {
    return (
     <div>
      <Header/>
      <Map/>
     </div>
    )
  }
}
