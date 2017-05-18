import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd'
const FormItem = Form.Item
import request from '../shared/request'

import '../../assets/css/login.scss'

const LoginForm = Form.create()(
  (props) => {
    const { handleSubmit, form, setUsername, setPassword } = props
    const { getFieldDecorator } = form
    return (
      <center className="login">
        <img src="images/AdwyzeLogo.png"/>
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
            <a className="login-form-forgot" href="">Forgot password</a>
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
    request.post('/api/login', {
      login_credentials: {
        email: this.state.username,
        password: this.state.password
      }
    }).then((response) => {
      window.localStorage.setItem('userToken', response.data.auth_token)
      window.location.href = '/foo'
    }).catch(() => {
      message.error('Invalid username or password')
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
