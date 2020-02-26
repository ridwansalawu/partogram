import React, { Component } from "react";
import { drawTemplate } from "../testData/maternalHeartTemplate";
import { Card, Row, Col } from "react-bootstrap";
import "./parturients.css"

class MaternalHeartViz extends Component {

  componentDidMount() {
    drawTemplate();
  }


  render() {
    return (
      <React.Fragment>
        <Card bg="light" >
          <Card.Header className="title-text">
          <Row>
                 
                  <Col><Card.Text>Maternal Heart Rate</Card.Text></Col>
              
              </Row>
          </Card.Header>
          <Card.Body style={{"backgroundColor": "#590212"}}>
            <div className="main-graph-maternal"></div>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

export default MaternalHeartViz;


