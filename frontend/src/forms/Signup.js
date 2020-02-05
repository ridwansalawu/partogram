import React, { Component } from 'react';
import {  Form, Button, Col, FormGroup, Label, Input, Row} from "reactstrap";
import {NavLink} from "react-router-dom"

import YupValidate from './Yuppy';

import {Control} from 'react-redux-form';
import { Formik } from "formik";

export default class Signup extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
          
        };
      };

      handleSubmit2 = (values)=> {
        this.toggleModal2();
        this.props.signupUser(values)
        console.log("currennt state is : " + JSON.stringify(values) );
        alert("currennt state is : " + JSON.stringify(values));


        // this.props.resetFeedbackForm();
    }

   

    // handleSubmit = (values, {setSubmitting}) => {
    //     this.props.signupUser(values);
    //     alert("clicked")
    //     setSubmitting(false)
        
    // } 

    render() {
        return (
            <div className="signuup">









            <Form model="signUp" onSubmit={(values) => this.handleSubmit2(values)}>

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
    <Label htmlFor="password" md={2}>Password</Label>
    <Col md={10}>
    <Control.text model=".password" id="password" name="password"
        placeholder="Password"
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
<Button type="submit" value="submit" color="primary">Register</Button>

</Form>
{/*            
                        <Formik
                        initialValues = {{ username: "", password: ""}}
                        validationSchema={YupValidate}
                        onSubmit={(values, {props, setSubmitting}) => {
                          props.signupUser(props.signupUser(values));
       
                               setSubmitting(false)
        
    } }
                        >
                        {
                            ({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting
                            }) => (
                                <form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Label htmlFor="username"> Username </Label>
                                    <Input 
                                        type="username" 
                                        name="username"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.username} 
                                    />
                                    {errors.username && touched.username && errors.username}

                                </FormGroup>
                                <FormGroup>
                                <Label htmlFor="password"> Password </Label>
                                    <Input 
                                        type="password" 
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password} 
                                    />
                                    {errors.password && touched.password && errors.password}
                                        
                                </FormGroup>
                                <FormGroup check>
                                        <Label check> 
                                        <Input
                                         type="checkbox"
                                           name="remember"
                                         />
                                        Remember me
                                        </Label>
                                </FormGroup>
                                <button type="submit" disabled={isSubmitting}>
                                     {isSubmitting ? "Submitting" : "Submit"}

                                </button>

                                </form>
                            )









                        }
                        











                        </Formik>
 */}










                  
                
            </div>
        )
    }
}
