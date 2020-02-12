import React from 'react';
import {Redirect} from "react-router-dom"
import {Container, Row, Carousel} from "react-bootstrap"
// import Parturient from '../forms/SignupNewParturient';


export default function Home(props) {
    if(props.isAuthenticated) {
        return <Redirect to="/" />
      }

    
    return (
        
        
        <Container>
            <Row>
                <Carousel>
                    <Carousel.Item>
                    <img src="assets/images/cx_3d_delivery.jpg" width="100%" height="100%" alt=""/>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src="assets/images/cx_2cm.jpg" width="100%" height="100%" alt=""/>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src="assets/images/cx_2ndStage.jpg" width="100%" height="100%" alt=""/>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src="assets/images/cx_4cm.jpg" width="100%" height="100%" alt=""/>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src="assets/images/cx_closed.jpg" width="100%" height="100%" alt=""/>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src="assets/images/black_preg.jpg" width="75%" height="75%" alt=""/>
                    </Carousel.Item>
                </Carousel>

            </Row>


        </Container>









    )
}
