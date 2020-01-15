import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



class Header extends Component {
    render() {
        const {logOutUser} = this.props;
        return (
            <div>
            <header>
                <h1>the partogram</h1>
                <nav className="navigation">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/partograph">Partogram</NavLink>
                    <NavLink to="/user">Users</NavLink>
                    {!this.props.user && <NavLink to="#">Log In</NavLink> }
                    {!this.props.user && <NavLink to="/register">Register</NavLink>}
    
                    {this.props.user && <NavLink to="/login" onClick={e => logOutUser(e) }>log out</NavLink>}
                    
                   
                    
                    <NavLink to="#">Patients</NavLink>
                </nav>
            </header>
                
            </div>
        )
    }
}


export default Header;
  





