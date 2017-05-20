import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd'
const FormItem = Form.Item
import axios from 'axios'

import '../../assets/css/login.scss'

const LoginForm = Form.create()(
  (props) => {
    const { handleSubmit, form, setUsername, setPassword } = props
    const { getFieldDecorator } = form
    return (
      <center className="login">
        <img src="images/juspay.png"/>
        <h1>Sign In</h1>
        <Form onSubmit={handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input onChange={setUsername} prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input onChange={setPassword} prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            <a className="login-form-forgot" href="">Sign Up</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </FormItem>
        </Form>
      </center>
    )
  }
)

export default class Login extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/login/loginUser', {
      email: this.state.username,
      password: this.state.password
    }).then((response) => {
      if(response.data.success) {
        window.localStorage.setItem('login', response.success)
        window.location.href = '/main'
      } else {
        message.error('Invalid username or password')
      }
    }).catch(() => {
      message.error('Error logging in')
    })
  }

  setUsername = (e) => {
    this.setState({username: e.target.value})
  }

  setPassword = (e) => {
    this.setState({password: e.target.value})
  }

  render() {
    return (
      <LoginForm
        handleSubmit={this.handleSubmit}
        setUsername={this.setUsername}
        setPassword={this.setPassword}
      />
    )
  }
}
