import React from 'react'
import Modal from 'antd/lib/modal'
import Input from 'antd/lib/input'
import Button from 'antd/lib/button'
import _ from 'lodash'

export default class UserModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }
  }

  sendMessage = (msg) => {
    this.props.io.socket.post('/chat/sendMsg', {
      user: window.localStorage.username,
      chatUser: this.props.data.currentUser.name,
      message: msg
    })
  }

  render() {
    let user = this.props.data.currentUser
    let myLocation = 'Hey, I am sharing my location with you  ' +
      'http://maps.google.com/maps?z=12&t=m&q=loc:' + this.props.data.location.lat
        +'+' + this.props.data.location.lng

    let location = (
      <div className="row share-location">
        <a target="_blank" onClick={() => this.sendMessage(myLocation)}>Share your Location</a>
      </div>
    )

    let chatKey = window.localStorage.username.length + user.name.length + '_key'

    return (
      <Modal title="User Info" visible={this.props.data.userModal}
          onCancel={this.props.closeUserModal} footer={null}
        >
        <h3>{user.name}</h3>
        <div className="chat-container">
          {
            !_.isEmpty(this.props.chat) && !_.isEmpty(this.props.chat[chatKey]) ?
              <div className="row chat">
                {
                  this.props.chat[chatKey].map((c, index) => {
                    return (
                      <div className="row" key={index}>
                        <b>{c.sender} : </b><span>{c.message}</span>
                      </div>
                    )
                  })
                }
              </div> : ''
          }
          <Input value={this.state.message} onChange={(e) => this.setState({message: e.target.value})}/>
          <Button onClick={() => this.sendMessage(this.state.message)}>Send Message</Button>
          <div className="infoMsg">
            These are real time chats and are not saved, you can chat to a user only if he is present online and
             will loose them after refreshing the page.
          </div>
        </div>
        { location }
      </Modal>
    )
  }
}

// Get User Location
// <a href={'http://maps.google.com/maps?z=12&t=m&q=loc:'
// + user.lat +'+' + user.long} target="_blank">Get user Location</a>
