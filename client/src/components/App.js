import React, { Component } from "react";
import CustomNavBar from "./common/header";
import Home from "./pages/Login";
import ForgotPassowrd from "./pages/Forgot-password";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";



const Index = () => <h2>Welcome</h2>
const About = () => <h2>About</h2>;
// const ForgotPassowrd = () => <ForgotPassowrd/>;

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <CustomNavBar></CustomNavBar>
                    <Container>
                        <Row>
                            <Route path="/" exact component={Index} />
                            <Route path="/login" exact component={Home} />
                            <Route path="/about/" component={About} />
                            <Route path="/forgot-password/" component={ForgotPassowrd} />
                        </Row>
                    </Container>
                </div>
            </Router>
        )
    };
}

export default App;