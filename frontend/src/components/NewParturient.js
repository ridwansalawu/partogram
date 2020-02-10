import React, { Component } from 'react'
import Axios from "axios";
import Accordion from 'react-bootstrap/Accordion';
import {Card, Button, Container, Row, Col, Form } from "react-bootstrap";
import {Label} from "reactstrap";
import {baseUrl} from "../testData/baseUrl"
import { Redirect } from 'react-router-dom';
const _ = require("lodash");


class NewParturient extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         redirectToReferrer: false,
         disabled:"",
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

  componentDidMount() {
    
    Axios.get(baseUrl + `parturients/${this.props.location.state.id}`)
        .then(response => {
          this.setState({
            disabled: true,
            medId:response.data.medId,
            firstname:response.data.firstName,
            lastname: response.data.lastName,
            othername:response.data.otherName,
            email: response.data.email,
            telnum: response.data.telnum,
            dob: response.data.dob,
            address: response.data.address,
            nok: response.data.nok


          })
          
        })
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
           
            firstName: this.state.firstname,
            lastName: this.state.lastname,
            otherName: this.state.othername,
            email: this.state.email,
            telnum: this.state.telnum,
            dob: this.state.dob,
            address: this.state.address,
            nok: this.state.nok

        }

        console.log("now what ========" + this.props.location.state.id)
        Axios.put(baseUrl+`/parturients/${this.props.location.state.id}`, parturientDetails)
            .then((response, err )=> {
                if(err) {
                    console.log(err)
                }
                if (response.status === 200) {
                    alert(this.state.firstname + " has been updated")
                    this.setState({redirectToReferrer: true})
                }
                
            })
        

    }

    render() {
        if (this.state.redirectToReferrer === true) {
            return <Redirect to="/parturients" />
        }
        return (
            <Container>
                <Row>
                    <Col md={10}><h1>New Parturient</h1></Col>
                    <Col><Button onClick={this.generateMedId} disabled={true}>generate Med ID</Button></Col>
                    
                    
                </Row>
                
                <div id="accordion">
                    <Form onSubmit={this.handleSubmit}>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Biodata
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                        <Card.Body>
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
                                            <Label className="control-label">Email</Label>
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
                                            <div className="form-group">
                    
                                <button type="submit" className="btn btn-primary btn-lg">
                                    Submit
                                </button>
                            </div>
                                            
                                           
                                        </Card.Body>
                                </Accordion.Collapse>

                            </Card>

                        </Accordion>
                        </Form>

                        <Form>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
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

                                            <div className="form-group">
                                            <button className="btn btn-primary btn-lg">
                                               Save
                                            </button>

                                            </div>

                                         



                                        </Card.Body>
                                </Accordion.Collapse>

                            </Card>

                        </Accordion>
                        </Form>

                        <Form>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
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
                                            <div className="form-group">
                                            <button className="btn btn-primary btn-lg">
                                               Save
                                            </button>

                                            </div>
                                        </Card.Body>
                                </Accordion.Collapse>

                            </Card>

                        </Accordion>
                        </Form>
                        <Form>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
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
                                            <div className="form-group">
                                            <button className="btn btn-primary btn-lg">
                                               Save
                                            </button>

                                            </div>
                                        </Card.Body>
                                </Accordion.Collapse>

                            </Card>

                        </Accordion>
                        </Form>

                        <Form>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
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
                                            <div className="form-group">
                                            <button className="btn btn-primary btn-lg">
                                               Save
                                            </button>

                                            </div>
                                        </Card.Body>
                                </Accordion.Collapse>

                            </Card>

                        </Accordion>
                        </Form>
                        <Form>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
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
                                            <div className="form-group">
                                            <button className="btn btn-primary btn-lg">
                                               Save
                                            </button>

                                            </div>
                                        </Card.Body>
                                </Accordion.Collapse>

                            </Card>

                        </Accordion>
                        </Form>
                        <Form>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
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
                                            <div className="form-group">
                                            <button className="btn btn-primary btn-lg">
                                               Save
                                            </button>

                                            </div>
                                        </Card.Body>
                                </Accordion.Collapse>

                            </Card>

                        </Accordion>
                        </Form>
                        <Form>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
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
                                            <div className="form-group">
                                            <button className="btn btn-primary btn-lg">
                                               Save
                                            </button>

                                            </div>
                                        </Card.Body>
                                </Accordion.Collapse>

                            </Card>

                        </Accordion>
                        </Form>
                        <Form>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
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
                                            <div className="form-group">
                                            <button className="btn btn-primary btn-lg">
                                               Save
                                            </button>

                                            </div>
                                        </Card.Body>
                                </Accordion.Collapse>

                            </Card>

                        </Accordion>
                        </Form>
                        <Form>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
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
                                            <div className="form-group">
                                            <button className="btn btn-primary btn-lg">
                                               Save
                                            </button>

                                            </div>
                                        </Card.Body>
                                </Accordion.Collapse>

                            </Card>

                        </Accordion>
                        </Form>

                        
                        
                
                </div>
                
            </Container>
        )
    }
}

export default NewParturient;
