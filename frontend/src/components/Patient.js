import React, { Component } from 'react';
import { Button, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
// const isNumber = (val) => !isNaN(Number(val));
// const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

// const required = (val) => val && val.length;
// const maxLength = (len) => (val) => !(val) || (val.length <= len);
// const minLength = (len) => (val) => val && (val.length >= len);
// const isNumber = (val) => !isNaN(Number(val));
// const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Patient extends Component {

    constructor(props) {
      super(props)
    
    //   this.state = {
    //      hospId:"",
    //      username: "",
    //      firstName: "",
    //      lastName:"",
    //      middleName:"",
    //      email:"",
    //      touched: {
    //          hospId: false,
    //          username: false
    //      }

         
    //   };
   
    this.handleSubmit = this.handleSubmit.bind(this);
    };
  

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
    }


    render() {
        
        return (
            
                <div className="container">
                    <div className="row row-content"> 

                    </div>
                    <div className="row row-content">
                        <div className="col-12">
                            <h3>Register please</h3>
                            <div className="col-12 col-md-9">
                                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>

                                <Row className="form-group">
                                        <Label htmlFor="hospId" md={2}>Hospital Number</Label>
                                        <Col md={10}>
                                        <Control.text model=".hospId" id="hospId" name="hospId" 
                                        placeholder="Hospital Number"
                                        className="form-control"
                                        />
                                      
                                        </Col>
                                    </Row>

                                    <Row className="form-group">
                                        <Label htmlFor="username" md={2}>Username</Label>
                                        <Col md={10}>
                                        <Control.text model=".username" id="username" name="username" 
                                        placeholder="Username"
                                        className="form-control"
                                       
                                        />
                                   
                                        </Col>
                                    </Row>





                                    <Row className="form-group">
                                        <Label htmlFor="firstName" md={2}>First Name</Label>
                                        <Col md={10}>
                                            <Control.text model=".firstName" id="firstName" name="firstName" 
                                                placeholder="First Name"
                                                className="form-control"
                                                validators={{
                                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                                }}
                                            />
                                            <Errors
                                        className="text-danger"
                                        model=".firstName"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />

                                        </Col>
                                    </Row>
                                    
                                    <Row className="form-group">
                                        <Label htmlFor="middleName" md={2}>Middle Name</Label>
                                        <Col md={10}>
                                        <Control.text model=".middleName"id="middleName" name="middleName" 
                                        placeholder="Middle Name"
                                        className="form-control"

                                        />
                                        </Col>
                                    </Row>

                                    <Row className="form-group">
                                        <Label htmlFor="lastName" md={2}>last Name</Label>
                                        <Col md={10}>
                                        <Control.text model=".lastName" id="lastName" name="lastName" 
                                        placeholder="Last Name"
                                        className="form-control"
                                       
                                        />
                                        </Col>
                                    </Row>

                                    <Row className="form-group">

                                        <Col md={{size: 6, offset: 2}}>
                                        <div className="form-check">
                                            <Label check>
                                                <Control.checkbox model=".agree" name="agree"
                                                    className="form-check-input"
                                                    /> {' '}
                                                    <strong>Agree to our terms and conditions?</strong>
                                            </Label>
                                        </div>
                                        </Col>



                                        <Col md={{size: 3, offset: 1}}>
                                            <Control.select model=".contactType" name="contactType"
                                                className="form-control">
                                                <option>Anterior</option>
                                                <option>Central</option>
                                                <option>Posterior</option>
                                            </Control.select>
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

                        </div>


                    </div>
                </div>
            
        )
    }
}

export default Patient;
