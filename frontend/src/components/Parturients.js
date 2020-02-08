import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import "../index.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import { baseUrl } from "../testData/baseUrl";

class Parturients extends Component {
  handleUpdate = parturient => {
    console.log("Update Clicked");
  };

  handleDelete = parturient => {
    Axios.delete(baseUrl + `parturients/${parturient._id}`).then(response => {
      console.log(response);
    });
    console.log("Deleted");
  };
  render() {
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
                <Col md={3}>
                  <Button variant="primary">Delete</Button>{" "}
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
            <input type="text" placeholder="Medical ID" />
            <button>search</button>
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

// const handleUpdate = (e) => {
//     console.log("fucking updated")

// }

// const RenderParturients = ({parturient}) => {
//     const parturientId = parturient._id;
//     return(

//     )
// }

// const Parturients = (props) => {

// }

// export default Parturients;
