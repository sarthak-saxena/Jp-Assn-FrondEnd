import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Form, Icon, Input, Button, Checkbox, message, Select } from 'antd'
const FormItem = Form.Item
import { signUpUser } from '../../actions/login/loginActions'
import '../../assets/css/login.scss'

const SignUpForm = Form.create()(
  (props) => {
    const { handleSubmit, form } = props
    const { getFieldDecorator } = form
    const js = ['AngularJS', 'ReactJS', 'Javascript', 'Jquery', 'Node.js']
    const suggessions = []
    _.each(js, (javascript, index) => {
      suggessions.push(<Option key={index} value={javascript}>{javascript}</Option>)
    })

    return (
      <center className="login">
        <img src="images/juspay.png"/>
        <h1>Sign Up</h1>
        <Form onSubmit={(e) => handleSubmit(e, form)} className="login-form">
          <FormItem>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input your Username!' }],
            })(
              <Input placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your Email!' }],
            })(
              <Input placeholder="Email" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('mobile', {
              rules: [{ required: true, message: 'Please input your Mobile Number!' }],
            })(
              <Input placeholder="Mobile" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('teach', {
              rules: [{ required: false}],
            })(
              <Select
                mode="tags"
                style={{ width: '100%' }}
                filterOption={
                   (input, option) =>
                     option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                 }
                placeholder="I Can Teach"
              >
                {suggessions}
              </Select>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('learn', {
              rules: [{ required: false}],
            })(
              <Select
                mode="tags"
                style={{ width: '100%' }}
                filterOption={
                   (input, option) =>
                     option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                 }
                placeholder="I want to learn"
              >
                {suggessions}
              </Select>
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Sign Up
            </Button>
          </FormItem>
        </Form>
      </center>
    )
  }
)

export default class SignUp extends React.Component {
  handleSubmit = (e, form) => {
    e.preventDefault()
    form.validateFields((err, values) => {
      if(_.isNull(err)) {
        signUpUser(values)
      } else {
        message.error('Please fill required fields')
      }
    })
  }

  render() {
    return (
      <SignUpForm
        handleSubmit={this.handleSubmit}
      />
    )
  }
}
