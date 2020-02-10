import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import "../index.css";
import { Card, Container, Row, Col, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import { baseUrl } from "../testData/baseUrl";
import {Redirect} from "react-router-dom"

class Parturients extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       redirectToReferrer: false,
       showDelete: false,
       firstname: "",
       lastname: "",
       medId: ""

    };
  };

  handleChange = (e) => {
    this.setState({ [e.target.name] : e.target.value })
    console.log(e.target.value)
  };

  handleDelete = parturient => {
    Axios.delete(baseUrl + `parturients/${parturient._id}`).then(response => {
      console.log(response);
    });
    console.log("Deleted");
  };

  handleSearch = (e) => {
    e.preventDefault()
    const searchParams = {
       firstName: this.state.firstname,
       lastName: this.state.lastname,
       medId: this.state.medId
    }



    Axios(baseUrl + `parturients/search/${this.state.medId}`)
      .then(response =>{
        if(response.data){
          this.setState({redirectToReferrer: true})
        }
       
        console.log(response.data.medId)
      })
  }

  render() {
    if (this.state.redirectToReferrer === true) {
      return <Redirect to= {`/parturients/${this.state.medId}`}  />
  }
   


    const parturients = this.props.parturients.parturients.map(parturient => {
      return (
        <div key={parturient._id} className="col-12 col-md-10 m-1">
          <Card bg="light">
            <Card.Body>
              <Link to={`/parturients/${parturient.medId}`}>
                <Card.Title>
                  {parturient.firstName + " " + parturient.lastName}
                </Card.Title>
                <Card.Subtitle>Hospital Id:{parturient.medId} </Card.Subtitle>
              </Link>
              <br />
              <Row>
                <Col md={3}>
                  <Link
                    to={{
                      pathname: `/parturients/${parturient._id}/newParturient`,
                      state: {
                        id: parturient._id
                      }
                    }}
                  >
                    <Button
                      variant="primary"
                      onClick={() => this.handleUpdate(parturient)}
                    >
                      Update
                    </Button>
                  </Link>
                </Col>
                
              </Row>
            </Card.Body>
          </Card>
        </div>
      );
    });

    if (this.props.parturients.isLoading) {
      return (
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    } else if (this.props.parturients.errMsg) {
      return (
        <div className="container">
          <div className="row">
            <h4>{this.props.parturients.errMsg}</h4>
          </div>
        </div>
      );
    } else
      return (
        <Container>
          <Row>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>{" "}
              </BreadcrumbItem>
              <BreadcrumbItem active>Parturients</BreadcrumbItem>
            </Breadcrumb>
          </Row>
          <Row>


            <Form onSubmit={this.handleSearch}>
              <Form.Row>
                <Col>
                  <Form.Control 
                  placeholder="First name" 
                  name="firstname"
                  value={this.state.firstname}
                  onChange={this.handleChange}
                  />
                </Col>
                <Col>
                  <Form.Control 
                  placeholder="Last name"
                  name="lastname"
                  value={this.state.lastname}
                  onChange={this.handleChange} 
                  />
                </Col>
                <Col>
                  <Form.Control 
                  placeholder="Medical ID"
                  name="medId"
                  value={this.state.medId}
                  onChange={this.handleChange} 
                  
                  />
                </Col>
                <Col>
                <Button type="submit">search </Button>
                </Col>



              </Form.Row>
            </Form>
           
            
          </Row>

          <Row>
            <h3>Parturients</h3>
          </Row>

          <Row>
            <Col md={6}>{parturients}</Col>
          </Row>
        </Container>
      );
  }
}

export default Parturients;