import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron, NavItem, Nav, Collapse, Form, NavbarToggler, Button, Modal, ModalHeader, ModalBody, FormGroup, Label, Input } from "reactstrap";
import {NavLink, Link} from "react-router-dom"



export default class Header extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isNavOpen:false,
         isModalOpen:false
      };
    };

    toggleNav = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    handleLogin =(event) => {
        this.toggleModal();
        this.props.loginUser({username: this.username.value, password: this.password.value});
        event.preventDefault();

    }

    handleLogout = () => {
        this.props.logoutUser();
    }
    
    render() {
        return (
            <div>
                <React.Fragment>
                <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav}/>
                    <NavbarBrand className="mr-auto"  href="/">
                    <img src="assets/images/cx_2cm.jpg" height="50" width="60" alt=""/>
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                            <span className="fa fa-home fa-lg">Home</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/parturients">
                            <span className="fa fa-list fa-lg">Parturients</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                            <span className="fa fa-question fa-lg">About Partograph</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/labourward">
                            <span className="fa fa-bed fa-lg">Labour Ward</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/partograph">
                            <span className="fa fa-table fa-lg">Partograph</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/visualize">
                            <span className="fa fa-table fa-lg">Visualize</span>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                                <NavItem>
                                    { !this.props.auth.isAuthenticated ?
                                    <div>
                                            <Button outline onClick={this.toggleModal}>
                                                <span className="fa fa-sign-in fa-lg"></span> Login
                                                {this.props.auth.isFetching ?
                                                    <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                    : null
                                                }
                                            </Button>
                                            <div>Not registered? <Link to="/signup">Sign Up</Link></div>
                                    </div>
                                            :
                                            <div>
                                            <div className="navbar-text mr-3">{this.props.auth.user.username}</div>
                                            <Button outline onClick={this.handleLogout}>
                                                <span className="fa fa-sign-out fa-lg"></span> Logout
                                                {this.props.auth.isFetching ?
                                                    <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                    : null
                                                }
                                            </Button>
                                        </div>
                                    }

                                </NavItem>
                            </Nav>
                    </Collapse>
                </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>The Digital Partogram</h1>
                                <p>Re-inventing the wheel!</p>

                            </div>

                        </div>

                    </div>
                </Jumbotron>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username"> Username </Label>
                                <Input type="text" id="username" name="username" 
                                innerRef={(input) => this.username = input}/>

                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password"> Password</Label>
                                <Input type="password" id="password" name="password" 
                                innerRef={(input) => this.password = input}/>
                            </FormGroup>
                            <FormGroup check>
                                <Label check> 
                                <Input type="checkbox"  name="remember"
                                innerRef={(input) => this.remember = input} />
                                Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>

                        </Form>
                    </ModalBody>
                </Modal>


                </React.Fragment>
            </div>
        )
    }
}
