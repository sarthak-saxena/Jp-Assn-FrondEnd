import React from 'react'
import '../assets/css/pointer.scss'
import Icon from 'antd/lib/icon'

export default class Pointer extends React.Component {
  render() {
    const user = this.props.user
    let type
    switch(user.type) {
      case 'teacher':
        type = 'T'
        break
      case 'learner':
        type = 'L'
        break
      case 'alrounder':
        type = 'TL'
      break
    }
    return (
       <div className="pointer">
          <Icon type="environment-o" />{type}&nbsp;{user.name}
       </div>
    );
  }
}
