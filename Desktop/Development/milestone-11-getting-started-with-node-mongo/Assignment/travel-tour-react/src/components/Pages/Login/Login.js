import React from 'react';
import './Login.css';
import { Col, Card, Form, Button } from "react-bootstrap";
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
  const { googleSignIn } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || "/home";

    const handleGoogleSignIn = () => {
      googleSignIn().then((result) => {
        // fetch(
        //   `https://infinite-stream-42915.herokuapp.com/addOffer/${result.user.email}`, {
        //     method: 'POST',
        //     headers: {
        //       "content-type": "application/json"
        //     },
        //     body: JSON.stringify(result.user.email)
        //   }
        // ).then(res => res.json())
        //   .then(data => {
        //     console.log(data);
        //     history.push(redirect_url);
        // })
        history.push(redirect_url);
      });
    };

  return (
    <>
      <div className="bg-dark login-page pt-5">
        <img src="https://i.ibb.co/QDt4j81/logo.png" alt="" />
        <Col xs={12} md={5} className="mx-auto mt-5 mb-5">
          <Card className="p-3">
            <h3>Login</h3>
            <div className="divider bg-info rounded mb-3 mx-auto"></div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="border border-1 border-dark"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="border border-1 border-dark"
                />
              </Form.Group>
              <Button variant="success" type="submit">
                Login
              </Button>
            </Form>
            <b className="my-3">Or</b>
            <div
              className="border border-2 border-dark rounded google-signin w-50 mx-auto py-2"
              onClick={handleGoogleSignIn}
            >
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
      <div className="divider bg-info rounded mb-3 mx-auto"></div>
      </div>
    </>
  );
};

export default Login;