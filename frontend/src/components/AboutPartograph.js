import React, { Component } from 'react';
import {Container, Row, Carousel } from "react-bootstrap";
import {withRouter} from "react-router-dom";


class AboutPartograph extends Component {


componentDidMount = () => {
    if (!this.props.auth.isAuthenticated) {
        alert("you need to sign in to continue")
        this.props.history.push("/home");
      }
};


    render() {
        return (

            <Container>
                <Row>
                    <Carousel interval="null">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="assets/images/Normal_Partograph_390.jpg"
                            width="100%"
                        
                            alt="First slide"
                            />
                        <Carousel.Caption>
                            <h3>Closed</h3>
                            <p>would not admit any finger, 0cm dilated</p>
                        </Carousel.Caption>
                            
                        </Carousel.Item> 

                        {/* <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="Delay_1stStage_Partograph_1_390.jpg"
                            alt="First slide"
                            />
                        <Carousel.Caption>
                            <h3>Closed</h3>
                            <p>would not admit any finger, 0cm dilated</p>
                        </Carousel.Caption>
                            
                        </Carousel.Item> <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="Delay_1stStage_Partograph_3_390.jpg"
                            alt="First slide"
                            />
                        <Carousel.Caption>
                            <h3>Closed</h3>
                            <p>would not admit any finger, 0cm dilated</p>
                        </Carousel.Caption>
                            
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="assets/images/cx_closed.jpg"
                            alt="First slide"
                            />
                        <Carousel.Caption>
                            <h3>Closed</h3>
                            <p>would not admit any finger, 0cm dilated</p>
                        </Carousel.Caption>
                            
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="assets/images/cx_2cm.jpg"
                            alt="First slide"
                            />
                        <Carousel.Caption>
                            <h3>About 2cm dilated</h3>
                            <p>admits just the tip of a finger</p>
                        </Carousel.Caption>
                            
                        </Carousel.Item> */}
                        {/* <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="assets/images/cx_4cm.jpg"
                            alt="First slide"
                            />
                        <Carousel.Caption>
                            <h3>About 4cm dilated</h3>
                            <p>2 fingers breadth</p>
                        </Carousel.Caption>
                            
                        </Carousel.Item> */}
                        {/* <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="assets/images/cx_2ndStage.jpg"
                            alt="First slide"
                            />
                        <Carousel.Caption>
                            <h3>full dilatation</h3>
                            <p>About 10cm wide</p>
                        </Carousel.Caption>
                            
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="assets/images/cx_3d_delivery.jpg"
                            alt="2nd Stage"
                            />
                        <Carousel.Caption>
                            <h3>coming soon.....</h3>
                            <p>what next?</p>
                        </Carousel.Caption>
                            
                        </Carousel.Item> */}
                    </Carousel>
                </Row>

            </Container>
            
        )
    }
}

export default withRouter(AboutPartograph);
