import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import message from 'antd/lib/message'

import '../assets/css/dataContainer.scss'
import Map from './map'
import Sidebar from './sidebar'
import UserModal from './userModal'
import socketIOClient from 'socket.io-client'
import sailsIOClient from 'sails.io.js'

const io = sailsIOClient(socketIOClient)
io.sails.url = 'http://localhost:1337'

@connect((store) => {
  return {
    userData: store.mapStore,
    userModal: false
  }
})

export default class DataContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: [],
      userModal: false,
      currentUser: {},
      location: {},
      chat: {}
    }
  }

  selectUser = (user) => {
    this.setState({currentUser: user, userModal: true})
  }

  closeUserModal = () => {
    this.setState({userModal: false})
  }

  componentWillMount = () => {
    const uuid = Math.floor(Math.random() * 10000)
    // Subscribe to socket after getting geo location
    navigator.geolocation.getCurrentPosition((position) => {
      let location = {
        lat: position.coords.latitude,
        lng:  position.coords.longitude
      }
      this.setState({location})
      io.socket.get('/subscribe/subscribeUser?id='+ uuid +' &name=' + window.localStorage.username
       + '&type=' + window.localStorage.userType + '&lat=' + location.lat +
        '&long=' + location.lng)
    })
  }

  componentDidMount = () => {
    io.socket.on('userAdded', (data) => {
      this.setState({userData: data})

      // Subscribe users to socket rooms
    _.each(data, (user) => {
        io.socket.get('/chat/sendMsg?user=' + window.localStorage.username +
          '&chatUser=' + user.name)
      })
    })
    io.socket.on('chat', (data) => {
      if(data.receiver === window.localStorage.username) {
        message.info('New Message received from ' + data.sender + ' - ' + data.message, 5)
      }
      let chat = this.state.chat
      let key = data.sender.length + data.receiver.length + '_key'
      chat[key] = _.isUndefined(chat[key]) ? [data] : chat[key].concat(data)
      this.setState({chat})
    })
  }

  render() {
    return (
      <div className="dataConatiner">
        <div className="col-xs-2">
          <Sidebar userData={this.state.userData} selectUser={this.selectUser} />
        </div>
        <div className="col-xs-10">
          <Map userData={this.state.userData}/>
        </div>
        {
          !_.isEmpty(this.state.currentUser) ?
           <UserModal data={this.state} chat={this.state.chat} closeUserModal={this.closeUserModal} io={io}/> : ''
        }
      </div>
    )
  }
}
