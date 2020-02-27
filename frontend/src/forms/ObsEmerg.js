import React, { Component } from 'react'
import Axios from "axios";
import Accordion from 'react-bootstrap/Accordion';
import {Card, Button, Container, Row, Col } from "react-bootstrap";
import {Label} from "reactstrap";
import { Redirect, withRouter } from 'react-router-dom';
import "../components/parturients.css"
import ObstetricHx from './ObstetricHx';
import Form from 'react-bootstrap/Form'
const _ = require("lodash");

export default class ObsEmerg extends Component {



    render() {
        return (
            <Container>

            <Accordion>
                            <Card className="body-card">
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0" className="title-text">
                                        Airway
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                        <Card.Body className="body-card-inside">
                                        
                                      
                                             
                                               
                                               
                                                    <Form.Check
                                                    type="radio"
                                                    label="cyanosis"
                                                    name="formHorizontalRadios"
                                                    id="formHorizontalRadios1"
                                                    />
                                                    <Form.Check
                                                    type="radio"
                                                    label="respiratory distress"
                                                    name="formHorizontalRadios"
                                                    id="formHorizontalRadios1"
                                                    />
                                                    <Form.Check
                                                    type="radio"
                                                    label="pallor"
                                                    name="formHorizontalRadios"
                                                    id="formHorizontalRadios1"
                                                    />
                                                    <Form.Check
                                                    type="radio"
                                                    label="wheezing or rales"
                                                    name="formHorizontalRadios"
                                                    id="formHorizontalRadios1"
                                                    />
                                                    <Form.Check
                                                    type="radio"
                                                    label="cold skin"
                                                    name="formHorizontalRadios"
                                                    id="formHorizontalRadios1"
                                                    />
                                                    <Form.Check
                                                    type="radio"
                                                    label="pulse"
                                                    name="formHorizontalRadios"
                                                    id="formHorizontalRadios1"
                                                    />
                                                    <Form.Check
                                                    type="radio"
                                                    label="first radio"
                                                    name="formHorizontalRadios"
                                                    id="formHorizontalRadios1"
                                                    />
                                                    <Form.Check
                                                    type="radio"
                                                    label="first radio"
                                                    name="formHorizontalRadios"
                                                    id="formHorizontalRadios1"
                                                    />
                                                    <Form.Check
                                                    type="radio"
                                                    label="first radio"
                                                    name="formHorizontalRadios"
                                                    id="formHorizontalRadios1"
                                                    />
                                                    <Form.Check
                                                    type="radio"
                                                    label="first radio"
                                                    name="formHorizontalRadios"
                                                    id="formHorizontalRadios1"
                                                    />
                                                    <Form.Check
                                                    type="radio"
                                                    label="first radio"
                                                    name="formHorizontalRadios"
                                                    id="formHorizontalRadios1"
                                                    />
                                                    <Form.Check
                                                    type="radio"
                                                    label="second radio"
                                                    name="formHorizontalRadios"
                                                    id="formHorizontalRadios2"
                                                    />
                                                    <Form.Check
                                                    type="radio"
                                                    label="third radio"
                                                    name="formHorizontalRadios"
                                                    id="formHorizontalRadios3"
                                                    />
                                           
                                               
                                
                                           
                                        </Card.Body>
                                </Accordion.Collapse>

                            </Card>

                        </Accordion>





















                                <Accordion>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Click me!
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body> <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        Radios
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="second radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="third radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
    </Form.Group>
  </fieldset></Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Click me!
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>












            </Container>
        )
    }
}
