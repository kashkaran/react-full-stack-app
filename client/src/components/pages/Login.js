import React, { Component } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

class Home extends Component {
    render() {
        return (
                <Col sm="10">
                    <Form >
                        <Form.Group as={Row} controlId="formBasicEmail">
                            <Form.Label column sm="2">Email address</Form.Label>
                            <Col sm="10">
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formBasicPassword">
                            <Form.Label column sm="2">Password</Form.Label>
                            <Col sm="10">
                                <Form.Control type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>
                        <Row>
                            <Col sm={{span: 3, offset: 9   }} as="div">
                            <a href="/forgot-password">  Forgot Password?</a>
                            </Col>
                        </Row>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Col>
        );
    }
}

export default Home;