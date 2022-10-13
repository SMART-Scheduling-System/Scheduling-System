import { Button, Input } from "antd";
import React from "react";
import { Form, Link } from "react-router-dom";

function Register() {

  const onFinish = (values) => {

    console.log('Received values of form: ', values);

  }


  return (
    <div className="authentication">
      <div className="authentication-form card p-3">
        <h1 className="card-title">Nice To Meet U</h1>
        <Form layout='vertical' onFinish={onFinish}>

          <Form.item label='Name' name='name'>
            <Input placeholder="Name" />
          </Form.item>

          <Form.item label='Email' name='email'>
            <Input placeholder="Email" />
          </Form.item>

          <Form.item label='Password' name='password'>
            <Input placeholder="Password" type='password' />
          </Form.item>

          <Button className="primary-button my-2" htmlType="submit"> REGISTER </Button>

          <Link to='/login' className="anchor mt-2">CLICK HERE TO LOGIN</Link>

        </Form>
      </div>
    </div>
  );
}

export default Register;