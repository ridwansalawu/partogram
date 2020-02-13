import React, { Component } from "react";
import {

  NavItem,
  Nav,
  Collapse,
  Form,
  NavbarToggler,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Input,
  Row,
  Container,
  Col
} from "reactstrap";

import Navbar from 'react-bootstrap/Navbar'


import { NavLink, Link, Redirect } from "react-router-dom";
import "./header.css";

export const createHistory = require("history").createBrowserHistory

const history = createHistory();

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
    //   redirectToReferrer: false,
    //   redirectToReferrerSignup: false,
      isNavOpen: false,
      isModalOpen: false
    };
  }


  componentDidMount() {
    console.log("9797979797979797979797979" + JSON.stringify(this.props))
  }

  toggleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  };
  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };
  handleLogin = event => {
      event.preventDefault()
    this.toggleModal();
    this.props.loginUser({
      username: this.username.value,
      password: this.password.value
    //   history: this.props.history
    })
    .then(setTimeout( function() { history.push('/labourward') }, 700))
    
  };

  handleLogout = () => {
    this.props.logoutUser();
    // this.setState({ redirectToReferrer: true });
  };

  render() {
    if(this.props.isAuthenticated) {
      return <Redirect to="/" />
    }

    return (
          <Container>
            <Row className="main-row">
           
              
          <Navbar className="navigatio" bg="light" expand="lg" fixed="top">
          <Col md={4}>
          <Navbar.Brand>
              <h1 className="main-title">The Digital Partogram</h1>
                  <p className=" nav-title">Re-inventing the wheel!</p>
          </Navbar.Brand>
              </Col>
          
     <Col>
           
              <NavbarToggler onClick={this.toggleNav} />
             <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar>
                  <Col>
                  <NavItem>
                    <NavLink  to="/home">
                      <span className="nav-item" >Home</span>
                    </NavLink>
                  </NavItem>
                  </Col>

                  <Col>
                  <NavItem>
                    <NavLink  to="/parturients">
                      <span className="nav-item" >Parturients</span>
                    </NavLink>
                  </NavItem>
                  </Col>

                  <Col>
                  <NavItem>
                    <NavLink  to="/aboutpartograph">
                      <span className="nav-item" >
                        About Partograph
                      </span>
                    </NavLink>
                  </NavItem>
                  </Col>


                  <Col>
                  <NavItem>
                    <NavLink to="/signupnewparturient">
                      <span className="nav-item" >
                        Admit Parturient
                      </span>
                    </NavLink>
                  </NavItem>
                  </Col>

                </Nav>
                <Col>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    {!this.props.auth.isAuthenticated ? 
                      <div>
                        <Button outline onClick={this.toggleModal}>
                          <span className="fa fa-sign-in fa-lg" ></span> Login
                          {this.props.auth.isFetching ? (
                            <span className="fa fa-spinner fa-pulse fa-fw"></span>
                          ) : null}
                        </Button>
                        <div>
                          <span className="nav-item">Not registered?</span>  <Link to="/signup" >Sign Up</Link>
                        </div>
                      </div>
                     : 
                      <div>
                        
                        <Button outline onClick={this.handleLogout}>
                          <span className="fa fa-sign-out fa-lg" ></span> <span className="buttoncolor">Logout</span> 

                          {this.props.auth.isFetching ? (
                            <span className="fa fa-spinner fa-pulse fa-fw"></span>
                          ) : null}
                        </Button>
                        {" "}
                        {" "}

                        <div className="navbar-text" >
                          <span className="navtext">{this.props.auth.user.username}</span>
                        </div>
                      </div>
                    }
                  </NavItem>
                </Nav>
                </Col>
              </Collapse>
              
            </Col>
          
         
          </Navbar>

          


          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
            <ModalBody>
              <Form onSubmit={this.handleLogin}>
                <FormGroup>
                  <Label htmlFor="username"> Username </Label>
                  <Input
                    type="text"
                    id="username"
                    name="username"
                    innerRef={input => (this.username = input)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="password"> Password</Label>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    innerRef={input => (this.password = input)}
                  />
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="remember"
                      innerRef={input => (this.remember = input)}
                    />
                    Remember me
                  </Label>
                </FormGroup>
                <Button type="submit" value="submit" color="primary">
                  Login
                </Button>
              </Form>
            </ModalBody>
          </Modal>
          </Row>
          </Container>
    );
  }
}
