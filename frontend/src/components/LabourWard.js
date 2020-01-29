import React, { Component } from 'react';
import { Button, Row, Col, Label, Navbar, NavbarBrand, Jumbotron, NavItem, Nav, Collapse, NavbarToggler, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Card, CardBody, CardTitle } from "reactstrap";
import { Control, LocalForm } from 'react-redux-form';

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
    


    render() {
        return (
            <div className="container">
               Welcome to the labour ward 
               <div className="row row-content">

               <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="hospId" md={2}>Hospital Number</Label>
                                <Col md={10}>
                                    <Control.text model=".hospId" id="hospId" name="hospId"
                                        placeholder="Hospital number"
                                        className="form-control"
                                         />
                                </Col>
                            </Row>
                            {/* <Row className="form-group">
                                <Label htmlFor="dilatation" md={2}>Dilatation</Label>
                                <Col md={10}>
                                    <Control.text model=".dilatation" id="dilatation" name="dilatation"
                                        placeholder="Dilatation"
                                        className="form-control"
                                         />
                                </Col>
                            </Row> */}
                            <Row className="form-group">
                                <Label htmlFor="middlename" md={2}>Effacement</Label>
                                <Col md={10}>
                                    <Control.text model=".middlename" id="middlename" name="middlename"
                                        placeholder="Middle Name"
                                        className="form-control"
                                         />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Position</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                         />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Tel. Number"
                                        className="form-control"
                                         />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control" />
                                </Col>
                            </Row>
                          
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
                          </LocalForm>
                    </div>

                <div className="row row-content">
{/* ============================================================================================ */}

<div className="container">
    <div col-12 col-sm-3>
<Card>
     <CardTitle>                   
                <Button outline onClick={this.toggleModal}>
                               <span className="fa fa-sign-in fa-lg">Bishop's Scoring</span>
                </Button>
            
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Bishop Score</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleCalcBishop}>

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
                                        placeholder="Dilatation"
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
              <div col-12 col-sm-3>
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
