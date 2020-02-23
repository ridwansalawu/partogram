import React, { Component } from "react";
import { drawTemplate } from "../testData/partographTemplate";
import { Card } from "react-bootstrap";
import "./parturients.css"

class MaternalHeartViz extends Component {

  componentDidMount() {
    drawTemplate(this.props.customDataSet);
  }


  render() {
    return (
      <React.Fragment>
        <Card bg="light" >
          <Card.Header className="title-text">
            Name:{this.props.parturient.firstName.toUpperCase()},{" "}
            {this.props.parturient.lastName} {""} {""} Medical ID:
            {this.props.parturient.medId}{" "}
          </Card.Header>
          <Card.Body style={{"backgroundColor": "#987364"}}>
            <div className="main-graph"></div>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

export default MaternalHeartViz;


