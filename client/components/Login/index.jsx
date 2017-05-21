import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd'
const FormItem = Form.Item
import { loginUser } from '../../actions/login/loginActions'
import '../../assets/css/login.scss'

const LoginForm = Form.create()(
  (props) => {
    const { handleSubmit, form } = props
    const { getFieldDecorator } = form
    return (
      <center className="login">
        <img src="images/juspay.png"/>
        <h1>Sign In</h1>
        <Form onSubmit={(e) => handleSubmit(e, form)} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            <Link to="/signUp">Sign Up</Link>
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
  handleSubmit = (e, form) => {
    e.preventDefault()
    form.validateFields((err, values) => {
      loginUser(values)
    })
  }

  render() {
    return (
      <LoginForm
        handleSubmit={this.handleSubmit}
      />
    )
  }
}
