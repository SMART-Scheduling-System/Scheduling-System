import { Button, Form, Input } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from "react-redux";
import toast from 'react-hot-toast';
import { hideLoading, showLoading } from "../redux/alertsSlice";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post('/api/user/register', values);
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        toast("Redirecting to login Page");
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };


  return (
    <div className="authentication">
      <div className="authentication-form card p-3">
        <h3 className="card-title">Register</h3>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Name"
            name="username"
          >
            <Input
              type="name"
              placeholder="username"
            />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
          >
            <Input
              type="email"
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
          >
            <Input
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirmpassword"
          >
            <Input
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Register
            </Button>
            <br></br> Already have a account?<a href="/login"> Login here</a>
          </Form.Item>
        </Form>
      </div></div>
  );
};
export default Register;