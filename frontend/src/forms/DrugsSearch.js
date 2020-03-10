import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/Col"
import { Button } from 'react-bootstrap';



export default class DrugsSearch extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          drug:""
         
      };
    };

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value})
    }

    handleSubmit =(e)=> {
        e.preventDefault()

    }
    



    render() {
        return (
           <Container>
               <Form onSubmit={this.handleSubmit}>
                   <Form.Row>

                        <Form.Group as={Col} md="8"  controlId="drug">
                              
                                    <Form.Control 
                                    type="search" 
                                    placeholder="Enter Drug Name"
                                    onChange={this.handleChange}
                                    value={this.state.drug}
                                    required 
                                    />
                                        <Form.Text className="text-muted">
                                            Start typing the name of drug
                                        </Form.Text>
                        </Form.Group>
                        <Form.Group as={Col} md="4"  controlId="drug">
                      
                                <Button type="submit" value="Submit" >Search</Button>     
                        </Form.Group>
                    </Form.Row>

               </Form>
               

           </Container>
        )
    }
}
