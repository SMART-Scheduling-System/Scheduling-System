import { Button, Form, Input } from 'antd';
import React from 'react';
const Login = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className="authentication">
      <div className="authentication-form card p-3">
        <h3 className="card-title">Login</h3>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        label = "Email"
        name="email"
      >
        <Input
          type="email"
          placeholder="Email"
        />
      </Form.Item>

          <Form.Item
        label = "Password"
        name="password"
      >
        <Input
          type="password"
          placeholder="Password"
        />
      </Form.Item>


      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        <br></br>New User?<a href="/register"> Register here.</a>
      </Form.Item>
    </Form>
    </div></div>
  );
};
export default Login;