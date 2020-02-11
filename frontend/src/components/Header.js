import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Jumbotron,
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
  Input
} from "reactstrap";
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
      <div>
        <React.Fragment>
          <Navbar expand="md">
            <div className="container">
              <NavbarToggler onClick={this.toggleNav} />
              <NavbarBrand className="mr-auto" href="/">
                <img
                  src="assets/images/cx_2cm.jpg"
                  height="50"
                  width="60"
                  alt=""
                />
              </NavbarBrand>
              <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink className="nav-link" to="/home">
                      <span className="fa fa-home fa-lg" style={{color: 'black'}}>Home</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/parturients">
                      <span className="fa fa-list fa-lg" style={{color: 'black'}}>Parturients</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/home">
                      <span className="fa fa-question fa-lg" style={{color: 'black'}}>
                        About Partograph
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/labourward">
                      <span className="fa fa-bed fa-lg" style={{color: 'black'}}>Labour Ward</span>
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink className="nav-link" to="/signupnewparturient">
                      <span className="fa fa-table fa-lg" style={{color: 'black'}}>
                        Admit Parturient
                      </span>
                    </NavLink>
                  </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    {!this.props.auth.isAuthenticated ? 
                      <div>
                        <Button outline onClick={this.toggleModal}>
                          <span className="fa fa-sign-in fa-lg" style={{color: 'black'}}></span> Login
                          {this.props.auth.isFetching ? (
                            <span className="fa fa-spinner fa-pulse fa-fw"></span>
                          ) : null}
                        </Button>
                        <div>
                          Not registered? <Link to="/signup" style={{color: 'black'}}>Sign Up</Link>
                        </div>
                      </div>
                     : 
                      <div>
                        <div className="navbar-text mr-3 bg-dark text-white">
                          {this.props.auth.user.username}
                        </div>
                        <Button outline onClick={this.handleLogout}>
                          <span className="fa fa-sign-out fa-lg" style={{color: 'black'}}></span> Logout
                          {this.props.auth.isFetching ? (
                            <span className="fa fa-spinner fa-pulse fa-fw"></span>
                          ) : null}
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
                  <h1 className="main-title">The Digital Partogram</h1>
                  <p className=" nav-title">Re-inventing the wheel!</p>
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

         
        </React.Fragment>
      </div>
    );
  }
}
