import React, { Component } from 'react';
import {Container, Carousel, Card, Button } from "react-bootstrap";
import {withRouter} from "react-router-dom";


class AboutPartograph extends Component {


componentDidMount = () => {
    // if (!this.props.auth.isAuthenticated) {
    //     alert("you need to sign in to continue")
    //     this.props.history.push("/home");
    //   }
};


    render() {
        return (
            <Container>
            <Card >
  <Card.Img variant="top" src="assets/images/Normal_Partograph_390.jpg" alt="the partograph" />
  <Card.Body style={{color: "black", background: "grey"}}>
    <Card.Title >Card Title</Card.Title>
    <Card.Text>
   Traditionally the partogram is graphical representation of progress of labour
    </Card.Text>
   
  </Card.Body>
</Card>
            </Container>
        )

        
             
                  

          
            
        
    }
}

export default withRouter(AboutPartograph);
