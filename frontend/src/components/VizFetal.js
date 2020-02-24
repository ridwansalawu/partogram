import React, { Component } from "react";
import { drawTemplate } from "../testData/fetalHeartTemplate";
import { Card, Row, Col } from "react-bootstrap";
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
          <Row>
                  <Col><Card.Text> Name:{this.props.parturient.firstName.toUpperCase()}, {this.props.parturient.lastName}</Card.Text></Col>
                  <Col><Card.Text>Fetal Heart Rate</Card.Text></Col>
                  <Col><Card.Text> Medical ID:{this.props.parturient.medId}</Card.Text></Col>
              </Row>
          </Card.Header>
          <Card.Body style={{"backgroundColor": "#590212"}}>
            <div className="main-graph-fetal"></div>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

export default VizFetal;


