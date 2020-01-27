import React, { Component } from 'react';
import { Button, Row, Col, Label, FormGroup, Input, FormFeedback } from 'reactstrap';
import { Control, LocalForm } from 'react-redux-form';

// const required = (val) => val && val.length;
// const maxLength = (len) => (val) => !(val) || (val.length <= len);
// const minLength = (len) => (val) => val && (val.length >= len);
// const isNumber = (val) => !isNaN(Number(val));
// const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Patient extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         hospId:"",
         username: "",
         firstName: "",
         lastName:"",
         middleName:"",
         email:"",
         touched: {
             hospId: false,
             username: false
         }

         
      };
      this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    };
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
    
    handleBlur = (field) => e => {
        this.setState({
            touched: {...this.state.touched, [field]: true }
        })
    }

    validate(hospId, username) {
        const errors ={
            hospId: "",
            username: ""
        };
        if (this.state.touched.hospId && hospId.length < 3)
            errors.firstname = 'Hospital ID should be >= 3 characters';
        else if (this.state.touched.hospId && hospId.length > 10)
            errors.hospId= 'Hospital ID should be <= 10 characters'; 

        if (this.state.touched.username && username.length < 3)
            errors.username = 'Hospital ID should be >= 3 characters';
        else if (this.state.touched.username && username.length > 10)
            errors.username= 'Hospital ID should be <= 10 characters'; 

        return errors;
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
    }


    render() {
        const errors = this.validate(this.state.username, this.state.hospId);

        return (
            
                <div className="container">
                    <div className="row row-content"> 

                    </div>
                    <div className="row row-content">
                        <div className="col-12">
                            <h3>Register please</h3>
                            <div className="col-12 col-md-9">
                                <form>

                                <FormGroup row>
                                        <Label htmlFor="hospId" md={2}>Hospital Number</Label>
                                        <Col md={10}>
                                        <Input type="text" id="hospId" name="hospId" 
                                        placeholder="Hospital Number"
                                        value={this.state.hospId}
                                        valid={errors.hospId === ''}
                                        onBlur={this.handleBlur("hospId")}
                                        value={this.state.hospId}
                                        onChange={this.handleInputChange}
                                        
                                        />
                                        <FormFeedback>{errors.hospId}</FormFeedback>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label htmlFor="username" md={2}>Username</Label>
                                        <Col md={10}>
                                        <Input type="text" id="username" name="username" 
                                        placeholder="Username"
                                        value={this.state.username}
                                        valid={errors.username === ''}
                                        onBlur={this.handleBlur("username")}
                                        value={this.state.username}
                                        onChange={this.handleInputChange}
                                        />
                                        <FormFeedback>{errors.username}</FormFeedback>
                                        </Col>
                                    </FormGroup>





                                    <FormGroup row>
                                        <Label htmlFor="firstName" md={2}>First Name</Label>
                                        <Col md={10}>
                                        <Input type="text" id="firstName" name="firstName" 
                                        placeholder="First Name"
                                        value={this.state.firstName}
                                        onChange={this.handleInputChange}
                                        />
                                        </Col>
                                    </FormGroup>
                                    
                                    <FormGroup row>
                                        <Label htmlFor="middleName" md={2}>Middle Name</Label>
                                        <Col md={10}>
                                        <Input type="text" id="middleName" name="middleName" 
                                        placeholder="Middle Name"
                                        value={this.state.middleName}
                                        onChange={this.handleInputChange}
                                        />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label htmlFor="lastName" md={2}>last Name</Label>
                                        <Col md={10}>
                                        <Input type="text" id="lastName" name="lastName" 
                                        placeholder="Last Name"
                                        value={this.state.lastName}
                                        onChange={this.handleInputChange}
                                        />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                    <Col md={{size:6, offset:2}}>
                                    <FormGroup check>
                                        <Label check>
                                            
                                            <Input type="checkbox" id="agree" name="agree" 
                                            checked={this.state.agree} 
                                            onChange={this.handleInputChange}
                                            /> {" "} <strong>Do agree to our terms and conditions?</strong>
                                        </Label>
                                       
                                    </FormGroup>
                                    </Col>
                                    <Col md={{size:3, offset:1}}>
                                        <Input type="select" name="position"
                                        value={this.state.position}
                                        onChange={this.handleInputChange}>
                                            <option>Anterior</option>
                                            <option>Central</option>
                                            <option>Posterior</option>
                                        </Input>

                                        
                                            

                                    </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </FormGroup>
                                </form>

                            </div>

                        </div>


                    </div>
                </div>
            
        )
    }
}

export default Patient;
