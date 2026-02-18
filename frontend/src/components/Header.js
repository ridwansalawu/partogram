
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
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, withRouter } from "react-router-dom";
import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false
    };
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isNavOpen: !prevState.isNavOpen
    }));
  };

  toggleModal = () => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen
    }));
  };

  handleLogin = async (event) => {
    event.preventDefault();

    const credentials = {
      username: this.username.value,
      password: this.password.value
    };

    try {
      await this.props.loginUser(credentials);

      // Check if token exists (successful login)
      if (this.props.auth.token) {
        this.toggleModal();
        this.props.history.push("/labourward");
      }
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  handleLogout = () => {
    this.props.logoutUser();
    this.props.history.push("/home");
  };

  render() {
    return (
      <div className="navigatio">
        <Navbar bg="light" expand="lg" fixed="top">
          <Navbar.Brand href="/" className="main-title">
            Digital Partogram
          </Navbar.Brand>

          <NavbarToggler onClick={this.toggleNav} />

          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav className="mr-auto">

              <Nav.Link>
                <NavLink className="nav-item" to="/home">
                  Home
                </NavLink>
              </Nav.Link>

              <Nav.Link>
                <NavLink className="nav-item" to="/parturients">
                  Parturients
                </NavLink>
              </Nav.Link>

              <Nav.Link>
                <NavLink className="nav-item" to="/signupnewparturient">
                  Admit
                </NavLink>
              </Nav.Link>

              <Nav.Link>
                {this.props.auth.isAuthenticated ? (
                  <span className="nav-item">
                    {this.props.auth.user?.username}
                  </span>
                ) : (
                  <span className="nav-item" onClick={this.toggleModal}>
                    Login
                  </span>
                )}
              </Nav.Link>

              {!this.props.auth.isAuthenticated && (
                <Nav.Link>
                  <NavLink className="nav-item" to="/signup">
                    Sign Up
                  </NavLink>
                </Nav.Link>
              )}

              {this.props.auth.isAuthenticated && (
                <Nav.Link>
                  <span className="nav-item" onClick={this.handleLogout}>
                    Log Out
                  </span>
                </Nav.Link>
              )}
            </Nav>
          </Collapse>
        </Navbar>

        {/* LOGIN MODAL */}
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  innerRef={input => (this.username = input)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  innerRef={input => (this.password = input)}
                  required
                />
              </FormGroup>

              <Button type="submit" color="primary" block>
                Login
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default withRouter(Header);
