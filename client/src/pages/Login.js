import { Button, Form, Input } from 'antd';
import React from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate} from'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try{
      const response = await axios.post('/api/user/login', values);
      if(response.data.success){
        toast.success(response.data.message);
        toast("Redirecting to Home Page");
        localStorage.setItem("token", response.data.data);
        navigate("/");
      }else{
        toast.error(response.data.message);
      }
    }catch(error){
      toast.error("Something went wrong") ;
    }
    
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