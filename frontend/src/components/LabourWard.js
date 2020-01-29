import React, { Component } from 'react';
import { Button, Row, Col, Label, Modal, ModalHeader, ModalBody, FormGroup, Input, Card, CardBody, CardTitle } from "reactstrap";
import { Control, Form } from 'react-redux-form';

class LabourWard extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isModalOpen: false
      };
    };

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })

    }
    
    handleSubmit = (values)=> {
        console.log("currennt state is : " + JSON.stringify(values) );
        alert("currennt state is : " + JSON.stringify(values));

        // this.props.resetFeedbackForm();
    }


render() {
    return (
        <div className="container">
            Welcome to the labour ward 
            <div className="row row-content">
                <img src="assets/images/black_preg.jpg" width="50%" height="50%" alt=""/>

            </div>

            <div className="row row-content">


                <div className="container">
                    <div className="col-12 col-sm-3">
                    <Card>
                        <CardTitle>                   
                            <Button outline onClick={this.toggleModal}>
                                <span className="fa fa-sign-in fa-lg">Bishop's Scoring</span>
                            </Button>

                            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                                <ModalHeader toggle={this.toggleModal}>Bishop Score</ModalHeader>
                                <ModalBody>
                                    <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>

                                        <Row className="form-group">
                                            <Label htmlFor="dilatation" md={2}>Dilatation</Label>
                                            <Col md={10}>
                                            <Control.text model=".dilatation" id="dilatation" name="dilatation"
                                                placeholder="Dilatation"
                                                className="form-control"
                                                    />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Label htmlFor="effacement" md={2}>Effacement</Label>
                                            <Col md={10}>
                                            <Control.text model=".effacement" id="effacement" name="effacement"
                                                placeholder="Effacement"
                                                className="form-control"
                                                    />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Label htmlFor="position" md={2}>Position</Label>
                                            <Col md={10}>
                                            <Control.text model=".position" id="position" name="position"
                                                placeholder="Position"
                                                className="form-control"
                                                    />
                                            </Col>
                                        </Row>
                                            <Row className="form-group">
                                            <Label htmlFor="descent" md={2}>Descent</Label>
                                            <Col md={10}>
                                            <Control.text model=".descent" id="descent" name="descent"
                                                placeholder="Descent"
                                                className="form-control"
                                                    />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Label htmlFor="station" md={2}>Station</Label>
                                            <Col md={10}>
                                            <Control.text model=".station" id="station" name="station"
                                                placeholder="Station"
                                                className="form-control"
                                                    />
                                            </Col>
                                        </Row>

                                        <FormGroup check>
                                        <Label check> 
                                        <Input type="checkbox"  name="remember"
                                        innerRef={(input) => this.remember = input} />
                                        Remember me
                                        </Label>
                                        </FormGroup>
                                        <Button type="submit" value="submit" color="primary">Bishop Score</Button>

                                    </Form>
                                </ModalBody>
                            </Modal>

                        </CardTitle> 
                        <div className="col-12 col-sm-3">
                        <CardBody><img src="assets/images/cx_2cm.jpg"  height="100%" width="100%"    alt=""/> </CardBody> 
                        </div>
                    </Card>
                    </div>
                </div>
            </div>

        </div>
        )
        }
    }

export default LabourWard;
