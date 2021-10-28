import React from 'react';
import './Login.css';
import { Col, Card, Form, Button } from "react-bootstrap";

const Login = () => {
    return (
      <div className="bg-dark login-page">
        <h2>This is login page</h2>
        <img src="https://i.ibb.co/QDt4j81/logo.png" alt="" />
        <Col xs={12} md={5} className="mx-auto mt-5">
          <Card className="p-3">
            <h3>Login</h3>
            <div className="divider bg-info rounded mb-3 mx-auto"></div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="success" type="submit">
                Login
              </Button>
            </Form>
            <b className="my-3">Or</b>
            <div className="border border-2 border-dark rounded google-signin w-50 mx-auto py-2">
              <img
                src="https://i.ibb.co/n6DTPm7/login-removebg-preview.png"
                height="30px"
                width="30px"
                alt=""
              />
              <span>
                <b> Signup With Google</b>
              </span>
            </div>
          </Card>
        </Col>
      </div>
    );
};

export default Login;