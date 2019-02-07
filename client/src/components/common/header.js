import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import React, { Component } from "react";

class CustomNavBar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg" fixed="bottom">
                <Navbar.Brand href="/">Test React App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="//3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}




export default CustomNavBar;