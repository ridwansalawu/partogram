import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import { Link } from "@reach/router";



class Header extends Component {
    render() {
        const {logOutUser} = this.props;
        return (
            <div>
            <header>
                <h1>the partogram</h1>
                <nav className="navigation">
                    <Link to="/">Home</Link>
                    <Link to="/partograph">Partogram</Link>
                    <Link to="/user">Users</Link>
                    {!this.props.user && <Link to="/login">Log In</Link> }
                    {!this.props.user && <Link to="/register">Register</Link>}
                    {this.props.user && <Link to="/login" onClick={e => logOutUser(e) }>log out</Link>}
                    <Link to="#">Patients</Link>
                    <Link to="/hospitals">Hospital</Link>

                </nav>
            </header>
                
            </div>
        )
    }
}


export default Header;
  





