import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './welcome.css'

export default class Welcome extends Component {
    
    render() {
        const { user } = this.props;

        return (
            <div>
                <code className="welcome">Welcome {user}</code>
                ,
                <NavLink to="#"> Log Out</NavLink>
                
            </div>
        )
    }
}
