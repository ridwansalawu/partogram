import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import { Container} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';


class MaternalHR extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         show: false,
         time:"",
         heartRate: ""
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
        const data = {time: +this.state.time, heartRate: +this.state.heartRate}
        Axios.put(`parturients/maternalheartrate/${this.props.parturient._id}`, data )
            .then(response => {
                this.props.history.push(`${this.props.history.location.pathname}`)
                this.handleClose()
            })       
    }
    


    render() {
        return (
            <Container>
            <div>
                <Button variant="dark" size="sm" block className="button-update" onClick={this.handleShow} style={{"backgroundColor":"green"}}>
                   Maternal Heart Rate
                </Button>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Maternal HR</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                       <Form onSubmit={this.handleSubmit}>
                       

                        <Form.Group controlId="time"  onChange={this.handleChange}>
                            <Form.Label>Time</Form.Label>
                            <Form.Control as="input" required>
                               
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="heartRate"
                                    onChange={this.handleChange}>
                            <Form.Label>Heart Rate</Form.Label>
                            <Form.Control as="input" required>
                                
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

export default withRouter(MaternalHR);
