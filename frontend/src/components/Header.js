import React, { Component } from "react";
import {

  Collapse,
  Form,
  NavbarToggler,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import {Nav, NavDropdown} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import { NavLink, Link, Redirect } from "react-router-dom";
import "./header.css";
import Axios from "axios";
//export const createHistory = require("history").createBrowserHistory

//const history = createHistory();

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false
    };
  }

  // componentDidMount() {
  //   Axios("https://api.fda.gov/drug/label.json?search=hydrallazine:generic_name")
  //     .then(res => {
  //       console.log(res.data)
  //     })

   
  // }






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





handleLogin = (event) => {
  event.preventDefault();
  this.toggleModal();

  const credentials = {
    username: this.username.value,
    password: this.password.value
  };

  this.props.loginUser(credentials)
    .then(() => {
      if(this.props.auth.isAuthenticated) {
        this.props.history.push("/labourward"); // redirect after login
      }
    });
};


  handleLogout = () => {
    this.props.logoutUser();
  };

  render() {


if (this.props.auth.isAuthenticated) {
  return <Redirect to="/labourward" />;
}


    return (
      <div  className="navigatio">
                    <Navbar bg="light" expand="lg" fixed="top">
                        <Navbar.Brand href="/" className="main-title"> Digital Partogram </Navbar.Brand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                          <Nav className="mr-auto">
                              <Nav.Link>
                                <NavLink className="nav-item" to="/home" >Home</NavLink>
                              </Nav.Link>
                              <Nav.Link>
                                <NavLink className="nav-item" to="/parturients" >Parturients</NavLink>
                              </Nav.Link>
                              {/* <Nav.Link>
                                <NavLink className="nav-item" to="/aboutpartograph" >About</NavLink>
                              </Nav.Link> */}
                              <Nav.Link>
                                <NavLink className="nav-item" to="/signupnewparturient" >Admit</NavLink>
                              </Nav.Link>
                              {/* <Nav.Link>
                                <NavLink className="nav-item" to="/drugsearch" >Drugs</NavLink>
                              </Nav.Link> */}
                              <Nav.Link>
                              {
                                    this.props.auth.isAuthenticated ?
                                    <span className="nav-item"> {this.props.auth.user.username} </span>  :
                                    <span >
                                    <span className="nav-item" onClick={this.toggleModal}>Login</span> 
                                    {this.props.auth.isFetching ? (
                                      <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                    ) : null}
                                  </span>

                                  }
                              </Nav.Link>


    {!this.props.auth.isAuthenticated ? (
      <Nav.Link>
        <NavLink className="nav-item" to="/signup" >Sign Up</NavLink>
      </Nav.Link>
    ) : null}
                              <Nav.Link>
                                 <NavLink className="nav-item" to="#">
                                    {this.props.auth.isAuthenticated ? <span onClick={this.handleLogout} >Log Out</span>: null}
                              </NavLink>
                             </Nav.Link>
                             
                            
                            
                    
                          </Nav>

                         
                        </Collapse>
                        
                  
                    
                  
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
                          {/* <FormGroup>
                            <Label htmlFor="pin"> PIN</Label>
                            <Input
                              type="password"
                              id="pin"
                              name="pin"
                              innerRef={input => (this.pin = input)}
                            />
                          </FormGroup> */}
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
           
          </div>
    );
  }
}
