import React from 'react'
import '../assets/css/pointer.scss'
import Icon from 'antd/lib/icon'

export default class Pointer extends React.Component {
  render() {
    return (
       <div className="pointer">
          <Icon type="environment-o" />{this.props.text}
       </div>
    );
  }
}
