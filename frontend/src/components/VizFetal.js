import React, { Component } from "react";
import { drawTemplate } from "../testData/fetalHeartTemplate";
import { Card } from "react-bootstrap";
import "./parturients.css"

class VizFetal extends Component {

  componentDidMount() {
    drawTemplate();
  }


  render() {
    return (
      <React.Fragment>
        <Card bg="light" >
          <Card.Header className="title-text">
              Fetal Heart Rate {""}
            Name:{this.props.parturient.firstName.toUpperCase()},{" "}
            {this.props.parturient.lastName} {""} {""} Medical ID:
            {this.props.parturient.medId}{" "}
          </Card.Header>
          <Card.Body style={{"backgroundColor": "#987364"}}>
            <div className="main-graph-Fetal"></div>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

export default VizFetal;


