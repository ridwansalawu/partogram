import React, { Component } from "react";
import { drawTemplate } from "../testData/maternalBpTemplate";
import { Card, Col, Row } from "react-bootstrap";
import "./parturients.css"


class VizMatBp extends Component {

  componentDidMount() {
    drawTemplate(this.props.customDataSet);
  }
  render() {
    return (
      <React.Fragment>
        <Card bg="light" >
          <Card.Header className="title-text">
              <Row>
                  <Col><Card.Text> Name:{this.props.parturient.firstName.toUpperCase()}, {this.props.parturient.lastName}</Card.Text></Col>
                  <Col><Card.Text>Maternal Blood Pressure</Card.Text></Col>
                  <Col><Card.Text> Medical ID:{this.props.parturient.medId}</Card.Text></Col>
              </Row>
          </Card.Header>
          <Card.Body style={{"backgroundColor": "#590212"}}>
            <div className="main-graph-maternal-bp"></div>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

export default VizMatBp;


