import React from 'react'
import GoogleMapReact from 'google-map-react';
import '../assets/css/map.scss'
import Pointer from './pointer'
import socketIOClient from 'socket.io-client'
import sailsIOClient from 'sails.io.js'

const io = sailsIOClient(socketIOClient);

export default class Map extends React.Component {
  pointerClick =(e) => {
    console.log(e)
    console.log('sarthak saxena')
  }

  render() {
    const map = {
      center: {lat: 12.9716, lng: 77.5946},
      zoom: 13
    }

    return (
     <div className="map container">
        <GoogleMapReact
          apiKey='AIzaSyDxHWAggt6sWjW3227jI-eXEDjZjhUpT4k'
          defaultCenter={map.center}
          defaultZoom={map.zoom}
        >
          <Pointer lat={12.9646} lng={77.6385} text={'T'} onClick={this.pointerClick} />
        </GoogleMapReact>
     </div>
    )
  }
}
