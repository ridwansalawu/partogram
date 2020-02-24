import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import {Card, Button, Container, Row, Col } from "react-bootstrap";
import {Label} from "reactstrap";

export default class ObstetricHx extends Component {
    render() {
        return (
            <div>
            <Card className="body-card">
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0" className="title-text">
                                        Obstetric History
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <div className="form-group">
                                            <Label className="control-label">Username</Label>
                                            <input 
                                                type="text"
                                                name="username"
                                                className="form-control"
                                            />
                                            </div>
                                            <div className="form-group">
                                            <Label className="control-label">Password</Label>
                                            <input 
                                                type="password"
                                                name="password"                                           
                                                className="form-control"
                                            />
                                            </div>
                                        </Card.Body>
                                </Accordion.Collapse>

                            </Card>
                
            </div>
        )
    }
}
