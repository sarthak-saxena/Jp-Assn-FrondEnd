import React from 'react'
import GoogleMapReact from 'google-map-react';

import Pointer from './pointer'

export default class Map extends React.Component {
  render() {
    const apiKey = 'AIzaSyDxHWAggt6sWjW3227jI-eXEDjZjhUpT4k'
    const map = {
      center: {lat: 12.9716, lng: 77.5946},
      zoom: 13
    }
    return (
     <GoogleMapReact
        bootstrapURLKeys={{key: apiKey}}
        defaultCenter={map.center}
        defaultZoom={map.zoom}
      >
        { !_.isEmpty(this.props.userData) ?
          this.props.userData.map((user, index) => {
            return <Pointer key={index} lat={parseFloat(user.lat)} lng={parseFloat(user.long)} user={user}/>
          }) : ''
        }
      </GoogleMapReact>
    )
  }
}
