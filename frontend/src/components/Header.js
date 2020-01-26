import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron, NavItem, Nav, Collapse, NavbarToggler } from "reactstrap";
import {NavLink} from "react-router-dom"


export default class Header extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isNavOpen:false
      };
    };

    toggleNav = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
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
                            <NavLink className="nav-link" to="/home">
                            <span className="fa fa-list fa-lg">Menu</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                            <span className="fa fa-question fa-lg">About Partograph</span>
                            </NavLink>
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

                </React.Fragment>
            </div>
        )
    }
}
