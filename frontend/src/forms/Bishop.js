import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'


class Bishop extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        show: false,
        dilatation: "",
        effacement: "",
        station: "",
        consistency: "",
        position: ""
    
     };
   };

   handleClose = () => {
       this.setState({show: false})
   }
   handleShow = () => {
       this.setState({show: true})
   }

   handleChange = (e) => {
       this.setState({ [e.target.id]: e.target.value })
       console.log(e.target.id)
   }

   handleSubmit = (e) => {
       e.preventDefault();
       console.log(JSON.stringify(this.state))
   }

   
   

   

  


render() {
    return (
        <div className="container">
          
           
                <Button variant="primary" onClick={this.handleShow}>
                    Calculate Bishop's Score
                </Button>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Bishops Score</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                       <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="dilatation" name= "dilatation" onChange={this.handleChange}>
                            <Form.Label>Dilatation</Form.Label>
                            <Form.Control as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="effacement" name= "effacement" onChange={this.handleChange}>
                            <Form.Label>Effacement</Form.Label>
                            <Form.Control as="select">
                                <option>Not effaced</option>
                                <option>10%</option>
                                <option>20%</option>
                                <option>30%</option>
                                <option>40%</option>
                                <option>50%</option>
                                <option>60%</option>
                                <option>70%</option>
                                <option>80%</option>
                                <option>90%</option>
                                <option>100%</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="consistency" name= "consistency" onChange={this.handleChange}>
                            <Form.Label>Consistency</Form.Label>
                            <Form.Control as="select">
                                <option>how soft is the cervix?</option>
                                <option>soft</option>
                                <option>medium</option>
                                <option>hard</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group  controlId="position" name="position" onChange={this.handleChange}>
                                <Form.Label>Position</Form.Label>
                                <Form.Control as="select">
                                    <option>what's the position cervix?</option>
                                    <option>Anterior</option>
                                    <option>Central</option>
                                    <option>Posterior</option>
                                </Form.Control>
                        </Form.Group>
                        <Form.Group  controlId="station" name="station" onChange={this.handleChange}>
                                <Form.Label>Station</Form.Label>
                                <Form.Control as="select">
                                    <option>what's the distance from the ischial spine?</option>
                                    <option>-3</option>
                                    <option>-2</option>
                                    <option>-1</option>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </Form.Control>
                        </Form.Group>

                        <Form.Group   onChange={this.handleChange}>
                            <Button type="submit">Calculate</Button>
                                
                        </Form.Group>

                        

                        

                       </Form>

                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleSubmit}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleClose}>
                        Submit
                    </Button>
                    </Modal.Footer>
                </Modal>


         









        </div>
        )
        }
    }

export default Bishop;
