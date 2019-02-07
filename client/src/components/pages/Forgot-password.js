import React, { Component } from 'react'
import { Form, Button, Col, Row } from "react-bootstrap";

export default class ForgotPassword extends Component {
  render() {
    return (
      <div>
           <Col sm="10">
                    <Form >
                        <Form.Group as={Row} controlId="formBasicEmail">
                            <Form.Label column sm="2">Email address</Form.Label>
                            <Col sm="10">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Col>
                        </Form.Group>
                        <Button variant="primary" type="submit">Reset Password</Button>
                    </Form>
                </Col>
      </div>
    )
  }
}
