import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import "../index.css";
import { Card, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from "react-bootstrap/Button";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import "./parturients.css";

class Parturients extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDelete: false,
      firstname: "",
      lastname: "",
      medId: ""
    };
  }
  componentDidMount() {
    
    // if (!this.props.auth.isAuthenticated) {
    //   alert("you need to sign in to continue")
    //   this.props.history.push("/home");
    // }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleDelete = parturient => {
    Axios.delete(`parturients/${parturient._id}`).then(response => {
    });
  };

  handleSearch = e => {
    e.preventDefault();
    const searchParams = {
      firstName: this.state.firstname,
      lastName: this.state.lastname,
      medId: this.state.medId
    };

    const token = `Bearer ${this.props.auth.token}`;
    Axios(`parturients/search/${searchParams.medId}`, 
    {}, 
    {
      headers: {'Authorization': token }
    })
    .then(
      response => {
       let res = response.data.medId;
      this.props.history.push(`/parturients/${res}`)
      }
    )
  };

  render() {
    const parturients = this.props.parturients.parturients.map(parturient => {
      return (
        <div key={parturient._id}>
          <Card bg="light">
            <Card.Body className="card-body">
              <Card.Header>
                <Link to={`/parturients/${parturient.medId}`}>
                  <Card.Title>
                    <span className="title-text">
                      {parturient.firstName + " " + parturient.lastName}
                    </span>
                  </Card.Title>
                  <Card.Subtitle className="subtitle-text">
                    Medical Id:{parturient.medId}{" "}
                  </Card.Subtitle>
                </Link>
              </Card.Header>
              <br />
              <Row>
                <Col>
                  <Link
                    to={{
                      pathname: `/parturients/${parturient._id}/newParturient`,
                      state: {
                        id: parturient._id
                      }
                    }}
                  >
                    <Button className="button-update">Update</Button>
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
        <div className="comp-container">
          <div>
            <Loading />
          </div>
        </div>
      );
    } else if (this.props.parturients.errMsg) {
      return (
        <div className="comp-container">
          <div >
            <h4>{this.props.parturients.errMsg}</h4>
          </div>
        </div>
      );
    } else
      return (
        <Container className="comp-container">
          <Row>
            <Col>
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/home">Home</Link>{" "}
                </BreadcrumbItem>
                <BreadcrumbItem active>Parturients</BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form onSubmit={this.handleSearch}>
                <Form.Row>
                  <Col>
                    <Form.Control
                      placeholder="First name"
                      name="firstname"
                      value={this.state.firstname}
                      onChange={this.handleChange}
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      placeholder="Last name"
                      name="lastname"
                      value={this.state.lastname}
                      onChange={this.handleChange}
                      disabled
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
            </Col>
          </Row>

          <Row>
            <Col>
              <h3 className="sub-header">Parturients</h3>
            </Col>
          </Row>

          <Row>
            <Col md={12}>{parturients}</Col>
          </Row>
        </Container>
      );
  }
}

export default withRouter(Parturients);
