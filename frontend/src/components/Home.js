import React from 'react';
import {Redirect} from "react-router-dom"
import {Carousel, Image} from "react-bootstrap";
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import "../index.css"
// import Parturient from '../forms/SignupNewParturient';


export default function Home(props) {
    if(props.isAuthenticated) {
        return <Redirect to="/" />
      }

    return (
        <Container fluid="md" className="no-padding">
            <Row>
                <Col md={12}>
                    <Image src="assets/images/Adobe3.jpeg" fluid />
                </Col>
            </Row>
        </Container>









    )
}
