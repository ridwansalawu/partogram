import React from 'react';
import Parturient from '../forms/SignupNewParturient';
import Loading from './Loading';

export default function Home() {
    return (
        <div className="container">
            Welcome to the labour ward 
            <div className="row row-content">
                <img src="assets/images/black_preg.jpg" width="50%" height="50%" alt=""/>
            </div>

            <Loading/>
        </div>
    )
}
