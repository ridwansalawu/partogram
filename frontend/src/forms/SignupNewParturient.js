import React, { Component } from 'react'
import Axios from "axios";
import Accordion from 'react-bootstrap/Accordion';
import {Card, Button, Container, Row, Col } from "react-bootstrap";
import {Label} from "reactstrap";
import { Redirect, withRouter } from 'react-router-dom';
import "../components/parturients.css"
import ObstetricHx from './ObstetricHx';
import ObsEmerg from './ObsEmerg';
const _ = require("lodash");




class Parturient extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         redirectToReferrer: false,
         disabled: false,
         medId:"",
         firstname:"",
         lastname: "",
         othername: "",
         email: "",
         telnum: "",
         dob: "",
         address: "",
         nok: ""
      };
    };

    componentWillMount() {
        if (!this.props.auth.isAuthenticated) {
            alert("you need to sign in to continue")
            this.props.history.push("/home");
          }
    }

    generateMedId = (e) => {
        this.setState({medId: _.times(5, () => _.random(35).toString(36)).join('').toUpperCase(), disabled: true})
        e.target.disabled = this.state.disabled;
    }
    
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const parturientDetails = {
            medId:this.state.medId,
            firstName: this.state.firstname,
            lastName: this.state.lastname,
            otherName: this.state.othername,
            email: this.state.email,
            telnum: this.state.telnum,
            dob: this.state.dob,
            address: this.state.address,
            nok: this.state.nok

        }
        Axios.post("parturients", parturientDetails)
            .then(response => {
                console.log(response.status)
                this.setState({redirectToReferrer: true})
            })    
    }

    render() {
        if (this.state.redirectToReferrer === true) {
            return <Redirect to="/parturients" />
        }
        return (
            <Container style={{"marginTop": "300px"}}>
                <Row>
                    <Col md={10}><h1 className="title-text">New Parturient</h1></Col>
                    <Col><Button 
                         onClick={this.generateMedId} 
                         disabled={false}
                         className="button-update"
                         >generate Med ID</Button></Col>
                </Row>
                
                <div id="accordion">
                    <form onSubmit={this.handleSubmit}>
                        <Accordion>
                            <Card className="body-card">
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0" className="title-text">
                                        Biodata
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                        <Card.Body className="body-card-inside">
                                        <div className="form-group">
                                            <Label className="control-label">Medical ID</Label>
                                            <input 
                                                type="text"
                                                name="medId"
                                                value={this.state.medId}
                                                onChange={this.handleChange}                                           
                                                className="form-control"
                                                required
                                            />
                                            </div>
                                            <div className="form-group">
                                            <Label className="control-label">First Name</Label>
                                            <input 
                                                type="text"
                                                name="firstname"
                                                value={this.state.firstname}
                                                onChange={this.handleChange} 
                                                className="form-control"
                                                required
                                            />
                                            </div>

                                            <div className="form-group">
                                            <Label className="control-label">Last Name</Label>
                                            <input 
                                                type="text"
                                                name="lastname"
                                                value={this.state.lastname}
                                                onChange={this.handleChange}                                             
                                                className="form-control"
                                                required
                                            />
                                            </div>

                                            <div className="form-group">
                                            <Label className="control-label">Other Name</Label>
                                            <input 
                                                type="text"
                                                name="othername"
                                                value={this.state.othername}
                                                onChange={this.handleChange}                                            
                                                className="form-control"
                                            />
                                            </div>

                                            <div className="form-group">
                                            <Label className="control-label"></Label>
                                            <input 
                                                type="email"
                                                name="email"
                                                value={this.state.email}
                                                onChange={this.handleChange}                                            
                                                className="form-control"
                                            />
                                            </div>
                                            <div className="form-group">
                                            <Label className="control-label">Telephone</Label>
                                            <input 
                                                type="telnum"
                                                name="telnum"
                                                value={this.state.telnum}
                                                onChange={this.handleChange}                                            
                                                className="form-control"
                                            />
                                            </div>

                                            <div className="form-group">
                                            <Label className="control-label">Date of Birth</Label>
                                            <input 
                                                type="date"
                                                name="dob"
                                                value={this.state.dob}
                                                onChange={this.handleChange}                                           
                                                className="form-control"
                                            />
                                            </div>
                                            <div className="form-group">
                                            <Label className="control-label">Address</Label>
                                            <input 
                                                type="text"
                                                name="address"
                                                value={this.state.address}
                                                onChange={this.handleChange}                                            
                                                className="form-control"
                                            />
                                            </div>

                                            <div className="form-group">
                                            <Label className="control-label">Next of Kin</Label>
                                            <input 
                                                type="text"
                                                name="nok"
                                                value={this.state.nok}
                                                onChange={this.handleChange}                                            
                                                className="form-control"
                                            />
                                            </div>
                                            
                                           
                                        </Card.Body>
                                </Accordion.Collapse>

                            </Card>

                        </Accordion>
                        <Accordion>
                            <ObstetricHx />
                            

                        </Accordion>
                        <Accordion>
                            <Card className="body-card">
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0" className="title-text">
                                        Gynaecologic History
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

                        </Accordion>
                        <Accordion>
                            <Card className="body-card">
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0" className="title-text">
                                        Past Medical History
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

                        </Accordion>
                        <Accordion>
                            <Card className="body-card">
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0" className="title-text">
                                        Current Pregnancy
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

                        </Accordion>
                        <Accordion>
                            <Card className="body-card">
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0" className="title-text">
                                        Significant Examination Findings
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

                        </Accordion>
                        <Accordion>
                            <Card className="body-card">
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0" className="title-text">
                                       Significant Investigations
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

                        </Accordion>
                        <Accordion>
                            <Card className="body-card">
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0" className="title-text">
                                        Labour Ward
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

                        </Accordion>
                        <Accordion>
                            <Card className="body-card">
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0" className="title-text">
                                        others
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

                        </Accordion>
                        <Accordion>
                            <Card className="body-card">
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0" className="title-text">
                                       others
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

                        </Accordion>

                        <div className="form-group">
                                <button className="title-text">
                                    Save
                                </button>
                                {" "}
                                <button className="title-text">
                                    Submit
                                </button>
                            </div>
                        
                    </form>
                </div>

                <ObsEmerg />
                
            </Container>
        )
    }
}


export default withRouter(Parturient)
