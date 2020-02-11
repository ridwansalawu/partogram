import React from 'react';
import {Redirect} from "react-router-dom"
// import Parturient from '../forms/SignupNewParturient';


export default function Home(props) {
    if(props.isAuthenticated) {
        return <Redirect to="/" />
      }

    
    return (
        
        <div className="container">
            Welcome to the labour ward 
            <div className="row row-content">
                <img src="assets/images/cx_3d_delivery.jpg" width="100%" height="100%" alt=""/>
            </div>

        </div>
    )
}
