import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/Col"
import { Button} from 'react-bootstrap';
import Axios from "axios";
import Row from "react-bootstrap/Row"

import Card from 'react-bootstrap/Card'





export default class DrugsSearch extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          drug:"",
          drugs: []
         
      };
    };

    // handleChange = (e) => {
    //     this.setState({ [e.target.id]: e.target.value})
    // }

    // handleSubmit =(e)=> {
    //     e.preventDefault()
    //     Axios(`drugsearch/${this.state.drug}`)
    //         .then(result => {
    //             this.setState({drugs: result.data})
    //             console.log(this.state.drugs)
    //         })
           

    // }


    handleChange =(e)=> {
        this.setState({ [e.target.id]: e.target.value})
        Axios(`drugsearch/${e.target.value}`)
            .then(result => {
                this.setState({drugs: result.data})
                console.log(this.state.drugs)
            })
           

    }
    



    render() {
        const drug_list = this.state.drugs;
        return (
           <Container>

        
               <Form onSubmit={this.handleSubmit}>
                   <Form.Row>

                        {/* <Form.Group as={Col} md="8"  controlId="drug">
                              
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
                        </Form.Group> */}
                    </Form.Row>

                    <Card>
                   <Card.Header> <Form.Group controlId="drug">
                              
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


                   </Card.Header>
                   <Card.Body className="bg-light">
                  
                   </Card.Body>
                   </Card>

                   <Form.Row>
                   

                       
                    </Form.Row>






               </Form>

               

               <Row className="drug-list">
                   the drug list 
                   {
                      drug_list.map((drg, index) => {
                           return(
                               <Card key={index}> 
                                   <Card.body>
                                        <Card.Text>{drg}</Card.Text>
                                   </Card.body>
                               </Card>)
                           
                       })
                   }

                   
               </Row>
               

           </Container>
        )
    }
}
