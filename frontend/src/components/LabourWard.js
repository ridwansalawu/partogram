import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import { Container} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';



class LabourWard extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        show: false,
        dilatation: "",
        hour:""
       
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
}

handleSubmit = (e) => {
    e.preventDefault();
    const data = {labourTime: +this.state.hour, dilatation: +this.state.dilatation}
    Axios.put(`parturients/cervicogram/${this.props.parturient._id}`, data )
        .then(response => {
            this.props.history.push(`${this.props.history.location.pathname}`)
            this.handleClose();
        })       
}

render() {
    return (
        <Container>
            <div>
                <Button variant="dark" size="sm" block className="button-update" onClick={this.handleShow} style={{"backgroundColor":"green"}}>
                   VE finding
                </Button>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Cervicogram</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                       <Form onSubmit={this.handleSubmit}>
                       

                        <Form.Group controlId="hour"  onChange={this.handleChange}>
                            <Form.Label>Hour</Form.Label>
                            <Form.Control as="select" required>
                                <option></option>
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
                                <option>11</option>
                                <option>12</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="dilatation"
                                    onChange={this.handleChange}>
                            <Form.Label>Dilatation</Form.Label>
                            <Form.Control as="select" required>
                                <option></option>
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

                       </Form>

                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleSubmit}>
                        Submit
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
         </Container>
        )
        }
    }

export default withRouter(LabourWard);
