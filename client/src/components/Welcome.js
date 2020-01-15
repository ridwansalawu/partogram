import React, { Component } from 'react'
import { Link } from '@reach/router';
import './welcome.css';

export default class Welcome extends Component {
    
    render() {
        const { user, logOutUser } = this.props;
        console.log(logOutUser)

        return (
            <div>
                <code className="welcome">Welcome {user} </code>
                ,
                <Link to="#" onClick={logOutUser}> 
                Log Out</Link>
                
            </div>
        )
    }
}
